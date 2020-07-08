import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// var gapi;

const config = {
  apiKey: "AIzaSyDepHGY9y-TCu6CXv3xJ-A7KIWpeXDX5u8",
  authDomain: "ecommerce-db925.firebaseapp.com",
  //   authDomain: "localhost:3000",
  databaseURL: "https://ecommerce-db925.firebaseio.com",
  projectId: "ecommerce-db925",
  storageBucket: "ecommerce-db925.appspot.com",
  messagingSenderId: "384568611009",
  appId: "1:384568611009:web:e4ce2c33089344bfb6c440",
  measurementId: "G-LE7ML0JWVZ",
};

// function init() {
//   gapi.load("auth2", () => {
//     gapi.auth2.init({
//       client_id:
//         "925852021113-rbj8sgak585q3n3anskrvrvid2nd7c74.apps.googleusercontent.com",
//       scope: "profile",
//     });
//   });
// }

// function signInWithGoogle() {
//   gapi.load("auth2", () => {
//     gapi.auth2.signIn().then(
//       (user) => {
//         const authRsp = user.getAuthResponse(true);
//         const id_token = authRsp.id_token;
//         const access = authRsp.access_token;
//         firebase
//           .auth()
//           .signInWithCredential(
//             firebase.auth.GoogleAuthProvider.credential(id_token, access)
//           );
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   });
// }

// the way you query firestore
// firestore.collection('users').doc('id').collection('specific collection for that user').doc('id of item');

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
