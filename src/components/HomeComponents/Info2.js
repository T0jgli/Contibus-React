import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectlanguage } from '../../lib/AppSlice'

const Info2 = () => {
    const language = useSelector(selectlanguage)
    const history = useHistory()
    return (
        <MDBContainer>
            <Fade triggerOnce>
                <h2 className="text-center my-5 pt-3">{language === "en" ? ("Travels around the world") : ("Világkörüli utazások")}</h2>
            </Fade>

            <Fade delay={200} triggerOnce>
                <p className="text-center mb-5 section-description desctext d-none">
                    Szolgáltatásunk közé tartozik többek között:
                    autóbusz bérlés és kölcsönzés, iskolai osztálykirándulások, szakmai utak és munkásjáratok szervezése.
                </p>
            </Fade>

            <Fade delay={400} triggerOnce>
                <MDBRow className="text-center">
                    <MDBCol md="4" className="mb-5">
                        <i style={{ fontSize: "4rem", color: "#fb3" }} className="fa logo fa-camera-retro"></i>
                        <h4 className="my-4 mx-0" style={{ fontWeight: "500" }}>{language === "en" ? ("Experience") : ("Tapasztalat")}</h4>
                        <p className="grey-text">Közel 30 éves tapasztalattal rendelkezünk az utaztatásban. Folyamatosan hallgatunk ügyfeleink visszajelzéseire, ezáltal biztosítva a legminőségibb szolgáltatást.</p>
                    </MDBCol>

                    <MDBCol md="4" className="mb-5">
                        <i style={{ fontSize: "4rem", color: "#fb3" }} className="fas logo fa-user-shield"></i>
                        <h4 className="my-4 mx-0" style={{ fontWeight: "500" }}>{language === "en" ? ("Safety") : ("Biztonság")}</h4>
                        <p className="grey-text">Járműveink műszaki és esztétikai állapota kifogástalan. Gépkocsivezetőink szigorúan betartják a pihenési időt, garantálva, hogy utazása során biztonságban érezze magát.</p>
                    </MDBCol>

                    <MDBCol md="4" className="mb-5">
                        <i style={{ fontSize: "4rem", color: "#fb3" }} className="fa logo fa-heart"></i>
                        <h4 className="my-4 mx-0" style={{ fontWeight: "500" }}>{language === "en" ? ("Adventure") : ("Élmény")}</h4>
                        <p className="grey-text">Szolgatásaink közé tartozik az egyedik utazások lebonyolítása is, melyekkel felejthetetlen élményt tudunk nyújtani utasainknak. Kérjen árajánlatot <span className="privacytext" onClick={() => history.push("/offer")}>ide</span> kattintva.</p>
                    </MDBCol>
                </MDBRow>

            </Fade>
        </MDBContainer>
    )
}

export default Info2
