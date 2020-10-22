import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { selectlanguage, setlanguage } from './features/AppSlice'
import { useSelector } from 'react-redux'

import Home from './components/Home'
import Offer from './components/Offer'
import Buses from './components/Buses'
import InitialTransition from './components/HomeComponents/Initaltransition';
import Navbar from './components/GlobalComponents/Navbar'
import Footer from './components/GlobalComponents/Footer'
import Scrolltotop from './components/GlobalComponents/Scrolltotop';
import Scrolltopbutton from './components/GlobalComponents/Scrolltopbutton';
import Cookie from './components/GlobalComponents/Cookie';

function App() {
  const language = useSelector(selectlanguage)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem("language") === "en" && language !== "en") {
      dispatch(setlanguage({ language: "en" }))
    }
    window.document.documentElement.lang = language
  }, [dispatch, language])


  return (
    <>
      {sessionStorage.getItem("InitalTransition") !== "false" && (<InitialTransition />)}
      <Scrolltotop />
      <Navbar />
      <Switch key={location.pathname}>
        <Route path="/" exact component={() =>
          <Home />
        } />

        <Route path="/offer" component={() =>
          <Offer />
        } />

        <Route path="/buses" component={() =>
          <Buses />
        } />
      </Switch>
      <Footer />
      <Scrolltopbutton />
      <Cookie />
    </>
  );
}

export default App;
