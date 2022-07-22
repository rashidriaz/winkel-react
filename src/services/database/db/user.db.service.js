import {FirebaseFirestoreClient} from "../../../client/firebase/firebase.firestore.client";

export class UserDbService {
  #collection;

  constructor() {
    this.#collection = "users";
  }

  createUser(documentData) {
    return FirebaseFirestoreClient.createDocument({collection: this.#collection, documentData});
  }
}
