import * as App from "firebase/app";

export class FireBaseApp {
  static #instance = false;

  static initialize() {
    if (!FireBaseApp.#instance) {
      const firebaseConfig = {
        apiKey: "AIzaSyCt_hLlXWKyFmx-kPenifuBkCexCr16_fM",
        authDomain: "winkel-react-db.firebaseapp.com",
        projectId: "winkel-react-db",
        storageBucket: "winkel-react-db.appspot.com",
        messagingSenderId: "153273550281",
        appId: "1:153273550281:web:1ead13f4e16e7a8c6a5418",

      };
      FireBaseApp.#instance = App.initializeApp(firebaseConfig)
    }
    return FireBaseApp.#instance;
  }
}
