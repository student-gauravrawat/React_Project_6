import './Skills.css';

export default function Slills(){
    return(
        <>
           <section id="skills">
              <span className='skill_tittle'>What I do</span>
              <span className="skill_desc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keep eye for detail.I am proficient in HTML, CSS, JavaScript and React as well as design software such as Adobe Photoshop and Illustrator.</span>

              <div className="skill_bars">

                  <div className="skills_bar">
                     <img src="./ui-design.png" alt="img"  className='skillbar_img'/>
                     <div className="skillbar_text">
                        <h2>UI/UX design</h2>
                        <p>This is a demo text you can write your own content here.</p>
                     </div>
                  </div>

                  <div className="skills_bar">
                     <img src="./website-design.png" alt="img"  className='skillbar_img'/>
                     <div className="skillbar_text">
                        <h2>Website design</h2>
                        <p>This demo text you can write your own content here.</p>
                     </div>
                  </div>

                  <div className="skills_bar">
                     <img src="./app-design.png" alt="img"  className='skillbar_img'/>
                     <div className="skillbar_text">
                        <h2>App design</h2>
                        <p>This demo text you can write your own content here.</p>
                     </div>
                  </div>
              </div>
           </section>
           
        </>
    )
}
