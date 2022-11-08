import React, { useState, useEffect } from "react";

import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";

// import SearchList from "../../components/search/searchList";
import SearchContent from "../../components/search/searchContent";
import requests from "../../requests";
import CardList from "../../components/card-list/card-list";
import "../../components/row/row.scss";
import "../../components/search/search.scss";



function SearchPage() {
  return (
    <div className="">
      <Nav />
      <div className="search__page">
        <SearchContent />
        <p className="row__title search__title">Zobacz więcej</p>
      </div>
      <CardList className="ass" fetchUrl={requests.fetchTrending}/>
      <Footer />
    </div>
  );
}

export default SearchPage;
