import React from 'react';
import ReactGA from 'react-ga'

import Info from "./HomeComponents/Info"
import Cards from "./HomeComponents/Cards"
import Streak from './HomeComponents/Streak';
import Gallery from './GlobalComponents/Gallery';
import Carousel from './GlobalComponents/Carousel';
import { pageVariants } from './GlobalComponents/Initaltransition';

import { selectlanguage } from '../lib/AppSlice'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";
import Info2 from './HomeComponents/Info2';

const Home = () => {
    ReactGA.pageview(window.location.pathname)

    const language = useSelector(selectlanguage)
    return (
        <motion.div initial="initial"
            animate="animate"
            variants={pageVariants}
        >
            <Carousel />
            <Info />
            <Gallery />
            <Info2 />
            <Streak />
            <Cards />
            <Helmet>
                <title>{language === "en" ? ("Contibus - Home") : ("Contibus - Főoldal")}</title>
                <meta property="og:title" content="Contibus - Főoldal" />
                <meta property="og:locale" content={language === "en" ? ("en-US") : ("hu_HU")} />
                <meta name="content-language" content={language === "en" ? ("en, english") : ("hu, hun, hungarian")} />
            </Helmet>
        </motion.div>
    )
}

export default Home
