import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody } from "mdbreact"

const Cardbodys = ({ item, what, settablazat }) => {

    const handleclick = (e) => {
        e.currentTarget.childNodes[1].classList.toggle("close")
        e.currentTarget.childNodes[1].classList.toggle("rounded")
    }

    return (
        <MDBCard className="rounded z-depth-1-half kartya muzeumbusz" onClick={handleclick}>
            <img src={what === "Muzeum" ? (`/img/muzeum/${item.id}.jpg`) : what === "Table" ? (`/img/${item.id}_img/1.jpg`) : (null)}
                alt="Kép lesz majd" className="img-fluid rounded" />
            <MDBCardBody className="close text-center muzeumcardbody d-md-block">
                <h4 className='card-title font-weight-bold pb-2'>
                    {item.bus}
                </h4>
                <p className='card-text mt-3'>
                    {item.title}
                </p>
                {what === "Muzeum" ? (<p className='card-text d-lg-inline d-md-none'>{item.desc}</p>) :
                    (<div className="card-text font-weight-bolder"><p className="m-1 p-0">Km díj: {item.kmdij} Ft / km</p><p className="m-1 p-0">Óra díj: {item.oradij} Ft / óra</p>
                        <MDBBtn color="dark" className="rounded mt-3 muzeumbtn" outline onClick={() => settablazat(true)}>Tovább »</MDBBtn></div>)}
            </MDBCardBody>
        </MDBCard>
    )
}

export default Cardbodys
