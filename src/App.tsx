import React from 'react';
import './App.css';
import WeeklyPost from './components/WeeklyPost';
import NewPost from './components/NewPost';
import FilterNav from './components/FilterNav';
import { useState } from 'react';
import { Hidden, Drawer, SwipeableDrawer } from '@material-ui/core';

import {firebaseConfig} from './firebaseSetup';
import {Auth, getAuth, getRedirectResult, signInWithRedirect, onAuthStateChanged} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';

  const toggleSignIn = (auth: Auth) => {
    if (!auth.currentUser) {
      const provider = new GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      signInWithRedirect(auth, provider);
    } else {
      auth.signOut();
    }
  }

const App = () => {
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [signInState, setSignInState] = useState(false);
 
  const handleFilterToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  let token;
  let user;

  getRedirectResult(auth)
  .then((result) => {
    if (result) {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      token = credential?.accessToken;

      // The signed-in user info.
      user = result.user;
    }
  }).catch((error) => {

    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  onAuthStateChanged(auth, function(user) {
    if (user) {
      // User is signed in.
      // var displayName = user.displayName;
      // var email = user.email;
      // var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      console.log('user', user);
      setSignInState(true);
    } else {
      // User is signed out.
      setSignInState(false);
    }
  });

  return (
    <div className="App">
      <button id='sign-in' onClick={() => toggleSignIn(auth)}>{signInState ? 'Sign Out' : 'Sign In'}</button>
      <h1>Weekly Reflections</h1>
      <button className="filterBtn" onClick={handleFilterToggle}>Filters</button>
      
      <Hidden mdUp>
        <SwipeableDrawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onOpen={() => setMobileOpen(true)}
          onClose={handleFilterToggle}
          disableBackdropTransition={!iOS} disableDiscovery={iOS}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className="navSidebar"
        >
          <FilterNav />
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          anchor="right"
          open
          className="navSidebar"
        >
          <FilterNav />
        </Drawer>
      </Hidden>
      <NewPost />
      <button>add new reflection</button>
      <WeeklyPost />
      <button>Show Older Posts</button>
    </div>
  );
}

export default App;
