import React from "react";
import "../../App.css";
import requests from "../../requests";

import Row from "../../components/row/row";
import Nav from "../../components/nav/nav";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";

function Home() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        title="Trending Now"
        largeRow={true}
        largeRowContainer={true}
        fetchUrl={requests.fetchTrending}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Comedy Movies"
        largeRow={true}
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} />

      <Footer />
    </div>
  );
}

export default Home;
