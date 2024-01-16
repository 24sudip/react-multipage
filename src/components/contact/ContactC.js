
import React from 'react'
import "./contact.css"

const ContactC = () => {
  return (
    <section id="contact">
        <div class="contact-head">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div class="container">
           <form method="post">
            <div class="contact-start">
              <div class="cont-main">
                <div class="cont-item">
                    <div class="cont-inner">
                        <h3>Name</h3>
                        <input type="text " placeholder="Enter Your Name"/>
                    </div>
                </div>
                <div class="cont-item">
                    <div class="cont-inner">
                        <h3>Email</h3>
                        <input type="text " placeholder="Enter Your Email"/>
                    </div>
                </div>
            </div>
            <div class="cont-main">
                <div class="cont-item">
                    <div class="cont-inner">
                        <h3>Subject</h3>
                        <input type="text " placeholder="Provide Context"/>
                    </div>
                </div>
                <div class="cont-item">
                    <div class="cont-inner">
                        <h3>Subject</h3>
                        <input type="text " placeholder="Select Subject"/>
                    </div>
                </div>
            </div>
            <div class="cont-mess">
                <h3>Message</h3>
                <input type=" text" placeholder="Write your  question here"/>
            </div>
            <div class="btn">
                <button><a href="#">Send Messege</a></button>
            </div>
            </div>
           </form>
        </div>

    </section>
  )
}

export default ContactC
