
import React from 'react'
import "./work.css"
import WorkReusable from '../reusable/WorkReusable'

const Work = () => {
  return (
    <section id="work">
    <div class="container">
      <div class="work_inn">
        <div class="work_part">
          <h3>How we work</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <a href="#">Get in touch with us <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div class="strategy">
          <div class="stra_inn">
            <WorkReusable title="Jisan" para="hello Bangladesh"/>
            <WorkReusable title="Wireframing" para="hello Bangladesh"/>
            {/* <div class="star_one">
              <div class="star_one1"><h4>01</h4></div>
              <h2>Strategy</h2>
              <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
            </div>
            <div class="star_one">
              <div class="star_one1"><h4>02</h4></div>
              <h2>Wireframing</h2>
              <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
            </div> */}
          </div>
          <div class="stra_inn pd">
            <WorkReusable title="Design" para="hello Bangladesh"/>
            <WorkReusable title="Development" para="hello Bangladesh"/>
            {/* <div class="star_one">
              <div class="star_one1"><h4>03</h4></div>
              <h2>Design</h2>
              <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
            </div>
            <div class="star_one">
              <div class="star_one1"><h4>04</h4></div>
              <h2>Development</h2>
              <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Work
