import React from "react";
import melboune from '../images/melbourne.jpg'
import './TravelCard.css';
export default function TravelCard({img,googleMapLink, startDate, endDate, location, country, description, title,}) {
    return (
        <section className='travel-card--container'>
            <img className="travel-card--img" src={img}></img>
            <div className="travel-card--text-container">
                <span className="travel-card--country-name">{title}</span>
                <a href={googleMapLink} className="travel-card-ancore">View on google Map</a>
                <p className="travel-card-text-container--title">{location}</p>
                <p className="travel-card-text-container--date">{startDate} - {endDate}</p>
                <p className="travel-card-text-container--description">{description}</p>
            </div>
        </section>
    );
}