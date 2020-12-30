import React from 'react'
import {
    MDBModal, MDBCard, MDBModalHeader, MDBBtn, MDBModalBody, MDBRow, MDBContainer, MDBCardFooter, MDBCol, MDBCardBody
} from "mdbreact";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listplugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid';
import huLocale from '@fullcalendar/core/locales/hu';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from "@fullcalendar/interaction";

import { selectlanguage } from '../../lib/AppSlice'
import { useSelector } from 'react-redux'
import ReactGA from 'react-ga'


const Calendar = ({ setcalendaropen, calendaropen, setisOpen }) => {
    const language = useSelector(selectlanguage)

    return (
        <MDBModal fade isOpen={calendaropen} toggle={() => {
            setcalendaropen(!calendaropen);
            ReactGA.pageview(window.location.pathname)
        }} size="lg" className="rounded">
            <MDBModalHeader className="rounded calendar" titleClass="heading lead font-weight-bolder"
                toggle={() => {
                    setcalendaropen(!calendaropen);
                    setisOpen(false);
                    ReactGA.pageview(window.location.pathname)
                }}>
                {language === "en" ? ("Calendar") : ("Naptár")}
            </MDBModalHeader>
            <MDBModalBody className="p-0">
                <MDBContainer className="p-0">
                    <MDBRow className="p-0">
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody className="px-4">
                                    <FullCalendar plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listplugin, googleCalendarPlugin]}
                                        headerToolbar={
                                            {
                                                left: 'prev,next today',
                                                center: 'title',
                                                right: 'dayGridMonth,timeGridDay,listMonth'
                                            }
                                        }
                                        selectable={true}
                                        dayMaxEvents={true}
                                        contentHeight='auto'

                                        eventClick={(arg) => { arg.jsEvent.preventDefault(); window.open(arg.event.url, '_blank', 'width=700,height=600'); }}
                                        initialView='listMonth'
                                        googleCalendarApiKey={process.env.REACT_APP_GOOGLE_CALENDARKEY}
                                        locale={language === "en" ? null : (huLocale)}
                                        eventSources={
                                            [
                                                {
                                                    googleCalendarId: process.env.REACT_APP_GOOGLE_CALENDARID_CONTIBUS,
                                                    className: 'ContiBUS',
                                                    color: 'green',
                                                    textColor: 'black',
                                                    displayEventTime: true,
                                                },
                                                {
                                                    googleCalendarId: process.env.REACT_APP_GOOGLE_CALENDARID_UNNEPNAPOK,
                                                    className: 'Ünnapnapok',
                                                    color: '#ff4545',
                                                    displayEventTime: false,
                                                }
                                            ]
                                        }
                                    />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBModalBody>
            <MDBCard className="rounded">
                <MDBCardFooter>
                    <MDBBtn color="dark" outline className="float-right roundedbtn" onClick={() => {
                        setcalendaropen(!calendaropen)
                        ReactGA.pageview(window.location.pathname)

                        if (window.innerWidth < 767)
                            setisOpen(false)
                    }}>
                        {language === "en" ? ("Close") : ("Bezárás")}
                    </MDBBtn>
                </MDBCardFooter>
            </MDBCard>
        </MDBModal>
    )
}

export default Calendar
