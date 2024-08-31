import './Portfolio.css'

export default function Portfolio(){
    return(
        <>
         <section id="works">
              <h1 className="works_title">My Portfolio</h1>
              <span className='work_desc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>

              <div className="works_imgs">
                 <img src="./portfolio-1.png" alt="img" className="worksImg" />
                 <img src="./portfolio-2.png" alt="img" className="worksImg" />
                 <img src="./portfolio-3.png" alt="img" className="worksImg" />
                 <img src="./portfolio-4.png" alt="img" className="worksImg" />
                 <img src="./portfolio-5.png" alt="img" className="worksImg" />
                 <img src="./portfolio-6.png" alt="img" className="worksImg" />
              </div>

              <button className="works_btn">See More</button>
         </section>
            
        </>
    )
}