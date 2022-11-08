import React from 'react';
import ReactDOM from 'react-dom';

import "../search/search.scss";

class SearchItem extends React.Component {
    render(){
        const item = this.props;

        return <div key={item.id} className="card">
                    <img src={`http://image.tmdb.org/t/p/w342/${item.poster}`} alt={item.title} className="search__image"/>
                </div>
    }
}

ReactDOM.render(<SearchItem />, document.getElementById('root'));

export default SearchItem;
