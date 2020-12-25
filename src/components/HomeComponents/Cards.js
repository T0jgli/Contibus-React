import React, { useState } from 'react'
import {
    MDBRow, MDBCard, MDBView, MDBCardImage, MDBMask, MDBCardBody
} from "mdbreact";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp"

import Modals from './Modals';
import { selectlanguage } from '../../lib/AppSlice'
import { useSelector } from 'react-redux'
import { Fade } from "react-awesome-reveal";
import Rating from './Rating';
import { Allasajanlatcontent, Csomagmegorzescontent, Glscontent, Vezetesiidocontent, Dpdcontent } from './Modalcontents';

const Cards = () => {
    const language = useSelector(selectlanguage)
    const [modalsopen, setmodalsopen] = useState({
        open: false,
        style: null,
        title: {
            en: null,
            hu: null
        },
        details: null
    })
    return (
        <>
            <hr className="mt-4 mb-0 d-none" />
            <div id="main" className="pt-5 z-depth-1">
                <Fade delay={200} triggerOnce>
                    <MDBRow className="d-flex justify-content-center mx-auto w-100">
                        <div className="card-deck h-100">
                            <MDBCard style={{ background: "transparent", boxShadow: "none" }} className="rounded mb-4 kartya h-100 w-100">
                                <MDBView className="rounded overlay zoom z-depth-1 waves-effect waves-light">
                                    <MDBCardImage src="/img/artablazat.png" alt="Ártáblázat kép" waves />
                                    <a href="/files/artablazat.doc" download>
                                        <MDBMask overlay="black-light" className="flex-center">
                                            <p className="white-text"><ArrowDropUp /></p>
                                        </MDBMask>
                                    </a>
                                </MDBView>
                                <MDBCardBody>
                                    <p className="text-center pb-0 mb-0 arrowdropup"><ArrowDropUp /></p>
                                    <hr className="mt-0" style={{ width: "50%" }} />
                                    <h4 className="card-title text-center mb-1">{language === "en" ? ("Price table") : ("Ártáblázat")}</h4>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard style={{ background: "transparent", boxShadow: "none" }} className="rounded mb-4 kartya h-100 w-100">
                                <MDBView className="rounded overlay zoom z-depth-1 waves-effect waves-light">
                                    <MDBCardImage src="/img/hatralevo-vezetesi-ido-szamitas.jpg" alt="Vezetésiidő kép" waves />
                                    <MDBMask onClick={() => {
                                        setmodalsopen({
                                            open: true,
                                            style: "info",
                                            title: {
                                                en: "Driving time",
                                                hu: "Vezetési idő"
                                            },
                                            details: <Vezetesiidocontent />
                                        })
                                    }} overlay="black-light" className="flex-center">
                                        <p className="white-text"><ArrowDropUp /></p>
                                    </MDBMask>
                                </MDBView>
                                <MDBCardBody>
                                    <p className="text-center pb-0 mb-0 arrowdropup"><ArrowDropUp /></p>
                                    <hr className="mt-0" style={{ width: "50%" }} />
                                    <h4 className="card-title text-center mb-1">{language === "en" ? ("Driving time") : ("Vezetési idő")}</h4>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard style={{ background: "transparent", boxShadow: "none" }} className="rounded mb-4 kartya h-100 w-100 ">
                                <MDBView className="rounded overlay zoom z-depth-1 waves-effect waves-light">
                                    <MDBCardImage alt="Állásajánlat kép" src={language === "en" ? ("/img/allas_eng.jpg") : ("/img/allas_k.png")} waves />
                                    <MDBMask onClick={() => {
                                        setmodalsopen({
                                            open: true,
                                            style: "danger",
                                            title: {
                                                en: "Current job offers",
                                                hu: "Aktuális állásajánlataink"
                                            },
                                            details: <Allasajanlatcontent />
                                        })
                                    }} overlay="black-light" className="flex-center">
                                        <p className="white-text"><ArrowDropUp /></p>
                                    </MDBMask>
                                </MDBView>
                                <MDBCardBody>
                                    <p className="text-center pb-0 mb-0 arrowdropup"><ArrowDropUp /></p>
                                    <hr className="mt-0" style={{ width: "50%" }} />
                                    <h4 className="card-title text-center mb-1">{language === "en" ? ("Job offer") : ("Állásajánlataink")}</h4>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBRow>
                </Fade>
                <Fade delay={200} triggerOnce>
                    <MDBRow className="pb-4 mt-3 justify-content-center d-flex w-100 mx-auto">
                        <div className="card-deck h-100">
                            <MDBCard style={{ background: "transparent", boxShadow: "none" }} className="rounded mb-4 kartya h-100 w-100">
                                <MDBView className="rounded overlay zoom z-depth-1 waves-effect waves-light">
                                    <MDBCardImage alt="Csomagmegőrzés kép" src="/img/luggage.jpg" waves />
                                    <MDBMask onClick={() => {
                                        setmodalsopen({
                                            open: true,
                                            style: "success",
                                            title: {
                                                en: "Luggage store",
                                                hu: "Csomagmegőrzés"
                                            },
                                            details:
                                                <Csomagmegorzescontent />
                                        })
                                    }} overlay="black-light" className="flex-center">
                                        <p className="white-text"><ArrowDropUp /></p>
                                    </MDBMask>
                                </MDBView>
                                <MDBCardBody>
                                    <p className="text-center pb-0 mb-0 arrowdropup"><ArrowDropUp /></p>
                                    <hr className="mt-0" style={{ width: "50%" }} />
                                    <h4 className="card-title text-center mb-1">{language === "en" ? ("Luggage store") : ("Csomagmegőrzés")}</h4>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard style={{ background: "transparent", boxShadow: "none" }} className="rounded mb-4 kartya h-100 w-100">
                                <MDBView className="rounded overlay zoom z-depth-1 waves-effect waves-light">
                                    <MDBCardImage alt="GLS kép" src="/img/gls.jpg" waves />
                                    <MDBMask onClick={() => {
                                        setmodalsopen({
                                            open: true,
                                            style: "warning",
                                            title: {
                                                en: "GLS ParcelShop",
                                                hu: "GLS Csomagpont"
                                            },
                                            details: <Glscontent />
                                        })
                                    }} overlay="black-light" className="flex-center">
                                        <p className="white-text"><ArrowDropUp /></p>
                                    </MDBMask>
                                </MDBView>
                                <MDBCardBody>
                                    <p className="text-center pb-0 mb-0 arrowdropup"><ArrowDropUp /></p>
                                    <hr className="mt-0" style={{ width: "50%" }} />
                                    <h4 className="card-title text-center mb-1">{language === "en" ? ("GLS ParcelShop") : ("GLS Csomagpont")}</h4>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard style={{ background: "transparent", boxShadow: "none" }} className="rounded mb-4 kartya h-100 w-100">
                                <MDBView className="rounded overlay zoom z-depth-1 waves-effect waves-light">
                                    <MDBCardImage alt="DPD kép" src="/img/dpd.jpg" waves />
                                    <MDBMask onClick={() => {
                                        setmodalsopen({
                                            open: true,
                                            style: "danger",
                                            title: {
                                                en: "DPD ParcelShop",
                                                hu: "DPD Csomagpont"
                                            },
                                            details:
                                                <Dpdcontent />
                                        })
                                    }} overlay="black-light" className="flex-center">
                                        <p className="white-text"><ArrowDropUp /></p>
                                    </MDBMask>
                                </MDBView>
                                <MDBCardBody>
                                    <p className="text-center pb-0 mb-0 arrowdropup"><ArrowDropUp /></p>
                                    <hr className="mt-0" style={{ width: "50%" }} />
                                    <h4 className="card-title text-center mb-1">{language === "en" ? ("DPD ParcelShop") : ("DPD csomagpont")}</h4>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBRow>

                </Fade>
                <hr className="w-50 mx-auto mb-5 mt-4" />
                <Rating />
            </div>
            <Modals modalsopen={modalsopen} setmodalsopen={setmodalsopen} />

        </>
    )
}

export default Cards
