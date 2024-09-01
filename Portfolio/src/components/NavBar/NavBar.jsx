import './navbar.css'
import {Link} from 'react-scroll';

export default function NavBar() {
    return(
        <>
          <div className="nav_body">
             <nav className='navbar'>
             <img src="/logo.png" alt="logo" className='logo'/>
             <div className="menu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="menu_list">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className="menu_list">About</Link>
                <Link activeClass='active'  to='works' spy={true} smooth={true} offset={-70} duration={500} className="menu_list">Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-80} duration={500} className="menu_list">Clients</Link>
             </div>
             <button className='menu_btn' onClick={()=>{
              document.getElementById('contact_page').scrollIntoView({behavior:'smooth'});
             }}>
                     <img src="./contact.png" alt="img" className='btn_img'/> Contact Me
             </button>
             
             </nav>
          </div>
         
        </>
    )
}