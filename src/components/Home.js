import React from 'react';

import Info from "./HomeComponents/Info"
import Info2 from './HomeComponents/Info2';
import Cards from "./HomeComponents/Cards"
import Streak from './HomeComponents/Streak';
import Gallery from './GlobalComponents/Gallery';
import Carousel from './GlobalComponents/Carousel';
import { pageVariants } from './GlobalComponents/Initaltransition';

import { selectlanguage } from '../lib/AppSlice'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";

const Home = () => {

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
            </Helmet>
        </motion.div>
    )
}

export default Home
