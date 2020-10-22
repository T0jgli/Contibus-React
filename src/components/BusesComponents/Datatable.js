import React from 'react'

import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import IconButton from '@material-ui/core/IconButton';
import { selectlanguage } from "../../features/AppSlice"

import { Tooltip } from '@material-ui/core';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';

const Datatable = ({ data, toggler, settoggler, imgtoggler, setimgtoggler, dataid }) => {
    const language = useSelector(selectlanguage)

    let newarr = [...toggler];
    let seatimg;
    if (dataid < 4) {
        seatimg = `/seats/${data.id}_files/ules.png`
    }
    else {
        seatimg = `/seats/${data.id}_files/ules.jpg`
    }

    return (
        <tr className="tablesor">
            <td className="text-center pb-2 pt-2 pt-lg-4 pb-lg-3 keprow">
                <img alt={"kep" + dataid} onClick={() => { setimgtoggler({ toggler: !imgtoggler.toggler, slide: dataid - 1 }) }} className="img img-rounded img-thumbnail z-depth-1 thumbnailkep"
                    style={{ cursor: "pointer" }} src={`/img/${data.id}_img/1.jpg`} />
            </td>
            <td className="text-lg-left middletd pt-lg-4 pb-lg-4">
                <h6 className="font-weight-bold">
                    {data.bus}
                </h6>
                <p className="mb-1 mt-2">
                    {data.title}
                </p>
                <p className="text-justify">
                    {data.desc}
                </p>
                <hr className="mb-2 mt-2 mb-lg-3 mt-lg-3 d-none d-lg-block" />
                <div className="d-flex mx-3 justify-content-between">
                    <Tooltip title={language === "en" ? ("Pictures") : ("Képek")}>
                        <IconButton onClick={() => { newarr[dataid - 1].pict = !newarr[dataid - 1].pict; settoggler(newarr) }} aria-label="seats">
                            <PhotoLibraryIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={language === "en" ? ("Seat positions") : ("Ülésrend")}>
                        <IconButton aria-label="seats" onClick={() => window.open(seatimg, "_blank")}>
                            <AirlineSeatReclineNormalIcon />
                        </IconButton>

                    </Tooltip>

                </div>
            </td>
            <td className="dijaktext">
                <p className='m-0 pt-lg-5'>
                    <NumberFormat suffix=" Ft / km" prefix="Km díj: " value={data.kmdij} displayType="text" />

                </p>
                <p className='mb-2'>
                    <NumberFormat suffix=" Ft / óra" prefix="Óra díj: " thousandSeparator=" " value={data.oradij} displayType="text" />
                </p>
            </td>
        </tr >

    )
}

export default Datatable
