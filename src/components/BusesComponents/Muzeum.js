import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectlanguage } from '../../lib/AppSlice';
import { Fade } from "react-awesome-reveal";

import Carddeck from './Carddeck';
import { client } from '../../lib/contentful';

const Muzeum = () => {
    const language = useSelector(selectlanguage)
    const [ids, setids] = useState([])
    const [muzeumdata, setmuzeumdata] = useState(null)
    useEffect(() => {
        const data = []
        client.getEntries({
            content_type: "muzeumdata",
            order: "sys.createdAt"
        }).then((resp) => {
            resp.items.map((item, i) => {
                data.push(item)
                if (i === 0)
                    setids(ids => [...ids, 1])
                else {
                    let idd = i + 1
                    setids(ids => [...ids, idd])
                }
                return null
            })
        }).then(() => {
            setmuzeumdata(data)
        })
    }, [])

    let idd = 0;
    return (
        <div className="fadeIn animated">
            <Fade triggerOnce direction="down">
                <h3 className="text-center text-muted my-4" id="buses-text">{language === "en" ? ("Our museum") : ("Múzeumunk")}</h3>
            </Fade>
            {muzeumdata && muzeumdata.map((item, index, array) => {
                if (ids[index] % 2 !== 0) {
                    idd++
                    return (
                        <Carddeck key={index} idd={idd} itemid={ids[index]} item={item} nextitemid={ids[index + 1]} nextitem={array[index + 1]} what={"Muzeum"} />
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
