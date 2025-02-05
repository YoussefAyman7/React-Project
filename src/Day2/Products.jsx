import React from "react";
import"./styles.css";
import mobile from "./assets/SamsungGalaxyS23Ultra.webp";
import watch from "./assets/1.jpg";
import laptop from "./assets/41EL+9XB-iL._SR290,290_.jpg";
export default function Products(){
    return(
        <div className="container my-5">
        <div className="row">
          {[
            { name: "Samsung Mobile", price: "$750", img: mobile },
            { name: "Men's Hand Watch", price: "$150", img: watch },
            { name: "Hp Laptop", price: "$130", img: laptop }
          ].map((product, index) => (
            <div key={index} className="col-md-4">
              <div className="card">
                <img src={product.img} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}