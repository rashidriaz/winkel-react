import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore";
import {FireBaseApp} from "./firebase.app.client";

export class FirebaseFirestoreClient {
  static #firebaseApp = FireBaseApp.initialize();
  static db = getFirestore();


  static async createDocument({collection,  documentData}) {
    const documentReference = doc(FirebaseFirestoreClient.db, collection, documentData.id);
    const userExists = await FirebaseFirestoreClient.#userAlreadyExists(documentReference);
    if (userExists) {
      return documentReference;
    }
    const firebaseUser = FirebaseFirestoreClient.#createUserInstance(documentData);
    try {
      await setDoc(documentReference, firebaseUser);
    } catch (error) {
      console.log(error);
    }
    return documentReference;
  }

  static #createUserInstance = (user) => ({name: user.name, email: user.email, createdAt: new Date()});
  z

  static async #userAlreadyExists(documentReference) {
    const userSnapShot = await getDoc(documentReference);

    return userSnapShot.exists();
  }
}
