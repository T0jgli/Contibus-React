import React from 'react'

import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import IconButton from '@material-ui/core/IconButton';
import { selectlanguage } from '../../lib/AppSlice'

import { Tooltip } from '@material-ui/core';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';

const Datatable = ({ data, toggler, settoggler, imgtoggler, setimgtoggler, dataid }) => {
    const language = useSelector(selectlanguage)
    return (
        <tr className="tablesor">
            <td className="text-center pb-2 pt-2 pt-lg-4 pb-lg-3 keprow">
                <img alt={"kep" + dataid} onClick={() => { setimgtoggler({ toggler: !imgtoggler.toggler, slide: dataid - 1 }) }}
                    className="img img-rounded img-thumbnail z-depth-1 thumbnailkep"
                    style={{ cursor: "pointer" }} src={`https://${data.fields.pictures[0].fields.file.url}`} />
            </td>
            <td className="text-lg-left middletd pt-lg-4 pb-lg-4">
                <h6 className="font-weight-bold">
                    {data.fields.bus}
                </h6>
                <p className="mb-1 mt-2">
                    {data.fields.title}
                </p>
                <p className="" style={{ maxWidth: "100%" }}>
                    {data.fields.desc}
                </p>
                <hr className="mb-2 mt-2 mb-lg-3 mt-lg-3 d-none d-lg-block" />
                <div className="d-flex mx-3 justify-content-between">
                    <Tooltip title={language === "en" ? ("Pictures") : ("Képek")}>
                        <IconButton onClick={() => {
                            let newarr = [...toggler];
                            newarr[dataid - 1].pict = !newarr[dataid - 1].pict;
                            settoggler(newarr)
                        }} aria-label="seats">
                            <PhotoLibraryIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={language === "en" ? ("Seat positions") : ("Ülésrend")}>
                        <IconButton aria-label="seats" onClick={() => window.open(`https:${data.fields.seats.fields.file.url}`, "_blank")}>
                            <AirlineSeatReclineNormalIcon />
                        </IconButton>
                    </Tooltip>

                </div>
            </td>
            <td className="dijaktext">
                <p className='m-0 pt-lg-5'>
                    <NumberFormat suffix=" Ft / km" prefix={language === "en" ? ("Km charge: ") : ("Km díj: ")} value={data.fields.kmdij} displayType="text" />
                </p>
                <p className='mb-2'>
                    <NumberFormat suffix={language === "en" ? (" Ft / hour") : (" Ft / óra")} prefix={language === "en" ? ("Hourly rate: ") : ("Óradíj: ")}
                        thousandSeparator=" " value={data.fields.oradij} displayType="text" />
                </p>
            </td>
        </tr >
    )
}

export default Datatable
