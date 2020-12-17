import React, { useState } from 'react'
import { MDBBtn, MDBCard, MDBCardBody } from "mdbreact"
import { selectlanguage } from '../../lib/AppSlice'
import { useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'

const Cardbodys = ({ item, what, settablazat, itemid }) => {
    const language = useSelector(selectlanguage)
    const [click, setclick] = useState(false)

    return (
        <>
            {item ? (
                <MDBCard className="rounded z-depth-1-half kartya muzeumbusz" onClick={() => { setclick(!click) }}>
                    <img src={what === "Muzeum" ? (`/img/muzeum/${itemid}.jpg`) : what === "Table" ? (`https:${item.fields.pictures[0].fields.file.url}`) : (null)}
                        alt="Kép lesz majd" className="img-fluid rounded" />
                    <MDBCardBody className={click ? ("rounded text-center muzeumcardbody d-md-block") : ("close text-center muzeumcardbody d-md-block")}>
                        <h4 className='card-title font-weight-bold pb-2 bustitle'>
                            {item.fields.bus}
                        </h4>
                        <p className='card-text mt-3'>
                            {item.fields.title}
                        </p>
                        {what === "Muzeum" ? (<p className='card-text d-lg-inline d-md-none'>{item.fields.desc}</p>) :
                            (<div className="card-text font-weight-bolder">
                                <NumberFormat className="m-1 p-0"
                                    suffix=" Ft / km" prefix={language === "en" ? ("Km charge: ") : ("Km díj: ")} value={item.fields.kmdij} displayType="text" />
                                <br />
                                <NumberFormat className="m-1 p-0 pt-1"
                                    suffix={language === "en" ? (" Ft / hour") : (" Ft / óra")} prefix={language === "en" ? ("Hourly rate: ") : ("Óradíj: ")}
                                    thousandSeparator=" " value={item.fields.oradij} displayType="text" />
                                <br />
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
