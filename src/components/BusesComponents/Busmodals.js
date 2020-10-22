import React from 'react'
import {
    MDBContainer, MDBBtn, MDBModal, MDBModalBody,
    MDBCard, MDBCardFooter, MDBModalHeader
} from 'mdbreact';
import { useSelector } from 'react-redux'
import { selectlanguage } from '../../features/AppSlice';

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
                <MDBModalBody className="p-0">
                    <MDBContainer>
                        <h4 className="text-center m-3">{data.bus}</h4>
                        {[...Array(data.imgs)].map((e, i) => {
                            return (
                                <div key={300 + i}>
                                    <img className="m-4 z-depth-1 img-fluid float-center mx-auto d-block rounded busimg" key={(100 + i)} alt="Kép lesz majd"
                                        src={"/img/" + data.id + "_img/" + (i + 1) + ".jpg"} />
                                    {data.imgs !== (i + 1) && (
                                        <hr key={(200 + i)} />
                                    )}
                                </div>
                            )
                        })}
                    </MDBContainer>
                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn color="dark" outline className="float-right rounded" onClick={() => { newarr[dataid - 1].pict = !newarr[dataid - 1].pict; settoggler(newarr) }}>
                            {language === "en" ? ("Close") : ("Bezárás")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>

        </>
    )
}

export default Busmodals
