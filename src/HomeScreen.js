import React from "react";
import Nav from "./Nav";
import requests from "./Requests";
import Banner from "./Banner";
import "./styles/HomeScreen.css";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movie" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
