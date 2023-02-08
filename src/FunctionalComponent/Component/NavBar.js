import img1 from '../../images/descarga.png';
import CartWitdget from '../CartWitdget/index';


export default function FunctionalComponent () {

    return (
        <div className="container">
           <nav className="nav">
            <div className="nav_brand">
                <img className='logo' src= {img1} alt='logo'/>
               <a className="nav_link" href=""></a>
            </div>
            <ul className="nav_list">
                <li>
                <a className="nav_link" href="">Shop Watches</a> 
                </li>
                <li>
                <a className="nav_link" href="">Mens</a> 
                </li>
                <li>
                <a className="nav_link" href="">Womens</a> 
                </li>
                <li>
                <a className="car_widget" href=""><CartWitdget />2</a> 
                </li>
            </ul>
           </nav>
        </div>
    );
}