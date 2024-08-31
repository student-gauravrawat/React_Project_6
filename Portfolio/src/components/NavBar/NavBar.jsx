import './navbar.css'
import {Link} from 'react-scroll';

export default function NavBar() {
    return(
        <>
          <div className="nav_body">
             <nav className='navbar'>
             <img src="/logo.png" alt="logo" className='logo'/>
             <div className="menu">
                <Link className="menu_list">Home</Link>
                <Link className="menu_list">About</Link>
                <Link className="menu_list">Portfolio</Link>
                <Link className="menu_list">Clients</Link>
             </div>
             <button className='menu_btn'>
                     <img src="./contact.png" alt="img" className='btn_img'/> Contact Me
             </button>
             
             </nav>
          </div>
         
        </>
    )
}