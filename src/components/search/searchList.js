import React from 'react';
import ReactDOM from 'react-dom';
import SearchItem from "./searchItem";

import "./search.scss";

class SearchList extends React.Component {
    render(){
        if(this.props.items){
            return <div className="search__content">
                {this.props.items.map(item => <SearchItem key={item.id} title={item.title} rating={item.vote_average} date={item.release_date} overview={item.overview} poster={item.poster_path} /> )}
            </div>
        } 
    }
}

ReactDOM.render(<SearchList />, document.getElementById('root'));

export default SearchList;
