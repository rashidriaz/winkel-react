import {getRedirectResult} from "firebase/auth";

import {FirebaseAuthClient} from "../../../client/firebase/firebase.auth.client";
import {UserDbService} from "../db/user.db.service";

export class GoogleSignIn {
  #useRedirect;
  #firebaseAuth;
  #dbService;
  #response;

  constructor(useRedirectMethod) {
    this.#useRedirect = useRedirectMethod;
    this.#firebaseAuth = new FirebaseAuthClient();
    this.#dbService = new UserDbService();
  }

  signIn = () => {
    if (this.#useRedirect) {
      void this.#firebaseAuth.signInWithGoogleRedirect();
    } else {
      void this.#signInWithPopup();
    }
  }

  #signInWithPopup = async () => {
    this.#response = await this.#firebaseAuth.signInWithGooglePopup();
    await this.createUserForGoogleSignIn();
  }

  #getSignInWithRedirectResponse = async () => await getRedirectResult(this.#firebaseAuth.auth);

  async createUserForGoogleSignIn() {
    if (this.#useRedirect) {
      this.#response = await this.#getSignInWithRedirectResponse();
    }
    if (!this.#response) {
      return;
    }
    const {user: {displayName, email, uid}} = this.#response;
    return this.#dbService.createUser({name: displayName, email, id: uid})
  }


}
