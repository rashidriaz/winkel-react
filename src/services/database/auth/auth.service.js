import {FirebaseAuthClient} from "../../../client/firebase/firebase.auth.client";
import {UserDbService} from "../db/user.db.service";
import {AuthValidator} from "../../../utils/validators/auth-validator.util";

export class AuthService {
  #firebaseAuth;
  userDBService;

  constructor() {
    this.#firebaseAuth = new FirebaseAuthClient();
    this.userDBService = new UserDbService();
  }

  async signUpUser(email, password) {
    try {
      return {authResponse: await this.#firebaseAuth.createUserWithEmailAndPassword({email, password})};
    } catch (error) {
      return AuthValidator.getErrorMessageForFirebaseAuthErrors(error);
    }
  }

  async createUserInFirestore(documentData) {
    try {
      return {response: await this.userDBService.createUser(documentData)};
    } catch (error) {
      return AuthValidator.getErrorMessageForFirebaseAuthErrors(error);
    }
  }

  async createUser({name, email, password, confirmPassword}) {
    const passwordError = AuthValidator.validatePassword(password, confirmPassword);
    if (passwordError) return {error: passwordError};

    let {error, authResponse} = await this.signUpUser(email, password)
    if (error) return {error};
    const {user: {uid}} = authResponse
    return this.createUserInFirestore({name, email, id: uid});
  }
}
