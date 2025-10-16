import React from 'react'
import "./Home.css"
export const Home = () => {
  return (
    <div>
      {/* banner */}
      <section className='mainbanner'>
        <img src='/images/bannerrooftopimg.jpg' alt='my banner image' width="100%"/>
       <div className='scroll-container'>
        <p className='textabovebanner'>THERE'S MORE VALUE IN BETWEEN<span className='spancolor'> THERE'S MORE VALUE IN BETWEEN </span>THERE'S MORE VALUE IN BETWEEN</p>
       <p className='textabovebanner'>THERE'S MORE VALUE IN BETWEEN<span className='spancolor'> THERE'S MORE VALUE IN BETWEEN </span>THERE'S MORE VALUE IN BETWEEN</p>
     </div>
      </section>

{/* banner bottom */}
      <section className='container bannerbottom d-flex align-items-center justify-content-center my-5'>
    <h1>At Roof&Roots, every mediation trip has one goal: to provide<span className='spancolor'> a valuable experience, at every stop in between.</span></h1>
      </section>
<hr/>

{/* on market */}
<section className='my-5'>
  <div className='container'>
<h5 className='spancolor headingtop'>ON - MARKET</h5>
<h2>R&R knows the best real estate opportunities through extensive mapping of the area.</h2>
<div className='row mt-5'>
<div className='col-4'>
<div className='onimage'>
  <img src='/images/onmarketbannerimg.jpg' className='img-fluid'/>
  <div className='onimagesdiv'>
    <div className='d-flex align-items-center justify-content-center flex-column'>
    <img src='/images/icone-cards-ville.webp' width="30"/>
    <p>Ville</p>
    </div>
    <a href='' className='btndesign1'>Discover</a>
  </div>
</div>
</div>
<div className='col-4'>
<div className='onimage'>
  <img src='/images/onmarketbannerimg.jpg' className='img-fluid'/>
  <div className='onimagesdiv'>
    <div className='d-flex align-items-center justify-content-center flex-column'>
    <img src='/images/icone-cards-ville.webp' width="30"/>
    <p>Ville</p>
    </div>
   <a href='' className='btndesign1'>Discover</a>
  </div>
</div>
</div>
<div className='col-4'>
<div className='onimage'>
  <img src='/images/onmarketbannerimg.jpg' className='img-fluid'/>
  <div className='onimagesdiv'>
    <div className='d-flex align-items-center justify-content-center flex-column'>
    <img src='/images/icone-cards-ville.webp' width="30"/>
    <p>Ville</p>
    </div>
   <a href='' className='btndesign1'>Discover</a>
  </div>
</div>
</div>
</div>
  </div>
</section>

{/* off market */}
<section>
  <div className='d-lg-flex'>
   <img src='/images/offmarketbanner.jpg' width="50%"/>
    <div className='offmarketdiv ps-5'>
      <div className='my-5'>
      <h5 className='spancolor headingtop'>OFF - MARKET</h5>
<h1>So exclusive that they are not visible on maps. Roof&Roots has the coordinates to reach them.</h1>
</div>
<a href='' className='btndesign2'>LEARN MORE</a>
    </div>
  </div>
</section>

{/* OUR NUMBERS */}
<section>
  <div className='container'>
  <h5 className='spancolor headingtop'>OUR NUMBERS</h5>
<h1>Numbers on the books. And they are always growing.</h1>

<div className='row'>
<div className='col-6'>

</div>
</div>
</div>
</section>

    </div>
  )
}
export default Home