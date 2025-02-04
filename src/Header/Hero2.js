import React from "react";
import"./styles.css";
export default function Hero2(){
    return(
        <>
        <div className="hero">
            <div className="image">
                <img src="https://realizzarecursos.com.br/wp-content/uploads/2022/11/business-man-owner-of-the-company-in-the-office.jpg"/>
            </div>
            <div className="hero_content">
                <h1>
                    Catchy Headline
                </h1>
                <p>Engaging subheadline goes here.</p>
                <input type="text" name="Name" placeholder="Enter Your Name"/>
                <input type="email" name="Email" placeholder="Enter Your Email"/>
                <button type="submit" value="Submit">Submit</button>
            </div>
        </div>
        </>
    );
}