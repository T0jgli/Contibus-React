import React from 'react';

import Carousel from './GlobalComponents/Carousel';
import Gallery from './GlobalComponents/Gallery'
import Formoffer from './OfferComponents/Formoffer';
import { pageVariants } from './GlobalComponents/Initaltransition';

import { selectlanguage } from '../lib/AppSlice'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";

const Offer = () => {
    const language = useSelector(selectlanguage)

    return (
        <motion.div initial="initial"
            animate="animate"
            variants={pageVariants}>
            <Carousel />
            <Formoffer />
            <Gallery />
            <Helmet>
                <title>{language === "en" ? ("Contibus - Offer") : ("Contibus - Ajánlatkérés")}</title>
            </Helmet>
        </motion.div>
    )
}

export default Offer
