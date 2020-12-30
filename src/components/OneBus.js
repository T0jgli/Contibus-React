import React from 'react'

import { motion } from 'framer-motion'
import { pageVariants } from './GlobalComponents/Initaltransition'
import Carousel from './GlobalComponents/Carousel'
import { MDBBtn } from 'mdbreact'
import OneBusBody from './BusesComponents/OneBusBody'
import { useSelector } from 'react-redux'
import { selectlanguage } from '../lib/AppSlice'
import { Fade } from 'react-awesome-reveal'
import { useHistory } from 'react-router-dom'

const OneBus = () => {
    const language = useSelector(selectlanguage)
    const history = useHistory()
    return (
        <motion.section initial="initial"
            animate="animate"
            variants={pageVariants}>
            <Carousel />
            <img src="/img/3.jpg" className="img-fluid mx-auto d-none logo" width="220px" id="contibus-logo" alt="logo" />
            <Fade triggerOnce direction="up">
                <div className="flex-center mt-5 mx-auto">
                    <MDBBtn id="back-button" color="warning" onClick={() => {
                        if (history.length > 2)
                            history.goBack()
                        else history.push("/buses")
                    }} className="my-1 black-text roundedbtn font-weight-bolder">
                        « {language === "en" ? ("Back") : ("Vissza")}
                    </MDBBtn>
                </div>
            </Fade>

            <OneBusBody />
        </motion.section>
    )
}

export default OneBus
