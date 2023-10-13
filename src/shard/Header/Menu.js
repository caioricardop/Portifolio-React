import React, { useState, useEffect } from 'react';

function Menu() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSelectOptionActive, setIsSelectOptionActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    setIsSelectOptionActive(!isSelectOptionActive);
  };

  const closeMenuOnClickOutside = (event) => {
    if (
      isMenuActive &&
      !event.target.closest('.menu') &&
      !event.target.closest('.hamburger-menu')
    ) {
      setIsMenuActive(false);
      setIsSelectOptionActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenuOnClickOutside);

    return () => {
      document.removeEventListener('click', closeMenuOnClickOutside);
    };
  }, [isMenuActive]); 

  return (
    <div>
      <div class="menu">
        <div class="corda"></div>
        <div class="icon-container">
          <a href="https://www.linkedin.com/in/caioricardop/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div class="icon-container">
          <a href="https://github.com/caioricardop">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div class="icon-container">
          <a href="https://www.instagram.com/Caioricardop">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>
      <div class="navbar">
        <div>
          <a class="name" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
                fill="white"
              />
            </svg>
            <p>Caio</p>
          </a>
        </div>
        <div className={`hamburger-menu ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    <div className={`select-option ${isSelectOptionActive ? 'active' : ''}`}>
          <a href="/">
            <span class="rosaMenuHash">#</span>Home
          </a>
        {/* 
          <a href="/projetos">
            <span class="rosaMenuHash">#</span>Projetos
          </a>*/}
          <a href="/sobre">
            <span class="rosaMenuHash">#</span>Sobre
          </a>
          <a href="/contato">
            <span class="rosaMenuHash">#</span>Contato
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
