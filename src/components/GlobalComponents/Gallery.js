import React from 'react'
import {
    MDBContainer, MDBMask, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCard, MDBCardImage
} from "mdbreact";

import gallery from "../../src/gallery.json"
import ScrollAnimation from 'react-animate-on-scroll';
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'


const Gallery = () => {
    const language = useSelector(selectlanguage)

    const galleryfill = (id) => {
        let galleryimages = []
        for (let index = id; index < id + 4; index++) {
            galleryimages.push(
                <MDBCol key={index} md="3" className="mb-1">
                    <MDBCard >
                        <MDBCardImage waves className="img-fluid rounded z-depth-2" id="gal1" alt="Kép lesz majd 1"
                            src={gallery[index]} />
                        <MDBMask className="rounded" overlay="black-light" />
                    </MDBCard>
                </MDBCol>
            );
        }
        return galleryimages
    }

    return (
        <MDBContainer className="z-depth-1 rounded" id="gallerycontainer">
            <MDBRow className="pt-5 pb-4">
                <MDBCol>
                    <ScrollAnimation animateIn="fadeInDown" animateOnce offset={window.innerHeight}>
                        <h3 className="font-weight-bold dark-grey-text pb-2 mb-0 text-center" id="gallerytext">
                            {language === "eng" ? ("Gallery") : ("Galéria")}
                        </h3>

                    </ScrollAnimation>

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
