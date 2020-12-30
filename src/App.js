import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { selectlanguage, setbusesData, setmuzeumData } from './lib/AppSlice'
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
import SetContentFulData from './lib/SetContentFulData';
import Snackbars from './components/GlobalComponents/Snackbars';
import { Crawler } from "es6-crawler-detect"
import OneBus from './components/OneBus';

const CrawlerDetector = new Crawler()
const userAgentString = navigator.userAgent;

function App () {
  const language = useSelector(selectlanguage)
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    window.document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    SetContentFulData("busesData", "-fields.oradij").then(data => {
      dispatch(setbusesData({
        busesData: data
      }))
    })

    SetContentFulData("muzeumdata", "sys.createdAt").then(data => {
      dispatch(setmuzeumData({
        muzeumData: data
      }))
    })
  }, [dispatch])

  return (
    <>
      {localStorage.getItem("InitalTransition") !== "false" && !CrawlerDetector.isCrawler(userAgentString) && (<InitialTransition />)}
      <Scrolltotop />
      <Navbar />

      <AnimatePresence exitBeforeEnter>
        <Switch key={pathname}>
          <Route path="/" exact component={() =>
            <Home />
          } />

          <Route path="/offer" component={() =>
            <Offer />
          } />

          <Route path="/buses" component={() =>
            <Buses />
          } />

          <Route path="/bus/:bus" children={() =>
            <OneBus />
          } />

          <Route component={() =>
            <Notfound />
          } />
        </Switch>
      </AnimatePresence>

      <Footer />
      <Cookie />
      <Snackbars />
      <div className="d-none d-md-block">
        <Scrolltopbutton />
      </div>
    </>
  );
}

export default App;
