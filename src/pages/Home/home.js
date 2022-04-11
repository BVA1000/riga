import './home.css';
import '../../assets/fonts/fonts.css';
import afternoon from '../../assets/images/afternoon.png';
import bridge from '../../assets/images/bridge.png';
import sunrise2 from '../../assets/images/sunrise2.png';
import stpete from '../../assets/images/stpete.png';
import daugava from '../../assets/images/daugava.png';

function Home() {
  return (
    <div className="container">
      <h1>- "Dievs Sveti Latviju"</h1>

      <div id="imageCarousel" className="carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={daugava} className="d-block w-100" alt="daugava" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Old Riga Across The Daugava River</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bridge} className="d-block w-100" alt="bridge" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Vansu Bridge</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={stpete} className="d-block w-100" alt="stpete" />
            <div className="carousel-caption d-none d-md-block">
              <h5>St. Peter's Church</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={sunrise2} className="d-block w-100" alt="sunrise2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Sunrise Over Riga</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={afternoon} className="d-block w-100" alt="afternoon" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Railway Bridge & Radio Tower</h5>
            </div>
          </div>
        </div>
      </div>

      <p>
        Welcome to my website about Riga Latvia! My name is Ben Von Achen, and I
        thought it would be fun to create a fun Front-End focused application
        about where I grew up. Riga is a gorgeous city which has been around for
        over 800 years. It has a rich history and a unique culture for a Eastern
        European Nation.
      </p>
      <p>
        I was born six years after the Soviet Union collapsed, which was a rough
        time for most of the former Soviet sattelite states, including Latvia,
        where the nation and it's people had to shift gears economically and
        politically.
      </p>
      <p>
        The slogan "Dievs Sveit Latviju" is a slogan in Latvian which means "God
        Bless Latvia".
      </p>
    </div>
  );
}

export default Home;
