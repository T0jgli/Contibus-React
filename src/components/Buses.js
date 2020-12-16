import React from 'react'
import ReactGA from 'react-ga'

import "../css/buses.css"
import '../css/addons/datatables.min.css';

import Carousel from './GlobalComponents/Carousel';
import Busesbody from "./BusesComponents/Busesbody"
import { pageVariants } from './GlobalComponents/Initaltransition';

import { selectlanguage } from '../features/AppSlice'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";

const Buses = () => {
  ReactGA.pageview(window.location.pathname)
  const language = useSelector(selectlanguage)

  return (
    <motion.section initial="initial"
      animate="animate"
      variants={pageVariants}>
      <Carousel />
      <Busesbody />
      <Helmet>
        <title>{language === "en" ? ("Contibus - Our Buses") : ("Contibus - Autóbuszaink")}</title>
      </Helmet>

    </motion.section>
  )
}

export default Buses
