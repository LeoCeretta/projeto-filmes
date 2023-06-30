/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'

import SerieCard from "../components/SerieCard";

import "./Movie.css";

const seriesURL = import.meta.env.VITE_API_TVSERIES;
const apiKey = import.meta.env.VITE_API_KEY;

const SeriesInfo = () => {
  const {id} = useParams()
  const [serie, setSerie] = useState(null)

  const getSerie = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setSerie(data);
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const serieUrl = `${seriesURL}${id}?${apiKey}`;
    getSerie(serieUrl);
  }, []);

  return (
    <div className="movie-page">
      {serie && (
        <>
          <SerieCard serie={serie} showLink={false} />
          <p className="tagline">{serie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento
            </h3>
            <p>{formatCurrency(serie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(serie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{serie.runtime}</p>
          </div>
          <div className="info">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{serie.overview}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default SeriesInfo