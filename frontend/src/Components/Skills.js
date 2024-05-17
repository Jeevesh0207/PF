import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'


function Skills() {

  return (
    <div className='Skills'>
      <div className='Head'>
        <h1>What I Know </h1>
        {/* <img src={require('../image/About/Skill_1.png')} alt='png'></img> */}
        <LazyLoadImage
          src={require('../image/About/Skill_1.png')}
          alt='png'
          effect="blur"
        />
      </div>
      <div className='Row'>
        <div className='Box1'>
          <div className='Top'>
            <h3>Programming Language</h3>
            <div className='All'>
              <div className='PL_1'>
                <p>C</p>
                <p>C++</p>
                <p>Python</p>
                <p>Java</p>
                <p>Javascript</p>
                <p>Typescript</p>
              </div>
            </div>
          </div>
        </div>
        <div className='Box1'>
          <h3>Frontend</h3>
          <div className='All'>
            <div className='PL_2'>
              <p>HTML</p>
              <p>CSS</p>
              <p>Tailwind CSS</p>
              <p>React Js</p>
              <p>Redux</p>
              <p>React Native</p>
            </div>
          </div>
        </div>
        <div className='Box1'>
          <h3>Backend</h3>
          <div className='All'>
            <div className='PL_3'>
              <p>Node Js</p>
              <p>Express Js</p>
              <p>GraphQL</p>
              <p>Kafka</p>
              <p>Redis</p>
              <p>Docker</p>
            </div>
          </div>
        </div>
        <div className='Box1'>
          <h3>Database</h3>
          <div className='All'>
            <div className='PL_4'>
              <p>Mysql</p>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills