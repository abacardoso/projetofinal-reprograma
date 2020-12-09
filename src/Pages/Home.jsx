import "../Styles/Pages/home.css"
import { Link } from "react-router-dom"
import { IoArrowForwardCircleSharp } from "react-icons/all"
import ImagemHome from "../Assets/home1.svg"

const Home = () => {
    return (
        <div id="home__page">
            <div className="page__titulo">
              <main>
                <h1>FACILITA</h1>
                <p>De estudantes para estudantes</p> 
              </main>

              <div className="page__subtitulo">
                  <h2>
                     Compilado de dicas de respeito que vai facilitar sua vida acadêmica!
                  </h2>

                  <img src={ImagemHome} className="page__img" alt="Foto menina lendo livro"/>
              </div>

              
              <div className="page__button">
              <Link to="/dicas">
                <IoArrowForwardCircleSharp size={100} color="white" className="page__button--hover"/>              
              </Link>
              </div>

            </div>

        </div>
    )
}

export default Home