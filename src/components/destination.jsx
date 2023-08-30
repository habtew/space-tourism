import React from "react"
import Nav from "./nav"
import {destinationData} from '../data/destinationdata'
import Comp from "./destinationcomponent"
export default function Destination(){

    // console.log(data.moon)
    // let data2 = "moon"
    // let id = "moon"
    const [id, setId] = React.useState("moon")
    function handleClick(e)
    {
        // id = e.target.id
        setId(e.target.id)
        // data2 = e.target.id
        // console.log(e.target.id)
    }
    return (
        <div className="destination">
            <Nav />
            <div className="destination--main">
                <div className="destination--hero">
                    <p><span>01 </span>Pick your destination</p>
                    <img src="../public/destination/image-moon.webp" alt="moon image" />
                </div>
                <div className="destination--section">
                    <ul 
                        className="destination--section--header"
                        onClick={handleClick}
                        
                        >
                        <li 
                            id = "moon"
                            >MOON</li>
                        <li
                            id = "mars"
                            >Mars</li>
                        <li
                            id = "europa"
                            >EUROPA</li>
                        <li
                            id = "titan"
                            >TITAN</li>
                    </ul>

                    {/* <h1 className="destinatin--section--title">{data.moon.title}</h1>
                    <p className="destination--section--detail">{data.moon.par}</p>
                    <hr className="hr"/>
                    <div className="destination--info">
                        <div>
                            <p className="destination-info--p">AVG. DISTANCE</p>
                            <h1 className="destinationn--info--h1">{data.moon.dist}</h1>
                        </div>

                        <div>
                            <p>AVG. DISTANCE</p>
                            <h1>{data.moon.time}</h1>
                        </div>
                    </div> */}
                    <Comp 
                        data= {destinationData}
                        id = {id}
                    />
                </div>
            </div>
        </div>
    )
}