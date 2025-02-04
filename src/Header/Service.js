import React from "react";
import"./styles.css";
export default function Service(){
    return(
        <>
        <div className="services">
        <h2 className="services-title">These Are My Services</h2>
            <div className="services-grid">
            <div className="service-card">
                <div className="service-image"><img src="https://www.givainc.com/images/personal_customer_service.png"/></div>
                <p className="service-description">Service 1 Description</p>
                <button className="cta-button">CTA</button>
            </div>
            <div className="service-card">
                <div className="service-image"><img src="https://www.abacus-int.com/wp-content/uploads/2023/01/Customer-Service-Training-Learning-Objectives.jpg"/></div>
                <p className="service-description">Service 2 Description</p>
                <button className="cta-button">CTA</button>
            </div>
            <div className="service-card">
                <div className="service-image"><img src="https://labateriarecargable.com/noticias-negocio-online/wp-content/uploads/2022/06/customer-service-glosario-de-terminos-la-bateria-recargable.jpg"/></div>
                <p className="service-description">Service 3 Description</p>
                <button className="cta-button">CTA</button>
            </div>
            </div>
        </div>
        </>
    );
}