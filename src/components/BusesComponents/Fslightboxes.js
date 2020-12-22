import React, { useEffect, useState } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Fslightboxes = ({ imgtoggler, setimgtoggler, data }) => {
    const [imgs, setimgs] = useState([])

    useEffect(() => {
        setimgs(data && Array.from({ length: data.length }, (_, i) => {
            return (
                `http:${data[i].fields.pictures[0].fields.file.url}?&fm=webp&q=80`
            )
        }))
    }, [data])

    return (
        <>
            {imgtoggler.toggler && (
                <Lightbox
                    mainSrc={imgs[imgtoggler.slide]}
                    nextSrc={imgs[(imgtoggler.slide + 1) % data.length]}
                    prevSrc={imgs[(imgtoggler.slide + data.length - 1) % data.length]}
                    onCloseRequest={() => {
                        setimgtoggler({
                            toggler: false,
                            slide: 0
                        })
                    }}
                    onMovePrevRequest={() =>
                        setimgtoggler({
                            toggler: imgtoggler.toggler,
                            slide: (imgtoggler.slide + data.length - 1) % data.length
                        })
                    }
                    onMoveNextRequest={() =>
                        setimgtoggler({
                            toggler: imgtoggler.toggler,
                            slide: (imgtoggler.slide + 1) % data.length
                        })
                    }
                    imageCaption={(imgtoggler.slide + 1) + "/" + data.length}
                    imageTitle={data[imgtoggler.slide].fields.bus}
                />
            )}
        </>
    )
}

export default Fslightboxes
