import React, { useEffect } from 'react'

import { MDBAlert, MDBRow, MDBContainer, MDBBtn } from 'mdbreact'
import { setCookie, getCookie } from "../../features/Cookiehelper"
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'


const Cookie = () => {
    const language = useSelector(selectlanguage)

    useEffect(() => {
        if (getCookie("Enablecookies") !== "1") {
            document.querySelector(".cookiealert").classList.toggle("show")
        }
    }, [])
    return (
        <MDBAlert className="cookiealert border-0 p-0" id="cookieModal">
            <MDBContainer className="cookiealert-container">
                <MDBRow className="justify-content-center align-items-center text-center">
                    <p className=" font-weight-bolder white-text text-center pt-3"><span aria-labelledby="cookie" role="img">&#x1F36A;
                    </span>{language === "eng" ? (" We use cookies to ensure you get the best experience on our website. By browsing this site, you accept it.") :
                            ("Az oldal sütiket használ a felhasználói élmény fokozása céljából. A weblap további böngészésével elfogadja ezt.")}</p>
                    <MDBBtn color="dark-green" size="md" className="font-weight-bolder acceptcookies d-block" onClick={(e) => {
                        e.currentTarget.parentNode.parentNode.parentNode.classList.toggle("show");
                        setCookie("Enablecookies", 1, 365);
                    }}>
                        {language === "eng" ? ("I understand") : ("Rendben")}</MDBBtn>
                </MDBRow>
            </MDBContainer>
        </MDBAlert>
    )
}

export default Cookie