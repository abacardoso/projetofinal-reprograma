import "../Styles/Pages/dicas.css"
import dicas from "../Services/dados"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { IoArrowBackCircleSharp, FaSearch, DiApple, DiAndroid } from "react-icons/all"

const Dicas = () => {
  const [busca, setBusca] = useState("");
  const [filtroDicas, setFiltroDicas] = useState([]);
  const { goBack } = useHistory();
  // const [ leiaMais, setLeiaMais ] = useState(false);

  useEffect(()=>{
     setFiltroDicas(
         dicas.filter(dica =>{
             return dica.titulo.includes(busca)
          })
     );
  },[busca]);

    return (
        <>
          <nav className="navegacao">
             <button class="navegacao__button" onClick={goBack}>
             <IoArrowBackCircleSharp size={50}/> 
             </button>
                  
             <div className="dicas__busca">
             <h3 className="dicas__busca--icon">
               <FaSearch size={30}/> 
             </h3>

             <input className="dicas__busca--input"
             type="text"
             placeholder="Buscar uma dica"
             onChange={e=>{setBusca(e.target.value);}}
             />
            </div>

            <div>
              {/* div vazia para auxiliar no css */}
            </div>
          </nav>



          <div id="dicas__page">
            {filtroDicas.map (dica=>{
                 return (
                 <div key={dica.id} className="card">
                  <h4>{dica.titulo}</h4>
                  <p>{dica.descrição}</p>
                  {dica.descrição2 && <p>{dica.descrição2}</p>}
                  {dica.link && <a className="card__link" href={dica.link} target="blank" >Clique aqui para saber mais</a>}
                  {dica.app && <a className="card__app" href={dica.app} target="blank" ><DiApple size={20} color="white"/></a>}
                  {dica.app2 && <a className="card__app" href={dica.app2} target="blank" ><DiAndroid size={20} color="white"/></a>}
                  {dica.imagem && <img src={dica.imagem} alt="Imagem ilustrando a dica citada."/>}
                 </div>
                 )
            })}
          </div>

          <footer className="footer">
            <p>Desenvolvido com React por Anna Beatriz Cardoso | 2020</p>
          </footer>

        </>
    )
}

export default Dicas