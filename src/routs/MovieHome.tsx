import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from './MovieHome.module.css';

interface Moive {
  id: number;
  title: string;
  rating: number;
  year: number;
  summary: string;
  genres: string[];
  medium_cover_image: string;
}

function MovieHome() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Moive[]>([]);
  const getMovies = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies);
  useEffect(() => {
    // fetch(
    //   'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    // )
    //   .then((res) => res.json())
    //   .then((json) => {
    //     const movies = json.data.movies;
    //     setMovies(movies);
    //     setLoading(false);
    //   });
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieHome;
