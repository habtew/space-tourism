import Nav from "./nav"

export default function Crew(){
    return (
        <div className="crew">
            <Nav />
            <div className="crew--main">
                <div className="crew--hero">
                    <p><span>01 </span>meet your crew</p>
                    <img src="../public/destination/image-moon.webp" alt="moon image" />
                </div>
                <hr className="hr"/>
                <div className="crew--section">
                    <img src="../public/crew/li.svg" />
                    <h4 className="crew--section--title">COMMANDER</h4>
                    <h1 className="crew--section--name">DOUGBLAS HURlEY</h1>
                    <p className="crew--section--detail">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
            </div>
        </div>
    )
}