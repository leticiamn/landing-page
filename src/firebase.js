import {initializeApp} from 'firebase/app';
import {GoogleAuthProvider,getAuth,signInWithPopup,signOut} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAg_JWqpFxe7Q46J9YwTd2WZsUnUQgsm-s",
    authDomain: "projeto-camilla.firebaseapp.com",
    projectId: "projeto-camilla",
    storageBucket: "projeto-camilla.appspot.com",
    messagingSenderId: "766086089715",
    appId: "1:766086089715:web:25ed09d0aedebf01922086",
    measurementId: "G-LLJQ03EDKL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
    
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};
  
const logout = () => {
    signOut(auth);
};
  
export {
    auth,
    signInWithGoogle,
    logout,
    
  };