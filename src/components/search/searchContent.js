import React from 'react';
import ReactDOM from 'react-dom';
import SearchList from "./searchList";
import "./search.scss";

const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=ab0c09b02d5334c9495393040836630f&query=';
const timer_value = 500;
let timer;

class SearchContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            text: ''
        };
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });

        clearTimeout(timer);
        timer = setTimeout(this.handleMovieSearch, timer_value);
    }

    handleMovieSearch = (e) => {
        if(e){e.preventDefault();}

        if (this.state.text) {
            fetch(API_URL + this.state.text)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                this.setState({
                    items: data.results
                });
            });
        }
    }
		componentDidMount = () => {
        this.handleMovieSearch();
    }
		
    render() {
        return <div className='search__container'>
            <h1 className="search__main-title">Search</h1>
            <form onSubmit={this.handleMovieSearch}>
                <div className="search__input-content">
                    <div className="search__button-content">
                        <button type="submit" className="search__button"></button>
                    </div>
                    <input type="text" onChange={this.handleTextChange} ref={input => input && input.focus()} value={this.state.text} class="search__input" />
                </div>
            </form>
            <SearchList items={this.state.items} />
        </div>
    }
}

ReactDOM.render(<SearchContent />, document.getElementById('root'));

export default SearchContent;
