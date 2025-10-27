import React from 'react'
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

{/* The approach */}
<section className='my-5'>
  <div className='container'>
<h5 className='spancolor headingtop'>THE APPROACH</h5>
<h2>Our identity guides our actions and relationships.</h2>
  </div>
   <div className='offmarket mt-5'>
   <img src='/images/offmarketbanner.jpg'/>
    <div className='offmarketdiv p-sm-5 p-3'>
      <div className='mb-5'>
      <h5 className='spancolor headingtop'>OFF - MARKET</h5>
<h1>So exclusive that they are not visible on maps. Roof&Roots has the coordinates to reach them.</h1>
</div>
<a href='' className='btndesign2'>LEARN MORE</a>
    </div>
  </div>
</section>
    </div>
  )
}

export default About