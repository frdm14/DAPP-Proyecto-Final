import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBwfqAWGGpfxn6hhv-GLwsFjDyBFEP5fS8",
  authDomain: "logistica-lm.firebaseapp.com",
  projectId: "logistica-lm",
  storageBucket: "logistica-lm.appspot.com",
  messagingSenderId: "572700452491",
  appId: "1:572700452491:web:aaed5faab01aac845fd68e",
};

const app = initializeApp(firebaseConfig);
const authentication = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const database = getFirestore();

export { authentication, database };
