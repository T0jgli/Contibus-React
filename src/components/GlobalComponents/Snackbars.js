import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { selectlanguage } from '../../features/AppSlice'
import { useSelector } from 'react-redux'

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Snackbars = ({success, setsuccess, error, seterror, accepterror, setaccepterror}) => {
    const language = useSelector(selectlanguage)

    return (
        <>
            <Snackbar open={success} autoHideDuration={3000} onClose={(event, reason) => { if (reason === "clickaway") { return; }; setsuccess(false) }}>
                <Alert onClose={(event, reason) => { if (reason === "clickaway") { return; }; setsuccess(false) }}
                    severity="success">{language === "en" ? ("Successfully sent!") : ("Sikeresen elküldve!")}
                </Alert>
            </Snackbar>

            <Snackbar open={accepterror} autoHideDuration={5000} onClose={(event, reason) => { if (reason === "clickaway") { return; }; setaccepterror(false) }}>
                <Alert onClose={(event, reason) => { if (reason === "clickaway") { return; }; setaccepterror(false) }}
                    severity="error">{language === "en" ? ("You need to accept the privacy policy!") : ("El kell fogadnia az adatvédelmi nyilatkozatot!")}
                </Alert>
            </Snackbar>

            <Snackbar open={error.state} autoHideDuration={5000} onClose={(event, reason) => { if (reason === "clickaway") { return; }; seterror({...error, state: false}) }}>
                <Alert onClose={(event, reason) => { if (reason === "clickaway") { return; }; seterror({...error, state: false}) }}
                    severity="error">{language === "en" ? ("There was some error: " + error.msg) : ("Hiba történt: "+ error.msg)}
                </Alert>
            </Snackbar>

        </>
    )
}

export default Snackbars