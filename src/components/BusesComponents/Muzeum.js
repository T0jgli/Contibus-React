import React from 'react'
import { useSelector } from 'react-redux'
import { selectlanguage } from '../../features/AppSlice';
import { Fade } from "react-awesome-reveal";

import Muzeumjson from "../../src/muzeum.json"
import Carddeck from './Carddeck';

const Muzeum = () => {
    const language = useSelector(selectlanguage)
    const ids = Array.from({ length: Muzeumjson.Muzeum.length }, (_, i) => i + 1)

    let idd = 0;
    return (
        <div className="fadeIn animated">
            <Fade triggerOnce direction="down">
                <h3 className="text-center text-muted my-4" id="buses-text">{language === "en" ? ("Our museum") : ("Múzeumunk")}</h3>
            </Fade>
            {Muzeumjson.Muzeum.map((item, index, array) => {
                if (ids[index] % 2 !== 0) {
                    idd++
                    return (
                        <Carddeck idd={idd} itemid={ids[index]} item={item} nextitemid={ids[index + 1]} nextitem={array[index + 1]} what={"Muzeum"} />
                    )
                }
                else {
                    return null;
                }

            })}
        </div>
    )
}

export default Muzeum
