import React from "react"

// import Nav from "./nav"
import Hero from "./hero"
export default function Home(){

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    const backgrounds = [
        {url:"/home/background-home-mobile.jpg", breakpoint: 500},
        {url: "/home/background-home-tablet.jpg", breakpoint: 700},
        {url:"/home/background-home-desktop.jpg", breakpoint: 1000},
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

    return (
        <div className="home" style={backgroundStyle}>
            {/* <Nav /> */}
            <Hero />
        </div>
    )
}