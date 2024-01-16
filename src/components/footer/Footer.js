
import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
        <section id="foter">
    <div class="container">
     <div class="bg">
      <div class="contact">
        <img src="images/Finsweet white logo 1.png" alt=""/>
        <p>We are always open to discuss your project and improve your online presence.</p>
        <div class="contact_num">
          <div class="mail">
            <h4>Eamil me at</h4>
            <h5>contact@website.com</h5>
          </div>
          <div class="call">
            <h4>Call Us</h4>
            <h5>0927 6277 28525</h5>
          </div>
        </div>
      </div>
      <div class="talk">
        <h2>Lets Talk!</h2>
        <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
        <div class="link">
          <ul>
            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
     </div>
    </div>
  </section>
  <section id="footDown">
    <div class="container">
      <div class="foot_Down">
        <div class="copyright">
          <h4>Copyright 2022, Finsweet.com</h4>
        </div>
        <div class="copyright_menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>

    </div>
  </section>
    </>
  )
}

export default Footer
