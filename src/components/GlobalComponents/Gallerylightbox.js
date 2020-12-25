import React from 'react'
import Lightbox from 'react-image-lightbox'

const Gallerylightbox = ({ gallery, galleryopen, setgalleryopen }) => {

    return (
        <>
            {galleryopen.toggler &&
                (
                    <Lightbox
                        mainSrc={gallery[galleryopen.slide]}
                        nextSrc={gallery[(galleryopen.slide + 1) % gallery.length]}
                        prevSrc={gallery[(galleryopen.slide + gallery.length - 1) % gallery.length]}
                        onCloseRequest={() => {
                            setgalleryopen({
                                toggler: false,
                                slide: 0
                            })
                        }}
                        onMovePrevRequest={() =>
                            setgalleryopen({
                                toggler: galleryopen.toggler,
                                slide: (galleryopen.slide + gallery.length - 1) % gallery.length
                            })
                        }
                        onMoveNextRequest={() =>
                            setgalleryopen({
                                toggler: galleryopen.toggler,
                                slide: (galleryopen.slide + 1) % gallery.length
                            })
                        }
                    />
                )
            }
        </>

    )
}

export default Gallerylightbox
