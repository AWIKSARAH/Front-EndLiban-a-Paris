import heroImage from "./images/183112.jpg";
import "./home.css";
import CardSlider from "./cardSlider";
export default function Home() {
  return (
    <>
      <div className="home--page_wrapper">
        <div
          className="hero--section"
          style={{ background: `url(${heroImage})` }}
        >
          <div className="hero--content">
            <div className="catchy--phrase">
              <h1 className="home--page_heading">
                Savourer les saveurs, embrasser la culture :{" "}
                <span>Découvrez le Liban à Paris</span>
              </h1>
              <h3>
                Plongez dans une cuisine exquise, participez à des événements
                vibrants et découvrez la richesse de la culture libanaise au
                cœur de Paris
              </h3>
            </div>
          </div>
          {/* <img src={heroImage} alt="Hero Lebanon and France" className="hero--image"/> */}
        </div>
        <div className="home--page_content">
          <CardSlider
            type="events"
            heading="Notre dernier ajout à l'événement"
          />
          <CardSlider
            type="places"
            heading="Notre dernier resto ajout"
            to="restaurant"
          />
        </div>
      </div>
    </>
  );
}
