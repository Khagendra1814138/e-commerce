import React from "react";
import "../styles/Nav.css";
import { menuData } from "./navMenu";
import { Link } from "react-router-dom";


export const Dropdown = () => {
    return (
        <div className="dropDownContainer">
            <div className="icon">
                <div className="closeIcon"></div>
            </div>

            <div className="dropDownWrapper">
                <div className="dropDownMenu">
                    {menuData.map((item, index) => (
                        <Link className="dropDownLinks" to={item.link} key={index}>{item.title}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
};
