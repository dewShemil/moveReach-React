import React from "react";
import { motion } from "framer-motion";
import noImg from "../Assets/no-img.jpg";
import "../SearchPage.css";
import { Link } from "react-router-dom";

const Item = ({ title, poster_path, id }) => {
  const url =
    poster_path == null
      ? noImg
      : `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <>
      <div className="container">
        <Link to={`/movies/${id}`}>
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            style={{
              backgroundImage: ` url(${url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="try"
          ></motion.div>
        </Link>
      </div>
    </>
  );
};

export default Item;
