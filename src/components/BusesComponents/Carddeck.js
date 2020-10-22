import React from 'react'
import Cardbodys from './Cardbodys'

const Carddeck = ({ idd, item, nextitem, nextnextitem, what, settablazat, length, nextitemid, itemid }) => {
    return (
        <>
            {what === "Table" ? (
                <>
                    {itemid === length ? itemid % 3 === 1 ? (
                        <div className="card-deck mt-4 pt-2" id={idd + "deck"}>
                            <Cardbodys settablazat={settablazat} item={item} what={what} />
                            <Cardbodys />
                            <Cardbodys />
                        </div>
                    ) : itemid % 3 === 2(
                        <div className="card-deck mt-4 pt-2" id={idd + "deck"}>
                            <Cardbodys settablazat={settablazat} item={item} what={what} />
                            <Cardbodys settablazat={settablazat} item={nextitem} what={what} />
                            <Cardbodys />
                        </div>
                    ) : (
                            <div className="card-deck mt-4 pt-2" id={idd + "deck"}>
                                <Cardbodys settablazat={settablazat} item={item} what={what} />
                                <Cardbodys settablazat={settablazat} item={nextitem} what={what} />
                                <Cardbodys settablazat={settablazat} item={nextnextitem} what={what} />
                            </div>
                        )}
                </>

            ) : (
                    <div className="card-deck mt-4 pt-2" id={idd + "deck"}>
                        <Cardbodys settablazat={settablazat} itemid={itemid} item={item} what={what} />
                        <Cardbodys settablazat={settablazat} itemid={nextitemid} item={nextitem} what={what} />
                    </div>

                )}
        </>
    )
}

export default Carddeck
