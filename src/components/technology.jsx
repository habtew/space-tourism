import Nav from "./nav";

export default function Technology(){
    return (
        <div className="technology">
            <Nav />
            <div className="technology--main">
                <div className="technology--hero">
                    <p><span>03 </span>space launch 101</p>
                    <img src="../public/technology/image-launch-vehicle-landscape.jpg" alt="moon image" />
                </div>
                <div className="technology--section">
                    <img src="../public/crew/li.svg" />
                    <h4 className="technology--section--title">the terminology...</h4>
                    <h1 className="technology--section--name">launch vehicle</h1>
                    <p className="technology--section--detail">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
            </div>
        </div>
    )
}