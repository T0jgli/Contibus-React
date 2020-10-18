import React, { useState } from 'react'
import {
    MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIframe, MDBIcon
} from "mdbreact";

import ScrollAnimation from 'react-animate-on-scroll';
import Lostitems from './Lostitems';
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'
import {GoogleMapsKey} from "../../features/GoogleKey"

const Footer = () => {
    const [elveszett, setelveszett] = useState(false)
    const language = useSelector(selectlanguage)

    return (
        <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce offset={window.innerHeight}>
                <MDBFooter className="font-small z-depth-2 mt-4">

                    <MDBContainer className="text-center text-md-left pt-4">
                        <MDBRow className="pt-4">
                            <MDBCol md="5" lg="6" xl="5" className="mx-auto mb-1">
                                {<div className="p-0 z-depth-2 map-container" style={{ height: "80%" }}>
                                    <MDBIframe
                                        src={"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJcZcmwULcQUcRbO4wF14ieDg&key=" + GoogleMapsKey}
                                        frameborder="0" style={{ height: "80%" }} />
                                </div>}
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-1">
                                <h6 className="text-uppercase font-weight-bold">{language === "eng" ? ("Others") : ("Egyéb")}</h6>
                                <hr className="warning-color accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                                <p onClick={() => setelveszett(!elveszett)} style={{ cursor: "pointer" }}>
                                    {language === "eng" ? ("Lost items") : ("Elvesztett tárgyak")}
                                </p>
                                <p>
                                    <a href="#!">{language === "eng" ? ("Terms and Conditions") : ("Szerződési feltételek")}</a>
                                </p>
                                <p>
                                    <a href="#!">{language === "eng" ? ("Order form") : ("Megrendelőlap")}</a>
                                </p>
                                <p>
                                    <a href="#!">{language === "eng" ? ("Baggage regulations") : ("Poggyász szabályzat")}</a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-xl-1">
                                <h6 className="text-uppercase font-weight-bold">{language === "eng" ? ("Contact") : ("Kapcsolat")}</h6>
                                <hr className="warning-color accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                                <p>
                                    <MDBIcon icon="home" className="mr-3"/>1075 Budapest, Síp utca 4.</p>
                                <p>
                                    <MDBIcon icon="envelope" className="mr-3" />contibus@contibus.hu</p>
                                <p>
                                    <MDBIcon icon="phone" className="mr-3" />06-30-9349319</p>
                                <p>
                                    <MDBIcon icon="print" className="mr-3" />338-2422</p>

                            </MDBCol>
                        </MDBRow>
                        <MDBCol className="mx-auto flex-center mt-2 mb-4">
                            <a className="fb-ic flag" target="_blank" rel="noopener noreferrer"
                                href="https://www.facebook.com/pg/Neoline-Kalandoz%C3%A1s-Utaz%C3%A1si-Iroda-184037444980315">
                                <MDBIcon fab icon="facebook-f" size="lg" className="pr-2" />
                            </a>

                            <a className="tw-ic flag" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/contibus_hivatalos/">
                                <MDBIcon fab icon="instagram" size="lg" className="pl-2" />
                            </a>
                        </MDBCol>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">© {(new Date().getFullYear())} Copyright: <span><span className="text-light">Contibus</span><span className="white-text"> <i
                        className="fas fa-times"></i> </span><a href="https://www.instagram.com/kovalikadam/" rel="noopener noreferrer"
                            target="_blank">tojglee</a></span>
                    </div>

                </MDBFooter>
            </ScrollAnimation>
            
            <Lostitems elveszett={elveszett} setelveszett={setelveszett}/>
        </div>
    )
}

export default Footer
