import React from "react";
import"./styles.css";
import lap from "./assets/Stuff-Best-Laptop-Lead.webp";
export default function Hero2(){
    return(
        <>
      <div className="bg-secondary text-center p-5 rounded m-5 p-5">
        <div className="cont">
        <h2 className="text-white fw-5 m-3">Get the best product at your home</h2>
        <input type="text" className="w-50 mx-auto mt-3" placeholder="Search your favorite product" />
        </div>
        <img src={lap} alt="" className="lap"/>
      </div>
        </>
    );
}