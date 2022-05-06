import axios from "axios";
import React, { useState, useEffect } from "react";
import { KEY } from "../KEY";
import { Item } from "../Components";
import { Container, Row, Col } from "react-bootstrap";
import { useMovieContext } from "../Context/MovieContext";

const SimilarMovie = ({ id }) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${KEY}&language=en-US&page=1`;

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const { type } = useMovieContext();

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return (
      <>
        <h1>Something Went Wrong</h1>
        <h3>Please Try Again Later</h3>
      </>
    );
  }

  return (
    <div>
      <h1 style={{ margin: "2rem 0", fontSize: "2.4rem", textAlign: "center" }}>
        Similar {type == "movie" ? "Movies" : "TV Shows"}
      </h1>
      <Container>
        <Row xs={1} md={3} lg={4}>
          {data.results &&
            data.results.map((item) => {
              return (
                <>
                  <Item key={item.id} {...item} />
                </>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default SimilarMovie;
