import Nav from "./nav";
import React from 'react'
import TechnoComponent from "./technologyComponent";
import { technologyData } from "../data/destinationdata";

export default function Technology(){
    const [id, setId] = React.useState("one")

    function handleClick(e)
    {
        setId(e.target.id)
    }
    return (
        <div className="technology">
            <Nav />
            <div className="technology--main">
                <div className="technology--hero">
                    <p><span>03 </span>space launch 101</p>
                    <img src="../public/technology/image-launch-vehicle-landscape.jpg" alt="moon image" />
                </div>
                <div>
                    <ul className="techno--list" onClick={handleClick}>
                        <li className="techno--list--item" id="one">1</li>
                        <li className="techno--list--item" id="two">2</li>
                        <li className="techno--list--item" id="three">3</li>
                    </ul>
                </div>
                {/* <div className="technology--section">
                    <h4 className="technology--section--title">the terminology...</h4>
                    <h1 className="technology--section--name">launch vehicle</h1>
                    <p className="technology--section--detail">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div> */}


                <TechnoComponent 
                        data = {technologyData} 
                        id = {id}
                    />
            </div>
        </div>
    )
}