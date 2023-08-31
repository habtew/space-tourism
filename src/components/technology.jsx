import Nav from "./nav";
import React from 'react'

export default function Technology(props){
    const data = props.data
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
                    <img src={data[id].img} alt="moon image" />
                </div>
                <div>
                    <ul className="techno--list" onClick={handleClick}>
                        <li className="techno--list--item" id="one">1</li>
                        <li className="techno--list--item" id="two">2</li>
                        <li className="techno--list--item" id="three">3</li>
                    </ul>
                </div>
                <div className="technology--section">
                    <h4 className="technology--section--title">{data[id].title}</h4>
                    <h1 className="technology--section--name">{data[id].type}</h1>
                    <p className="technology--section--detail">{data[id].descr}</p>
                </div>

            </div>
        </div>
    )
}