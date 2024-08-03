import React, { useEffect } from 'react';
import { useStateValue } from './components/StateProvider';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; // Ensure this path is correct
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { auth } from './components/firebase';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
