import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import "./Results.css";
import axios from "../Api/axios";
import requests from "../Api/requests";
import FlipMove from "react-flip-move";

const Results = ({ selectedOptions }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(selectedOptions);

      setMovies(res.data.results);
    };
    getData();
  }, [selectedOptions]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(requests.fetchTrending);

      setMovies(res.data.results);
    };
    getData();
  }, []);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard movie={movie} key={movie.id} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
