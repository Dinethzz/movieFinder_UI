import MovieCard from "../components/movie_card";
import { useState } from "react";

function HomePage() {

  const [searchTerm, setSearchTerm] = useState("");

  const movies = [
    {id: 1, title: "Inception", release_date: 2010},
    {id: 2, title: "Interstellar", release_date: 2014},
    {id: 3, title: "Dunkirk", release_date: 2017},
    {id: 4, title: "The Dark Knight", release_date: 2008}
  ]
  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
    setSearchTerm("-----");
  }
  function handleSubmit(event) {
    event.preventDefault();
    const searchTerm = event.target.elements[0].value;
    console.log("Searching for:", searchTerm);
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search movies..." className="search-input" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button type="submit" className="search-button">Search</button>
    </form>
    <div className="movie-list">
      {movies.map((movie) => movie.title.toLowerCase().startsWith(searchTerm) && (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    </>
  );
}

export default HomePage;