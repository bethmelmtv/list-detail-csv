//this is the each individual film detail page//
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getSingleFilm } from './services/fetch-utils';

export default function FilmDetail() {
  const [film, setFilm] = useState({});
  const params = useParams();

  useEffect(() => {
    async function load() {
      const filmData = await getSingleFilm(params.id);
      setFilm(filmData);
    }
    load();
  }, [params.id]);

  return (
    <>
      <Link to="/">Home</Link>
      <div className="individual-film-page">
        <div className="film-data">
          <p>Title: {film.Title}</p>
          <p>Year: {film.Year}</p>
          <p>Subject: {film.Subject}</p>
          <p>Director:{film.Director}</p>
          <p>Popularity:{film.Popularity}</p>
          <p>Awards: {film.Awards}</p>
          <img src={film.Image} />
        </div>
      </div>
    </>
  );
}
