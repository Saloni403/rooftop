import React from 'react'
import './About.css'
import "./Home.css"
export const About = () => {
  return (
    <div>
      {/* banner */}
      <section>
        <img src='/images/bannerrooftopimg.jpg' width='100%' />
      </section>

      {/* banner bottom */}
      <section className='container bannerbottom d-flex align-items-center justify-content-center my-5'>
    <h1>Property Finding, mediation, design, transformation: we are expert guides, capable of <span className='spancolor'>accompanying you in every step of your real estate journey.</span></h1>
      </section>
<hr/>

{/* The mission and vission */}
<section className='my-5'>
  <div className='container'>
<h5 className='spancolor headingtop'>THE APPROACH</h5>
<h2>Our identity guides our actions and relationships.</h2>
  </div>

   <div className='offmarket mt-5' style={{backgroundColor: 'rgba(244, 244, 244, 0.82)'}}>
   <img src='/images/offmarketbanner.jpg'/>
    <div className='mission p-sm-5 p-3'>
      <div className='mb-5'>
      <h5 className='spancolor headingtop'>OUR MISSION</h5>
<p>The roof, in contact with the sky, is the ethereal part of Roof&Roots. It represents openness to listening, human touch and the visionary nature of an aesthetic taste that translates needs into functional and elegant solutions.</p>
</div>
    </div>
  </div>

   <div className='offmarket reorder' style={{backgroundColor: 'rgb(105, 21, 18)'}}>
    <div className='vission p-sm-5 p-3'>
      <div className='mb-5'>
      <h5 className='headingtop'>OUR VISSION</h5>
<p>The roof, in contact with the sky, is the ethereal part of Roof&Roots. It represents openness to listening, human touch and the visionary nature of an aesthetic taste that translates needs into functional and elegant solutions.</p>
</div>
    </div>
    <img src='/images/offmarketbanner.jpg'/>
  </div>
</section>
    </div>
  )
}

export default About