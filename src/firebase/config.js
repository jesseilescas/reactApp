
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBCBzuVfv_RUbaV_FfH5KfYodbXl39owY",
  authDomain: "chaparronesshop.firebaseapp.com",
  projectId: "chaparronesshop",
  storageBucket: "chaparronesshop.appspot.com",
  messagingSenderId: "803292920565",
  appId: "1:803292920565:web:d3ad2ffe768e8d7f5a63bc"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}
