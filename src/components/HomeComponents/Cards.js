import React, { useState } from 'react'
import {
    MDBRow, MDBCard, MDBView, MDBCardImage, MDBMask, MDBCardBody, MDBIcon
} from "mdbreact";

import ScrollAnimation from 'react-animate-on-scroll';
import Modals from './Modals';
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'

const Cards = () => {
    const language = useSelector(selectlanguage)

    const [vezido, setvezido] = useState(false)
    const [allasajanlat, setallasajanlat] = useState(false)
    const [csomagmegorzes, setcsomagmegorzes] = useState(false)
    const [gls, setgls] = useState(false);
    const [dpd, setdpd] = useState(false)
    const [naptar, setnaptar] = useState(false)

    return (
        <div>
            <hr className="mt-4 mb-0 d-none" />
            <div id="main" className="pt-5 z-depth-1">
                <ScrollAnimation animateIn="fadeIn" animateOnce offset={window.innerHeight}>
                    <MDBRow className="justify-content-center d-flex w-100">
                        <div className="card-deck h-100">

                            <MDBCard className="rounded z-depth-1-half mb-4 kartya h-100">
                                <MDBView className="roundedimg overlay zoom z-depth-1 waves-effect waves-light" style={{ cursor: "pointer" }}>
                                    <MDBCardImage src="/img/artablazat.png" waves />
                                    <a href="/files/artablazat.doc">
                                        <MDBMask overlay="black-light" className="flex-center">
                                            <p className="white-text"><MDBIcon icon="sort-up" /></p>
                                        </MDBMask>
                                    </a>
                                </MDBView>
                                <MDBCardBody>
                                    <p className="text-center pb-0 mb-0"><MDBIcon icon="sort-up" /></p>
                                    <hr className="mt-0" style={{ width: "50%" }} />
                                    <h4 className="card-title text-center mb-1">{language === "en" ? ("Price table") : ("Ártáblázat")}</h4>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="rounded z-depth-1-half mb-4 kartya h-100">
                                <MDBView className="roundedimg overlay zoom z-depth-1 waves-effect waves-light" style={{ cursor: "pointer" }}>
                                    <MDBCardImage src="/img/hatralevo-vezetesi-ido-szamitas.jpg" waves />
                                    <MDBMask onClick={() => setvezido(!vezido)} overlay="black-light" className="flex-center">
                                        <p className="white-text"><MDBIcon icon="sort-up" /></p>
                                    </MDBMask>
                                </MDBView>
                                <MDBCardBody>
                                    <p className="text-center pb-0 mb-0"><MDBIcon icon="sort-up" /></p>
                                    <hr className="mt-0" style={{ width: "50%" }} />
                                    <h4 className="card-title text-center mb-1">{language === "en" ? ("Driving time") : ("Vezetési idő")}</h4>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="rounded z-depth-1-half mb-4 kartya h-100">
                                <MDBView className="roundedimg overlay zoom z-depth-1 waves-effect waves-light" style={{ cursor: "pointer" }}>
                                    <MDBCardImage src={language === "en" ? ("/img/allas_eng.jpg") : ("/img/allas_k.png")} waves />
                                    <MDBMask onClick={() => setallasajanlat(!allasajanlat)} overlay="black-light" className="flex-center">
                                        <p className="white-text"><MDBIcon icon="sort-up" /></p>
                                    </MDBMask>
                                </MDBView>
                                <MDBCardBody>
                                    <p className="text-center pb-0 mb-0"><MDBIcon icon="sort-up" /></p>
                                    <hr className="mt-0" style={{ width: "50%" }} />
                                    <h4 className="card-title text-center mb-1">{language === "en" ? ("Job offer") : ("Állásajánlataink")}</h4>
                                </MDBCardBody>
                            </MDBCard>

                        </div>
                    </MDBRow>

                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" animateOnce offset={window.innerHeight}>
                    <MDBRow className="pb-5 mt-3 justify-content-center d-flex w-100">
                        <div className="card-deck h-100">
                            <MDBCard className="rounded z-depth-1-half mb-4 kartya h-100">
                                <MDBView className="roundedimg overlay zoom z-depth-1 waves-effect waves-light" style={{ cursor: "pointer" }}>
                                    <MDBCardImage src="/img/luggage.jpg" waves />
                                    <MDBMask onClick={() => setcsomagmegorzes(!csomagmegorzes)} overlay="black-light" className="flex-center">
                                        <p className="white-text"><MDBIcon icon="sort-up" /></p>
                                    </MDBMask>
                                </MDBView>
                                <MDBCardBody>
                                    <p className="text-center pb-0 mb-0"><MDBIcon icon="sort-up" /></p>
                                    <hr className="mt-0" style={{ width: "50%" }} />
                                    <h4 className="card-title text-center mb-1">{language === "en" ? ("Luggage store") : ("Csomagmegőrzés")}</h4>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="rounded z-depth-1-half mb-4 kartya h-100">
                                <MDBView className="roundedimg overlay zoom z-depth-1 waves-effect waves-light" style={{ cursor: "pointer" }}>
                                    <MDBCardImage src="/img/gls.jpg" waves />
                                    <MDBMask onClick={() => setgls(!gls)} overlay="black-light" className="flex-center">
                                        <p className="white-text"><MDBIcon icon="sort-up" /></p>
                                    </MDBMask>
                                </MDBView>
                                <MDBCardBody>
                                    <p className="text-center pb-0 mb-0"><MDBIcon icon="sort-up" /></p>
                                    <hr className="mt-0" style={{ width: "50%" }} />
                                    <h4 className="card-title text-center mb-1">{language === "en" ? ("GLS ParcelShop") : ("GLS Csomagpont")}</h4>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="rounded z-depth-1-half mb-4 kartya h-100">
                                <MDBView className="roundedimg overlay zoom z-depth-1 waves-effect waves-light" style={{ cursor: "pointer" }}>
                                    <MDBCardImage src="/img/dpd.jpg" waves />
                                    <MDBMask onClick={() => setdpd(!dpd)} overlay="black-light" className="flex-center">
                                        <p className="white-text"><MDBIcon icon="sort-up" /></p>
                                    </MDBMask>
                                </MDBView>
                                <MDBCardBody>
                                    <p className="text-center pb-0 mb-0"><MDBIcon icon="sort-up" /></p>
                                    <hr className="mt-0" style={{ width: "50%" }} />
                                    <h4 className="card-title text-center mb-1">{language === "en" ? ("DPD ParcelShop") : ("DPD csomagpont")}</h4>
                                </MDBCardBody>
                            </MDBCard>

                        </div>
                    </MDBRow>
                </ScrollAnimation>





            </div>
            <Modals
                setvezido={setvezido} setallasajanlat={setallasajanlat}
                setcsomagmegorzes={setcsomagmegorzes} setgls={setgls}
                setdpd={setdpd}
                setnaptar={setnaptar}              
                vezido={vezido} allasajanlat={allasajanlat} csomagmegorzes={csomagmegorzes}
                gls={gls} dpd={dpd}
                naptar={naptar}
            />
        </div>
    )
}

export default Cards
