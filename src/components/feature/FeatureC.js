
import React from 'react'
import "./featureC.css"
import FeatureReusable from '../reusable/FeatureReusable'

const FeatureC = () => {
  return (
    <section id="feature">
    <div class="container">
      <div class="feat_head">
        <h5>Features</h5>
        <h2>Design that solves problems, one product at a time</h2>
      </div>
      <div class="service">
        <FeatureReusable title="helloo" icon="fa-solid fa-users"/>
        <FeatureReusable title="helloo" icon="fa-solid fa-users"/>
        <FeatureReusable title="helloo" icon="fa-solid fa-users"/>
        <FeatureReusable title="helloo" icon="fa-solid fa-users"/>
        <FeatureReusable title="helloo" icon="fa-solid fa-users"/>
        <FeatureReusable title="helloo" icon="fa-solid fa-users"/>
        {/* <div class="ser_inn">
          <i class="fa-solid fa-users"></i>
          <h4>Uses Client First</h4>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
        </div>
        <div class="ser_inn">
          <i class="fa-solid fa-circle-check"></i>
          <h4>Two Free Revision Round</h4>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
        </div>
        <div class="ser_inn">
          <i class="fa-solid fa-pen-ruler"></i>
          <h4>Template Customization</h4>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
        </div>
        <div class="ser_inn">
          <i class="fa-solid fa-comments"></i>
          <h4>24/7 Support</h4>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
        </div>
        <div class="ser_inn">
          <i class="fa-solid fa-stopwatch"></i>
          <h4>Quick Delivery</h4>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
        </div>
        <div class="ser_inn">
          <i class="fa-solid fa-hand-holding-hand"></i>
          <h4>Hands-on approach</h4>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
        </div> */}
      </div>
    </div>
  </section>
  )
}

export default FeatureC
