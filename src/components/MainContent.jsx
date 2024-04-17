import React from "react"
import data from "../data"

// console.log(data[0].imageUrl)
export default function MainContent(props){
    console.log(props)
    return (
        <main>
            <section>
                <div className="place-img">
                    <img src={props.cardInfo.imageUrl} className="country-img" />
                </div>
                <div className="place-info">
                    <div className="country">
                        <div>
                            <i className="fa-solid fa-location-dot"></i>
                            <small>{props.cardInfo.title}</small>
                        </div>
                        <a href="#">View on Google Maps</a>
                    </div>
                    <h1>{props.cardInfo.location}</h1>
                    <strong>{props.cardInfo.startDate}-{props.cardInfo.endDate}</strong>
                    <p>{props.cardInfo.description}</p>
                </div>
            </section>
            
       </main>
    )

}