import React from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Fslightboxes = ({ imgtoggler, setimgtoggler, data }) => {

    const imgs = Array.from({ length: data.Buses.length }, (_, i) => {
        return (
            `/img/${data.Buses[i].id}_img/1.jpg`
        )
    })

    return (
        <>
            {imgtoggler.toggler && (
                <Lightbox
                    mainSrc={imgs[imgtoggler.slide]}
                    nextSrc={imgs[(imgtoggler.slide + 1) % imgs.length]}
                    prevSrc={imgs[(imgtoggler.slide + imgs.length - 1) % imgs.length]}
                    onCloseRequest={() => {
                        setimgtoggler({
                            toggler: false,
                            slide: 0
                        })
                    }}
                    onMovePrevRequest={() =>
                        setimgtoggler({
                            toggler: imgtoggler.toggler,
                            slide: (imgtoggler.slide + imgs.length - 1) % imgs.length
                        })
                    }
                    onMoveNextRequest={() =>
                        setimgtoggler({
                            toggler: imgtoggler.toggler,
                            slide: (imgtoggler.slide + 1) % imgs.length
                        })
                    }
                    imageCaption={(imgtoggler.slide + 1) + "/" + data?.Buses.length}
                    imageTitle={data?.Buses[imgtoggler.slide].bus}
                />
            )}
        </>
    )
}

export default Fslightboxes
