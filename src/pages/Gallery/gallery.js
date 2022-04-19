import './gallery.css';
import atrnouveau from '../../assets/gallery-images/artnouveau.png';
import blackhouse from '../../assets/gallery-images/blackhouse.png';
import bridge2 from '../../assets/gallery-images/bridge2.png';
import building from '../../assets/gallery-images/building.png';
import building2 from '../../assets/gallery-images/building2.png';
import rigasdoms from '../../assets/gallery-images/rigasdoms.png';
import rigasdoms2 from '../../assets/gallery-images/rigasdoms2.png';
import statue from '../../assets/gallery-images/statue.png';
import stpete2 from '../../assets/gallery-images/stpete2.png';
import stpete3 from '../../assets/gallery-images/stpete3.png';
import streets2 from '../../assets/gallery-images/streets2.png';
import streets3 from '../../assets/gallery-images/streets3.png';

function Gallery() {
  return (
    <div className="container">
      <div id="gallery">
        <h1>Photo Gallery</h1>

        <div className="galleryImages">
          <div className="row">
            <div className="col-sm-6">
              <img src={statue} alt="statue" />
            </div>

            <div className="col-sm-6">
              <img src={blackhouse} alt="blackhouse" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <img src={building} alt="building" />
            </div>

            <div className="col-sm-6">
              <img src={atrnouveau} alt="artnouveau" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <img src={rigasdoms} alt="rigasdoms" />
            </div>

            <div className="col-sm-6">
              <img src={building2} alt="building2" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <img src={stpete2} alt="stpete2" />
            </div>

            <div className="col-sm-6">
              <img src={rigasdoms2} alt="rigasdoms2" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <img src={bridge2} alt="bridge2" />
            </div>

            <div className="col-sm-6">
              <img src={streets2} alt="streets2" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <img src={streets3} alt="streets3" />
            </div>

            <div className="col-sm-6">
              <img src={stpete3} alt="stpete3" />
            </div>
          </div>
        </div>

        {/* Also include things like fun things to do in Riga, History, Fun Facts, etc...*/}
      </div>
    </div>
  );
}

export default Gallery;
