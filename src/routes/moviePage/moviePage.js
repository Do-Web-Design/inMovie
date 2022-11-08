import React, { useState, useEffect } from "react";

import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import Row from "../../components/row/row";
import requests from "../../requests";


function MoviePage() {
  return (
    <div className="">
      <Nav />

      


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

export default MoviePage;
