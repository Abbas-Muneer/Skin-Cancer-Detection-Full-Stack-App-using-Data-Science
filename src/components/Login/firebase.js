import firebase from "firebase";
// import { getAnalytics } from "firebase/compat/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_qlkhu7YUNRgAhs-MWKLMzKicubIPbYc",
  authDomain: "sdgplogin.firebaseapp.com",
  projectId: "sdgplogin",
  storageBucket: "sdgplogin.appspot.com",
  messagingSenderId: "443775511309",
  appId: "1:443775511309:web:1e864f27377ee384d99e44",
  measurementId: "G-VEDMLG6DV6"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(fire);

export default fire;
