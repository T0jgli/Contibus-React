import React from 'react'
import {
    MDBContainer, MDBRow, MDBCol
} from "mdbreact";

import ScrollAnimation from 'react-animate-on-scroll';
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'

const Info = () => {
    const language = useSelector(selectlanguage)

    return (
            <MDBContainer>
                <MDBRow className="pt-5">
                        <MDBCol md="6" className="mb-4">
                    <ScrollAnimation animateIn="fadeIn" animateOnce offset={window.innerHeight}>
                            <img src="/img/3.jpg" className="img-fluid mx-auto d-block logo" alt="logo"/>
                    </ScrollAnimation>
                        </MDBCol>
                        <MDBCol md="6" className="mb-4">
                    <ScrollAnimation animateIn="fadeIn" animateOnce offset={window.innerHeight}>
                            <h3 className="h3 mb-3">{language === "eng"? ("Who we are?") : ("Kik is vagyunk mi?")}</h3>
                            <hr />
                            <p className="m-0">{language === "eng"? ("The company has been dealing passenger traffic since 1992.") : 
                                ("Cégünk 1992 óta foglalkozik személyszállítással.")}</p>
                            <p className="m-0">{language === "eng"? ("All of our buses fit the strict international standards.") : 
                                ("Minden autóbuszunk megfelel a szigorú nemzetközi előírásoknak.")} </p>
                            <p className="m-0">{language === "eng"? ("Our drivers have a lot of experience in European travel.") : 
                                ("Gépkocsivezetőink nagy tapasztalattal rendelkeznek az európai utaztatásban.")}</p>
                            <p className="mt-0 mb-0">{language === "eng" ? ("Our partners: ") : ("Partnereink:")}
                            </p>
                            <ul className="mt-0 pt-0">
                                <li>
                                    {language === "eng" ? ("travel agencies") : ("utazási irodák")}
                                    </li>
                                <li>
                                    {language === "eng" ? ("music bands") : ("zenekarok")}
                                    </li>
                                <li>
                                    {language === "eng" ? ("companies") : ("vállalkozások")}      
                                    </li>
                                <li>
                                    {language === "eng" ? ("foundations") : ("alapítványok")}      
                                    </li>
                                <li>
                                    {language === "eng" ? ("schools") : ("iskolák")}
                                    </li>
                                <li>
                                    {language === "eng" ? ("sports associations") : ("sportegyesületek")}
                                    </li>
                                <li>
                                    {language === "eng" ? ("or just a group of friends") : ("vagy csak baráti társaságok")}
                                    </li>
                            </ul>
                    </ScrollAnimation>
                        </MDBCol>



                </MDBRow>
            </MDBContainer>
    )
}

export default Info
