import './style.css'
import '../../Card/style.css'

import React, { FunctionComponent } from 'react';

const CardLoader: FunctionComponent = () => {
    return (
        <div className="cardLoader h-48" style={{ backgroundColor: "rgba(184, 219, 219, 1)" }}>
            <div className="w-full rounded-lg h-48 relative">
                <div className="absolute -top-5 left-4 h-12 w-12 img-container radius-10">
                    <div className="w-full h-full loading relative"></div>
                </div>
                <div className="p-3">
                    <div className="mt-10 flex">
                        <div className="date-loader loading"></div>
                        <div className="rounded-full h-2 w-2 card__Rounded-color ml-2" />
                        <div className="ml-2 type-loader loading"></div>
                    </div>
                    <div className="mt-5 title-loader loading"></div>
                    <div className="mt-3 type-loader loading"></div>
                    <div className="mt-12 location-loader loading"></div>
                </div>
            </div>
        </div>
    );
}

export default CardLoader;