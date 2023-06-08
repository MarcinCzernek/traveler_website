import './Middle.scss'
import img1 from "../assets/images/img-2.jpg"
import img2 from "../assets/images/img-3.jpg"
import img3 from "../assets/images/img-8.jpg"
import img4 from "../assets/images/img-9.jpg"

function Middle() {

    return (
        <div className="Middle">
        <div className="welcome">
          <h1>Start Your best adventure with us</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, soluta?</h2>
          <button>Watch film</button>
        </div>

            <div className="features_section">
                <h2>What is Your next tour?</h2>

            <div className="features">
                <div className="container">
                    <img src={img1} alt=""/>
                    <p className="signature">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="container">
                    <img src={img2} alt=""/>
                    <p className="signature">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="container">
                    <img src={img3} alt=""/>
                    <p className="signature">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="container">
                    <img src={img4} alt=""/>
                    <p className="signature">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="ending"></div>
            </div>
        </div>
    );
}

export default Middle;
