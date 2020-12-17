import React, { useEffect, useState } from 'react'

import { MDBBtn, MDBContainer } from "mdbreact"

import Muzeum from "./Muzeum"
import Table from "./Table"
import { selectlanguage } from '../../lib/AppSlice'
import { useSelector } from 'react-redux'
import { Fade } from "react-awesome-reveal";

const Busesbody = () => {
    const language = useSelector(selectlanguage)

    const [showmuzeum, setshowmuzeum] = useState(false)
    const [tablazat, settablazat] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("defaultBusView") === "table") {
            settablazat(true)
        }
    }, [])

    return (
        <>
            <img src="/img/3.jpg" className="img-fluid mx-auto d-none logo" width="220px" id="contibus-logo" alt="logo" />
            <div className="text-center py-4" id="main" style={{ backgroundColor: "#f7f7f7" }}>
                <MDBContainer>
                    <Fade triggerOnce>
                        <section>
                            <h5 className="font-weight-bold pb-3">{language === "en" ? ("Other informations:") : ("Egyéb tudnivalók:")}</h5>
                            <p className="font-weight-bolder">{language === "en" ?
                                ("Domestic passenger transport is subject to 27% VAT, international passenger transport is subject to 0% VAT. A minimum of 250 km per day, a minimum of 4 hours must be paid for hourly billing.") :
                                ("Belföldi személyszállítást 27% ÁFA terheli, nemzetközi személyszállítást 0%-os. Napi minimum 250 km, óradíjas elszámolásnál minimum 4 óra fizetendő.")}</p>
                            <p>{language === "en" ? ("In addition to the indicated kilometer or hourly rate, VAT, tolls, crossing fees, city tickets, parking and a daily fee for drivers must be paid.") :
                                ("A feltüntetett kilóméterdíjon, vagy óradíjon felül áfát, autópályadíjakat, átkelő díjakat, városbelépőket, parkolásokat, és a gépkocsivezetők részére napidíjat kell fizetni.")}
                                {language === "en" ? (" The accommodation of the driver(s) is provided by the customer, the amount of the daily fee varies by road types.") :
                                    (" Gépkocsivezető(-k) szállásáról a megrendelő gondoskodik, a napidíj összege úttípusonként változik.")}
                                {language === "en" ? (" The drivers should rest 9 hours or more.") :
                                    (" A gépkocsivezetők napi pihenőideje semmilyen körülmények között sem lehet kevesebb kilenc egymást követő óránál.")}
                                {language === "en" ? (" We provide preliminary information on tolls, ferry costs and parking.") :
                                    (" Autópályadíjakról, kompköltségekről, parkolásról előzetes tájékoztatást adunk.")}
                            </p>
                            <p className="font-weight-bolder m-0 p-0">{language === "en" ? ("In case of regular order we provide a discount!") :
                                ("Rendszeres megrendelés esetén kedvezményt biztosítunk!")}</p>
                            <p>{language === "en" ? ("Orders can be placed in person at our office, by letter, fax, e-mail or phone.") :
                                ("Megrendeléseket személyesen irodánkban, levélben, faxon, e-mailben fogadunk vagy ügyeleti telefonszámunkon várjuk hívását.")}
                            </p>
                            <p>{language === "en" ?
                                ("For objects and values forgotten on the bus during the trips we do not take responsibility. We keep the found stuffs for 1 month.") :
                                ("Az utazások alatt az autóbuszon felejtett tárgyakért, értékekért felelősséget nem tudunk vállalni. A talált tárgyakat irodánk 1 hónapig őrzi.")}
                            </p>
                        </section>
                    </Fade>
                </MDBContainer>

            </div>

            <MDBContainer className="text-center mb-5 mt-4" id="buses-container">
                <hr className="w-25 mt-4 " />
                <Fade triggerOnce>
                    <MDBBtn color="dark" outline onClick={() => setshowmuzeum(!showmuzeum)} className="my-1 rounded muzeumbtn">
                        {showmuzeum ? language === "en" ? ("« Current buses") : ("« Jelenlegi autóbuszaink") : language === "en" ? ("Autobus museum »") : ("Autóbusz múzeumunk »")}
                    </MDBBtn>
                </Fade>
                <hr className="w-25 mb-2" />
                {showmuzeum ? <Muzeum /> : <Table tablazat={tablazat} settablazat={settablazat} />}
            </MDBContainer>
        </>
    )
}

export default Busesbody
