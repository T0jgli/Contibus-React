import React, { useEffect } from 'react';
import ReactGA from 'react-ga'

import Info from "./HomeComponents/Info"
import Cards from "./HomeComponents/Cards"
import Streak from './HomeComponents/Streak';
import Gallery from './GlobalComponents/Gallery';
import Carousel from './GlobalComponents/Carousel';
import { selectlanguage } from '../features/AppSlice'
import { useSelector } from 'react-redux'

const Home = () => {
    ReactGA.pageview(window.location.pathname)

    const language = useSelector(selectlanguage)

    useEffect(() => {
        if (language === "en") {
            document.title = "Contibus - Home";
        }
        else {
            document.title = "Contibus - Főoldal";
        }
    }, [language])


    return (
        <>
            <Carousel />
            <Info />
            <Cards />
            <Streak />
            <Gallery />
        </>
    )
}

export default Home
