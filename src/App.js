import { useState, useEffect } from "react";
import MovieCard from "./movieCard.jsx";
import './App.css';
import SearchIcon from './search.svg';

const API_URL = "https://www.omdbapi.com/?apikey=11e0eaaf";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies('batman');
    }, []);

    return (
        <div className="app">
            <h1>FilmBase</h1>

            <div className="search">
                <input
                    placeholder="Search any movie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {if (e.key === 'Enter') {searchMovies(searchTerm)}}}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard key={movie.imdbID || movie.Title} movie={movie} />
                            ))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found...</h2>
                    </div>
                )
            }

            <div className="footer">
                <p>Created by Rounak</p>
            </div>
        </div>
    )
}

export default App;