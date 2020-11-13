import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCol, MDBRow
} from "mdbreact";
import { Button, Snackbar, SnackbarContent, Tooltip } from '@material-ui/core';

import Calendar from './Calendar';
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'


const Navbar = () => {
    let location = useLocation();

    const language = useSelector(selectlanguage)

    const [calendaropen, setcalendaropen] = useState(false)
    const [counter, setcounter] = useState(3)
    const [langtoast, setlangtoast] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const counterinterval = () => {
        setInterval(() => {
            setcounter(counter => counter - 1)
        }, 1000)
    }

    useEffect(() => {
        if (counter === 0) {
            window.location.reload(false)
        }
    }, [counter])


    useEffect(() => {
        if (window.innerWidth < 767) {
            setIsOpen(false)
        }
    }, [location])

    return (
        <>
            <MDBNavbar className="w-100 fadeInDown animated" fixed="top" dark scrolling transparent expand="md">
                <div className="container px-2 py-1">
                    <MDBNavbarBrand onClick={() => window.location.reload(false)} style={{ cursor: "pointer" }}>
                        <MDBIcon icon="bus" />
                        <strong> ContiBUS</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={() => setIsOpen(!isOpen)} />
                    <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active={location.pathname === "" ? (true) : location.pathname === "/" ? (true) : (false)}>
                                <MDBNavLink to="/" className="rounded">
                                    {language === "en" ? ("Home") : ("Kezdőlap")}</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem active={location.pathname === "/offer" ? (true) : (false)}>
                                <MDBNavLink to="/offer" className="rounded">
                                    {language === "en" ? ("Offer request") : ("Ajánlatkérés")}</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem active={location.pathname === "/buses" ? (true) : (false)}>
                                <MDBNavLink to="/buses" className="rounded">
                                    {language === "en" ? ("Our buses") : ("Autóbuszok")}</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown size="lg">
                                    <MDBDropdownToggle className="rounded" nav caret>
                                        <span><MDBIcon icon="suitcase-rolling" className="pr-1" />{language === "en" ? (" Travels") : (" Utazásaink")} </span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic className="rounded z-depth-1 p-0">
                                        <MDBDropdownItem onClick={() => setcalendaropen(!calendaropen)} className="p-4">{language === "en" ? ("Calendar") : ("Naptár")} »
                                        </MDBDropdownItem>
                                        <MDBDropdownItem divider></MDBDropdownItem>
                                        <MDBDropdownItem href="https://www.facebook.com/Neoline-Kalandoz%C3%A1s-Utaz%C3%A1si-Iroda-184037444980315/events"
                                            target="_blank" className="p-4">{language === "en" ? ("Facebook events") : ("Facebook eseményeink")} »</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav className="nav-flex-icons" right>
                            <MDBNavItem>
                                <MDBCol className="flex-center">
                                    <MDBRow className="">
                                        <div className="img-fluid pr-2">
                                            <Tooltip title="Hungarian"
                                                disableHoverListener={language !== "en" ? (true) : (false)}
                                                disableFocusListener={language !== "en" ? (true) : (false)}
                                                disableTouchListener={language !== "en" ? (true) : (false)}
                                            >
                                                <img width="30px" src="/img/hu.png" className={language !== "en" ? ("flag activelanguage") : ("flag notactivelang")} id="huicon"
                                                    onClick={() => { localStorage.setItem("language", "hu"); setlangtoast(true); counterinterval() }} alt="" />
                                            </Tooltip>
                                        </div>
                                    </MDBRow>
                                </MDBCol>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBCol className="flex-center">
                                    <MDBRow className="">
                                        <div className="img-fluid pr-2">
                                            <Tooltip title="Angol"
                                                disableHoverListener={language === "en" ? (true) : (false)}
                                                disableFocusListener={language === "en" ? (true) : (false)}
                                                disableTouchListener={language === "en" ? (true) : (false)}
                                            >
                                                <img width="30px" src="/img/uk.png" className={language === "en" ? ("flag activelanguage") : ("flag notactivelang")} id="engicon"
                                                    onClick={() => { localStorage.setItem("language", "en"); setlangtoast(true); counterinterval() }} alt="" />
                                            </Tooltip>
                                        </div>

                                    </MDBRow>
                                </MDBCol>
                            </MDBNavItem>
                            <MDBNavItem id="ticketbtn" onClick={() => setIsOpen(!isOpen)} className="rounded">
                                <Tooltip title={language === "en" ? ("Unfortunately we will only have travels in 2021.") :
                                    ("Sajnos már csak a 2021-es évben lesznek utazásaink.")}>
                                    <a href="http://kalandozastravel.hu/cgi-bin/view2021" target="_blank" rel="noopener noreferrer"
                                        className="nav-link border border-light rounded text-center">
                                        <MDBIcon icon="calendar-check" className="pr-1" />
                                        {language === "en" ? (" Tickets") : (" Jegyfoglalás")}
                                    </a>
                                </Tooltip>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </div>
            </MDBNavbar>

            <Snackbar open={langtoast} onClose={(event, reason) => { if (reason === "clickaway") { return; }; setlangtoast(false) }}>
                <SnackbarContent message={language === "en" ? ("Language set...") : ("Nyelv sikeresen beállítva...")}
                    action={<Button variant="contained" className="rounded" style={{ color: "white", fontWeight: "bold", backgroundColor: "rgba(66, 66, 66, 0.8)", margin: "5px" }}
                        onClick={() => { window.location.reload(false) }}>{language === "en" ? ("Reload " + counter) : ("Újratöltés " + counter)}</Button>} />
            </Snackbar>

            <Calendar setcalendaropen={setcalendaropen} calendaropen={calendaropen} setisOpen={setIsOpen} />
        </>
    )
}

export default Navbar
