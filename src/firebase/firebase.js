// Import Firebase

import { initializeApp } from "firebase/app";

// Add the Firebase products that you want to use
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage /*, ref , uploadBytesResumable, getDownloadURL */ } from "firebase/storage";
import { getDoc , doc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


// Search for a user in the database by the user ID
export async function userExists(uid) {
  // Get a Ref doc from the database of the collection users and the document uid
  const docRef = doc(db, "users", uid);
  // the response of the database is stored in the variable res
  const res = await getDoc(docRef);
  console.log(res)
  
  // if the response is empty, the user does not exist
  return console.log("Exist in DB",res.exists());
}
