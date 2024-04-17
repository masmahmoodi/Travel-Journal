import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import data from "./data"

export default function App(){
    const TravelCard = data.map(info =>{
        return (
            <MainContent cardInfo={info} />
        )
    })
    return (
        <div>
            <Header />
            {TravelCard}
        </div>
    )
}