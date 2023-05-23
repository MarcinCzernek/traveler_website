import './Bottom.scss'
import logo from "../assets/images/logo.jpg";
import fb from "../assets/images/fb.png";
import inst from "../assets/images/insta.png";


const Bottom = () =>{
return(
    <div className="Bottom">
        <div className="subscribe">
            <h2>Join the Adventure newsletter to receive our best vacation deals</h2>
            <h3>You can unsubscribe at any time</h3>
            <input type="email" name='mail' placeholder="Your email" /><button>Subscribe now</button>
        </div>
        <hr/>
        <div className="under_footer">
            <div className="col_logo">
                <img src={logo} alt=""/>
                <h2>Traveler</h2>
                <h3>Your travel companion</h3>
            </div>
            <div className="col">
                <h2>About us</h2>
                <a href="#">Lorem ipsum</a>
                <a href="#">Lorem ipsum</a>
                <a href="#">Lorem ipsum</a>
                <a href="#">Lorem ipsum</a>
            </div>
            <div className="col">
                <h2>Contact Us</h2>
                <a href="#">Lorem ipsum</a>
                <a href="#">Lorem ipsum</a>
                <a href="#">Lorem ipsum</a>
                <a href="#">Lorem ipsum</a>
            </div>
            <div className="col">
                <h2>Services</h2>
                <a href="#">Lorem ipsum</a>
                <a href="#">Lorem ipsum</a>
                <a href="#">Lorem ipsum</a>
                <a href="#">Lorem ipsum</a>
            </div>
        </div>
        <hr/>
        <div className="footer">
            <img src={fb} alt=""/>
            <img src={inst} alt=""/>
            <p><i className="fa-brands fa-envira"></i></p>
            <p>Created in React by MC</p>
        </div>
        <script src="https://kit.fontawesome.com/5d4270a0be.js" crossOrigin="anonymous"></script>
    </div>

);
}

export default Bottom;