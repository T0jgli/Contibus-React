import React from 'react'
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet";
import { useSelector } from 'react-redux';
import { selectlanguage } from '../lib/AppSlice';
import "../css/notfound.css"

function Notfound () {
    ReactGA.pageview(window.location.pathname)
    const language = useSelector(selectlanguage)

    return (
        <>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>Oops!</h1>
                        <h2>{language === "en" ? ("404 - The Page can't be found") : ("404 - Az oldal nem található")}</h2>
                    </div>
                </div>
            </div>
            <Helmet>
                <title>{language === "en" ? ("Contibus - Error") : ("Contibus - Hiba")}</title>
            </Helmet>
        </>

    )
}

export default Notfound
