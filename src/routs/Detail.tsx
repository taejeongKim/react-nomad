import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  rating: number;
  year: number;
  summary: string;
  genres: string[];
  medium_cover_image: string;
}

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<Movie | null>(null); // 초기값을 명확히 null로 설정
  const { id } = useParams<{ id: string }>(); // id 타입을 명확히 설정

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      setMovie(json.data.movie);
    } catch (error) {
      console.error('Failed to fetch movie details:', error);
    } finally {
      setLoading(false); // 로딩 상태 업데이트
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading
        ? 'Loading...'
        : movie && ( // movie가 null이 아닌 경우에만 렌더링
            <div>
              <h1>{movie.title}</h1>
              <img
                src={movie.medium_cover_image}
                alt={`${movie.title} cover`}
              />
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          )}
    </div>
  );
}
