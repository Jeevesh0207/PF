import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Container1() {

    return (
        <div className='Container1' id='AbouT'>
            <div className='Head'>
                <h1>About
                </h1>
                {/* <img src={require('../image/About/INFO.png')} alt='png'></img> */}
                <LazyLoadImage
                    src={require('../image/About/INFO.png')}
                    alt='png'
                    effect="blur"
                />

            </div>
            <div className='about'>
                <div className='L'>
                    {/* <img src={require('../image/About/Abo1.webp')} alt='webp'></img> */}
                    {/* <img src={require('../image/About/Abo.webp')} alt='webp'></img> */}
                    <iframe 
                    src="https://lottie.host/?file=0c7f72d2-7b29-43f3-ab27-5e78a040711d/obFrfviCON.json" 
                    title='about'
                    loading='lazy'
                    effect='blur'
                    ></iframe>

                </div>
                <div className='R'>
                    <div className='Collage'>
                        <div className='image'>
                            {/* <img src={require('../image/About/STU_2.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/About/STU_2.png')}
                                alt='png'
                                effect="blur"
                            />
                        </div>
                        <div className='info'>
                            <h1>
                                B.Tech
                            </h1>
                            <p>
                                Currently I am Pursuing my B.Tech Degree in CSE from Indian Institute of Information Technology Bhagalpur
                            </p>
                        </div>
                    </div>

                    <div className='Class12'>
                        <div className='image'>
                            {/* <img src={require('../image/About/Class12.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/About/Class12.png')}
                                alt='png'
                                effect="blur"
                            />
                        </div>
                        <div className='info'>
                            <h1>
                                Class 12
                            </h1>
                            <p>
                                I completed my 12<sup>th</sup> from Innovative Minds Academy, Ayodhya
                            </p>

                        </div>
                    </div>

                    <div className='Class10'>
                        <div className='image'>
                            {/* <img src={require('../image/About/Class10.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/About/Class10.png')}
                                alt='png'
                                effect="blur"
                            />
                        </div>
                        <div className='info'>
                            <h1>
                                Class 10
                            </h1>
                            <p>
                                I completed my 10<sup>th</sup> from Jawahar Navodaya Vidyalaya, Dabhasemar Faizabad
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Container1