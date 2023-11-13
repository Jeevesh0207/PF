import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'


function Projects() {
    return (
        <div className='Projects' id='ProjecT'>
            <div className='Head'>
                <h1>My Projects</h1>
                {/* <img src={require('../image/Projects/PROJ.png')} alt='png'></img> */}
                <LazyLoadImage
                    src={require('../image/Projects/PROJ.png')}
                    alt='png'
                    effect="blur"
                />
            </div>
            <div className='items'>
                <div className='Box1'>
                    <a href='https://github.com/Jeevesh0207/YoutubeVideoDown' target='_blank' rel="noopener noreferrer">
                        <div className='Top'>
                            {/* <img src={require('../image/Projects/FC.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/Projects/FC.png')}
                                alt='png'
                                effect="blur"
                                height='100%'
                                width='100%'
                            />
                        </div>
                        <div className='Bottom'>
                            <h3>Attendance System</h3>
                            <p>Python,OpenCV,CNN,MySQL,Pandas and NumPy</p>
                        </div>
                    </a>
                </div>
                <div className='Box1'>
                    <a href='https://github.com/Jeevesh0207/YoutubeVideoDown' target='_blank' rel="noopener noreferrer">
                        <div className='Top'>
                            {/* <img src={require('../image/Projects/YT.webp')} alt='webp'></img> */}
                            <LazyLoadImage
                                src={require('../image/Projects/YT.webp')}
                                alt='webp'
                                effect="blur"
                                height='100%'
                                width='100%'
                            />
                        </div>
                        <div className='Bottom'>
                            <h3>YT Video Downloader</h3>
                            <p>Node Js, JavaScript</p>
                        </div>
                    </a>
                </div>
                <div className='Box1'>
                    <a href='https://github.com/Jeevesh0207/Netflix' target='_blank' rel="noopener noreferrer">
                        <div className='Top'>
                            {/* <img src={require('../image/Projects/NET.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/Projects/NET.png')}
                                alt='png'
                                effect="blur"
                                height='100%'
                                width='100%'
                            />
                        </div>
                        <div className='Bottom'>
                            <h3>Netflix Clone</h3>
                            <p>HTML, Css, Javascript and Swiperjs</p>
                        </div>
                    </a>
                </div>
                <div className='Box1'>
                    <a href='https://github.com/Jeevesh0207/EcommerceWeb' target='_blank' rel="noopener noreferrer">
                        <div className='Top'>
                            {/* <img src={require('../image/Projects/ECOM.webp')} alt='webp'></img> */}
                            <LazyLoadImage
                                src={require('../image/Projects/ECOM.webp')}
                                alt='webp'
                                effect="blur"
                                height='100%'
                                width='100%'
                            />
                        </div>
                        <div className='Bottom'>
                            <h3>Ecommerse Website</h3>
                            <p>React, React Router, Css,and JavaScript</p>
                        </div>
                    </a>
                </div>
                <div className='Box1'>
                    <a href='https://github.com/Jeevesh0207/WeatherReact' target='_blank' rel="noopener noreferrer">
                        <div className='Top'>
                            {/* <img src={require('../image/Projects/WEA.jpg')} alt='jpg'></img> */}
                            <LazyLoadImage
                                src={require('../image/Projects/WEA.jpg')}
                                alt='jpg'
                                effect="blur"
                                height='100%'
                                width='100%'
                            />
                        </div>
                        <div className='Bottom'>
                            <h3>Weather API</h3>
                            <p>React, Css, API and JavaScript</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects