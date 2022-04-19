import './about.css';
import history from '../../assets/images/history.png';

function About() {
  return (
    <div className="container">
      <div id="about">
        <h1>The History Of Riga</h1>

        <div className="oldRiga">
          <img src={history} alt="history" />
        </div>

        <p>
          Riga, the capital of Latvia, is not only the crown jewel of Latvia,
          but also of the Baltics. Riga has more than 600,000 inhabitants,
          making it the largest city in the Baltic States. Riga is also known as
          an architectural jewel, a city where you can see churches from the
          city’s origins, medieval buildings in the Old Town, unique examples of
          Art Nouveau, as well as wooden architecture that has survived the
          centuries and modern architectural jewels.
        </p>

        <p>
          Riga has a beautiful and varied architecture. From Romanesque to
          Gothic and Baroque,The Old Town has a remarkable number of
          architectural monuments. A walk through the streets of the Old Town
          will be an exciting experience for anyone visiting Riga.
        </p>
      </div>
    </div>
  );
}

export default About;
