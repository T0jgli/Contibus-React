import React, { useState } from 'react'
import { useLocation } from "react-router-dom"

import { MDBCarousel, MDBMask, MDBCarouselInner, MDBCarouselItem, MDBView, MDBIcon, MDBBtn } from "mdbreact";
import { selectlanguage } from '../../lib/AppSlice'
import { useSelector } from 'react-redux'
import Contactform from './Contactform';
import ReactGA from 'react-ga'
import { Fade } from 'react-awesome-reveal';


const Carousel = () => {
    const { pathname } = useLocation();
    const language = useSelector(selectlanguage)
    const [contactform, setcontactform] = useState(false)

    const carids = ["carr11", "carr22", "carr33"];

    function shuffleArray (array) {
        if (!contactform)
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
    }

    shuffleArray(carids);
    return (
        <>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className={pathname !== "/" ? "carousel carouselup z-depth-1 " : "carousel headerclip z-depth-1"}
            >
                <MDBCarouselInner className="carousel-inner">
                    <MDBCarouselItem className="carousel-item" itemId="1">
                        <MDBView id={carids[0]} className={pathname !== "/" ? "h-100" : ""}>
                            <MDBMask overlay="black-light" className="flex-center">
                                <div className="text-center white-text mx-5">
                                    <Fade triggerOnce direction="down">
                                        <h1 className="mb-4">
                                            <strong className="font-weight-bold">{language === "en" ?
                                                (<span>Contibus<span className="d-none d-md-inline"> – Specialist Coach Travel</span></span>) :
                                                (<span>Contibus<span className="d-none d-md-inline"> – Az utazás szakértői</span></span>)}</strong>
                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <p className="mb-4 d-block">
                                            <span style={{ letterSpacing: "1px" }}>
                                                <MDBIcon icon="check" className="px-2" />{language === "en" ? ("We offer culture and experience") : ("Kultúrát és élményt adunk")}
                                                <MDBIcon icon="check" className="px-2" />
                                            </span>
                                        </p>
                                    </Fade>
                                    {pathname === "/" ? (
                                        <>
                                            <Fade direction="up" triggerOnce>

                                                <MDBBtn onClick={() => {
                                                    setcontactform(true);
                                                    ReactGA.modalview('/contactform');

                                                }}
                                                    color="warning" size="lg"
                                                    className="font-weight-bold black-text roundedbtn kartya mt-5"><span
                                                        className="">{language === "en" ? ("Get in contact with us!") : ("Lépjen kapcsolatba velünk!")}</span>
                                                </MDBBtn>
                                            </Fade>

                                        </>
                                    ) : (null)
                                    }
                                </div>
                            </MDBMask>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem className="carousel-item" itemId="2">
                        <MDBView id={carids[1]} className={pathname !== "/" ? "h-100" : ""}>
                            <MDBMask overlay="black-light" className="flex-center">
                                <div className="text-center white-text mx-5">
                                    <Fade triggerOnce direction="down">
                                        <h1 className="mb-4">
                                            <strong className="font-weight-bold">{language === "en" ?
                                                (<span>Contibus<span className="d-none d-md-inline"> – Specialist Coach Travel</span></span>) :
                                                (<span>Contibus<span className="d-none d-md-inline"> – Az utazás szakértői</span></span>)}</strong>
                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <p className="mb-4 d-block text-center">
                                            <span style={{ letterSpacing: "1px" }}>
                                                <MDBIcon icon="check" className="px-2 d-md-inline d-none" /> {language === "en" ? ("Safety") : ("Biztonság")}
                                                <MDBIcon icon="check" className="px-2" />{language === "en" ? ("Comfort") : ("Kényelem")}
                                                <MDBIcon icon="check" className="px-2" />{language === "en" ? ("Standards") : ("Színvonal")}
                                                <MDBIcon icon="check" className="px-2 d-md-inline d-none" />
                                            </span>
                                        </p>
                                    </Fade>

                                    {pathname === "/" ? (
                                        <>
                                            <Fade direction="up" triggerOnce>

                                                <MDBBtn onClick={() => {
                                                    setcontactform(true);
                                                    ReactGA.modalview('/contactform');

                                                }}
                                                    color="warning" size="lg"
                                                    className="font-weight-bold black-text roundedbtn kartya mt-5"><span
                                                        className="">{language === "en" ? ("Get in contact with us!") : ("Lépjen kapcsolatba velünk!")}</span>
                                                </MDBBtn>
                                            </Fade>

                                        </>
                                    ) : (null)
                                    }
                                </div>
                            </MDBMask>

                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem className="carousel-item" itemId="3">
                        <MDBView id={carids[2]} className={pathname !== "/" ? "h-100" : ""}>
                            <MDBMask overlay="black-light" className="flex-center">
                                <div className="text-center white-text mx-5">
                                    <Fade triggerOnce direction="down">
                                        <h1 className="mb-4">
                                            <strong className="font-weight-bold">{language === "en" ?
                                                (<span>Contibus<span className="d-none d-md-inline"> – Specialist Coach Travel</span></span>) :
                                                (<span>Contibus<span className="d-none d-md-inline"> – Az utazás szakértői</span></span>)}</strong>
                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <p className="mb-4 d-block">
                                            <span style={{ letterSpacing: "1px" }}>
                                                <MDBIcon icon="check" className="px-2" />{language === "en" ? ("We offer culture and experience") : ("Kultúrát és élményt adunk")}
                                                <MDBIcon icon="check" className="px-2" />
                                            </span>
                                        </p>
                                    </Fade>

                                    {pathname === "/" ? (
                                        <>
                                            <Fade direction="up" triggerOnce>

                                                <MDBBtn onClick={() => {
                                                    setcontactform(true);
                                                    ReactGA.modalview('/contactform');

                                                }}
                                                    color="warning" size="lg"
                                                    className="font-weight-bold black-text roundedbtn kartya mt-5"><span
                                                        className="">{language === "en" ? ("Get in contact with us!") : ("Lépjen kapcsolatba velünk!")}</span>
                                                </MDBBtn>
                                            </Fade>

                                        </>
                                    ) : (null)
                                    }
                                </div>
                            </MDBMask>
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
            <Contactform contactform={contactform} setcontactform={setcontactform} />

        </>
    )
}

export default Carousel
