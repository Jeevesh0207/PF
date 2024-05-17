import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function CPSite() {
    return (
        <div className='CPSite'>
            <div className='Head'>
                <h1>Coding Profiles</h1>
                {/* <img src={require('../image/CP/CP.png')} alt='png'></img> */}
                <LazyLoadImage
                    src={require('../image/CP/CP.png')}
                    alt='png'
                    effect="blur"
                />
            </div>
            <div className='items'>
                <ul>
                    <li><a href='https://www.codechef.com/users/codeby_klaus' target="_blank" rel="noopener noreferrer">
                        {/* <img src={require('../image/CP/CC.png')} alt='png'></img> */}
                        <LazyLoadImage
                            src={require('../image/CP/CC.png')}
                            alt='png'
                            effect="blur"
                        />
                    </a></li>
                    <li><a href='https://codeforces.com/profile/codeby_klaus' target="_blank" rel="noopener noreferrer">
                        {/* <img src={require('../image/CP/CF.png')} alt='png'></img> */}
                        <LazyLoadImage
                            src={require('../image/CP/CF.png')}
                            alt='png'
                            effect="blur"
                        />
                    </a></li>
                    <li><a href='https://leetcode.com/rabbit0207/' target="_blank" rel="noopener noreferrer">
                        {/* <img src={require('../image/CP/LC.png')} alt='png'></img> */}
                        <LazyLoadImage
                            src={require('../image/CP/LC.png')}
                            alt='png'
                            effect="blur"
                        />
                    </a></li>
                    <li><a href='https://auth.geeksforgeeks.org/user/codeby_klaus' target="_blank" rel="noopener noreferrer">
                        {/* <img src={require('../image/CP/GFG.png')} alt='png'></img> */}
                        <LazyLoadImage
                            src={require('../image/CP/GFG.png')}
                            alt='png'
                            effect="blur"
                        />
                    </a></li>
                    <li><a href='https://www.codechef.com/users/codeby_klaus' target="_blank" rel="noopener noreferrer">
                        {/* <img src={require('../image/CP/AT.jpg')} alt='jpg'></img> */}
                        <LazyLoadImage
                            src={require('../image/CP/AT.jpg')}
                            alt='jpg'
                            effect="blur"
                        />
                    </a></li>

                </ul>
            </div>
        </div>
    )
}

export default CPSite