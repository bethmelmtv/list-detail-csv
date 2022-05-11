import Film from './Film';

export default function FilmList({ films }) {
  return (
    <div className="film-list">
      {films.map((film) => (
        <Film key={film.id} {...film} />
      ))}
    </div>
  );
}
