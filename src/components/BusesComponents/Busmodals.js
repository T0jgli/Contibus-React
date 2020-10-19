import React from 'react'
import {
    MDBContainer, MDBBtn, MDBModal, MDBModalBody, 
    MDBCard, MDBCardFooter, MDBModalHeader
} from 'mdbreact';
import { useSelector } from 'react-redux'
import { selectlanguage } from '../../features/AppSlice';

const Busmodals = ({ data, toggler, settoggler}) => {
    const language = useSelector(selectlanguage)

    let newarr = [...toggler];
    let imgs = []
    let keys={
        h4: 100,
        img: 200,
        hr: 300
    }
    imgs.push(<h4 className="text-center m-3" key={keys.h4}>{data.bus}</h4>)
    for (let index = 1; index <= data.imgs; index++) {
        imgs.push(<img className="m-4 z-depth-1 img-fluid float-center mx-auto d-block rounded busimg" alt="Kép lesz majd" key={keys.img} src={"/img/" + data.id + "_img/" + index + ".jpg"} />)
        if (index !== data.imgs) {
            imgs.push(<hr key={keys.hr} />)
        }
        keys.img++;
        keys.hr++;
    }
    keys.h4 = keys.h4 + 1;
    return (
        <>
            <MDBModal fade isOpen={toggler[data.id - 1].pict} toggle={() => { newarr[data.id - 1].pict = !newarr[data.id - 1].pict; settoggler(newarr) }} size="lg" className="rounded">
                <MDBModalHeader className="rounded calendar" titleClass="heading lead font-weight-bolder"
                    toggle={() => { newarr[data.id - 1].pict = !newarr[data.id - 1].pict; settoggler(newarr) }}>
                    {language === "en" ? ("Pictures") : ("Képek")}
                </MDBModalHeader>
                <MDBModalBody className="p-0">
                    <MDBContainer>
                        {imgs}
                    </MDBContainer>
                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn color="dark" outline className="float-right rounded" onClick={() => { newarr[data.id - 1].pict = !newarr[data.id - 1].pict; settoggler(newarr) }}>
                            {language === "en" ? ("Close") : ("Bezárás")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>

        </>
    )
}

export default Busmodals
