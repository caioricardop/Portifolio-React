import imageHome1 from "../img/Image-home-1.png";
import projetoModelo from "../img/projeto1.png";
import imageHome2 from "../img/image-homw2.png";
import cubo from "../img/cubo.svg";
import quadradoCP from "../img/quadradoCP.svg";
import pontosFundo from "../img/pontos-fundo.svg";

function App() {
  return (
    <div className="App">
      <main>
        <div class="main-home-1">
          <div class="text-home-1">
            <h1>
              Olá sou
              <span class="rosa-H1-main"> Engenheiro de Software </span>e
              <span class="rosa-H1-main"> Desenvolvedor Front-end</span>
            </h1>
            <p>
              Sou estudante de Engenharia de Software na UCSAL desde 2021, sou
              apaixonado por tecnologias, com foco no Front-End, usando
              JavaScript, HTML, CSS e afins para criar aplicações práticas. Sou
              ágil em aprender, adaptável, com presença ativa no GitHub. Estou
              pronto para contribuir em novos desafios nesta área dinâmica.
            </p>
            <a href="/front/HTML/contato.html">
              <button>Contato</button>
            </a>
          </div>
          <div class="img-home-1">
            <img src={imageHome1} />
          </div>
        </div>

        <div class="main-home">
          <div class="header-containerT78">
            <div class="projectsHome">
              <h2>
                <span class="headerTyt1">#</span>Projetos
              </h2>
              <div class="line"></div>
            </div>

            <div class="view-all-link">
              <a href="/front/Projetos/projetos.html">
                <span>Ver mais ~~➡️</span>
              </a>
            </div>
          </div>
          <div class="centerProjects">
            <div class="card-project-1">
              <div class="imgcard">
                <img src={projetoModelo} alt="projeto1" />
              </div>
              <div class="languagescard">
                <p>HTML CSS JS</p>
              </div>
              <div class="mainCard">
                <h3>Projeto Modelo</h3>
                <p>explicaçao do projeto</p>
                <a href="/front/Projetos/projetos.html">
                  <button>ver mais</button>
                </a>
              </div>
            </div>
            <div class="card-project-1">
              <div class="imgcard">
                <img src={projetoModelo} alt="projeto1" />
              </div>
              <div class="languagescard">
                <p>HTML CSS JS</p>
              </div>
              <div class="mainCard">
                <h3>Projeto Modelo</h3>
                <p>explicaçao do projeto</p>
                <a href="/front/Projetos/projetos.html">
                  <button>ver mais</button>
                </a>
              </div>
            </div>
            <div class="card-project-1">
              <div class="imgcard">
                <img src={projetoModelo} alt="projeto1" />
              </div>
              <div class="languagescard">
                <p>HTML CSS JS</p>
              </div>
              <div class="mainCard">
                <h3>Projeto Modelo</h3>
                <p>explicaçao do projeto</p>
                <a href="/front/Projetos/projetos.html">
                  <button>ver mais</button>
                </a>
              </div>
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
          </div>

          <div class="skillshome">
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

        <div class="main-home">
          <div class="header-containerT78">
            <div class="projectsHome">
              <h2>
                <span class="headerTyt1">#</span>Sobre
              </h2>
              <div class="line"></div>
            </div>
          </div>

          <div class="aboutmeHome">
            <div class="textaabt">
              <h1>
                Olá sou
                <span class="rosa-H1-main"> Engenheiro de Software </span>e
                <span class="rosa-H1-main"> Desenvolvedor Front-end</span>
              </h1>
              <p>
                Meu foco atual é no desenvolvimento Front-End, onde utilizo
                tecnologias como JS, HTML,CSS e outras para criar aplicações
                práticas e funcionais. Considero-me ágil e constante ao adquirir
                novas habilidades e sou altamente adaptável às mudanças, pronto
                para enfrentar qualquer desafio que possa surgir. Além disso,
                tenho um perfil ativo no GitHub, onde compartilho meus projetos
                de programação e demonstro minha experiência prática em
                desenvolvimento.
              </p>
              <a href="/front/HTML/contato.html">
                <button>Contato</button>
              </a>
            </div>
            <div class="img-home-1">
              <img src={imageHome2} alt="Caio" />
            </div>
          </div>
        </div>
      </main>
      <div class="txtFundo">
        <img class="fundo-icon1" src={cubo} />
        <img class="fundo-icon2" src={pontosFundo} />
        <img class="fundo-icon3" src={quadradoCP} />
        <img class="fundo-icon4" src={pontosFundo} />
      </div>
    </div>
  );
}

export default App;
