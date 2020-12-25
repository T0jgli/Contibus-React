import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectBusesData, selectlanguage } from '../../lib/AppSlice';

import { MDBTableBody, MDBTable, MDBTableHead, MDBBtn, MDBBtnGroup } from 'mdbreact';
import { Tooltip } from '@material-ui/core';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import TableChartIcon from '@material-ui/icons/TableChart';
import { Fade } from "react-awesome-reveal";

import Carddeck from "./Carddeck";
import Datatable from './Datatable';
import Busmodals from './Busmodals';
import Fslightboxes from './Fslightboxes';
import { useEffect } from 'react';

const Table = ({ tablazat, settablazat }) => {
    const language = useSelector(selectlanguage)
    const busesdata = useSelector(selectBusesData)
    const [toggler, settoggler] = useState()


    useEffect(() => {
        if (busesdata.length > 1) {
            settoggler(Array.from({ length: busesdata.length }, (_, i) => {
                return (
                    { pict: false }
                )
            }))
        }

    }, [busesdata.length])

    const [imgtoggler, setimgtoggler] = useState({
        toggler: false,
        slide: 0
    })
    let idd = 0

    return (
        <>
            <Fade triggerOnce direction="down">
                <h3 className="text-center desctext my-4" id="buses-text">{language === "en" ? ("Our current buses") : ("Jelenlegi autóbuszaink")}</h3>
            </Fade>
            <Fade triggerOnce direction="up">
                <MDBBtnGroup className="my-3" id="buses-btngroup">
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
                busesdata.map((item, index, array) => {
                    if (index % 3 === 0) {
                        idd++;
                        return (
                            <Fade key={index} triggerOnce>
                                <Carddeck
                                    settablazat={settablazat} length={array.length} idd={idd} item={item}
                                    nextnextitem={array[index + 2]} nextnextitemid={index + 3} nextitemid={index + 2} nextitem={array[index + 1]}
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
                            {busesdata.map((item, index) => {
                                return (
                                    <Datatable setimgtoggler={setimgtoggler} imgtoggler={imgtoggler} settoggler={settoggler}
                                        dataid={index + 1}
                                        language={language} toggler={toggler} data={item} key={index}
                                    />
                                )
                            })}
                        </MDBTableBody>
                    </MDBTable>
                </Fade>

            )}
            {tablazat && (
                <>
                    {busesdata.length > 0 && toggler && busesdata.map((item, index) => {
                        return (
                            <Busmodals language={language} settoggler={settoggler} toggler={toggler} data={item} key={(400 + index)} dataid={index + 1} />
                        )
                    })}
                    <Fslightboxes setimgtoggler={setimgtoggler} data={busesdata} imgtoggler={imgtoggler} />
                </>
            )}
        </>
    )
}

export default Table
