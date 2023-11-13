import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Experience() {
    return (
        <div className='Experience' id='ExperiencE'>
            <div className='Head'>
                <h1>Experience</h1>
                {/* <img src={require('../image/Experience/EXP.png')} alt='png'></img> */}
                <LazyLoadImage
                    src={require('../image/Experience/EXP.png')} 
                    alt='png'
                    effect="blur"
                />
            </div>
            <div className='item'>
                <div className='L'>
                    <div className='Ex1'>
                        <div className='TSF'>
                            <h1>
                            <i className="fa-solid fa-medal"></i>
                                Lets Grow More</h1>
                            <p>Web Developer Intern | Jul 2023 - Aug 2023</p>
                            <ul>
                                <li>Implemented responsive design techniques to ensure an optimal user experience across various devices and screen sizes.
                                </li>
                                <li>Assisted in database management and data retrieval, contributing to efficient and data-driven web applications.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='Ex2'>
                        <div className='LGM'>
                            <h1>
                            <i className="fa-solid fa-medal"></i>
                                The Sparks Foundation</h1>
                            <p>Web Developer Intern | Aug 2022 – Sep 2022</p>
                            <ul>
                                <li>Collaborate with cross-functional teams,including designers content creators, and project managers, to ensure timely and successful project delivery upto 90%.
                                </li>
                                <li>Conduct testing and debugging-For web applications to ensure optimal performance 80% to 95%</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='R'>
                    {/* <img src={require('../image/Experience/EXP_B.jpeg')} alt='jpeg'></img> */}
                    <iframe 
                    src="https://lottie.host/?file=90c08e5a-b50a-42d5-9790-d45bff25d375/qNUIIFTpv8.json" 
                    title='experience'
                    loading='lazy'
                    effect='blur'
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Experience