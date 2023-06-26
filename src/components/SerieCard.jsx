/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import { FaStar } from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG;

const SerieCard = ({ serie, showLink=true }) => {
  return (
    <div>
        <img src={imageUrl + serie.poster_path} alt={serie.title} />
        <h2>{serie.title}</h2>
        <p>
            <FaStar /> {serie.vote_average}
        </p>
        {showLink && <Link to={`/serie/${serie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default SerieCard