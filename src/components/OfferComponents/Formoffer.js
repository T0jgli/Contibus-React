import React, { useState } from 'react'
import axios from 'axios';
import db from "../../firebase/firebase"
import firebase from "firebase/app"

import {
    MDBContainer, MDBRow, MDBCol, MDBCardHeader, MDBCardBody, MDBBtn, MDBIcon
} from "mdbreact";
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { Fade } from "react-awesome-reveal";

import Snackbars from '../GlobalComponents/Snackbars';
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'

const Formoffer = () => {
    const language = useSelector(selectlanguage)

    const [state, setstate] = useState({
        name: "",
        phone: "",
        email: "",
        uticel: "",
        koltseg: "",
        indulas: "",
        erkezes: "",
        seat: "def",
        newsletter: false,
        comment: "",
        loading: false
    })

    const [accept, setaccept] = useState(false)
    const [accepterror, setaccepterror] = useState(false)
    const [success, setsuccess] = useState(false)
    const [error, seterror] = useState({ state: false, msg: "" })
    const handlesubmit = (e) => {
        e.preventDefault();
        if (accept) {
            if (state.seat !== "def") {
                if (new Date(state.indulas).toLocaleDateString() < new Date(state.erkezes).toLocaleDateString()) {
                    setstate({ ...state, loading: true })
                    db.collection("formofferusers").add({
                        name: state.name,
                        phone: state.phone,
                        email: state.email,
                        uticel: state.uticel,
                        koltseg: state.koltseg,
                        indulas: new Date(state.indulas).toLocaleDateString(),
                        erkezes: new Date(state.erkezes).toLocaleDateString(),
                        seat: state.seat,
                        comment: state.comment,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    })

                    if (state.newsletter) {
                        db.collection("newsletterusers").doc(state.email).set({
                            name: state.name,
                            phone: state.phone,
                            email: state.email,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp()
                        })
                    }

                    axios({
                        method: "POST",
                        url: process.env.REACT_APP_CONTIBUS_OFFERURL,
                        data: state
                    }).then((response) => {
                        setstate({ ...state, loading: false })
                        if (response.data.status === 'success') {
                            window.scrollTo(0, 0)
                            setsuccess(true)
                            setstate({})
                        } else if (response.data.status === 'fail') {
                            console.log(response.data)
                            window.scrollTo(0, 0)
                            seterror({ state: true, msg: response.data })
                            setstate({})
                        }
                    })
                }
                else {
                    seterror({
                        state: true, msg: language === "en" ? ("Do you really want to get back sooner than you leave?") :
                            ("Tényleg hamarabb akar visszaérkezni, mint elindulni?")
                    })
                    setstate({ ...state, indulas: "", erkezes: "" })
                }
            }
            else seterror({ state: true, msg: language === "en" ? ("Please select suitable seats!") : ("Kérjük válasszon férőhelyet!") })
        }
        else {
            seterror({ state: true, msg: language === "en" ? ("You need to accept the privacy policy!") : ("El kell fogadnia az adatvédelmi szerződést!") })
            setaccepterror(true)
        }
    }

    return (
        <>
            <img src="/img/3.jpg" className="img-fluid mx-auto d-none logo" width="220px" id="contibus-logo" alt="logo" />
            <MDBContainer className="py-2" id="form-container">
                <MDBRow className="rounded" >
                    <MDBCol className="mb-4 card pr-0 pl-0 rounded" style={{ backgroundColor: "#fafafa" }}>
                        <MDBCardHeader className="unique-color-dark roundedimg white-text text-center py-4">
                            <h4 className="mb-0"><MDBIcon icon="caret-down" className="px-2" />{language === "en" ? ("BUS OFFER REQUEST") : ("AUTÓBUSZ AJÁNLAT KÉRÉS")}
                                <MDBIcon className="px-2" icon="caret-down" />
                            </h4>
                        </MDBCardHeader>

                        <MDBCardBody className="rounded">
                            <form onSubmit={handlesubmit}>
                                <Fade triggerOnce>
                                    <div className="form-row my-3">
                                        <MDBCol className="form-group px-md-3 px-2">
                                            <label htmlFor="name">{language === "en" ? ("Customer name *") : ("Megrendelő neve *")}</label>
                                            <input type="text" name="name"
                                                className="form-control z-depth-1" required value={state.name} onChange={e => setstate({ ...state, name: e.target.value })} />
                                        </MDBCol>
                                        <MDBCol className="form-group px-md-3 px-2">
                                            <label htmlFor="phone">{language === "en" ? ("Phone number *") : ("Telefonszám *")}</label>
                                            <input type="num" name="phone"
                                                className="form-control z-depth-1" value={state.phone} onChange={e => setstate({ ...state, phone: e.target.value })} required />
                                        </MDBCol>
                                    </div>
                                </Fade>
                                <Fade triggerOnce>
                                    <div className="form-row my-3">
                                        <MDBCol className="form-group px-md-3 px-2">
                                            <label htmlFor="email">{language === "en" ? ("Email address *") : ("Email cím *")}</label>
                                            <input type="email" name="email"
                                                className="form-control z-depth-1" value={state.email} onChange={e => setstate({ ...state, email: e.target.value })} required />
                                        </MDBCol>
                                    </div>
                                    <hr className="my-5 w-50 elegant-color-dark" />
                                </Fade>
                                <Fade triggerOnce>
                                    <div className="form-row my-3">
                                        <MDBCol className="form-group px-md-3 px-2">
                                            <label htmlFor="uticel">{language === "en" ? ("Destination *") : ("Úticél *")}</label>
                                            <input type="text" name="uticel" value={state.uticel} onChange={e => setstate({ ...state, uticel: e.target.value })}
                                                className="form-control z-depth-1" required />
                                        </MDBCol>
                                        <MDBCol className="form-group px-md-3 px-2">
                                            <label htmlFor="km">{language === "en" ? ("Planned budget *") : ("Tervezett költségkeret *")}</label>
                                            <input type="text" name="koltseg" value={state.koltseg} onChange={e => setstate({ ...state, koltseg: e.target.value })}
                                                className="form-control z-depth-1" required />
                                        </MDBCol>
                                    </div>
                                </Fade>
                                <Fade triggerOnce>
                                    <div className="form-row my-3">
                                        <MDBCol className="form-group px-md-3 px-2">
                                            <label htmlFor="indulasdate">{language === "en" ? ("Departure day *") : ("Indulás napja *")}</label>
                                            <input type="date" name="indulasdate" min={new Date().toLocaleDateString().split(".").join("").split(" ").join("-")}
                                                className="form-control z-depth-1" value={state.indulas} onChange={e => { setstate({ ...state, indulas: e.target.value }); }} required />
                                        </MDBCol>
                                        <MDBCol className="form-group px-md-3 px-2">
                                            <label htmlFor="erkezesdate">{language === "en" ? ("Date of arrival *") : ("Érkezés napja *")}</label>
                                            <input type="date" name="erkezesdate" min={new Date().toLocaleDateString().split(".").join("").split(" ").join("-")}
                                                className="form-control z-depth-1" value={state.erkezes} onChange={e => setstate({ ...state, erkezes: e.target.value })} required />
                                        </MDBCol>

                                    </div>
                                    <hr className="my-5 w-50 elegant-color-dark" />
                                </Fade>
                                <Fade triggerOnce>
                                    <div className="form-row my-3">
                                        <MDBCol className="form-group px-md-3 px-2">
                                            <label htmlFor="seatsselect">{language === "en" ? ("Seats *") : ("Férőhely *")}</label>
                                            <select className="form-control z-depth-1" name="ferohely"
                                                required value={state.seat} onChange={e => setstate({ ...state, seat: e.target.value })}>
                                                <option value="def">{language === "en" ? ("Please select...") : ("Kérjük válasszon...")}</option>
                                                <option value="1-8">1-8 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="9-17">9-17 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="18-21">18-21 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="22-28">22-28 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="29-34">29-34 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="35-48">35-48 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="49-51">49-51 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="52-56">52-56 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="57-59">57-59 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="60-68">60-68 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="69-70">69-70 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="71-74">71-74 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="75-78">75-78 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="79-80">79-80 {language === "en" ? ("people") : ("fő")}</option>
                                                <option value="81-83">81-83 {language === "en" ? ("people") : ("fő")}</option>
                                            </select>
                                        </MDBCol>
                                    </div>
                                </Fade>
                                <Fade triggerOnce>
                                    <div className="form-row my-3">
                                        <MDBCol className="form-group px-md-3 px-2">
                                            <label htmlFor="comment">{language === "en" ? ("Short description *") : ("Rövid leírás (hány nap, honnan/hova, utazás jellege) *")}</label>
                                            <textarea className="form-control z-depth-1"
                                                name="desc" value={state.comment} onChange={e => setstate({ ...state, comment: e.target.value })} rows="5" required></textarea>
                                            <small className="form-text text-muted text-center">
                                                {language === "en" ?
                                                    ("If you find our offer favorable, please order in writing. Sending a request for a quote - and the response to it - is not considered an order!") :
                                                    ("Amennyiben ajánlatunkat kedvezőnek találja, írásban kérjük megrendelni. Az ajánlat kérés - és az arra kapott válasz - elküldése nem tekinthető megrendelésnek!")}
                                            </small>
                                        </MDBCol>
                                    </div>
                                </Fade>
                                {/*
                                    <Fade triggerOnce>
                                    <div className="form-row my-3">
                                        <MDBCol className="form-group px-md-3 px-2">
                                            <div className="input-group z-depth-1">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupFileAddon01"><i
                                                        className="fas fa-folder prefix"></i></span>
                                                </div>
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="inputGroupFile01"
                                                        aria-describedby="inputGroupFileAddon01" name="file" />
                                                    <label className="custom-file-label" htmlFor="inputGroupFile01" data-browse={language === "en" ? ("Browse") : ("Tallózás")}>
                                                        {language === "en" ? ("Choose file") : ("Fájl csatolása")}</label>
                                                </div>
                                            </div>
                                        </MDBCol>
                                    </div>
                                    </Fade>
 */}
                                <Fade triggerOnce>
                                    <div className="form-row my-3">
                                        <FormGroup className="px-md-3 px-2">
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" style={{ color: "black" }} checked={state.newsletter}
                                                        onChange={() => setstate({ ...state, newsletter: !state.newsletter })} />
                                                }
                                                label={language === "en" ? ("Subscribe to newsletter") : ("Feliratkozás a hírlevélre")}
                                            />
                                        </FormGroup>
                                    </div>
                                </Fade>
                                <Fade triggerOnce>
                                    <div className="form-row my-3">
                                        <FormGroup className="px-md-3 px-2">
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" style={{ color: "black" }} checked={accept}
                                                        onChange={() => { setaccept(!accept); if (accepterror) setaccepterror(false) }} />
                                                }
                                                label={language === "en" ? (
                                                    <>I accept the <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacytext font-weight-bolder">
                                                        privacy policy</a>!
                                                    </>) : (
                                                        <>Elfogadom az <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacytext font-weight-bolder">
                                                            adatvédelmi tájékoztatót</a>!
                                                        </>)}
                                            />
                                            <ArrowDropUp className={accepterror ? ("visible pr-1") : ("invisible pr-1")} style={{ color: "red" }} />
                                        </FormGroup>
                                    </div>
                                </Fade>
                                <Fade direction="up">
                                    <MDBBtn color="dark" outline disabled={state.loading}
                                        type="submit" className="rounded float-center mx-auto mt-3 mb-3 font-weight-bolder btn-block w-50">
                                        {state.loading ? (
                                            <div className="d-flex p-0 m-0 justify-content-center animated zoomIn">
                                                <div className="spinner-border p-0 m-0" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                        ) : language === "en" ? ("Get an offer") : ("Ajánlatot kérek")}
                                    </MDBBtn>

                                </Fade>
                            </form>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Snackbars success={success} setsuccess={setsuccess} error={error} seterror={seterror} />
        </>
    )
}

export default Formoffer
