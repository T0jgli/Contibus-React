import React from 'react'
import {
    MDBContainer, MDBBtn, MDBModal, MDBModalBody,
    MDBCard, MDBCardFooter, MDBModalHeader
} from 'mdbreact';
import { useSelector } from 'react-redux'
import { selectlanguage } from '../../lib/AppSlice';

const Busmodals = ({ data, toggler, settoggler, dataid }) => {
    const language = useSelector(selectlanguage)
    let newarr = [...toggler];
    return (
        <>
            <MDBModal fade isOpen={toggler[dataid - 1].pict} toggle={() => { newarr[dataid - 1].pict = !newarr[dataid - 1].pict; settoggler(newarr) }} size="lg" className="rounded">
                <MDBModalHeader className="rounded calendar" titleClass="heading lead font-weight-bolder"
                    toggle={() => { newarr[dataid - 1].pict = !newarr[dataid - 1].pict; settoggler(newarr) }}>
                    {language === "en" ? ("Pictures") : ("Képek")}
                </MDBModalHeader>
                <MDBModalBody className="px-3">
                    <MDBContainer>
                        <h4 className="text-center m-3">{data.fields.bus}</h4>
                        {data.fields.pictures.map((img, i) => {
                            return (
                                <div key={300 + i}>
                                    <a href={`https:${img.fields.file.url}?&fm=webp&q=80`} rel="noopener noreferrer" target="_blank">
                                        <img className="m-4 z-depth-1 img-fluid float-center mx-auto d-block rounded busimg" key={(100 + i)}
                                            alt={`${data.fields.bus} kép ${i + 1}`}
                                            src={`https:${img.fields.file.url}?&fm=webp&q=80`} />
                                    </a>

                                    {data.fields.pictures.length !== (i + 1) && (
                                        <hr key={(200 + i)} />
                                    )}
                                </div>
                            )
                        })}
                    </MDBContainer>
                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn color="dark" outline className="float-right roundedbtn" onClick={() => { newarr[dataid - 1].pict = !newarr[dataid - 1].pict; settoggler(newarr) }}>
                            {language === "en" ? ("Close") : ("Bezárás")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>

        </>
    )
}

export default Busmodals
