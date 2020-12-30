import React, { useState } from 'react'
import { MDBBtn, MDBCard, MDBCardBody } from "mdbreact"
import { selectlanguage } from '../../lib/AppSlice'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Cardbodys = ({ item, what }) => {
    const language = useSelector(selectlanguage)
    const [click, setclick] = useState(false)
    const history = useHistory()
    return (
        <>
            {item ? (
                <MDBCard className="rounded my-4 my-lg-0 kartya muzeumbusz" onClick={() => { setclick(!click) }}>
                    <img src={what === "Muzeum" ? (`https:${item.fields.picture.fields.file.url}?&fm=webp&q=80`) :
                        what === "Table" ? (`https:${item.fields.pictures[0].fields.file.url}?&fm=webp&q=80`) : (null)}
                        alt={`${item.fields.bus} ${what === "Muzeum" ? "Múzeum" : ("Busz")}`} className="img-fluid rounded" />
                    <MDBCardBody className={click ? ("rounded text-center muzeumcardbody d-md-block") : ("close text-center muzeumcardbody d-md-block")}>
                        <h4 className='card-title font-weight-bold pb-2 bustitle'>
                            {item.fields.bus}
                        </h4>
                        <p className={`card-text mt-3 ${what !== "Muzeum" && ("d-lg-inline d-sm-none")}`}>
                            {item.fields.title}
                        </p>
                        {what === "Muzeum" ? (<p className='card-text d-sm-none d-md-inline'>{item.fields.desc}</p>) :
                            (<div className="card-text font-weight-bolder">
                                <MDBBtn color="warning" className="roundedbtn black-text mt-5 mt-sm-3 mt-lg-5 muzeumbtn"
                                    onClick={() => { history.push(`/bus/${item.fields.id.replaceAll(/\s+/g, "-")}`) }}>
                                    {language === "en" ? ("More ") : ("Bővebben ")}<span className="d-sm-none d-md-inline">»</span>
                                </MDBBtn>
                            </div>)}
                    </MDBCardBody>
                </MDBCard>


            ) : (
                    <MDBCard className="invisible" />
                )}
        </>
    )
}

export default Cardbodys
