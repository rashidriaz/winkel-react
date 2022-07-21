import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt_hLlXWKyFmx-kPenifuBkCexCr16_fM",
  authDomain: "winkel-react-db.firebaseapp.com",
  projectId: "winkel-react-db",
  storageBucket: "winkel-react-db.appspot.com",
  messagingSenderId: "153273550281",
  appId: "1:153273550281:web:1ead13f4e16e7a8c6a5418"
};

export const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",

});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUser = async (user) => {
  const documentReference = doc(db, 'users', user.id);

  const userSnapShot = await getDoc(documentReference);

  const userDocumentExists = userSnapShot.exists();
  const createdAt = new Date();
  if (!userDocumentExists) {
    const {name, email} = user;
    try {
      await setDoc(documentReference, {name, email, createdAt});
    } catch (error) {
      console.log(error);
    }
  }
  return documentReference;
}
