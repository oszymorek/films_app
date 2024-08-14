import WatchedMovie from "./WatchedMovie";
export default function WatchedList({ watched, onDeleteMovie }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbId}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </ul>
  );
}
