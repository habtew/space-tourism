import Nav from "./nav"

export default function Destination(){
    return (
        <div className="destination">
            <Nav />
            <div className="destination--main">
                <div className="destination--hero">
                    <p><span>01 </span>Pick your destination</p>
                    <img src="../public/destination/image-moon.webp" alt="moon image" />
                </div>
                <div className="destination--section">
                    <ul>
                        <li>MOON</li>
                        <li>Mars</li>
                        <li>EUROPA</li>
                        <li>TITAN</li>
                    </ul>

                    <h1>MOON</h1>
                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <hr />
                    <div className="destination-info">
                        <div>
                            <p>AVG. DISTANCE</p>
                            <h1>384, 400 KM</h1>
                        </div>

                        <div>
                            <p>AVG. DISTANCE</p>
                            <h1>384, 400 KM</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}