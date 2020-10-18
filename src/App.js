import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { selectlanguage, setlanguage } from './features/AppSlice'
import { useSelector } from 'react-redux'

import Home from './components/Home'
import Offer from './components/Offer'
import Buses from './components/Buses'
import Navbar from './components/GlobalComponents/Navbar'
import Footer from './components/GlobalComponents/Footer'
import Scrolltotop from './components/GlobalComponents/Scrolltotop';
import Scrolltopbutton from './components/GlobalComponents/Scrolltopbutton';
import Cookie from './components/GlobalComponents/Cookie';

import ReactGA from 'react-ga';
import { getCookie } from "./features/Cookiehelper"

const createHistory = require("history").createBrowserHistory

const history = createHistory()
history.listen(location => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
})


function App() {
  const language = useSelector(selectlanguage)
  const dispatch = useDispatch()

  useEffect(() => {
    if (getCookie("language") === "eng" && language !== "eng") {
      dispatch(setlanguage({ language: "eng" }))
    }
    
  }, [dispatch, language])

  return (
    <>
      <Router>
        <Scrolltotop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/offer" component={() => <Offer />} />
          <Route path="/buses" component={() => <Buses />} />
        </Switch>
        <Footer />
        <Scrolltopbutton />
        <Cookie />
      </Router>
    </>
  );
}

export default App;
