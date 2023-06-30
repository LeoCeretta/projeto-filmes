//import { api } from '../instance'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import SerieCard from '../components/SerieCard'

const searchURL = import.meta.env.VITE_SEARCH;
const searchURLSerie = import.meta.env.VITE_SEARCH_TVSERIES;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {

    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  const getSearchedSeries = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setSeries(data.results);

  }

  useEffect(() => {    
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    const searchWithQueryURLserie = `${searchURLSerie}?${apiKey}&query=${query}`;
    
    getSearchedMovies(searchWithQueryURL);
    getSearchedSeries(searchWithQueryURLserie);

  }, [query]);


  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
          {(movies?.length === 0 && series?.length === 0) && <p>Carregando...</p>}
          {movies?.length > 0 && series?.length > 0 ? 
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />) : 
            series.map((serie) => <SerieCard key={serie.id} serie={serie} />) }
      </div>
    </div>
  )
}

export default Search