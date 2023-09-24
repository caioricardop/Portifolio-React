import projetoModelo from "../img/projeto1.png";
import cubo from "../img/cubo.svg";
import pontosFundo from "../img/pontos-fundo.svg";
import "../Projetos/projeto.css";

function App() {
  return (
    <div className="App">
      <main>
        <div class="main-home">
          <div class="projectspage">
            <h1>
              <span class="rosa-H1-project">/</span>Projetos
            </h1>
            <p>Lista com meus projetos gerais</p>
          </div>
        </div>

        <div class="main-home">
          <div class="header-containerT78">
            <div class="projectsHome">
              <h2>
                <span class="headerTyt1">#</span>Projetos pricipais
              </h2>
              <div class="line"></div>
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
                <button>ver mais</button>
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
                <button>ver mais</button>
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
                <button>ver mais</button>
              </div>
            </div>
          </div>
        </div>

        <div class="main-home">
          <div class="header-containerT78">
            <div class="projectsHome">
              <h2>
                <span class="headerTyt1">#</span>Projetos simples
              </h2>
              <div class="line"></div>
            </div>
          </div>

          <div class="centerProjects">
            <div class="card-project-simple">
              <div class="languagescard">
                <p>HTML CSS JS</p>
              </div>
              <div class="mainCard">
                <h3>Projeto Modelo</h3>
                <p>explicaçao do projeto</p>
                <button>ver mais</button>
              </div>
            </div>
            <div class="card-project-simple">
              <div class="languagescard">
                <p>HTML CSS JS</p>
              </div>
              <div class="mainCard">
                <h3>Projeto Modelo</h3>
                <p>explicaçao do projeto</p>
                <button>ver mais</button>
              </div>
            </div>
            <div class="card-project-simple">
              <div class="languagescard">
                <p>HTML CSS JS</p>
              </div>
              <div class="mainCard">
                <h3>Projeto Modelo</h3>
                <p>explicaçao do projeto</p>
                <button>ver mais</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div class="txtFundo">
        <img class="fundo-icon1" src={cubo} />
        <img class="fundo-icon2" src={pontosFundo} />
      </div>
    </div>
  );
}

export default App;
