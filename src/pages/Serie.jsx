/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react"
import SerieCard from "../components/SerieCard";
import Navbar from "../components/Navbar";

import "./MoviesGrid.css"

const seriesURL = import.meta.env.VITE_API_TVSERIES;
const apiKey = import.meta.env.VITE_API_KEY;


const Serie = () => {
    const [topSeries, setTopSeries] = useState([]);

    const getTopRatedSeries = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        setTopSeries(data.results);
    };

    useEffect(() => {
        
        const topRatedUrl = `${seriesURL}top_rated?${apiKey}`;

        getTopRatedSeries(topRatedUrl);

    }, []);
    
    return (
        <>
        <div className="container">
            <h2 className="title">Melhores séries:</h2>
            <div className="movies-container">
                {topSeries.length === 0 && <p>Carregando...</p>}
                {topSeries.length > 0 && topSeries.map((serie) => <SerieCard key={serie.id} serie={serie} />)}
            </div>
        </div>
        </>
    )
}

export default Serie