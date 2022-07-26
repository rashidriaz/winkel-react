import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';

export class FirebaseAuthClient {
  #provider;

  constructor() {
    this.#provider = new GoogleAuthProvider();
    this.#provider.setCustomParameters({prompt: "select_account"});
    this.auth = getAuth();
  }

  async signInWithGoogleRedirect() {

    await signInWithRedirect(this.auth, this.#provider);
  }

  async signInWithGooglePopup() {
    return await signInWithPopup(this.auth, this.#provider);
  }

  async createUserWithEmailAndPassword({email, password}) {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }
}
