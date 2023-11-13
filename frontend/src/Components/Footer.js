import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Footer() {
  return (
    <div className='Footer'>
      <div className='Social'>
        <ul>
          <li><a href='/'>
            {/* <img src={require('../image/Social/IN.png')} alt='png'></img> */}
            <LazyLoadImage
              src={require('../image/Social/IN.png')}
              alt='png'
              effect="blur"
            />
          </a></li>
          <li><a href='/'>
            {/* <img src={require('../image/Social/FB.png')} alt='png'></img> */}
            <LazyLoadImage
              src={require('../image/Social/FB.png')}
              alt='png'
              effect="blur"
            />
          </a></li>
          <li><a href='/'>
            {/* <img src={require('../image/Social/TW.png')} alt='png'></img> */}
            <LazyLoadImage
              src={require('../image/Social/TW.png')}
              alt='png'
              effect="blur"
            />
          </a></li>
          <li><a href='/'>
            {/* <img src={require('../image/Social/GIT.png')} alt='png'></img> */}
            <LazyLoadImage
              src={require('../image/Social/GIT.png')}
              alt='png'
              effect="blur"
            />
          </a></li>
          <li><a href='/'>
            {/* <img src={require('../image/Social/WP.png')} alt='png'></img> */}
            <LazyLoadImage
              src={require('../image/Social/WP.png')}
              alt='png'
              effect="blur"
            />
          </a></li>
        </ul>
      </div>
      <div className='Text'>
        <p>Copyright ©2023 Jeevesh Rai, Inc. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer