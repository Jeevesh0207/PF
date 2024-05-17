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
                    <a href='https://github.com/Jeevesh0207/Melody_Music_App' target='_blank' rel="noopener noreferrer">
                        <div className='Top'>
                            {/* <img src={require('../image/Projects/FC.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/Projects/Melody.jpeg')}
                                alt='png'
                                effect="blur"
                                height='100%'
                                width='100%'
                            />
                        </div>
                        <div className='Bottom'>
                            <h3>Melody Music</h3>
                            <p>React Native, Node Js, Express, MongoDB, and a dash of API magic!</p>
                        </div>
                    </a>
                </div>
                <div className='Box1'>
                    <a href='https://github.com/Jeevesh0207/Melody_Music' target='_blank' rel="noopener noreferrer">
                        <div className='Top'>
                            {/* <img src={require('../image/Projects/FC.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/Projects/Melody_web.jpeg')}
                                alt='png'
                                effect="blur"
                                height='100%'
                                width='100%'
                            />
                        </div>
                        <div className='Bottom'>
                            <h3>Melody Music</h3>
                            <p>React Js, Node Js, Express, MongoDB, and a dash of API magic!</p>
                        </div>
                    </a>
                </div>
                <div className='Box1'>
                    <a href='https://github.com/Jeevesh0207/Weather_App' target='_blank' rel="noopener noreferrer">
                        <div className='Top'>
                            {/* <img src={require('../image/Projects/FC.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/Projects/Weather_app.jpeg')}
                                alt='png'
                                effect="blur"
                                height='100%'
                                width='100%'
                            />
                        </div>
                        <div className='Bottom'>
                            <h3>Weather App</h3>
                            <p>React Native, A dash of API magic!</p>
                        </div>
                    </a>
                </div>
                <div className='Box1'>
                    <a href='https://github.com/Jeevesh0207/ytdlfrontend' target='_blank' rel="noopener noreferrer">
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
                            <h3>Youtube Video Downloader</h3>
                            <p>React JS, Node JS, Express, Socket IO, and a sprinkle of API magic!</p>
                        </div>
                    </a>
                </div>
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