import React from 'react'
import Cardbodys from './Cardbodys'

const Carddeck = ({ idd, item, nextitem, nextnextitem, what, settablazat }) => {
    return (
        <div className="card-deck mt-4 pt-2" id={idd + "deck"}>
            <Cardbodys settablazat={settablazat} item={item} what={what}/>
            <Cardbodys settablazat={settablazat} item={nextitem} what={what}/>
            {what === "Table"? (<Cardbodys settablazat={settablazat} item={nextnextitem} what={what}/>) : null}
        </div>    
    )
}

export default Carddeck
