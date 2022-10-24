import {getFirestore, doc, setDoc, getDoc, collection, writeBatch, query, getDocs} from "firebase/firestore";
import {FireBaseApp} from "./firebase.app.client";

export class FirebaseFirestoreClient {
  static #firebaseApp = FireBaseApp.initialize();
  static db = getFirestore();

  static createDocumentReference({collection, documentData}) {
    const collectionReference = FirebaseFirestoreClient.getCollectionReference(collection);
    return doc(collectionReference, documentData.id);
  }

  static async createDocument({collection, documentData, documentReference}) {
    console.log("here");
    if (!documentReference) {
      documentReference = this.createDocumentReference({collection, documentData});
    }
    try {
      await setDoc(documentReference, documentData);
      console.log("done");
    } catch (error) {
      console.log(error);
    }
    return documentReference;
  }


  static async documentAlreadyExists(documentReference) {
    const documentSnapshot = await getDoc(documentReference);

    return documentSnapshot.exists();
  }

  static async createMultipleDocuments({dataList, collection}) {
    const batch = writeBatch(FirebaseFirestoreClient.db);
    const collectionReference = FirebaseFirestoreClient.getCollectionReference(collection);
    dataList.forEach(item => {
      const documentReference = doc(collectionReference, item.id);
      batch.set(documentReference, item);
    });
    await batch.commit();
    console.log("done");
  }

  static getCollectionReference(key) {
    return collection(FirebaseFirestoreClient.db, key);
  }


  static async getCollectionDocuments({key}) {
    const collectionReference = FirebaseFirestoreClient.getCollectionReference(key);
    const generatedQuery = query(collectionReference);
    const querySnapshot = await getDocs(generatedQuery);

    return querySnapshot.docs;
  }

}
