function MovieCard({ movie }) {
  const handleFavoriteClick = () => {
    // onclick function
    alert(`You favorited ${movie.title}`);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWnBnPN47nWvqWJAxw-vmchKc_2u1zkG6Bw&s" alt={movie.title} ></img>
        <div className="fav-button">
          <button onClick={handleFavoriteClick}>❤️</button>
        </div>
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
