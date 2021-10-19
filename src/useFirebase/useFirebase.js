import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // log out function
  const logOut = () => {
    signOut(auth).then(() => {
      setUser('');
    });
  };
  // observe user data
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser('');
      }
    });
  }, []);

  return {
    user,
    logOut,
    signInUsingGoogle,
  };
};

export default useFirebase;
