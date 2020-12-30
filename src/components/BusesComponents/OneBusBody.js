import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectBusesData, selectlanguage } from '../../lib/AppSlice'

import { MDBBtn, MDBCol, MDBRow } from 'mdbreact'
import UpdateIcon from '@material-ui/icons/Update';
import SpeedIcon from '@material-ui/icons/Speed';
import NumberFormat from 'react-number-format';
import Fslightboxes from '../GlobalComponents/Fslightboxes'
import { Helmet } from 'react-helmet'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { IconButton, Tooltip } from '@material-ui/core'
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import { Fade } from 'react-awesome-reveal'
//import { getEquipmentList } from '../../lib/getEquipmentList'


const OneBusBody = () => {
    let params = useParams()
    const history = useHistory()
    const language = useSelector(selectlanguage)
    const busesdata = useSelector(selectBusesData)

    const [thisbus, setthisbus] = useState(null)
    const [notfound, setnotfound] = useState(false)
    const [thispicture, setthispicture] = useState(0)
    const [lightbox, setlightbox] = useState({
        toggler: false,
        slide: 1
    })

    useEffect(() => {
        if (busesdata.length > 0) {
            setthisbus(busesdata.filter(bus => bus.fields.id === params.bus)[0]);
            if (!thisbus)
                setnotfound(true)
        }

    }, [busesdata])
    return (
        <>
            {thisbus ? (
                <>
                    <Helmet>
                        <title>Contibus - {thisbus.fields.bus}</title>
                    </Helmet>

                    <div className="onebus__container w-75 mx-auto my-5 pt-3">
                        <MDBRow>
                            <MDBCol className="text-sm-right text-center">
                                <Fade triggerOnce>
                                    <img alt={`${thisbus.fields.bus} kép`} src={`https://${thisbus.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`}
                                        style={{ cursor: "pointer", borderRadius: "1rem" }}
                                        onClick={() => setlightbox({
                                            toggler: true,
                                            slide: thispicture
                                        })}
                                        className="img img-rounded img-thumbnail buspict" />
                                </Fade>
                                <Fade triggerOnce>
                                    <div className="mt-2 otherpictures mb-5 mb-md-0">
                                        {thisbus.fields.pictures.map((pict, i) => {
                                            if (i !== thispicture)
                                                return (
                                                    <img alt={`${thisbus.fields.bus} kép (${i + 1})`}
                                                        style={{ borderRadius: "1rem" }}
                                                        key={`${thisbus.fields.bus} (${i + 1})`}
                                                        src={`https://${pict.fields.file.url}?&fm=webp&q=80`} onClick={() => setthispicture(i)}
                                                        className="p-2" width="100" />
                                                )
                                            else return null
                                        })}
                                    </div>
                                </Fade>


                            </MDBCol>

                            <MDBCol>
                                <Fade delay={200} triggerOnce>
                                    <div className="onebus__detailscontainer">
                                        <h2 className="text-center text-lg-left">{thisbus.fields.bus}</h2>
                                        <div className="onebus__oradijcontainer d-flex align-items-center mt-5">
                                            <UpdateIcon fontSize="large" />
                                            <div>
                                                <p className="grey-text m-0 pl-4">PER {language === "en" ? ("HOUR") : ("ÓRA")}</p>

                                                <NumberFormat thousandSeparator=" " className="grey-text h4 font-weight-bold pt-2 m-0 pl-4"
                                                    suffix={language === "en" ? (" Ft / hour") : (" Ft / óra")}
                                                    value={thisbus.fields.oradij} displayType="text" />
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="onebus__kmdijcontainer d-flex align-items-center mt-3">
                                            <SpeedIcon fontSize="large" />
                                            <div>
                                                <p className="grey-text m-0 pl-4">PER KM</p>
                                                <NumberFormat thousandSeparator=" " className="grey-text h4 font-weight-bold pt-2 m-0 pl-4"
                                                    suffix=" Ft / km" value={thisbus.fields.kmdij} displayType="text" />
                                            </div>
                                        </div>

                                        <div className="onebus__kmdijcontainer d-flex align-items-center mt-5 pt-3">
                                            <EmojiPeopleIcon fontSize="large" />
                                            <div>
                                                <p className="grey-text m-0 pl-4">SZÁLLÍTHATÓ SZEMÉLYEK</p>
                                                <h4 className="grey-text font-weight-bold pt-2 m-0 pl-4">
                                                    {thisbus.fields.title.split(' ').slice(0, 3).join(" ")}
                                                </h4>

                                            </div>
                                        </div>
                                    </div>
                                </Fade>


                            </MDBCol>
                        </MDBRow>
                        <Fade triggerOnce>
                            <MDBRow className="mt-5 pt-4 mx-auto flex-center">
                                <MDBCol lg="8" className="text-center">
                                    <p className="grey-text">{thisbus.fields.desc}</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mx-auto mt-3 flex-center">
                                <MDBCol lg="8" className="text-center">
                                    <Tooltip title={language === "en" ? ("Seat positions") : ("Ülésrend")}>
                                        <IconButton aria-label="seats" onClick={() => window.open(`https:${thisbus.fields.seats.fields.file.url}`, "_blank")}>
                                            <AirlineSeatReclineNormalIcon />
                                        </IconButton>
                                    </Tooltip>
                                </MDBCol>
                            </MDBRow>
                        </Fade>


                        <MDBRow className="flex-center mt-5 pt-2 mx-auto">
                            <Fade direction="up">
                                <MDBBtn color="warning" onClick={() => {
                                    history.push("/offer", {
                                        selectedbus: thisbus.fields.bus.replaceAll(/\s/g, '-')
                                    });
                                }} className="my-1 black-text roundedbtn font-weight-bold">
                                    {language === "en" ? ("Order") : ("Megrendelem")}
                                </MDBBtn>

                            </Fade>
                        </MDBRow>




                    </div>
                    <Fslightboxes name={thisbus.fields.bus} data={thisbus.fields.pictures} imgtoggler={lightbox} setimgtoggler={setlightbox} />
                </>
            ) : notfound ? (
                <h2 className="flex-center text-center my-5">A keresett autóbusz nem található!</h2>
            ) : (
                        <div className="flex-center my-5">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>

                    )}
        </>
    )
}

export default OneBusBody
