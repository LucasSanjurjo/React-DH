import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";

function ContentRowTop() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      <ContentRowMovies />

      <LastMovieInDb />

      <GenresInDb />
    </div>
  );
}

export default ContentRowTop;
