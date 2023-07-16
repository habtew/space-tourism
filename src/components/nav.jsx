export default function Nav(){

  function handleClick(){
    console.log("clicked")
  }
    return (
        <nav>
          <img src="../public/shared/logo.svg" className="logo" alt="logo"/>
          <img 
            src="../public/shared/icon-hamburger.svg" 
            className="humburger" 
            alt="hamburger"
            onClick={handleClick}
            /> 
        </nav>
    )
}