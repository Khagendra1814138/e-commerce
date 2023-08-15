import React,  { useState } from "react";

import "./sideProductsFilter.css";

import { Menu } from 'react-feather';
import { Minimize2 } from 'react-feather';

export const SideProductsFilter = () => {
    const [show, setShow] = useState(true);

    return (
        <div className="sideFilterWrapper">
            <div className="sideFilterIcon">Filter 
            <button className="showHideButton" onClick={() => setShow(!show)}>{show === true ? <Minimize2 size={30} color="black"/> : <Menu size={30} color="black"/>}</button>
            </div>
            {show &&
            <div className="sideFilterFrame">
                <box className="filterOptions"> Gender </box>
                <box className="filterOptions"> Colors </box>
                <box className="filterOptions"> Size </box>
                <box className="filterOptions"> Brand </box>
                <box className="filterOptions"> Sport </box>
                <box className="filterOptions"> Sales & Deal </box>
            </div> 
            }
        </div>
    )
};



