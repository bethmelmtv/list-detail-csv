import { Link } from 'react-router-dom'; //what does this line do

export default function Film({ id, Title, Year }) {
  return (
    <Link to={`/films/${id}`}>
      <div className="film-item">
        <p> Movie Title: {Title}</p>
        <p> Release Year: {Year} </p>
      </div>
    </Link>
  );
}
