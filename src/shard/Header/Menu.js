function Menu() {
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
        <div class="select-option">
          <a href="/">
            <span class="rosaMenuHash">#</span>Home
          </a>
          <a href="/projetos">
            <span class="rosaMenuHash">#</span>Projetos
          </a>
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
