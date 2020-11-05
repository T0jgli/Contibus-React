import React from 'react'
import {
    MDBContainer, MDBBtn,
    MDBModal, MDBModalBody, MDBRow, MDBTable, MDBTableBody, MDBTableHead, MDBCol, MDBCard,
    MDBCardHeader, MDBCardBody, MDBCardFooter, MDBCloseIcon, MDBModalHeader
} from 'mdbreact';
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'


const Modals = (props) => {
    const language = useSelector(selectlanguage)

    return (
        <>
            <MDBModal cascading className="casc" fade modalStyle="warning" isOpen={props.gls} toggle={() => props.setgls(!props.gls)} size="lg">
                <MDBModalHeader className="rounded" titleClass="heading lead font-weight-bolder" toggle={() => props.setgls(!props.gls)}>
                    {language === "en" ? ("GLS Parcelshop") : ("GLS Csomagpont")}
                </MDBModalHeader>
                <MDBModalBody className="p-0">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCard>
                                <MDBCardHeader className="text-center text-small text-muted">
                                    {language === "en" ?
                                        ("Our office, located in the city center, is also operating as a GLS parcel point since 2018, where we can receive and issue parcels.") :
                                        ("Belvárosi központban elhelyezkedő irodánk 2020-tól GLS csomagpontként is működik ahol csomagokat tudunk átvenni illetve kiadni.")}
                                    <p className="mb-0 mt-1">
                                        <a target="_blank" rel="noopener noreferrer"
                                            href="https://www.google.com/maps/place/Budapest,+S%C3%ADp+u.+4,+1075+Magyarorsz%C3%A1g/@47.495689,19.062411,15z/data=!4m5!3m4!1s0x4741dc42c1269771:0x3878225e1730ee6c!8m2!3d47.4956894!4d19.0624112?hl=hu-HU"
                                            id=""><span style={{ color: "rgba(0, 0, 0, 0.85)" }}>1075 Budapest,
                                            Síp utca 4.</span></a>
                                    </p>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol className="flex-center">
                                            <a href="https://gls-group.eu/HU/hu/home" target="_blank" rel="noopener noreferrer" className="float-center mx-auto d-block mb-3">
                                                <img className="" src={language === "en" ? ("/img/gls_eng.jpg") : ("/img/glscsomagpont.png")} alt="" />
                                            </a>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRow>
                    </MDBContainer>
                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn color="warning" outline className="float-right rounded" onClick={() => props.setgls(!props.gls)}>
                            {language === "en" ? ("Close") : ("Bezárás")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>



            <MDBModal cascading modalStyle="danger" isOpen={props.dpd} toggle={() => props.setdpd(!props.dpd)} size="lg" className="rounded">
                <MDBModalHeader className="rounded" titleClass="heading lead font-weight-bolder" toggle={() => props.setdpd(!props.dpd)}>
                    {language === "en" ? ("DPD Parcelshop") : ("DPD Csomagpont")}
                </MDBModalHeader>
                <MDBModalBody className="p-0">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCard>
                                <MDBCardHeader className="text-center text-small text-muted">
                                    {language === "en" ?
                                        ("Our office, located in the city center, is also operating as a DPD parcel point since 2020, where we can receive and issue parcels.") :
                                        ("Belvárosi központban elhelyezkedő irodánk 2020-tól DPD csomagpontként is működik ahol csomagokat tudunk átvenni illetve kiadni.")}
                                    <p className="mb-0 mt-1">
                                        <a target="_blank" rel="noopener noreferrer"
                                            href="https://www.google.com/maps/place/Budapest,+S%C3%ADp+u.+4,+1075+Magyarorsz%C3%A1g/@47.495689,19.062411,15z/data=!4m5!3m4!1s0x4741dc42c1269771:0x3878225e1730ee6c!8m2!3d47.4956894!4d19.0624112?hl=hu-HU"
                                            id=""><span style={{ color: "rgba(0, 0, 0, 0.85)" }}>1075 Budapest,
                                            Síp utca 4.</span></a>
                                    </p>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol className="flex-center">
                                            <a href="https://www.dpd.com/hu/hu/pickup-csomagpont/csomagpont-kereso/" rel="noopener noreferrer" target="_blank"
                                                className="float-center mx-auto d-block mb-3">
                                                <img className="" src={language === "en" ? ("/img/dpd_eng.png") : ("/img/dpd-csomagpont.png")} alt="" />
                                            </a>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRow>
                    </MDBContainer>
                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn color="danger" outline className="float-right rounded" onClick={() => props.setdpd(!props.dpd)}>
                            {language === "en" ? ("Close") : ("Bezárás")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>


            <MDBModal cascading modalStyle="danger" isOpen={props.allasajanlat} toggle={() => props.setallasajanlat(!props.allasajanlat)} size="lg" className="rounded">
                <MDBModalHeader className="rounded" titleClass="heading lead font-weight-bolder" toggle={() => props.setallasajanlat(!props.allasajanlat)}>
                    {language === "en" ? ("Current job offers") : ("Aktuális állásajánlataink")}
                </MDBModalHeader>
                <MDBModalBody className="p-0">
                    <MDBCard>
                        <MDBCardBody>
                            <img src={language === "en" ? ("/img/allas_k_eng.jpg") : ("/img/allas.jpg")} alt="Kép lesz majd"
                                className="p-3 img-fluid float-center mx-auto d-block w-50" />
                            <p className="text-center font-weight-bolder">{language === "en" ? ("Position to be filled:") : ("Betöltendő pozíció:")}</p>
                            <p className="mb-0 pb-0">{language === "en" ? ("Driver") : ("Gépkocsivezető")}</p>
                            <p className="mb-0 pb-0 mt-1 pt-1">{language === "en" ? ("Requirements:") : ("Feltételek:")}</p>

                            <ul>
                                <li>{language === "en" ? ("Category D, Category E license") : ("D kategóriás, E kategóriás jogosítvány")}</li>
                                <li>{language === "en" ? ("PÁV II aptitude exam") : ("PÁV II alkalmassági vizsga")}</li>
                                <li>{language === "en" ? ("Digital card") : ("Digitális kártya")}</li>
                            </ul>

                            <p className="pb-0 mb-0">{language === "en" ? ("Our expectations") : ("Elvárásaink:")}</p>
                            <ul>
                                <li>{language === "en" ? ("politeness") : ("udvariasság")}</li>
                                <li>{language === "en" ? ("cultured look") : ("ápolt, kulturált megjelenés")}</li>
                            </ul>
                            <p className="pb-0 mb-0">{language === "en" ? ("Advantage but not condition:") : ("Előny, de nem feltétel:")}</p>
                            <ul>
                                <li>{language === "en" ? ("experience") : ("tapasztalat")}</li>
                                <li>{language === "en" ? ("knowledge of a foreign language") : ("idegen nyelv ismerete")}</li>
                                <li>{language === "en" ? ("car mechanic ability") : ("autószerelői képesség")}</li>
                            </ul>
                            <p className="pb-0 mb-0">{language === "en" ? ("What we offer:") : ("Amit kínálunk:")}</p>
                            <ul>
                                <li>{language === "en" ? ("secure workplace") : ("biztos munkahely")}</li>
                                <li>{language === "en" ? ("basic salary + daily allowance + cafeteria") : ("alapbér + napidíj + cafeteria")}</li>
                                <li>{language === "en" ? ("teamwork") : ("csapatmunka")}</li>
                                <li>{language === "en" ? ("discounted travel options") : ("kedvezményes utazási lehetőségek")}</li>
                            </ul>
                            <p className="pt-4">
                                {language === "en" ? ("We are also waiting for applications from entrants or with reduced working capacity!") :
                                    ("Pályakezdők és csökkent munkaképességűek jelentkezését is várjuk!")}</p>
                            <p>
                                {language === "en" ? ("We can also offer part time job. Retirees are also welcome to apply.") :
                                    ("Részmunkaidőben is tudunk foglalkoztatni. Nyugdíjasok jelentkezését is várjuk!")}</p>
                            <p>
                                {language === "en" ? ("Seasonal work is also possible during special tourist periods (mostly weekends).") :
                                    ("Kiemelt idegenforgalmi időszakokban szezonális munkára is van lehetőség (elsősorban hétvégék).")}</p>
                            <br />
                            <span className="font-weight-bold">{language === "en" ? ("We are waiting for your CVs: ") : ("Várjuk az önéletrajzokat: ")}<a
                                href="mailto:#">contibus@contibus.hu</a></span>
                        </MDBCardBody>
                    </MDBCard>
                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn color="danger" outline className="float-right rounded" onClick={() => props.setallasajanlat(!props.allasajanlat)}>
                            {language === "en" ? ("Close") : ("Bezárás")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>

            <MDBModal cascading modalStyle="info" isOpen={props.vezido} toggle={() => props.setvezido(!props.vezido)} size="lg" className="rounded">
                <MDBModalHeader className="rounded" titleClass="heading lead font-weight-bolder" toggle={() => props.setvezido(!props.vezido)}>
                    {language === "en" ? ("Driving time") : ("Vezetési idő")}
                </MDBModalHeader>
                <MDBModalBody className="p-0">
                    <MDBContainer>
                        <MDBRow className="p-3">
                            <a href="./img/vezetesiido.jpg" rel="noopener noreferrer" target="_blank"><img src="./img/vezetesiido.jpg" alt="Kép lesz majd"
                                className="p-1 img-fluid float-center mx-auto d-block" /></a>
                        </MDBRow>
                    </MDBContainer>
                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn color="info" outline className="float-right rounded" onClick={() => props.setvezido(!props.vezido)}>
                            {language === "en" ? ("Close") : ("Bezárás")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>

            <MDBModal cascading modalStyle="success" isOpen={props.csomagmegorzes} toggle={() => props.setcsomagmegorzes(!props.csomagmegorzes)} size="lg" className="rounded">
                <div className="rounded modal-header">
                    <h5 className="heading lead font-weight-bolder">{language === "en" ? ("Luggage store") : ("Csomagmegőrzés")}</h5>
                    <MDBCloseIcon onClick={() => props.setcsomagmegorzes(!props.csomagmegorzes)} />
                </div>
                <MDBModalBody>
                    <MDBContainer className="">
                        <MDBRow className="d-block">
                            <p className="text-center font-weight-bold mt-4">{language === "en" ? ("Monday to Friday") : ("Hétfőtől - Péntekig")}</p>
                            <p className="d-block text-center">{language === "en" ? ("8:30 AM - 5:00 PM") : ("8:30 - 17:00")}</p>
                            <hr className="flex-center" style={{ width: "30%" }} />

                            <MDBTable hover className="mx-auto text-center">
                                <MDBTableHead>
                                    <tr>
                                        <th>
                                            <h5 className=" font-weight-bolder m-0 p-0">
                                                {language === "en" ? ("Price") : ("Ár")}
                                            </h5>

                                        </th>
                                        <th>

                                        </th>
                                        <th>
                                            <h5 className="m-0 p-0 font-weight-bolder">
                                                {language === "en" ? ("Time of the day") : ("Napszak")}
                                            </h5>

                                        </th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <tr>
                                        <td>
                                            <h6 className="m-0 p-0">
                                                1 Euro
                                            </h6>

                                        </td>
                                        <td className="">
                                            /
                                        </td>
                                        <td>
                                            {language === "en" ? ("Hour") : ("Óra")}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 className="m-0 p-0">
                                                5 Euro
                                            </h6>
                                        </td>
                                        <td className="">
                                            /
                                        </td>
                                        <td>
                                            {language === "en" ? ("Full day") : ("Teljes nap")}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 className="m-0 p-0">
                                                5 Euro
                                        </h6>
                                        </td>
                                        <td className="">
                                            /
                                        </td>
                                        <td>
                                            {language === "en" ? ("Night") : ("Éjszaka")}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 className="m-0 p-0">
                                                10 Euro
                                            </h6>
                                        </td>
                                        <td className="">
                                            /
                                        </td>
                                        <td>
                                            {language === "en" ? ("Weekend") : ("Hétvége")}
                                        </td>
                                    </tr>

                                </MDBTableBody>
                            </MDBTable>

                        </MDBRow>
                    </MDBContainer>

                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn color="success" outline className="float-right rounded" onClick={() => props.setcsomagmegorzes(!props.csomagmegorzes)}>
                            {language === "en" ? ("Close") : ("Bezárás")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>
        </>


    )
}

export default Modals
