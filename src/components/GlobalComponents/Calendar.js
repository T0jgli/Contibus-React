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

import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'
import {GoogleCalendarKey} from "../../features/GoogleKey"


const Calendar = ({ setcalendaropen, calendaropen, setisOpen }) => {
    const language = useSelector(selectlanguage)

    return (
        <>
            <MDBModal fade isOpen={calendaropen} toggle={() => setcalendaropen(!calendaropen)} size="lg" className="rounded">
                <MDBModalHeader className="rounded calendar" titleClass="heading lead font-weight-bolder"
                    toggle={() => { setcalendaropen(!calendaropen); setisOpen(false) }}>
                    {language === "eng" ? ("Calendar") : ("Naptár")}
                </MDBModalHeader>
                <MDBModalBody className="p-0">
                    <MDBContainer className="p-0">
                        <MDBRow className="p-0">
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardBody className="p-4 m-1">
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

                                            eventClick={(arg) => {arg.jsEvent.preventDefault(); window.open(arg.event.url, '_blank', 'width=700,height=600');}}
                                            initialView='listMonth'
                                            googleCalendarApiKey={GoogleCalendarKey}
                                            locale={language === "eng" ? null : (huLocale)}
                                            eventSources={
                                                [
                                                    {
                                                        googleCalendarId: 'kdnhmov4apa6id7e2eulvebql0@group.calendar.google.com',
                                                        className: 'ContiBUS',
                                                        color: 'green',
                                                        textColor: 'black',
                                                        displayEventTime: true,
                                                    },
                                                    {
                                                        googleCalendarId: 'hu.hungarian#holiday@group.v.calendar.google.com',
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
                        <MDBBtn color="dark" outline className="float-right rounded" onClick={() => { setcalendaropen(!calendaropen); setisOpen(false) }}>
                            {language === "eng" ? ("Close") : ("Bezárás")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>
        </>
    )
}

export default Calendar
