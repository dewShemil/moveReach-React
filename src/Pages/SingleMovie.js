import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { KEY } from "../KEY";
import { LoadingPage, Error } from "../Pages";
import { motion } from "framer-motion";
import { SimilarMovie } from "../Components";
import { useMovieContext } from "../Context/MovieContext";
import "../SingleMovie.css";

const SingleMovie = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { type } = useMovieContext();

  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${KEY}&language=en-US`;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log("error : " + error);
      setError(true);
    }
    setLoading(false);
  };

  const {
    original_title: title,
    overview,
    release_date: date,
    runtime,
    vote_average: vote,
    poster_path,
    backdrop_path,
    genres,
  } = data;

  const newDate = new Date(date);

  const posterImage = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const backgroundImage = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  useEffect(() => {
    fetchData();
  }, [url]);

  if (loading) {
    return LoadingPage;
  }

  if (error) {
    return Error;
  }

  return (
    <>
      <div
        className="movie-container bg"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(7, 1, 93, 0.8)),url(${backgroundImage})`,
        }}
      >
        <div className="box">
          {poster_path != null && (
            <motion.div
              whileHover={{ scale: 0.9, transition: { duration: 0.2 } }}
              style={{ backgroundImage: `url(${posterImage})` }}
              className="poster-img bg"
            ></motion.div>
          )}
          <h1 style={{}}>
            {title}
            <span> ({newDate.getFullYear()})</span>
          </h1>
          <ul>
            {genres &&
              genres.map((genre, index) => {
                const { name } = genre;
                return <li key={index}>{name}</li>;
              })}
            <li style={{ color: "#FFD124" }}>
              {runtime == 0 || undefined || "undefined" ? "" : runtime + "M"}
            </li>
            <li className={vote > 5 ? "vote vote-high" : "vote vote-low"}>
              <strong>{vote == 0 ? "No votes" : vote}</strong>
            </li>
          </ul>
          <h3 style={{ lineHeight: " 1.5" }}>{overview}</h3>
        </div>
      </div>
      <SimilarMovie id={id} />
    </>
  );
};

export default SingleMovie;
