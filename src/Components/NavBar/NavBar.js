import "./style.css"
import img1 from '../images/descarga.png';
import CartWitdget from '../CartWitdget/index';
import { NavLink } from "react-router-dom";



export default function FunctionalComponent () {

    return (
        <div className="container">
           <nav className="nav">
            <div className="nav_brand">
                <img className='logo' src= {img1} alt='logo' href="/"/>
               <a className="nav_link" href=""></a>
            </div>
            <ul className="nav_list">
                <li>
                <NavLink className="nav_link" to="/">Shop Watches</NavLink> 
                </li>
                <li>
                <NavLink className="nav_link" to="/category/Mens">Mens</NavLink> 
                </li>
                <li>
                <NavLink className="nav_link" to="/category/Womens">Womens</NavLink> 
                </li>
                <li>
                <NavLink className="car_widget" href=""><CartWitdget />2</NavLink> 
                </li>
            </ul>
           </nav>
        </div>
    );
}