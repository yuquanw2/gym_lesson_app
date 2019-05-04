// Config file
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAKxr0eUI-yxR5XJN03kNXvCKMcAqThQZg",
  authDomain: "gymlesson-5f6c3.firebaseapp.com",
  databaseURL: "https://gymlesson-5f6c3.firebaseio.com",
  projectId: "gymlesson-5f6c3",
  storageBucket: "",
  messagingSenderId: "59365767160"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
