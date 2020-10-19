import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectlanguage } from '../../features/AppSlice';

import { MDBTableBody, MDBTable, MDBTableHead, MDBBtn, MDBBtnGroup } from 'mdbreact';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import TableChartIcon from '@material-ui/icons/TableChart';
import Buses from "../../src/buses.json"

import ScrollAnimation from 'react-animate-on-scroll';
import Carddeck from "./Carddeck";
import Datatable from './Datatable';
import Busmodals from './Busmodals';
import Fslightboxes from './Fslightboxes';

const Table = ({ tablazat, settablazat }) => {
    const language = useSelector(selectlanguage)

    let togglers = []
    let idd = 0
    for (let index = 0; index < Buses.Buses.length; index++) {
        togglers.push({ pict: false })
    }

    const [toggler, settoggler] = useState(togglers)
    const [imgtoggler, setimgtoggler] = useState({
        toggler: false,
        slide: 0
    })
    return (
        <>
            <div className="fadeIn animated">

                <ScrollAnimation animateIn="fadeInDown" animateOnce offset={window.innerHeight}>
                    <h3 className="text-center text-muted my-4">{language === "en" ? ("Our current buses") : ("Jelenlegi autóbuszaink")}</h3>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" animateOnce offset={window.innerHeight}>
                    <MDBBtnGroup className="m-2">
                        <MDBBtn disabled={tablazat ? (false) : (true)} color="elegant" style={{ borderRadius: "10px 0 0 10px" }} onClick={() => {
                            settablazat(!tablazat)
                            localStorage.setItem("defaultBusView", "card")
                        }}>
                            <ViewAgendaIcon fontSize="small" />
                        </MDBBtn>
                        <MDBBtn disabled={tablazat ? (true) : (false)} color="elegant" style={{ borderRadius: "0 10px 10px 0" }} onClick={() => {
                            settablazat(!tablazat)
                            localStorage.setItem("defaultBusView", "table")
                        }}>
                            <TableChartIcon fontSize="small" />
                        </MDBBtn>
                    </MDBBtnGroup>
                </ScrollAnimation>

                {tablazat === false ? (
                    Buses.Buses.map((item, index, array) => {
                        if (index % 3 === 0) {
                            idd++;
                            return (
                                <ScrollAnimation key={idd} animateIn="fadeIn" animateOnce offset={window.innerHeight}>
                                    <Carddeck settablazat={settablazat} idd={idd} item={item} nextnextitem={array[index + 2]} nextitem={array[index + 1]} what={"Table"} />
                                </ScrollAnimation>
                            )
                        }
                        else {
                            return null;
                        }
                    })
                ) : null}

                {tablazat && (
                    <MDBTable striped hover responsive className="w-100 mt-4 animated fadeIn">
                        <MDBTableHead className="z-depth-1">
                            <tr className="text-center z-depth-1">
                                <th>
                                    <span className="font-weight-bolder">{language === "en" ? ("Vehicles") : ("Járműveink")}</span>
                                </th>
                                <th>

                                </th>
                                <th className="pr-3 text-right">
                                    <span className="font-weight-bolder">{language === "en" ? ("Prices") : ("Árak")}</span>
                                </th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {Buses.Buses.map((item) => {
                                return (
                                    <Datatable setimgtoggler={setimgtoggler} imgtoggler={imgtoggler} settoggler={settoggler}
                                        language={language} toggler={toggler} data={item} key={item.id}
                                    />
                                )
                            })}
                        </MDBTableBody>
                    </MDBTable>
                )}
            </div>
            {tablazat && (
                <>
                    {Buses.Buses.map((item) => {
                        return (
                            <Busmodals language={language} settoggler={settoggler} toggler={toggler} data={item} key={item.id} />
                        )
                    })}
                    <Fslightboxes setimgtoggler={setimgtoggler} data={Buses} imgtoggler={imgtoggler} />
                </>
            )}
        </>
    )
}

export default Table
