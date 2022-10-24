import {FirebaseFirestoreClient as firestore} from "../../../client/firebase/firebase.firestore.client";

export class UserDbService {
  #collection;

  constructor() {
    this.#collection = "users";
  }

  async createUser(documentData) {
    const documentReference = firestore.createDocumentReference({collection: this.#collection, documentData});
    const userAlreadyExists = await firestore.documentAlreadyExists(documentReference);
    return userAlreadyExists ? documentReference : await firestore.createDocument({
      collection: this.#collection,
      documentData
    });

  }
}
