import Sidebar from "./assets/components/Sidebar";
import Topbar from "./assets/components/Topbar";
import Footer from "./assets/components/Footer";
import LastMovieInDb from "./assets/components/LastMovieInDb";
import GenresInDb from "./assets/components/GenresInDb";
import ContentRowMovies from "./assets/components/ContentRowMovies";
import ContentRowTop from "./assets/components/ContentRowTop";
import ContentWrapper from "./assets/components/ContentWrapper";
import "./assets/css/app.css";

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <Topbar />
      <Footer />
      <LastMovieInDb/>
      <GenresInDb />
      <ContentRowMovies />
      <ContentRowTop />
      <ContentWrapper />
    </div>
  );
}

export default App;
