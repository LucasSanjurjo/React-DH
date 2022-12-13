import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Topbar from "./Topbar";

function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Topbar />
        <ContentRowTop />
        <Footer />
      </div>
    </div>
  );
}

export default ContentWrapper;
