import React, { useEffect } from 'react';
import ReactGA from 'react-ga'

import Carousel from './GlobalComponents/Carousel';
import Gallery from './GlobalComponents/Gallery'
import Formoffer from './OfferComponents/Formoffer';
import { selectlanguage } from '../features/AppSlice'
import { useSelector } from 'react-redux'

const Offer = () => {
    ReactGA.pageview(window.location.pathname)
    const language = useSelector(selectlanguage)

    useEffect(() => {
        if (language === "eng") {
            document.title = "Contibus - Offer";
        }
        else {
            document.title = "Contibus - Ajánlatkérés";
        }
    }, [language])

    return (
        <>
            <Carousel />
            <Formoffer />
            <Gallery />
        </>
    )
}

export default Offer
