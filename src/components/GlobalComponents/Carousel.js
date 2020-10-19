import React from 'react'
import { useLocation } from "react-router-dom"

import { MDBCarousel, MDBMask, MDBCarouselInner, MDBCarouselItem, MDBView, MDBIcon } from "mdbreact";
import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'


const Carousel = () => {
    let location = useLocation();
    const language = useSelector(selectlanguage)

    const carids = ["carr11", "carr22", "carr33"];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    shuffleArray(carids);
    return (
        <>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className={location.pathname !== "/" ? "carousel carouselup z-depth-1" : "carousel z-depth-1"}
            >
                <MDBCarouselInner className="carousel-inner">
                    <MDBCarouselItem className="carousel-item" itemId="1">
                        <MDBView id={carids[0]} className={location.pathname !== "/" ? "h-100" : ""}>
                            <MDBMask overlay="black-light" className="flex-center">
                                <div className="text-center white-text mx-5 fadeInUp animated">
                                    <h1 className="mb-4">
                                        <strong className="font-weight-bold">{language === "en" ? ("Contibus – Specialist Coach Travel") : ("Contibus – Az utazás szakértői")}</strong>
                                    </h1>
                                    <p className="mb-4 d-block">
                                        <strong>
                                            <MDBIcon icon="check" className="px-2" />{language === "en" ? ("We offer culture and experience") : ("Kultúrát és élményt adunk")}
                                            <MDBIcon icon="check" className="px-2" />
                                        </strong>
                                    </p>
                                    {location.pathname === "/" ? (<h5 className="font-weight-bold animated fadeIn mb-4">
                                        <MDBIcon icon="exclamation" size={"2x"} className="d-block d-xl-inline pb-2 pt-xl-0 pb-xl-0 px-2" style={{ color: "#d50000" }} />
                                        {language === "en" ? ("In this given situation we would like to ask our customers to wear a mask during the administration") : 
                                        ("Egymás iránti bizalom és a helyzetre való tekintettel kérnénk mindenkit, hogy a személyesügyintézés ideje alatt maszkot viseljenek")} 
                                        <MDBIcon icon="exclamation" size={"2x"}
                                            className="d-block d-xl-inline pb-2 pt-xl-0 pb-xl-0 px-2" style={{ color: "#d50000" }} />
                                    </h5>) : (null)
                                    }
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Contibus-Neoline-432462590213055"
                                        className="btn btn-outline-white btn-lg rounded font-weight-bold kapcsolatbtn"><span
                                            className="pr-2">{language === "en" ? ("Get in contact with us!") : ("Lépj kapcsolatba velünk!")}</span>
                                        <MDBIcon fab icon="facebook-square" />
                                    </a>
                                </div>
                            </MDBMask>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem className="carousel-item" itemId="2">
                        <MDBView id={carids[1]} className={location.pathname !== "/" ? "h-100" : ""}>
                            <MDBMask overlay="black-light" className="flex-center">
                                <div className="text-center white-text mx-5 fadeInUp animated">
                                    <h1 className="mb-4">
                                        <strong className="font-weight-bold">{language === "en" ? ("Contibus – Specialist Coach Travel") : ("Contibus – Az utazás szakértői")}</strong>
                                    </h1>
                                    <p className="mb-4 d-block">
                                        <strong><MDBIcon icon="check" className="px-2" /> {language === "en" ? ("Safety") : ("Biztonság")}
                                            <MDBIcon icon="check" className="px-2" />{language === "en" ? ("Comfort") : ("Kényelem")}
                                            <MDBIcon icon="check" className="px-2" />{language === "en" ? ("Standards") : ("Színvonal")}
                                            <MDBIcon icon="check" className="px-2" /></strong>
                                    </p>
                                    {location.pathname === "/" ? (<h5 className="font-weight-bold animated fadeIn mb-4">
                                        <MDBIcon icon="exclamation" size={"2x"} className="d-block d-xl-inline pb-2 pt-xl-0 pb-xl-0 px-2" style={{ color: "#d50000" }} />
                                        {language === "en" ? ("In this given situation we would like to ask our customers to wear a mask during the administration") :
                                            ("Egymás iránti bizalom és a helyzetre való tekintettel kérnénk mindenkit, hogy a személyesügyintézés ideje alatt maszkot viseljenek")}
                                        <MDBIcon icon="exclamation" size={"2x"}
                                            className="d-block d-xl-inline pb-2 pt-xl-0 pb-xl-0 px-2" style={{ color: "#d50000" }} />

                                    </h5>) : (null)
                                    }
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Contibus-Neoline-432462590213055"
                                        className="btn btn-outline-white btn-lg rounded font-weight-bold kapcsolatbtn"><span
                                            className="pr-2">{language === "en" ? ("Get in contact with us!") : ("Lépj kapcsolatba velünk!")}</span>
                                        <MDBIcon fab icon="facebook-square" />
                                    </a>
                                </div>
                            </MDBMask>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem className="carousel-item" itemId="3">
                        <MDBView id={carids[2]} className={location.pathname !== "/" ? "h-100" : ""}>
                            <MDBMask overlay="black-light" className="flex-center">

                                <div className="text-center white-text mx-5 fadeInUp animated">
                                    <h1 className="mb-4">
                                        <strong className="font-weight-bold">{language === "en" ? ("Contibus – Specialist Coach Travel") : ("Contibus – Az utazás szakértői")}</strong>
                                    </h1>
                                    <p className="mb-4 d-block">
                                        <strong>
                                            <MDBIcon icon="check" className="px-2" />{language === "en" ? ("We offer culture and experience") : ("Kultúrát és élményt adunk")}
                                            <MDBIcon icon="check" className="px-2" />
                                        </strong>
                                    </p>
                                    {location.pathname === "/" ? (<h5 className="font-weight-bold animated fadeIn mb-4">
                                        <MDBIcon icon="exclamation" size={"2x"} className="d-block d-xl-inline pb-2 pt-xl-0 pb-xl-0 px-2" style={{ color: "#d50000" }} />
                                        {language === "en" ? ("In this given situation we would like to ask our customers to wear a mask during the administration") :
                                            ("Egymás iránti bizalom és a helyzetre való tekintettel kérnénk mindenkit, hogy a személyesügyintézés ideje alatt maszkot viseljenek")}
                                        <MDBIcon icon="exclamation" size={"2x"}
                                            className="d-block d-xl-inline pb-2 pt-xl-0 pb-xl-0 px-2" style={{ color: "#d50000" }} />
                                    </h5>) : (null)
                                    }
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Contibus-Neoline-432462590213055"
                                        className="btn btn-outline-white btn-lg rounded font-weight-bold kapcsolatbtn"><span
                                            className="pr-2">{language === "en" ? ("Get in contact with us!") : ("Lépj kapcsolatba velünk!")}</span>
                                        <MDBIcon fab icon="facebook-square" />
                                    </a>
                                </div>
                            </MDBMask>
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </>
    )
}

export default Carousel
