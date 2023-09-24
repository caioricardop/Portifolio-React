import "../Contato/contato.css";

function App() {
  return (
    <div className="App">
      <main>
        <div class="main-homeSobre">
          <div class="sobrepage">
            <h1>
              <span class="rosa-H1-sobre">/</span>Contato
            </h1>
            <p>Um pouco sobre mim e oque eu faço</p>
          </div>
        </div>
        <div class="main-homeSobre2">
          <div class="aboutmeHome">
            <div class="textaabt">
              <p>
                Estou interessado em oportunidades freelance. No entanto, se
                você tiver outra solicitação ou dúvida, não hesite em entrar em
                contato comigo
              </p>
            </div>
            <div class="cttblock1">
              <p>Me mande uma mensagem aqui</p>
              <div class="ctt1">
                <i class="fas fa-envelope"></i> Caioricardolp@gmail.com
              </div>
              <div class="ctt1">
                <i class="fab fa-instagram"></i> @Caioricardop
              </div>
            </div>
          </div>
        </div>

        <div class="main-home">
          <div class="header-containerT78">
            <div class="projectsHome">
              <h2>
                <span class="headerTyt1">#</span>Links Uteis
              </h2>
            </div>
          </div>

          <div class="aboutmeHome">
            <div class="textaabt">
              <div class="ctt1">
                <i class="fas fa-envelope"></i>
                <a href="mailto:caioricardolp@gmail.com">
                  Caioricardolp@gmail.com
                </a>
              </div>
              <div class="ctt1">
                <i class="fab fa-instagram"></i>
                <a href="https://www.instagram.com/Caioricardop">
                  @Caioricardop
                </a>
              </div>
              <div class="ctt1">
                <i class="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/caioricardop/">
                  caioricardop
                </a>
              </div>
              <div class="ctt1">
                <i class="fab fa-github"></i>
                <a href="https://github.com/caioricardop">caioricardop</a>
              </div>
              <div class="ctt1">
                <i class="fab fa-youtube"></i>
                <a href="https://www.youtube.com/@caioricardop">
                  @caioricardop
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
