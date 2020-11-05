import React from 'react'
import { MDBIcon } from 'mdbreact';

import ScrolltoTop from "react-scroll-up"

const Scrolltopbutton = () => {
    return (
        <ScrolltoTop showUnder={window.innerHeight - 100} duration={1000}>
            <p id="scrolltopbutton"><MDBIcon icon="arrow-up" /></p>
        </ScrolltoTop>

    )
}

export default Scrolltopbutton
