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
<div className='row gy-5 mt-1'>
<div className='col-lg-4'>
<div className='onimage'>
  <img src='/images/onmarketbannerimg.jpg' width="100%" className='img-fluid'/>
  <div className='onimagesdiv'>
    <div className='d-flex align-items-center justify-content-center flex-column'>
    <img src='/images/icone-cards-ville.webp' width="30"/>
    <p>Ville</p>
    </div>
    <a href='' className='btndesign1'>Discover</a>
  </div>
</div>
</div>
<div className='col-lg-4'>
<div className='onimage'>
  <img src='/images/onmarketbannerimg.jpg' width="100%" className='img-fluid'/>
  <div className='onimagesdiv'>
    <div className='d-flex align-items-center justify-content-center flex-column'>
    <img src='/images/icone-cards-ville.webp' width="30"/>
    <p>Ville</p>
    </div>
   <a href='' className='btndesign1'>Discover</a>
  </div>
</div>
</div>
<div className='col-lg-4'>
<div className='onimage'>
  <img src='/images/onmarketbannerimg.jpg' width="100%" className='img-fluid'/>
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
<section className='my-5'>
  <div className='offmarket'>
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

{/* OUR NUMBERS */}
<section className='ournumbers my-5'>
  <div className='container'>
  <h5 className='spancolor headingtop'>OUR NUMBERS</h5>
<h1>Numbers on the books. And they are always growing.</h1>

<div className='row g-5 mt-0'>
<div className='col-lg-6 order-lg-1 order-1'>
  <div className='ournumbersdiv bgsw'>
<h1>No. 1</h1>
<h4>Location Of Office</h4>
<h4>At Center Of India</h4>
</div>
</div>
<div className='col-lg-6 order-lg-2 order-2'>
  <div className='ournumbersdiv bgm'>
<h1>+10k</h1>
<h4>ON-MARKET REAL ESTATE</h4>
<h4>AND OFF-MARKET</h4>
</div>
</div>
<div className='col-lg-6 order-lg-3 order-4'>
  <div className='ournumbersdiv bgm'>
<h1>+100</h1>
<h4>PROFESSIONAL</h4>
<h4>DEGREES AND TITLES</h4>
</div>
</div>
<div className='col-lg-6 order-lg-4 order-3'>
  <div className='ournumbersdiv bgsw'>
<h1>+20K</h1>
<h4>INTERNATIONAL CUSTOMERS</h4>
<h4>MILLIONAIRES AND BILLIONAIRES</h4>
</div>
</div>
</div>
</div>
</section>


{/* location */}
<section className='mt-5'>
  <div className='offmarket locationdiv'>
   <img src='/images/offmarketbanner.jpg'/>
    <div className='offmarketdiv p-sm-5 p-3 d-flex justify-content-between flex-column'>
      <span className='spancolor headingtop'>LOCATION</span>
<p>Noida Sector 59, metro station,UP, India.</p>
    </div>
  </div>
</section>

{/* contact form */}
<section className='contactfrm py-5'>
 <div className='container'>
<h5 className='spancolor headingtop'>CONTACT</h5>
<h2>Every real estate destination is different: tell us about yours.</h2>

<div className='mt-5'>
<form>
  <div className='d-sm-flex gap-3'>
<input type='text' placeholder='Name' />
<input type='tel' placeholder='Phone' />
<input type='email' placeholder='Email' />
  </div>
   <input type='address' placeholder='Address' />
   <textarea type='text' placeholder='Message' rows='3' />
   <div className='d-flex align-items-center justify-content-start mb-5'>
   <input type='checkbox' id='policy' /><label for='policy'>I accept the privacy policy.</label>
   </div>
   <a href='' className='btndesign2'>Send</a>
</form>
  </div>
</div>
</section>
  
    </div>
  )
}
export default Home