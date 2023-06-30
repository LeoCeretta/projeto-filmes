import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2, BiTv } from 'react-icons/bi'

import './Navbar.css'

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!search) return; //validação se não tiver nada no search (busca vazia)

    navigate(`/search?q=${search}`); //redireciona página de search
    setSearch(""); //limpa o campo do formulário
  }

  return (
    <nav id="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie /> Biblioteca de filmes
          </Link>
        </h2>
        <h2>
          <Link to="/serie">
            <BiTv /> Biblioteca de séries
          </Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Procure por um filme ou série"
              onChange={(e) => setSearch(e.target.value)}
              value={search} 
            />
            <button type="submit">
                <BiSearchAlt2 />
            </button>
        </form>
    </nav>
  )
}

export default Navbar