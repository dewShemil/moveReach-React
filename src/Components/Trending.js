import React, { useState, useRef, useEffect } from "react";
import { useTrendingContext } from "../Context/TrendingContext";
import { LoadingPage } from "../Pages";
import { motion } from "framer-motion";
import "../Trending.css";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { Item } from "../Components";

const Trending = () => {
  const navigate = useNavigate();

  const {
    data: { results },
    loading,
  } = useTrendingContext();

  // console.log(data);
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="spacer layer1"></div>
      <h1 className="trending-h1">Trending This Week</h1>
      <Container>
        <Row xs={1} md={3} lg={4}>
          {results &&
            results.map((item, index) => {
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

export default Trending;
