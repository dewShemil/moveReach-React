import "../index.css";
import React, { useState } from "react";
import { Trending } from "../Components";
import { useMovieContext } from "../Context/MovieContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const { query, typing, onChangeHandler, onSubmitHandler } = useMovieContext();

  const navigate = useNavigate();

  return (
    <>
      <section className="home">
        <h1>Welcome to MoveReach</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui
          non, necessitatibus minus nihil temporibus placeat! Atque velit, id
          expedita voluptatibus natus ex voluptatem nemo inventore reprehenderit
          repudiandae eos voluptas.
        </p>

        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitHandler();
              navigate(`/search/${typing}`);
            }}
          >
            <input
              className="search"
              type="text"
              id="search"
              value={typing}
              onChange={onChangeHandler}
            />
            <button className="submit" type="submit">
              Search
            </button>
          </form>
        </div>
      </section>
      <Trending />
    </>
  );
};

export default Home;
