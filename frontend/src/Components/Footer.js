import React from 'react'

function Footer() {
  return (
    <div className='Footer'>
      <div className='Social'>
        <ul>
          <li><a href='https://www.instagram.com/_jeev.esh_07/' target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a></li>
          <li><a href='/' >
            <i className="fa-brands fa-facebook"></i>
          </a></li>
          <li><a href='/' >
            <i className="fa-brands fa-x-twitter"></i>
          </a></li>
          <li><a href='https://github.com/Jeevesh0207' target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
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