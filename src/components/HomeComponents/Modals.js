import React from 'react'
import {
    MDBBtn,
    MDBModal, MDBModalBody, MDBCard,
    MDBCardFooter, MDBModalHeader
} from 'mdbreact';
import { selectlanguage } from '../../lib/AppSlice'
import { useSelector } from 'react-redux'
import ReactGA from 'react-ga'


const Modals = ({ modalsopen, setmodalsopen }) => {
    const language = useSelector(selectlanguage)
    return (
        <>
            <MDBModal cascading modalStyle={modalsopen?.style}
                isOpen={modalsopen?.open} toggle={() => {
                    setmodalsopen({ ...modalsopen, open: false })
                    ReactGA.pageview(window.location.pathname)
                }

                } size="lg" className="rounded">
                <MDBModalHeader className="rounded" titleClass="heading lead font-weight-bolder" toggle={() => {
                    setmodalsopen({ ...modalsopen, open: false })
                    ReactGA.pageview(window.location.pathname)
                }
                }>
                    {language === "en" ? (modalsopen?.title.en) : (modalsopen?.title.hu)}
                </MDBModalHeader>
                <MDBModalBody className="p-0">
                    {modalsopen?.details}
                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn color={modalsopen?.style} outline className="float-right roundedbtn" onClick={() => {
                            setmodalsopen({ ...modalsopen, open: false })
                            ReactGA.pageview(window.location.pathname)
                        }
                        }>
                            {language === "en" ? ("Close") : ("Bezárás")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>
        </>
    )
}

export default Modals
