import React from "react";
import { useParams } from "react-router-dom";
import { useMovieContext } from "../Context/MovieContext";
import { Row, Container } from "react-bootstrap";
import "../SearchPage.css";
import { Item } from "../Components";
import { LoadingPage } from "../Pages";

const SearchPage = () => {
  const { loading, data } = useMovieContext();
  const { query } = useParams();

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h2>Search Results for "{query}"</h2>
      <Container>
        <Row xs={1} md={3} lg={4}>
          {data &&
            data.map((item, index) => {
              return (
                <>
                  <Item key={item.id} {...item} />
                </>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default SearchPage;
