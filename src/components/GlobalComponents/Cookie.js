import React, { useEffect } from 'react'

import { MDBAlert, MDBRow, MDBContainer, MDBBtn } from 'mdbreact'
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'
import { useState } from 'react'


const Cookie = () => {
    const language = useSelector(selectlanguage)
    const [show, setshow] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("EnableCookies") !== "true") {
            setshow(true)
        }
    }, [])
    return (
        <MDBAlert className={show ? ("show cookiealert border-0 p-0") : ("cookiealert border-0 p-0")} id="cookieModal">
            <MDBContainer className="cookiealert-container">
                <MDBRow className="justify-content-center align-items-center text-center">
                    <p className=" font-weight-bolder white-text text-center pt-3"><span aria-labelledby="cookie" role="img">&#x1F36A;
                    </span>{language === "en" ? (<span> We use cookies to ensure you get the best experience on our website. By browsing this site, you accept the
                            <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacycookietext font-weight-bolder"> privacy policy</a>.</span>) :
                            (<span> Az oldal sütiket használ a felhasználói élmény fokozása céljából.
                            A weblap további böngészésével elfogadja az
                                <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacycookietext font-weight-bolder"> adatvédelmi tájékoztatót</a>.
                            </span>)}</p>
                    <MDBBtn color="dark-green" size="md" className="font-weight-bolder rounded acceptcookies d-block" onClick={() => {
                        setshow(false)
                        localStorage.setItem("EnableCookies", "true")
                    }}>
                        {language === "en" ? ("I understand") : ("Rendben")}</MDBBtn>
                </MDBRow>
            </MDBContainer>
        </MDBAlert>
    )
}

export default Cookie