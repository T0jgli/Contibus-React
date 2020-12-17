import React from 'react'
import {
    MDBContainer, MDBRow, MDBCol
} from "mdbreact";
import { Fade } from "react-awesome-reveal";

import { selectlanguage } from '../../lib/AppSlice'
import { useSelector } from 'react-redux'

const Info = () => {
    const language = useSelector(selectlanguage)

    return (
        <MDBContainer>
            <MDBRow className="pt-5">
                <MDBCol md="6" className="mb-4">
                    <Fade triggerOnce>
                        <img src="/img/3.jpg" className="img-fluid mx-auto d-block logo" alt="logo" />
                    </Fade>
                </MDBCol>
                <MDBCol md="6" className="mb-4">
                    <Fade triggerOnce>
                        <section>
                            <h3 className="h3 mb-3">{language === "en" ? ("Who we are?") : ("Kik is vagyunk mi?")}</h3>
                            <hr />
                            <p className="m-0">{language === "en" ? ("The company has been dealing passenger traffic since 1992.") :
                                ("Cégünk 1992 óta foglalkozik személyszállítással.")}</p>
                            <p className="m-0">{language === "en" ? ("All of our buses fit the strict international standards.") :
                                ("Minden autóbuszunk megfelel a szigorú nemzetközi előírásoknak.")} </p>
                            <p className="m-0">{language === "en" ? ("Our drivers have a lot of experience in European travel.") :
                                ("Gépkocsivezetőink nagy tapasztalattal rendelkeznek az európai utaztatásban.")}</p>
                            <p className="mt-0 mb-0">{language === "en" ? ("Our partners: ") : ("Partnereink:")}
                            </p>
                            <ul className="mt-0 pt-0">
                                <li>
                                    {language === "en" ? ("travel agencies") : ("utazási irodák")}
                                </li>
                                <li>
                                    {language === "en" ? ("music bands") : ("zenekarok")}
                                </li>
                                <li>
                                    {language === "en" ? ("companies") : ("vállalkozások")}
                                </li>
                                <li>
                                    {language === "en" ? ("foundations") : ("alapítványok")}
                                </li>
                                <li>
                                    {language === "en" ? ("schools") : ("iskolák")}
                                </li>
                                <li>
                                    {language === "en" ? ("sports associations") : ("sportegyesületek")}
                                </li>
                                <li>
                                    {language === "en" ? ("or just a group of friends") : ("vagy csak baráti társaságok")}
                                </li>
                            </ul>
                        </section>
                    </Fade>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Info
