import React from 'react'
import ReactGA from 'react-ga'

import "../css/buses.scss"

import Carousel from './GlobalComponents/Carousel';
import Busesbody from "./BusesComponents/Busesbody"
import { pageVariants } from './GlobalComponents/Initaltransition';

import { selectlanguage } from '../lib/AppSlice'
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
        <meta property="og:title" content="Contibus - Autóbuszaink" />
        <meta property="og:locale" content={language === "en" ? ("en-US") : ("hu_HU")} />
        <meta name="content-language" content={language === "en" ? ("en, english") : ("hu, hun, hungarian")} />
      </Helmet>

    </motion.section>
  )
}

export default Buses
