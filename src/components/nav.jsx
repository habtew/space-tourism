import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  function handleClick() {
    document.body.classList.toggle('nav-open');
  }

  return (
    <header>
      <div className="logo">
        <img src="../public/shared/logo.svg" alt="Logo" />
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={handleClick}
      >
        <img 
          src="../public/shared/icon-hamburger.svg" 
          alt="Toggle Navigation" 
          className='hamburger'
          />
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/home" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/crew" className="nav__link">
              Crew
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/technology" className="nav__link">
              Technology
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/destination" className="nav__link">
              Destination
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}









// export default function Nav(){

//   function handleClick(e){
//     document.body.classList.toggle('nav-open')
//   }
//     return (
//         <header>
//         <div class="logo">
//             <img src="../public/shared/logo.svg" />
//         </div>
//         <button 
//           class="nav-toggle" 
//           aria-label="toggle navigation"
//           onClick={handleClick}
//           >
//         <img src="../public/shared/icon-hamburger.svg" />
//         </button>
//         <nav class="nav">
//             <ul class="nav__list">
//                 <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
//                 <li class="nav__item"><a href="#services" class="nav__link">Crew</a></li>
//                 <li class="nav__item"><a href="#about" class="nav__link">Technology</a></li>
//                 <li class="nav__item"><a href="#work" class="nav__link">Destination</a></li>
//             </ul>
//         </nav>
//     </header>
//     )
// }