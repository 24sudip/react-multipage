
import React from 'react'
import "./slide.css"

const Slide = () => {
  return (
    <section id="slide">
    <div class="container">
      <div class="slide_main">
        <div class="slide_text">
          <h2>What our clients say about us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>
        <div class="slide_part">
          <h3>"The best agency we ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
          <div class="img">
            <img src="images/slide1.jpg" alt=""/>
            <div class="img_text">
              <h5>Jenny Wilson</h5>
            <h6>Vice President</h6>
            </div>
          </div>
          {/* <div class="icon">
            <i class="fa-solid fa-angle-right next"></i>
            <i class="fa-solid fa-angle-left prev"></i>
          </div> */}
        </div>

      </div>
    </div>

  </section>
  )
}

export default Slide
