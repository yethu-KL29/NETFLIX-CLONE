import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAwusNd09xEzXWgKvm6IcmsbTXGpTjG2DQ",
  authDomain: "netflicx-clone-a2f7d.firebaseapp.com",
  projectId: "netflicx-clone-a2f7d",
  storageBucket: "netflicx-clone-a2f7d.appspot.com",
  messagingSenderId: "728579865773",
  appId: "1:728579865773:web:6ecc7457c57d7785bb5a24",
  measurementId: "G-3W88NH0Z9Z"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
