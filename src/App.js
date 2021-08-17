import "./styles.css";
import React, { useState } from "react";

const moviesDB = {
  Adventure: [
    { name: "JUMANJI: WELCOME TO THE JUNGLE", ratings: "3.5/5" },
    { name: "LIFE OF PI", ratings: "4/5" }
  ],
  SciFi: [
    { name: "Inception", ratings: "4.5/5" },
    { name: "Avatar", ratings: "4/5" }
  ],
  Crime: [
    { name: "Donnie Brasco", ratings: "4/5" },
    { name: "The Gentlemen", ratings: "4.5/5" }
  ]
};

export default function App() {
  const [selectedMovieGenre, setMovieGenre] = useState("Crime");

  function onClickHandler(movieGenre) {
    setMovieGenre(movieGenre);
  }
  return (
    <div className="App">
      <h1>🎥 Movies to Watch</h1>
      <p>
        <small style={{ color: "gray" }}>
          Checkout my Favourite Books.Select a genre to get Started
        </small>
      </p>
      <div>
        {Object.keys(moviesDB).map((movieGenre) => (
          <button
            onClick={() => onClickHandler(movieGenre)}
            style={{
              cursor: "pointer",
              padding: "0.5rem",
              margin: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px",
              backgroundColor: "#EB5E28",
              color: "white"
            }}
          >
            {movieGenre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {moviesDB[selectedMovieGenre].map((movieList) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #CCC5B9",
                margin: "1rem",
                borderRadius: "0.5rem",
                width: "70%",
                backgroundColor: "#CCC5B9"
              }}
            >
              <div style={{ fontSize: "larger" }}>{movieList.name}</div>
              <div style={{ fontSize: "smaller" }}>{movieList.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
