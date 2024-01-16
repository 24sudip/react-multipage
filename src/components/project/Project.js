
import React from 'react'
import "./project.css"

const Project = () => {
  return (
    <section id="project">
    <div class="container">
      <div class="project_head">
        <div class="project_text">
          <h2>View our projects</h2>
        </div>
              <a href="#" class="view1">View Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
              <div class="project_view"></div>
      </div>
        <div class="project_inner">
          <div class="porject1">
            <img src="images/project1.png" alt=""/>
            <div class="overlay">
             <div class="overlay_inn">
              <h3>Workhub office Webflow Webflow Design</h3>
              <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
              <a href="#" class="view">View Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
             </div>
            </div>
          </div>
          <div class="porject2">
            <div class="project2_inn1">
              <img src="images/project2.png" alt=""/>
              <div class="overlay">
                <div class="overlay_inn">
                 <p>Unisaas Website Design</p>
                 <a href="#" class="view">View Portfolio <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
               </div>
            </div>
            <div class="project2_inn1">
              <img src="images/project3.png" alt=""/>
              <div class="overlay">
                <div class="overlay_inn">
                 <p>Unisaas Website Design</p>
                 <a href="#" class="view">View Portfolio <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
               </div>
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default Project
