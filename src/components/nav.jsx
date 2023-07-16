export default function Nav(){

  function handleClick(e){
    document.body.classList.toggle('nav-open')
  }
    return (
        <header>
        <div class="logo">
            <img src="../public/shared/logo.svg" />
        </div>
        <button 
          class="nav-toggle" 
          aria-label="toggle navigation"
          onClick={handleClick}
          >
        <img src="../public/shared/icon-hamburger.svg" />
        </button>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
                <li class="nav__item"><a href="#services" class="nav__link">Crew</a></li>
                <li class="nav__item"><a href="#about" class="nav__link">Technology</a></li>
                <li class="nav__item"><a href="#work" class="nav__link">Destination</a></li>
            </ul>
        </nav>
    </header>
    )
}