import React, { useState } from 'react'
import { selectlanguage, setsnackbar } from '../../lib/AppSlice'
import { useDispatch, useSelector } from 'react-redux'

import {
    MDBCol, MDBModal, MDBModalBody, MDBBtn, MDBCard, MDBCardFooter, MDBCardBody, MDBInput, MDBModalHeader, MDBRow, MDBIcon
} from "mdbreact";
import axios from 'axios';

const Contactform = ({ contactform, setcontactform }) => {
    const language = useSelector(selectlanguage)
    const dispatch = useDispatch()
    const [state, setstate] = useState({
        name: null,
        email: null,
        subject: null,
        message: null,
        loading: false
    })
    const handlesubmit = (e) => {
        e.preventDefault();
        setstate({ ...state, loading: true })

        axios({
            method: "POST",
            url: process.env.REACT_APP_CONTIBUS_CONTACTURL,
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
                setcontactform(!contactform)
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
                setcontactform(!contactform)
                window.scrollTo(0, 0)
            }
        })
    }

    return (
        <>
            <MDBModal className="lostmodal rounded" fade isOpen={contactform} toggle={() => setcontactform(!contactform)} size="lg">
                <MDBModalHeader className="rounded contactmodal" titleClass="heading lead font-weight-bolder" toggle={() => setcontactform(!contactform)}>
                    <MDBIcon icon="envelope" className="px-2" />{language === "en" ? ("Contact form") : ("Kapcsolat")}
                </MDBModalHeader>
                <MDBModalBody className="p-0">
                    <MDBRow>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={handlesubmit}>
                                        <div className="form-row my-4 mx-2">
                                            <MDBCol lg="6">
                                                <MDBInput
                                                    icon="user"
                                                    required
                                                    value={state.name}
                                                    onChange={(e) => setstate({ ...state, name: e.target.value })}
                                                    label={language === "en" ? ("Name") : ("Név")}
                                                    name="Name"
                                                    iconClass="grey-text"
                                                    type="text"
                                                />
                                            </MDBCol>
                                            <MDBCol lg="6">
                                                <MDBInput
                                                    icon="envelope"
                                                    required
                                                    value={state.email}
                                                    onChange={(e) => setstate({ ...state, email: e.target.value })}
                                                    label={language === "en" ? ("Email address") : ("Email cím")}
                                                    name="Email"
                                                    iconClass="grey-text"
                                                    type="text"
                                                />
                                            </MDBCol>
                                        </div>
                                        <div className="form-row my-4 mx-2">
                                            <MDBCol>
                                                <MDBInput
                                                    icon="tag"
                                                    required
                                                    value={state.subject}
                                                    onChange={(e) => setstate({ ...state, subject: e.target.value })}
                                                    label={language === "en" ? ("Subject") : ("Tárgy")}
                                                    name="Subject"
                                                    iconClass="grey-text"
                                                    type="text"
                                                />
                                            </MDBCol>

                                        </div>
                                        <div className="form-row my-4 mx-2">
                                            <MDBCol>
                                                <MDBInput
                                                    icon="pencil-alt"
                                                    rows="6"
                                                    required
                                                    value={state.message}
                                                    onChange={(e) => setstate({ ...state, message: e.target.value })}
                                                    label={language === "en" ? ("Message") : ("Üzenet")}
                                                    name="Message"
                                                    iconClass="grey-text"
                                                    type="textarea"
                                                />
                                            </MDBCol>

                                        </div>
                                        <MDBBtn color="dark" type="submit" disabled={state.loading} outline
                                            className="float-center rounded mx-auto d-block mt-3 mb-3 font-weight-bolder">
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
                        </MDBCol>
                    </MDBRow>
                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn color="dark" outline className="float-right rounded closetext" onClick={() => setcontactform(!contactform)}>
                            {language === "en" ? ("Close") : ("Bezárás")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>
        </>
    )
}

export default Contactform
