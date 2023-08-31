import React from "react"
import Nav from "./nav"

export default function Destination(props){
    const data = props.data
    const [id, setId] = React.useState("moon")
    
    function handleClick(e)
    {
        setId(e.target.id)
    }


    return (
        <div className="destination">
            <Nav />
            <div className="destination--main">
                <div className="destination--hero">
                    <p><span>01 </span>Pick your destination</p>
                    <img src={data[id].img} alt="moon image" />
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

                    <h1 className="destinatin--section--title">{data[id].title}</h1>
                    <p className="destination--section--detail">{data[id].par}</p>
                    <hr className="hr"/>
                    <div className="destination--info">
                        <div>
                            <p className="destination-info--p">AVG. DISTANCE</p>
                            <h1 className="destinationn--info--h1">{data[id].dist}</h1>
                        </div>

                        <div>
                            <p>AVG. DISTANCE</p>
                            <h1>{data[id].time}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}