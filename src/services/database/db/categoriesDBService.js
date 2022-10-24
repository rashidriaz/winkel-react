import {FirebaseFirestoreClient as Firestore} from "../../../client/firebase/firebase.firestore.client";

export class CategoriesDBService {
  #collection

  constructor() {
    this.#collection = "categories";
  }


  async getCategoriesAndProducts(){
    const categories = await Firestore.getCollectionDocuments({key: this.#collection});
    console.log(categories);
    return categories.reduce((map, document) => {
      const {title, items} = document.data();
      map[title.toLowerCase()] = items;
      return map;
    }, {});
  }
}
