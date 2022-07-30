import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
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

  signInWithGooglePopup() {
    return signInWithPopup(this.auth, this.#provider);
  }

  createUserWithEmailAndPassword({email, password}) {
    if (!email || !password) return;
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async signIn(email, password) {
    if (!email || !password) return;
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  async signOut(){
    const response = await signOut(this.auth);
    console.log(response);
  }
  onAuthStateChangeListener(callback){
    if (!callback)return;
    return onAuthStateChanged(this.auth, callback);
  }
}
