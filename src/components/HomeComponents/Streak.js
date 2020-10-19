import React, {useState} from 'react'
import {
    MDBContainer, MDBMask, MDBRow, MDBCol
} from "mdbreact";

import CountUp from 'react-countup';
import ScrollAnimation from 'react-animate-on-scroll';
import VisibilitySensor from 'react-visibility-sensor';

import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';


const Streak = () => {
    const language = useSelector(selectlanguage)
    const [focus, setFocus] = useState(false)
    const [style, setstyle] = useState({})

    useEffect(() => {
        const ramdom = Math.floor(Math.random() * (3 - 1 + 1));
        const images = ["/img/carousel_1.jpg", "/img/carousel_2.jpg", "/img/carousel_3.jpg"]
        setstyle({
            backgroundImage: "url(" + images[ramdom] + ")",
            backgroundAttachment: "fixed"
        })
    }, [])

    return (
        <div className="streak streak-photo streak-long-2 mb-5 z-depth-2" style={style}>
            <MDBMask overlay="black-light" className="flex-center">
                <MDBContainer className="py-5">
                    <ScrollAnimation animateIn="fadeInDown" animateOnce offset={window.innerHeight}>
                        <h3 className="text-center mb-5 pb-4 white-text font-weight-bold">
                            <strong>{language === "en" ? ("Some facts about us") : ("Néhány tény rólunk")}</strong>
                        </h3>
                    </ScrollAnimation>

                    <MDBRow className="text-center">
                        <MDBCol md="3" className="mb-2">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce offset={window.innerHeight}>
                                <h1 className="white-text mb-1 font-weight-bold">
                                    <CountUp start={focus ? 0 : null} redraw={true} useEasing={true} duration={3} end={80000} separator={" "} suffix=" +">
                                        {({ countUpRef }) => (
                                            <VisibilitySensor onChange={(isVisible) => {
                                                if (isVisible) {setFocus(true); }
                                            }}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp></h1>
                                <p className="white-text text-uppercase mt-3 font-weight-bold">{language === "en" ? ("Happy clients") : ("Elégedett ügyfél")}</p>
                            </ScrollAnimation>
                        </MDBCol>
                        <MDBCol md="3" className="mb-2">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce offset={window.innerHeight}>
                                <h1 className="white-text mb-1 font-weight-bold">
                                    <CountUp start={focus ? 0 : null} redraw={true} useEasing={true} duration={3} end={100000} separator={" "} suffix=" +">
                                    {({ countUpRef }) => (
                                            <VisibilitySensor onChange={(isVisible) => {
                                                if (isVisible) {setFocus(true); }
                                            }}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}

                                    </CountUp></h1>
                                <p className="white-text text-uppercase mt-3 font-weight-bold" >{language === "en" ? ("Projects completed") : ("Sikeres projekt")}</p>
                            </ScrollAnimation>
                        </MDBCol>
                        <MDBCol md="3" className="mb-2">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce offset={window.innerHeight}>
                                <h1 className="white-text mb-1 font-weight-bold">
                                    <CountUp start={focus ? 0 : null} redraw={true} useEasing={true} duration={3} end={50000} separator={" "} suffix=" +">
                                    {({ countUpRef }) => (
                                            <VisibilitySensor onChange={(isVisible) => {
                                                if (isVisible) {setFocus(true); }
                                            }}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}

                                    </CountUp></h1>
                                <p className="white-text text-uppercase mt-3 font-weight-bold">{language === "en" ? ("Destinations") : ("Úticél")}</p>
                            </ScrollAnimation>
                        </MDBCol>
                        <MDBCol md="3" className="mb-2">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce offset={window.innerHeight}>
                                <h1 className="white-text mb-1 font-weight-bold">
                                    <CountUp start={focus ? 0 : null} redraw={true} useEasing={true} duration={3} end={150} separator={" "} suffix=" +">
                                    {({ countUpRef }) => (
                                            <VisibilitySensor onChange={(isVisible) => {
                                                if (isVisible) {setFocus(true); }
                                            }}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}

                                    </CountUp></h1>
                                <p className="white-text text-uppercase mt-3 font-weight-bold">{language === "en" ? ("Visited country") : ("Meglátogatott ország")}</p>
                            </ScrollAnimation>
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>
            </MDBMask>
        </div>
    )
}

export default Streak
