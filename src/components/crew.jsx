import Nav from "./nav"

export default function Crew(){
    return (
        <div className="crew">
            <Nav />
            <div className="crew--main">
                <div className="crew--hero">
                    <p><span>01 </span>Pick your destination</p>
                    <img src="../public/destination/image-moon.webp" alt="moon image" />
                </div>
                <hr className="hr"/>
                <div className="crew--section">
                    <ul className="crew--section--header">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <h4>COMMANDER</h4>
                    <h1 className="crew--section--title">DOUGBLAS HURlEY</h1>
                    <p className="crew--section--detail">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                </div>
            </div>
        </div>
    )
}