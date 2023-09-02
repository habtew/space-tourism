import Nav from "./nav";
import React from 'react'

export default function Technology(props){
    const data = props.data
    const [id, setId] = React.useState("one")
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    const backgrounds = [
        {url:"/technology/background-technology-mobile.jpg", breakpoint: 500},
        {url: "/technology/background-technology-tablet.jpg", breakpoint: 700},
        {url:"/technology/background-technology-desktop.jpg", breakpoint: 1000},
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

    function handleClick(e)
    {
        setId(e.target.id)
    }

    return (
        <div className="technology" style={backgroundStyle}>
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