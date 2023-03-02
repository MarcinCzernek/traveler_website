import './Top.scss'

import logo from '../assets/images/logo.jpg'
import {FaGithub} from "react-icons/fa";

const Top = () =>{
    return(
        <div className="Top">
            <div className="header">
                <img src={logo} alt=""/>
                    <h2>Traveler</h2>
                    <h3>Your travel companion</h3>
                </div>
            <hr/>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href=""></a>Services</li>
                    <li><a href=""></a>Features</li>
                    <li><a href=""></a>Contact</li>
                    <li><button><FaGithub></FaGithub><a href="#">Code on Github</a></button></li>
                </ul>

                <div className="burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

            </nav>
            <hr/>

        </div>
    );
}

export default Top;