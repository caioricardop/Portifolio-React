import imageHome2 from "../img/image-homw2.png";
import "../Sobre/sobre.css";

function App() {
  return (
    <div className="App">
      <main>
        <div class="main-homeSobre">
          <div class="sobrepage">
            <h1>
              <span class="rosa-H1-sobre">/</span>Sobre
            </h1>
            <p>Um pouco sobre mim e oque eu faço</p>
          </div>
        </div>
        <div class="main-homeSobre2">
          <div class="aboutmeHome">
            <div class="textaabt">
              <p>
                Sou um estudante de Engenharia de Software na Universidade
                Católica de Salvador (UCSAL), iniciando no ano de 2021. Sou um
                entusiasta das novas tecnologias do mercado e estou
                constantemente buscando aprender mais para aprimorar minhas
                habilidades.
              </p>
              <br />
              <p>
                Meu foco atual é no desenvolvimento Front-End, onde utilizo
                tecnologias como JS, HTML,CSS e outras para criar aplicações
                práticas e funcionais. Considero-me ágil e constante ao adquirir
                novas habilidades e sou altamente adaptável às mudanças, pronto
                para enfrentar qualquer desafio que possa surgir. Além disso,
                tenho um perfil ativo no GitHub, onde compartilho meus projetos
                de programação e demonstro minha experiência prática em
                desenvolvimento de software.
              </p>
              <br />
              <p>
                Acredito que posso contribuir significativamente para qualquer
                empresas com minhas habilidades técnicas e pessoais. Estou
                aberto a novas oportunidades e desafios, e estou ansioso para
                expandir minha carreira nesta área emocionante e em constante
                evolução.
              </p>
            </div>
            <div class="img-home-1">
              <img src={imageHome2} alt="Caio" />
            </div>
          </div>
        </div>

        <div class="main-home">
          <div class="header-containerT78">
            <div class="projectsHome">
              <h2>
                <span class="headerTyt1">#</span>skills
              </h2>
              <div class="line"></div>
            </div>
          </div>

          <div class="skillshome">
            <div class="card-skillshome">
              <div class="languagesSkills">
                <p>linguagens</p>
              </div>
              <div class="mainCard">
                <p>
                  Python JavaScript <br />
                  Java
                </p>
              </div>
            </div>

            <div class="card-skillshome">
              <div class="languagesSkills">
                <p>Banco de dados</p>
              </div>
              <div class="mainCard">
                <p>
                  PostgreSQL <br />
                  MySql
                </p>
              </div>
            </div>

            <div class="card-skillshome">
              <div class="languagesSkills">
                <p>Ferramentas</p>
              </div>
              <div class="mainCard">
                <p>
                  VSCode Azuere <br />
                  Azure DevOps Git
                  <br />
                  Figma Visual Studio
                </p>
              </div>
            </div>

            <div class="card-skillshome">
              <div class="languagesSkills">
                <p>Outros</p>
              </div>
              <div class="mainCard">
                <p>
                  HTML CSS SCSS
                  <br />
                  CsHTML <br />
                </p>
              </div>
            </div>

            <div class="card-skillshome">
              <div class="languagesSkills">
                <p>Frameworks</p>
              </div>
              <div class="mainCard">
                <p>
                  React Node <br />
                  Django
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
