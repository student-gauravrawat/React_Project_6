import './Intro.css';
import {Link} from 'react-scroll';

export default function Intro(){
    return (
        <>
          <section id="intro">

              <div className="intro_content">
                   <span className='hello'>Hello,</span>
                   <span className='intro_text'>I'm <span className='intro_name'>Gaurav Rawat</span> <br />Website Designer</span>
                   <p className='intro_para'>I am a skilled and passionate web designer with experience in creating <br /> visually appealing and user-friendly websites.</p>
                   <Link>
                      <button className="btn"><img src="./hireme.png" alt="img" className='btn_Img'/>Hire Me</button>
                   </Link>
              </div>
              
             <img src="./image.png" alt="img" className='bg'/>
            
          </section>
        </>
    )
}