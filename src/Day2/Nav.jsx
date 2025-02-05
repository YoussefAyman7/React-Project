import React from "react";
import"./styles.css";
export default function Header(){
    return(
        <>
        <div className="header">
            <h1>
                My Website
            </h1>
            <div className="navbar">
                <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
        </div>
        </>
    );
}