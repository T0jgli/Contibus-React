import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { selectlanguage, setlanguage } from './features/AppSlice'
import { useSelector } from 'react-redux'

import Home from './components/Home'
import Offer from './components/Offer'
import Buses from './components/Buses'
import Notfound from './components/Notfound';
import InitialTransition from './components/GlobalComponents/Initaltransition';
import Navbar from './components/GlobalComponents/Navbar'
import Footer from './components/GlobalComponents/Footer'
import Scrolltotop from './components/GlobalComponents/Scrolltotop';
import Scrolltopbutton from './components/GlobalComponents/Scrolltopbutton';
import Cookie from './components/GlobalComponents/Cookie';
import { AnimatePresence } from 'framer-motion';

function App () {
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

      <AnimatePresence exitBeforeEnter>
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

          <Route component={() =>
            <Notfound />
          } />
        </Switch>
      </AnimatePresence>

      <Cookie />
      <Footer />
      <div className="d-none d-md-block">
        <Scrolltopbutton />
      </div>
    </>
  );
}

export default App;
