import React from 'react'
import { motion } from "framer-motion";
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'


export const pageVariants = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
}

const blackBox = {
    initial: {
        height: "100%",
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            when: "afterChildren",
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            duration: 0.5,
            when: "afterChildren",
        },
    },
};

const text = {
    initial: {
        y: 40,
    },
    animate: {
        y: 80,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const InitialTransition = () => {
    const language = useSelector(selectlanguage)
    return (
        <>
            <motion.div
                className="position-absolute animdiv d-flex justify-content-center align-items-center w-100 p-0 m-0"
                style={{ zIndex: "1031", backgroundColor: "black" }}
                initial="initial"
                animate="animate"
                variants={blackBox}
                onAnimationStart={() => {
                    window.scrollTo(0, 0);
                    document.body.classList.add("overflow-hidden");
                }}
                onAnimationComplete={() => {
                    document.body.classList.remove("overflow-hidden");
                    const animdiv = document.querySelector(".animdiv")
                    animdiv.classList.toggle("d-flex")
                    animdiv.classList.add("d-none")
                    localStorage.setItem("InitalTransition", false)
                }
                }
            >
                <motion.svg variants={textContainer} className="position-absolute w-100 d-flex" style={{ zIndex: "1029" }}>
                    <pattern
                        id="pattern"
                        patternUnits="userSpaceOnUse"
                        width={window.innerWidth}
                        height={window.innerHeight}
                        className="text-white"
                    >
                        <rect className="w-100 h-100" style={{ fill: "currentcolor" }} />
                        <motion.rect
                            variants={text}
                            className="w-100 h-100 text-dark" style={{ fill: "currentcolor" }}
                        />
                    </pattern>
                    <text
                        className="font-weight-bold"
                        textAnchor="middle"
                        x="50%"
                        y="50%"
                        style={{ fill: "url(#pattern)", fontSize: "25px" }}
                    >
                        {language === "en" ? ("There is something new") : ("Megújultunk")}
                    </text>
                </motion.svg>
            </motion.div>
        </>
    );
};



export default InitialTransition
