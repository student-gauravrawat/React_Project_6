import { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';

export default function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s6l4gjr', 'template_qehv9za', form.current, 'J7pSTBP2by66X7aAN')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
              alert("Email Sent!")
            },(error) => {
              console.log( error.text);
            },
          );
      }

    return(
        <>
           <section id="contact_page">

               <div id="clients">
                  <h1 className='clint_page_title'>My Clients</h1>
                  <p className="clint_desc">I have had the opportunity to work with a diverse group of companies. Some of the notable companies. I have worked with includes</p>
                  <div className="clint_imgs">
                      <img src="./walmart.png" alt="img" className='clint_img'/>
                      <img src="./adobe.png" alt="img" className='clint_img'/>
                      <img src="./microsoft.png" alt="img" className='clint_img'/>
                      <img src="./facebook.png" alt="img" className='clint_img'/>
                  </div>
               </div>

               <div className="contact">
                  <h1 className='contact_page_title'>Contact Me</h1>
                  <p className="contact_desc">Please fill out the form below to discuss any work opportunities.</p>

                  <form  className="contactform" ref={form} onSubmit={sendEmail}>
                      <input type="text" className="name" placeholder='Your Name' name="your_name"/>
                      <input type="email" className="email"  placeholder='Your Email' name="your_email"/>
                      <textarea name="message" rows='5' placeholder='Your message' className='msg'></textarea>
                      <button  type='submit' value='send' className="submit_btn">Submit</button>

                       <div className="links">
                         <img src="./facebook-icon.png" alt="img" className="link" />
                         <img src="./twitter.png" alt="img" className="link" />
                         <img src="./youtube.png" alt="img" className="link" />
                         <img src="./instagram.png" alt="img" className="link" />
                       </div>
                  </form>

               </div>
           </section>
        </>
    )
}