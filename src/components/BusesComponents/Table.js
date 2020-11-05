import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectlanguage } from '../../features/AppSlice';

import { MDBTableBody, MDBTable, MDBTableHead, MDBBtn, MDBBtnGroup } from 'mdbreact';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import TableChartIcon from '@material-ui/icons/TableChart';
import Buses from "../../src/buses.json"
import { Fade } from "react-awesome-reveal";

import Carddeck from "./Carddeck";
import Datatable from './Datatable';
import Busmodals from './Busmodals';
import Fslightboxes from './Fslightboxes';
import { Tooltip } from '@material-ui/core';

const Table = ({ tablazat, settablazat }) => {
    const language = useSelector(selectlanguage)

    const ids = Array.from({ length: Buses.Buses.length }, (_, i) => i + 1)
    let idd = 0

    const togglers = Array.from({ length: Buses.Buses.length }, (_, i) => {
        return (
            { pict: false }
        )
    })

    const [toggler, settoggler] = useState(togglers)
    const [imgtoggler, setimgtoggler] = useState({
        toggler: false,
        slide: 0
    })
    return (
        <>
            <Fade triggerOnce direction="down">
                <h3 className="text-center text-muted my-4">{language === "en" ? ("Our current buses") : ("Jelenlegi autóbuszaink")}</h3>
            </Fade>
            <Fade triggerOnce direction="up">
                <MDBBtnGroup className="m-2">
                    <MDBBtn disabled={tablazat ? (false) : (true)} color="elegant" style={{ borderRadius: "10px 0 0 10px" }} onClick={() => {
                        settablazat(!tablazat)
                        localStorage.removeItem("defaultBusView")
                    }}>
                        <Tooltip title={language === "en" ? ("Cards") : ("Kártyák")}>
                            <ViewAgendaIcon fontSize="small" />
                        </Tooltip>
                    </MDBBtn>
                    <MDBBtn disabled={tablazat ? (true) : (false)} color="elegant" style={{ borderRadius: "0 10px 10px 0" }} onClick={() => {
                        settablazat(!tablazat)
                        localStorage.setItem("defaultBusView", "table")
                    }}>
                        <Tooltip title={language === "en" ? ("Table") : ("Táblázat")}>
                            <TableChartIcon fontSize="small" />
                        </Tooltip>
                    </MDBBtn>
                </MDBBtnGroup>
            </Fade>

            {tablazat === false ? (
                Buses.Buses.map((item, index, array) => {
                    if (index % 3 === 0) {
                        idd++;
                        return (
                            <Fade key={index} triggerOnce>
                                <Carddeck
                                    settablazat={settablazat} length={array.length} idd={idd} item={item}
                                    nextnextitem={array[index + 2]} nextnextitemid={ids[index + 2]} nextitemid={ids[index + 1]} nextitem={array[index + 1]}
                                    what={"Table"} />
                            </Fade>
                        )
                    }
                    else {
                        return null;
                    }
                })
            ) : null}

            {tablazat && (
                <Fade triggeronce>
                    <MDBTable striped hover responsive className="w-100 mt-4 busestable">
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
                            {Buses.Buses.map((item, index) => {
                                return (
                                    <Datatable setimgtoggler={setimgtoggler} imgtoggler={imgtoggler} settoggler={settoggler}
                                        dataid={ids[index]}
                                        language={language} toggler={toggler} data={item} key={ids[index]}
                                    />
                                )
                            })}
                        </MDBTableBody>
                    </MDBTable>
                </Fade>

            )}
            {tablazat && (
                <>
                    {Buses.Buses.map((item, index) => {
                        return (
                            <Busmodals language={language} settoggler={settoggler} toggler={toggler} data={item} key={(400 + index)} dataid={ids[index]} />
                        )
                    })}
                    <Fslightboxes setimgtoggler={setimgtoggler} data={Buses} imgtoggler={imgtoggler} />
                </>
            )}
        </>
    )
}

export default Table
