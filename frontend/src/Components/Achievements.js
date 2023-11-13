import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Achievements() {
    return (
        <div className='Achievements'>
            <div className='Head'>
                <h1>Achievements</h1>
                {/* <img src={require('../image/Achievements/ACHI.png')} alt='png'></img> */}
                <LazyLoadImage
                    src={require('../image/Achievements/ACHI.png')}
                    alt='png'
                    effect="blur"
                />
            </div>
            <div className='items'>
                <ul>
                    <li>
                        <div className='A'>
                            {/* <img src={require('../image/Achievements/GL.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/Achievements/GL.png')}
                                alt='png'
                                effect="blur"
                            />
                            <p>5 star, 2000+ rating on CodeChef</p>
                        </div>
                    </li>
                    <li>
                        <div className='A'>
                            {/* <img src={require('../image/Achievements/GL.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/Achievements/GL.png')}
                                alt='png'
                                effect="blur"
                            />
                            <p>Specialist on Codeforces</p>
                        </div>
                    </li>
                    <li>
                        <div className='A'>
                            {/* <img src={require('../image/Achievements/GL.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/Achievements/GL.png')}
                                alt='png'
                                effect="blur"
                            />
                            <p>1700+ rating on Leetcode</p>
                        </div>
                    </li>
                    <li>
                        <div className='A'>
                            {/* <img src={require('../image/Achievements/GL.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/Achievements/GL.png')}
                                alt='png'
                                effect="blur"
                            />
                            <p>CodeChef Global rank 14 in Starters 38</p>
                        </div>
                    </li>
                    <li>
                        <div className='A'>
                            {/* <img src={require('../image/Achievements/GL.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/Achievements/GL.png')}
                                alt='png'
                                effect="blur"
                            />
                            <p>CodeChef Global rank 8 in Starters 39</p>
                        </div>
                    </li>
                    <li>
                        <div className='A'>
                            {/* <img src={require('../image/Achievements/GL.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/Achievements/GL.png')}
                                alt='png'
                                effect="blur"
                            />
                            <p>Google KickStart Round E - rank 1555/10000+</p>
                        </div>
                    </li>
                    <li>
                        <div className='A'>
                            {/* <img src={require('../image/Achievements/GL.png')} alt='png'></img> */}
                            <LazyLoadImage
                                src={require('../image/Achievements/GL.png')}
                                alt='png'
                                effect="blur"
                            />
                            <p>Facebook Hacker Cup Round 1 qualified</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Achievements