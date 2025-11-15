import React from 'react'

export const OffMarket = () => {
  return (
    <div>
      
 {/* banner */}
      <section>
        <img src='/images/bannerrooftopimg.jpg' width='100%'/>
      </section>
 {/* banner bottom */}
      <section className='container bannerbottom d-flex align-items-center justify-content-center my-5'>
        <h1>Property Finding, mediation, design, transformation: we are expert guides, capable of <span className='spancolor'>accompanying you in every step of your real estate journey.</span></h1>
      </section>
      <hr />

       {/* The mission and vission */}
      <section className='mt-5'>
        <div className='container'>
          <h5 className='spancolor headingtop'>THE APPROACH</h5>
          <h2>Our identity guides our actions and relationships.</h2>
        </div>

        <div className='offmarket mt-5' style={{ backgroundColor: 'rgba(244, 244, 244, 0.82)' }}>
          <img src='/images/offmarketbanner.jpg' />
          <div className='mission p-sm-5 p-3'>
            <div className='mb-5'>
              <h5 className='spancolor headingtop'>OUR MISSION</h5>
              <p>The roof, in contact with the sky, is the ethereal part of Roof&Roots. It represents openness to listening, human touch and the visionary nature of an aesthetic taste that translates needs into functional and elegant solutions.</p>
            </div>
          </div>
        </div>

        <div className='offmarket reorder' style={{ backgroundColor: 'rgb(105, 21, 18)' }}>
          <div className='vission p-sm-5 p-3'>
            <div className='mb-5'>
              <h5 className='headingtop'>OUR VISSION</h5>
              <p>The roof, in contact with the sky, is the ethereal part of Roof&Roots. It represents openness to listening, human touch and the visionary nature of an aesthetic taste that translates needs into functional and elegant solutions.</p>
            </div>
          </div>
          <img src='/images/offmarketbanner.jpg' />
        </div>
      </section>


      {/* our team */}

      <section className='my-5'>
        <div className='container'>
          <div className='row gy-4 d-flex align-items-center justify-content-between'>
            <div className='col-sm-6 '>
              <div>
                <h5 className='spancolor headingtop'>ROOFTOP CLUB.</h5>
                <h2>Ninety percent of the most exclusive properties never come to market.</h2>
                <h2>The RoofTop Club is the key to accessing these hidden gems, reserved for a small number of investors. A privilege designed to ensure absolute discretion and unprecedented opportunities.</h2>
              </div>
            </div>

            <div className='col-md-4 col-sm-6 '>
              <div class="backdivmain">
                <div class="inner">
                  <div class="front">
                    <img src="/images/teammember1.jpg" alt="front image" />
                  </div>
                  <div className='backdiv'>
                    <p>
                      An architect and consultant in the field of Architecture, Engineering, and Construction, she holds a master’s degree in digital BIM, applied in the Retail and Hospitality sectors. At ACE and in previous roles, she has managed the planning of numerous luxury projects for hospitality and fashion brands. She currently researches off-market real estate opportunities for investors with ambitious projects. She combines the skills of an architect with the vision of a real estate broker to recognize the potential of places and properties.
                    </p>
                    <div>
                      <h4>
                        Lucia
                        <br />
                        Chirichiello
                      </h4>
                      <h6>DIRECTOR OF HOSPITALITY</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             <div className='col-md-4 col-sm-6 '>
              <div class="backdivmain">
                <div class="inner">
                  <div class="front">
                    <img src="/images/teammember1.jpg" alt="front image" />
                  </div>
                  <div className='backdiv'>
                    <p>
                      An architect and consultant in the field of Architecture, Engineering, and Construction, she holds a master’s degree in digital BIM, applied in the Retail and Hospitality sectors. At ACE and in previous roles, she has managed the planning of numerous luxury projects for hospitality and fashion brands. She currently researches off-market real estate opportunities for investors with ambitious projects. She combines the skills of an architect with the vision of a real estate broker to recognize the potential of places and properties.
                    </p>
                    <div>
                      <h4>
                        Lucia
                        <br />
                        Chirichiello
                      </h4>
                      <h6>DIRECTOR OF HOSPITALITY</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             <div className='col-md-4 col-sm-6 '>
              <div class="backdivmain">
                <div class="inner">
                  <div class="front">
                    <img src="/images/teammember1.jpg" alt="front image" />
                  </div>
                  <div className='backdiv'>
                    <p>
                      An architect and consultant in the field of Architecture, Engineering, and Construction, she holds a master’s degree in digital BIM, applied in the Retail and Hospitality sectors. At ACE and in previous roles, she has managed the planning of numerous luxury projects for hospitality and fashion brands. She currently researches off-market real estate opportunities for investors with ambitious projects. She combines the skills of an architect with the vision of a real estate broker to recognize the potential of places and properties.
                    </p>
                    <div>
                      <h4>
                        Lucia
                        <br />
                        Chirichiello
                      </h4>
                      <h6>DIRECTOR OF HOSPITALITY</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             <div className='col-md-4 col-sm-6 '>
              <div class="backdivmain">
                <div class="inner">
                  <div class="front">
                    <img src="/images/teammember1.jpg" alt="front image" />
                  </div>
                  <div className='backdiv'>
                    <p>
                      An architect and consultant in the field of Architecture, Engineering, and Construction, she holds a master’s degree in digital BIM, applied in the Retail and Hospitality sectors. At ACE and in previous roles, she has managed the planning of numerous luxury projects for hospitality and fashion brands. She currently researches off-market real estate opportunities for investors with ambitious projects. She combines the skills of an architect with the vision of a real estate broker to recognize the potential of places and properties.
                    </p>
                    <div>
                      <h4>
                        Lucia
                        <br />
                        Chirichiello
                      </h4>
                      <h6>DIRECTOR OF HOSPITALITY</h6>
                    </div>
                  </div>
                </div>
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

export default OffMarket