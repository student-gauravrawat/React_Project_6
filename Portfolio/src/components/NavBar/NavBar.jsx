import './navbar.css'
import {Link} from 'react-scroll';

export default function NavBar() {
    return(
        <>
          <nav className='navbar'>
             <img src="/logo.png" alt="logo" className='logo'/>
             <div className="menu">
                <Link className="nav_list">Home</Link>
                <Link className="nav_list">Clients</Link>
                <Link className="nav_list">Portfolio</Link>
                <Link className="nav_list">About</Link>
             </div>
             <button className='menu_btn'>
                     <img src="./contact.png" alt="img" className='btn_img'/> Contact Me
             </button>
             
          </nav>
        </>
    )
}