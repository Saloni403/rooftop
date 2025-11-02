import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div>

 {/* banner */}
      <section>
        <img src='/images/bannerrooftopimg.jpg' width='100%'/>
      </section>

      {/* banner bottom */}
      <section className='container bannerbottom d-flex align-items-center justify-content-center my-5'>
        <h1>Every great journey begins with an encounter. Let’s find out if we can <span className='spancolor'>to reach the same goal together.</span></h1>
      </section>
      <hr />

{/* contact info */}
 <section className='mt-5'>
        <div className='offmarket mt-5' style={{ backgroundColor: 'rgba(244, 244, 244, 0.82)' }}>
          <img src='/images/offmarketbanner.jpg' />
          <div className='p-sm-5 p-3'>
            <div className='contactinfo'>
              <h5 className='spancolor headingtop mb-5'>CONTACT US</h5>
              
              <div className='mb-4'>
                <h5>Address :</h5>
                <a href='' className='spancolor'><i class="bi bi-geo-alt-fill"></i> Noida sector 62</a>
              </div>

              <div className='mb-4'>
                  <h5>Mobile :</h5>
                  <a href='' className='spancolor'><i class="bi bi-phone-fill"></i> +91 1322343212</a>
              </div>

              <div className='mb-4'>
                <h5>Email :</h5>
                <a href='' className='spancolor'><i class="bi bi-envelope-fill"></i> info@gmail.com</a>
              </div>

              <div className='mb-4'>
                <h5 className='mb-4'>Quick Links :</h5>
                <i className="bi bi-whatsapp iconsdesign"></i>
                <i className="bi bi-instagram iconsdesign"></i>
              </div>
            </div>
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

export default Contact
