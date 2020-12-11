import { AiFillGithub } from 'react-icons/all'
import { AiFillLinkedin } from 'react-icons/all'
import { FaReact } from 'react-icons/all'
import "../Styles/Components/footer.css"

const Footer = () => {
    return (
  <footer className="footer">
      <div className="footer--margin">
        <p>Desenvolvido em React</p>
        <p className="footer__icon--margin"><FaReact size={20} color='rgb(40 70 89)'/></p>
        <p>por Anna Beatriz Cardoso | 2020 | </p>

        <a class="sobre__links" href="https://github.com/abacardoso" target="blank">
        <AiFillGithub size={20} color='rgb(40 70 89)'/>
        </a>

        <a class="sobre__links" href="https://www.linkedin.com/in/anna-beatriz-cardoso-84ab5ab6/" target="blank">
        <AiFillLinkedin size={20} color='rgb(40 70 89)'/>
        </a>
      </div>
  </footer>

 )

}

export default Footer