import React, { useState } from 'react'
import {
    MDBMask, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCard, MDBCardImage
} from "mdbreact";
import { Fade } from "react-awesome-reveal";

import gallery from "../../src/gallery.json"
import { selectlanguage } from '../../lib/AppSlice'
import { useSelector } from 'react-redux'
import Gallerylightbox from './Gallerylightbox';

const Gallery = () => {
    const language = useSelector(selectlanguage)
    const [galleryopen, setgalleryopen] = useState({
        toggler: false,
        slide: 0
    })

    const galleryfill = (id) => {
        let galleryimages = []
        for (let index = id; index < id + 4; index++) {
            galleryimages.push(
                <MDBCol key={index} md="3" className="my-2 p-0 kartya">
                    <MDBCard style={{ boxShadow: "none" }} className="" onClick={() => setgalleryopen({ toggler: true, slide: index })}>
                        <MDBCardImage waves
                            className={`img-fluid ${(index + 1) % 4 === 1 ? "roundedimage1" : (index + 1) % 4 === 0 && ("roundedimage2")} roundedimagemobile mx-auto`}
                            alt={`Galéria ${index}`}
                            src={gallery[index]} />
                        <MDBMask className="" overlay="black-light" />
                    </MDBCard>
                </MDBCol>
            );
        }
        return galleryimages
    }

    return (
        <>
            <MDBRow id="gallerycontainer" className="pt-5 pb-4 mx-auto w-75">
                <MDBCol>
                    <Fade triggerOnce direction="down">
                        <h2 className="pb-2 mb-0 text-center" id="gallerytext">
                            {language === "en" ? ("Gallery") : ("Galéria")}
                        </h2>
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
            <Gallerylightbox gallery={gallery} galleryopen={galleryopen} setgalleryopen={setgalleryopen} />
        </>
    )
}

export default Gallery
