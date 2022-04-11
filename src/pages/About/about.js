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

        <p>This is how it all began... 😄</p>

        {/* Also include things like fun things to do in Riga, History, Fun Facts, etc...*/}
      </div>
    </div>
  );
}

export default About;
