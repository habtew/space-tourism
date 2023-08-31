import Nav from "./nav"
import React from "react"

export default function Crew(props){
    const data = props.data
    const [id, setId] = React.useState("one")
    function handleClick(e){
        setId(e.target.id)
    }
    console.log(id)

    return (
        <div className="crew">
            <Nav />
            <div className="crew--main">
                <div className="crew--hero">
                    <p><span>01 </span>meet your crew</p>
                    <img src={data[id].img} alt="moon image" />
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

                <div className="crew--section">
                    <h4 className="crew--section--title">{data[id].title}</h4>
                    <h1 className="crew--section--name">{data[id].name}</h1>
                    <p className="crew--section--detail">{data[id].descr}</p>
             </div>
            </div>
        </div>
    )
}