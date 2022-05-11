import { useEffect, useState } from 'react';
import './App.css';
import { getFilms } from './services/fetch-utils';
import FilmList from './FilmList';

function App() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 19;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const filmsEl = await getFilms(from, to);
      setFilms(filmsEl);
    }

    fetch();
  }, [page]);

  return (
    <>
      <h1>Current Page {page} </h1>
      <div className="buttons">
        <button onClick={() => setPage(page - 1)}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>

      <FilmList films={films} />
    </>
  );
}

export default App;
