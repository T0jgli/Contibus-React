import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCol, MDBRow
} from "mdbreact";
import { Snackbar, SnackbarContent } from '@material-ui/core';

import Calendar from './Calendar';
import { selectlanguage, setlanguage } from '../../lib/AppSlice'
import { useDispatch, useSelector } from 'react-redux'
import Contactform from './Contactform';


const Navbar = () => {
    let location = useLocation();
    const dispatch = useDispatch()
    const language = useSelector(selectlanguage)

    const [calendaropen, setcalendaropen] = useState(false)

    const [langtoast, setlangtoast] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 767) {
            setIsOpen(false)
        }
    }, [location, language])

    return (
        <>
            <MDBNavbar className="w-100 animated fadeInDown" fixed="top" dark scrolling transparent expand="md">
                <div className="container px-0 py-lg-2">
                    <MDBNavbarBrand onClick={() => window.location.reload(false)} >
                        <MDBIcon icon="bus" />
                        <strong style={{ cursor: "pointer" }}> ContiBUS</strong>
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
                                        <span><MDBIcon icon="suitcase-rolling" className="px-1" />{language === "en" ? (" Travels") : (" Utazásaink")} </span>
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
                                            <img width="30px" src="/img/hu.png" className={language !== "en" ? ("flag activelanguage") : ("flag notactivelang")} id="huicon"
                                                onClick={() => {
                                                    localStorage.removeItem("language")
                                                    if (language === "en")
                                                        setlangtoast(true);
                                                    dispatch(setlanguage({ language: "hu" }));
                                                }} alt="" />
                                        </div>
                                    </MDBRow>
                                </MDBCol>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBCol className="flex-center">
                                    <MDBRow className="">
                                        <div className="img-fluid pr-2">
                                            <img width="30px" src="/img/uk.png" className={language === "en" ? ("flag activelanguage") : ("flag notactivelang")} id="engicon"
                                                onClick={() => {
                                                    localStorage.setItem("language", "en");
                                                    if (language === "hu")
                                                        setlangtoast(true);
                                                    dispatch(setlanguage({ language: "en" }));
                                                }} alt="" />
                                        </div>

                                    </MDBRow>
                                </MDBCol>
                            </MDBNavItem>
                            <MDBNavItem id="ticketbtn" onClick={() => setIsOpen(!isOpen)} className="rounded">
                                <a href="http://kalandozastravel.hu/cgi-bin/view2021" target="_blank" rel="noopener noreferrer"
                                    className="nav-link border border-light rounded text-center">
                                    <MDBIcon icon="calendar-check" className="pr-1" />
                                    {language === "en" ? (" Tickets") : (" Jegyfoglalás")}
                                </a>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </div>
            </MDBNavbar>

            <Snackbar autoHideDuration={3000} open={langtoast} onClose={(event, reason) => { if (reason === "clickaway") { return; }; setlangtoast(false) }}>
                <SnackbarContent message={language === "en" ? ("Language set") : ("Nyelv sikeresen beállítva")} />
            </Snackbar>
            <Calendar setcalendaropen={setcalendaropen} calendaropen={calendaropen} setisOpen={setIsOpen} />
        </>
    )
}

export default Navbar
