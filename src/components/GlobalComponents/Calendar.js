import React from 'react'
import {
    MDBModal, MDBCard, MDBModalHeader, MDBBtn, MDBModalBody, MDBRow, MDBContainer, MDBCardFooter, MDBCol, MDBCardBody, MDBAlert
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
import { GoogleCalendarKey } from "../../features/GoogleKey"


const Calendar = ({ setcalendaropen, calendaropen, setisOpen }) => {
    const language = useSelector(selectlanguage)

    return (
        <MDBModal fade isOpen={calendaropen} toggle={() => setcalendaropen(!calendaropen)} size="lg" className="rounded">
            <MDBModalHeader className="rounded calendar" titleClass="heading lead font-weight-bolder"
                toggle={() => { setcalendaropen(!calendaropen); setisOpen(false) }}>
                {language === "en" ? ("Calendar") : ("Naptár")}
            </MDBModalHeader>
            <MDBModalBody className="p-0">
                <MDBContainer className="p-0">
                    <MDBRow className="p-0">
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody className="px-4">
                                    <MDBAlert color="warning" className="mb-4 rounded">
                                        <p className="text-muted text-center m-0">
                                            <span className="font-weight-bolder d-block">
                                                Kedves Utasaink!
                                            </span> Az újabb korlátozások bevezetései miatt a novemberi és december eleji utazásokat sajnos nem tudjuk elindítani!
                                        Ezeket az utazásokat későbbi időpontokban megvalósítjuk (2021), melyek megtalálhatóak a <a className="text-muted" id="kalandozastravel"
                                                href="http://kalandozastravel.hu/cgi-bin/view2021" target="_blank">kalandozastravel.hu</a> honlapon.
                                        Akinek volt ezekben az időpontokban foglalása, e-mailban tájékoztatjuk.
                                    </p>
                                    </MDBAlert>

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
                                        googleCalendarApiKey={GoogleCalendarKey}
                                        locale={language === "en" ? null : (huLocale)}
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
                    <MDBBtn color="dark" outline className="float-right rounded" onClick={() => {
                        setcalendaropen(!calendaropen)
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
