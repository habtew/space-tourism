import Nav from "./nav"
import React from "react"

export default function Crew(props){
    const data = props.data
    const [id, setId] = React.useState("one")
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    const backgrounds = [
        {url:"/crew/background-crew-mobile.jpg", breakpoint: 500},
        {url: "/crew/background-crew-tablet.jpg", breakpoint: 700},
        {url:"/crew/background-crew-desktop.jpg", breakpoint: 1000},
    ]

    React.useEffect(()=>{
        const hanldeResize = () => {
            setWindowWidth(window.innerWidth)
        };

        window.addEventListener('resize', hanldeResize);

        return ()=>{
            window.removeEventListener('resize', hanldeResize)
        }
    }, [])

    const getBackgroundForWidth = () => {
        const matchingBackground = backgrounds.find(background => windowWidth < background.breakpoint);
        return matchingBackground ? matchingBackground.url : backgrounds[backgrounds.length - 1].url;
      };

      const backgroundImageUrl = getBackgroundForWidth();
      const backgroundStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // width: '100vw',
        // height: '100vh',
     };
    
    function handleClick(e){
        setId(e.target.id)
    } 
    return  (
        <div className="crew" style={backgroundStyle}>
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