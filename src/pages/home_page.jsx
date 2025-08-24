import MovieCard from "../components/movie_card";

function HomePage() {
  return (
    <div>
      <h1>Movie Finder</h1>
      <MovieCard movie={{ title: "Inception", release_date: 2010 }} />
    </div>
  );
}

export default HomePage;
