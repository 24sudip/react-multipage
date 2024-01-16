//
import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <section id="banner">
      <div class="container">
        <div class="banner_inner">
          <div class="banner_text">
            <h1>Building stellar websites for early startups</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <a href="#" class="btn_work">
              View our work
            </a>
            <a href="#" class="pricing">
              View Pricing <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div class="banner_img">
            <img src="images/banner.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
