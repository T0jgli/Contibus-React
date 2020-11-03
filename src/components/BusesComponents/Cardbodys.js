import React, { useState } from 'react'
import { MDBBtn, MDBCard, MDBCardBody } from "mdbreact"
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'

const Cardbodys = ({ item, what, settablazat, itemid }) => {
    const language = useSelector(selectlanguage)
    const [click, setclick] = useState(false)

    return (
        <>
            {item ? (
                <MDBCard className="rounded z-depth-1-half kartya muzeumbusz" onClick={() => { setclick(!click) }}>
                    <img src={what === "Muzeum" ? (`/img/muzeum/${itemid}.jpg`) : what === "Table" ? (`/img/${item.id}_img/1.jpg`) : (null)}
                        alt="Kép lesz majd" className="img-fluid rounded" />
                    <MDBCardBody className={click ? ("rounded text-center muzeumcardbody d-md-block") : ("close text-center muzeumcardbody d-md-block")}>
                        <h4 className='card-title font-weight-bold pb-2 bustitle'>
                            {item?.bus}
                        </h4>
                        <p className='card-text mt-3'>
                            {item?.title}
                        </p>
                        {what === "Muzeum" ? (<p className='card-text d-lg-inline d-md-none'>{item?.desc}</p>) :
                            (<div className="card-text font-weight-bolder">
                                <p className="m-1 p-0">{language === "en" ? ("Km charge: ") : ("Km díj: ")}{item?.kmdij} Ft / km</p>
                                <p className="m-1 p-0">
                                    {language === "en" ? ("Hourly rate: ") : ("Óradíj: ")}{item?.oradij}{language === "en" ? (" Ft / hour") : (" Ft / óra")}
                                </p>
                                <MDBBtn color="dark" className="rounded mt-3 muzeumbtn" outline
                                    onClick={() => settablazat(true)}>{language === "en" ? ("More »") : ("Bővebben »")} </MDBBtn></div>)}
                    </MDBCardBody>
                </MDBCard>


            ) : (
                    <MDBCard className="invisible" />
                )}
        </>
    )
}

export default Cardbodys
