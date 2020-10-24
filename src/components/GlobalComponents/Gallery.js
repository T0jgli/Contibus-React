import React from 'react'
import {
    MDBContainer, MDBMask, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCard, MDBCardImage
} from "mdbreact";
import Fade from 'react-reveal/Fade';

import gallery from "../../src/gallery.json"
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'


const Gallery = () => {
    const language = useSelector(selectlanguage)

    const galleryfill = (id) => {
        let galleryimages = []
        for (let index = id; index < id + 4; index++) {
            galleryimages.push(
                <MDBCol key={index} md="3" className="my-2 rounded kartya">
                    <MDBCard className="rounded">
                        <MDBCardImage waves className="img-fluid rounded" alt={`Kép lesz majd ${index}`}
                            src={gallery[index]} />
                        <MDBMask className="rounded" overlay="black-light" />
                    </MDBCard>
                </MDBCol>
            );
        }
        return galleryimages
    }

    return (
        <MDBContainer className="z-depth-1 rounded" id="gallerycontainer" style={{ backgroundColor: "#fafafa" }}>
            <MDBRow className="pt-5 pb-4">
                <MDBCol>
                    <Fade top>
                        <h3 className="font-weight-bold dark-grey-text pb-2 mb-0 text-center" id="gallerytext">
                            {language === "en" ? ("Gallery") : ("Galéria")}
                        </h3>
                    </Fade>
                    <MDBCarousel activeItem={1}
                        length={3}
                        showControls={true}
                        showIndicators={false}
                        slide
                        className="carousel slide carousel-multi-item carousel-multi-item-2"
                        data-ride="carousel"
                        multiItem
                    >
                        <MDBCarouselInner className="carousel-inner">
                            <MDBCarouselItem className="carousel-item" itemId="1">
                                {galleryfill(0)}
                            </MDBCarouselItem>
                            <MDBCarouselItem className="carousel-item" itemId="2">
                                {galleryfill(4)}
                            </MDBCarouselItem>
                            <MDBCarouselItem className="carousel-item" itemId="3">
                                {galleryfill(8)}
                            </MDBCarouselItem>

                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Gallery
