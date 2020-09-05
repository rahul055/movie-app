import React from "react";
import "./Nav.css";
import requests from "../Api/requests";

const Nav = ({ setSelectedOptions }) => {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOptions(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchTopRated)}>
        TopRated
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchRomanceMovies)}>
        Romantic
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchMystryMovies)}>
        Mystry
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchScifiMovies)}>
        Sci-Fi
      </h2>{" "}
      <h2 onClick={() => setSelectedOptions(requests.fetchWesternMovies)}>
        Western
      </h2>{" "}
      <h2 onClick={() => setSelectedOptions(requests.fetchAnimationMovies)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchTv)}>TV</h2>
    </div>
  );
};

export default Nav;
