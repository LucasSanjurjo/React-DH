import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Topbar from "./Topbar";
import ContentRowMovies from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";

function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Topbar />
        <ContentRowTop />
        <GenresInDb />
        <LastMovieInDb />
        <Footer />
      </div>
    </div>
  );
}

export default ContentWrapper;
