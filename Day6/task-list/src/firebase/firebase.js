// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBDWEzccEFFW__DXJhlgTvWLPA0jvT8qkU',
  authDomain: 'task-list-f8343.firebaseapp.com',
  projectId: 'task-list-f8343',
  storageBucket: 'task-list-f8343.appspot.com',
  messagingSenderId: '453330652555',
  appId: '1:453330652555:web:fc5016a1db5025dcb6b38e',
  measurementId: 'G-6EE94KNVMP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
// const analytics = getAnalytics(app);
export { firestore }
