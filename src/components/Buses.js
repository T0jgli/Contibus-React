import React, { useEffect } from 'react'
import ReactGA from 'react-ga'

import "../css/buses.css"
import '../css/addons/datatables.min.css';

import Carousel from './GlobalComponents/Carousel';
import Busesbody from "./BusesComponents/Busesbody"

import { selectlanguage } from '../features/AppSlice'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import { pageVariants } from './GlobalComponents/Initaltransition';

const Buses = () => {
  ReactGA.pageview(window.location.pathname)
  const language = useSelector(selectlanguage)

  useEffect(() => {
    if (language === "en") {
      document.title = "Contibus - Our buses";
    }
    else {
      document.title = "Contibus - Autóbuszaink";
    }
  }, [language])

  return (
    <motion.section initial="initial"
      animate="animate"
      variants={pageVariants}>
      <Carousel />
      <Busesbody />
    </motion.section>
  )
}

export default Buses
