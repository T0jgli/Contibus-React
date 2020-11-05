import React, { useState } from 'react'
import {
    MDBContainer, MDBMask, MDBRow, MDBCol
} from "mdbreact";

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Fade } from "react-awesome-reveal";

import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';


const Streak = () => {
    const language = useSelector(selectlanguage)
    const [focus, setFocus] = useState(false)
    const [style, setstyle] = useState({})

    useEffect(() => {
        const ramdom = Math.floor(Math.random() * (3 - 1 + 1));
        const images = ["/img/carousel_1_.jpg", "/img/carousel_2_.jpg", "/img/carousel_3_.jpg"]
        setstyle({
            backgroundImage: "url(" + images[ramdom] + ")",
            backgroundAttachment: "fixed"
        })
    }, [])

    return (
        <div className="streak streak-photo streak-long-2 mb-5 z-depth-2" style={style}>
            <MDBMask overlay="black-light" className="flex-center">
                <MDBContainer className="py-5">
                    <Fade triggerOnce direction="down">
                        <h3 className="text-center mb-5 pb-4 white-text font-weight-bold">
                            <strong>{language === "en" ? ("Some facts about us") : ("Néhány tény rólunk")}</strong>
                        </h3>
                    </Fade>
                    <Fade triggerOnce direction="up">
                        <MDBRow className="text-center">
                            <MDBCol md="3" className="mb-2">
                                <h1 className="white-text mb-1 font-weight-bold">
                                    <CountUp start={focus ? 0 : null} redraw={true} useEasing={true} duration={3} end={80000} separator={" "} suffix=" +">
                                        {({ countUpRef }) => (
                                            <VisibilitySensor offset={{
                                                top:
                                                    10
                                            }} onChange={(isVisible) => {
                                                if (isVisible) { setFocus(true); }
                                            }}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp></h1>
                                <p className="white-text text-uppercase mt-3 font-weight-bold">{language === "en" ? ("Happy clients") : ("Elégedett ügyfél")}</p>
                            </MDBCol>
                            <MDBCol md="3" className="mb-2">
                                <h1 className="white-text mb-1 font-weight-bold">
                                    <CountUp start={focus ? 0 : null} redraw={true} useEasing={true} duration={3} end={100000} separator={" "} suffix=" +">
                                        {({ countUpRef }) => (
                                            <VisibilitySensor offset={{
                                                top:
                                                    10
                                            }} onChange={(isVisible) => {
                                                if (isVisible) { setFocus(true); }
                                            }}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}

                                    </CountUp></h1>
                                <p className="white-text text-uppercase mt-3 font-weight-bold" >{language === "en" ? ("Projects completed") : ("Sikeres projekt")}</p>
                            </MDBCol>
                            <MDBCol md="3" className="mb-2">
                                <h1 className="white-text mb-1 font-weight-bold">
                                    <CountUp start={focus ? 0 : null} redraw={true} useEasing={true} duration={3} end={50000} separator={" "} suffix=" +">
                                        {({ countUpRef }) => (
                                            <VisibilitySensor offset={{
                                                top:
                                                    10
                                            }} onChange={(isVisible) => {
                                                if (isVisible) { setFocus(true); }
                                            }}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}

                                    </CountUp></h1>
                                <p className="white-text text-uppercase mt-3 font-weight-bold">{language === "en" ? ("Destinations") : ("Úticél")}</p>
                            </MDBCol>
                            <MDBCol md="3" className="mb-2">
                                <h1 className="white-text mb-1 font-weight-bold">
                                    <CountUp start={focus ? 0 : null} redraw={true} useEasing={true} duration={3} end={150} separator={" "} suffix=" +">
                                        {({ countUpRef }) => (
                                            <VisibilitySensor offset={{
                                                top:
                                                    10
                                            }} onChange={(isVisible) => {
                                                if (isVisible) { setFocus(true); }
                                            }}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}

                                    </CountUp></h1>
                                <p className="white-text text-uppercase mt-3 font-weight-bold">{language === "en" ? ("Visited country") : ("Meglátogatott ország")}</p>
                            </MDBCol>
                        </MDBRow>

                    </Fade>
                </MDBContainer>
            </MDBMask>
        </div>
    )
}

export default Streak
