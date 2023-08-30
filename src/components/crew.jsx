import Nav from "./nav"
import React from "react"
import CrewComponent from "./crewComponent"
import { crewData } from "../data/destinationdata"

export default function Crew(){
    const [id, setId] = React.useState("one")
    function handleClick(e){
        setId(e.target.id)
    }

    return (
        <div className="crew">
            <Nav />
            <div className="crew--main">
                <div className="crew--hero">
                    <p><span>01 </span>meet your crew</p>
                    <img src="../public/destination/image-moon.webp" alt="moon image" />
                </div>
                <hr className="hr"/>
                
                <div>
                    <ul className="crew--list" onClick={handleClick}>
                        <li className="crew--list--item" id="one"></li>
                        <li className="crew--list--item" id="two"></li>
                        <li className="crew--list--item" id="three"></li>
                        <li className="crew--list--item" id="four"></li>
                    </ul>
                </div>

                <CrewComponent 
                    data = {crewData}
                    id = {id}
                />
            </div>
        </div>
    )
}