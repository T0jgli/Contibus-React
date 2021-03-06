import React, { useState } from 'react'
import axios from 'axios';
import db from "../../lib/firebase"
import firebase from "firebase/app"
import { selectlanguage, setsnackbar } from '../../lib/AppSlice'
import { useDispatch, useSelector } from 'react-redux'

import {
    MDBCol, MDBModal, MDBModalBody, MDBBtn, MDBCard, MDBCardFooter, MDBCardHeader, MDBCardBody, MDBInput, MDBModalHeader
} from "mdbreact";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import ReactGA from 'react-ga'

const Lostitems = ({ elveszett, setelveszett }) => {
    const language = useSelector(selectlanguage)
    const dispatch = useDispatch()

    const [state, setstate] = useState({
        name: "",
        date: "",
        bus: "",
        desc: "",
        phone: "",
        email: "",
        comment: "",
        newsletterlost: false,
        file: null,
        loading: false
    })
    const [accept, setaccept] = useState(false)
    const [accepterror, setaccepterror] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault();
        if (accept) {
            setstate({ ...state, loading: true })
            db.collection("lostitemusers").add({
                name: state.name,
                phone: state.phone,
                email: state.email,
                date: state.date,
                bus: state.bus,
                desc: state.desc,
                comment: state.comment,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

            if (state.newsletterlost) {
                db.collection("newsletterusers").doc(state.email).set({
                    name: state.name,
                    phone: state.phone,
                    email: state.email,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
            }

            axios({
                method: "POST",
                url: process.env.REACT_APP_CONTIBUS_LOSTITEMSURL,
                data: state
            }).then((response) => {
                setstate({ ...state, loading: false })
                if (response.data.status === 'success') {
                    dispatch(setsnackbar({
                        snackbar: {
                            open: true,
                            type: "success",
                            hu: "Sikeresen elküldve! Munkatársunk hamarosan felveszi Önnel a kapcsolatot.",
                            en: "Successfully sent! We will contact you shortly.",
                        }
                    }))
                    setstate({})
                    setelveszett(!elveszett)
                    ReactGA.pageview(window.location.pathname)
                    window.scrollTo(0, 0)
                } else if (response.data.status === 'fail') {
                    console.log(response.data)
                    dispatch(setsnackbar({
                        snackbar: {
                            open: true,
                            type: "success",
                            hu: response.data,
                            en: response.data,
                        }
                    }))
                    setstate({})
                    setelveszett(!elveszett)
                    ReactGA.pageview(window.location.pathname)
                    window.scrollTo(0, 0)
                }
            })

        } else {
            setaccepterror(true)
            dispatch(setsnackbar({
                snackbar: {
                    open: true,
                    type: "error",
                    hu: "El kell fogadnia az adatvédelmi szerződést!",
                    en: "You need to accept the privacy policy!",
                }
            }))
        }
    }

    return (
        <>
            <MDBModal cascading className="lostmodal rounded" fade modalStyle="warning" isOpen={elveszett} toggle={() => {
                setelveszett(!elveszett)
                ReactGA.pageview(window.location.pathname)
            }} size="lg">
                <MDBModalHeader className="rounded" titleClass="heading lead font-weight-bolder" toggle={() => {
                    setelveszett(!elveszett)
                    ReactGA.pageview(window.location.pathname)
                }}>
                    {language === "en" ? ("Lost items") : ("Elvesztett tárgyak")}
                </MDBModalHeader>
                <MDBModalBody className="p-0">
                    <MDBCard>
                        <MDBCardHeader className="text-small text-muted text-center">
                            Az
                            autóbuszon
                            felejtett
                            tárgyakért irodánk felelősséget nem vállal.
                            <br />
                            Biztosítjuk arról azonban, hogy mindent megteszünk annak érdekében, hogy ha az autóbuszon felejtette
                            akkor visszakerül Önhöz.
                            <br />
                            A megtalált tárgyakat irodánkban előre egyeztetett időpontban veheti át.
                            <br />
                            A megtalált tárgyakat 3 hónapig őrizzük.
                        </MDBCardHeader>
                        <MDBCardBody>
                            <form onSubmit={handlesubmit} className="mx-2">
                                <div className="form-row my-2">
                                    <MDBCol lg="6">
                                        <MDBInput label={language === "en" ? ("Name *") : ("Utas neve *")}
                                            icon="user" name="name" value={state.name} onChange={e => setstate({ ...state, name: e.target.value })} required />
                                    </MDBCol>
                                    <MDBCol lg="6">
                                        <MDBInput label={language === "en" ? ("Date of travel *") : ("Utazás dátuma *")}
                                            icon="calendar-week" name="date" value={state.date} onChange={e => setstate({ ...state, date: e.target.value })} required />
                                    </MDBCol>
                                </div>
                                <div className="form-row my-2">
                                    <MDBCol>
                                        <MDBInput label={language === "en" ? ("Which bus did you travel on? *") : ("Melyik autóbusszal utazott? *")}
                                            value={state.bus} name="bus" onChange={e => setstate({ ...state, bus: e.target.value })} icon="bus" required />
                                    </MDBCol>
                                </div>
                                <div className="form-row my-2">
                                    <MDBCol>
                                        <MDBInput label=
                                            {language === "en" ? ("Description of the lost item *") : ("Az elveszett tárgy leírása *")}
                                            value={state.desc} name="desc" onChange={e => setstate({ ...state, desc: e.target.value })} icon="briefcase" required />
                                    </MDBCol>
                                </div>
                                <div className="form-row my-2">
                                    <MDBCol lg="6">
                                        <MDBInput label={language === "en" ? ("Phone number") : ("Telefonszám")}
                                            type="tel" name="phone" value={state.phone} onChange={e => setstate({ ...state, phone: e.target.value })} icon="phone-alt" />
                                    </MDBCol>
                                    <MDBCol lg="6">
                                        <MDBInput label={language === "en" ? ("Email address *") : ("Email cím *")}
                                            type="email" name="email" value={state.email} onChange={e => setstate({ ...state, email: e.target.value })} icon="envelope" required />
                                    </MDBCol>
                                </div>
                                <div className="form-row my-2">
                                    <MDBCol>
                                        <MDBInput label={language === "en" ? ("Comment") : ("Egyéb közlendő")}
                                            type="textarea" name="comment" value={state.comment} onChange={e => setstate({ ...state, comment: e.target.value })} rows="4" icon="comment" />
                                    </MDBCol>
                                </div>
                                {/*                                 <div className="form-row my-3">
                                    <MDBCol>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupFileAddon01">
                                                    <MDBIcon icon="folder" />
                                                </span>
                                            </div>
                                            <div className="custom-file">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="inputGroupFile01"
                                                    aria-describedby="inputGroupFileAddon01"
                                                    onChange={(e) => {
                                                        setstate({ ...state, file: e.target.files[0] })
                                                    }}
                                                />
                                                <label className="custom-file-label" htmlFor="inputGroupFile01" data-browse={language === "en" ? ("Browse") : ("Tallózás")}>
                                                    {state.file ? (state.file.name) : language === "en" ? ("Choose file") : ("Fájl csatolása")}
                                                </label>
                                            </div>
                                        </div>
                                    </MDBCol>
                                </div>
 */}                             <div className="form-row my-2">
                                    <FormGroup className="px-md-3 px-2">
                                        <FormControlLabel
                                            control={
                                                <Checkbox color="primary" style={{ color: "black" }} checked={state.newsletterlost}
                                                    onChange={() => setstate({ ...state, newsletterlost: !state.newsletterlost })} />
                                            }
                                            label={language === "en" ? ("Subscribe to newsletter") : ("Feliratkozás a hírlevélre")}
                                        />
                                    </FormGroup>
                                </div>
                                <div className="form-row my-2">
                                    <FormGroup className="px-md-3 px-2">
                                        <FormControlLabel
                                            control={
                                                <Checkbox color="primary" style={{ color: "black" }} checked={accept}
                                                    onChange={() => setaccept(!accept)} />
                                            }
                                            label={language === "en" ? (
                                                <>I accept the <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacytext font-weight-bolder">
                                                    privacy policy</a>!
                                                        <ArrowLeftIcon className={accepterror ? ("visible") : ("invisible")} style={{ color: "red" }} />
                                                </>) : (
                                                    <>Elfogadom az <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacytext font-weight-bolder">
                                                        adatvédelmi tájékoztatót</a>!
                                                            <ArrowLeftIcon className={accepterror ? ("visible") : ("invisible")} style={{ color: "red" }} />
                                                    </>)}
                                        />
                                    </FormGroup>
                                </div>
                                <MDBBtn color="warning" type="submit" disabled={state.loading} className="float-center black-text roundedbtn mx-auto d-block mt-3 mb-3 font-weight-bolder">
                                    {state.loading ? (
                                        <div className="d-flex p-0 m-0 justify-content-center animated zoomIn">
                                            <div className="spinner-border p-0 m-0" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    ) : language === "en" ? ("Send") : ("Küldés")}
                                </MDBBtn>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn color="warning" outline className="float-right roundedbtn closetext" onClick={() => {
                            setelveszett(!elveszett);
                            ReactGA.pageview(window.location.pathname)
                        }}>
                            {language === "en" ? ("Close") : ("Bezárás")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>
        </>
    )
}

export default Lostitems
