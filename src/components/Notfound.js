import React from 'react'
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet";
import { useSelector } from 'react-redux';
import { selectlanguage } from '../lib/AppSlice';

function Notfound () {
    ReactGA.pageview(window.location.pathname)
    const language = useSelector(selectlanguage)

    return (
        <>
            <div className="w-100 d-flex align-items-center justify-content-center" style={{ height: "100vh", backgroundColor: "#1C2331", color: "white" }}>
                <h1>nem található</h1>
            </div>
            <Helmet>
                <title>{language === "en" ? ("Contibus - Error") : ("Contibus - Hiba")}</title>
            </Helmet>
        </>

    )
}

export default Notfound
