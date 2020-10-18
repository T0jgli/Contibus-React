import React from 'react'
import { useSelector } from 'react-redux'
import { selectlanguage } from '../../features/AppSlice';

import ScrollAnimation from 'react-animate-on-scroll';
import Muzeumjson from "../../src/muzeum.json"
import Carddeck from './Carddeck';

const Muzeum = () => {
    const language = useSelector(selectlanguage)

    let idd = 0;
    return (
        <div className="fadeIn animated">
                <ScrollAnimation animateIn="fadeInDown" animateOnce offset={window.innerHeight}>
                <h3 className="text-center text-muted my-4">{language === "eng" ? ("Our museum"): ("Múzeumunk")}</h3>
                </ScrollAnimation>
                {Muzeumjson.Muzeum.map((item, index, array) => {
                    if (item.id % 2 !== 0) {
                        idd++
                        return (
                            <ScrollAnimation key={idd} animateIn="fadeIn" animateOnce offset={window.innerHeight}>
                                <Carddeck idd={idd} item={item} nextitem={array[index+1]} what={"Muzeum"}/>
                            </ScrollAnimation>
                        )
                    }
                    else{
                        return null;
                    }

                })}
                </div>
    )
}

export default Muzeum
