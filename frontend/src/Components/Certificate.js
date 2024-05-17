import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Certificate() {

    return (
        <div className='Certificate' id='CertificatE'>
            <div className='Head'>
                <h1>Certificate</h1>
                {/* <img src={require('../image/Certificate/CER.png')} alt='png'></img> */}
                <LazyLoadImage
                    src={require('../image/Certificate/CER.png')}
                    alt='png'
                    effect="blur"
                />
            </div>
            <div className='item'>
                <div className='Box'>
                    {/* <img src={require('../image/Certificate/LGM.jpeg')} alt='jpeg'></img> */}
                    <LazyLoadImage
                        src={require('../image/Certificate/LGM.jpeg')}
                        alt='jpeg'
                        effect="blur"
                        height='100%'
                        width='100%'
                    />
                    <div className='info'>
                        <p>Lets Grow More</p>
                        <a href={require('../image/Certificate/LGM.jpeg')} target="_blank" rel="noopener noreferrer"><button>Open</button></a>
                    </div>
                </div>
                <div className='Box'>
                    {/* <img src={require('../image/Certificate/SPRK.png')} alt='png'></img> */}
                    <LazyLoadImage
                       src={require('../image/Certificate/SPRK.png')} 
                       alt='png'
                        effect="blur"
                        height='100%'
                        width='100%'
                    />
                    <div className='info'>
                        <p>The Spark Foundation</p>
                        <a href={require('../image/Certificate/SPRK.png')} target="_blank" rel="noopener noreferrer"><button>Open</button></a>
                    </div>
                </div>
                <div className='Box'>
                    {/* <img src={require('../image/Certificate/GK.png')} alt='png'></img> */}
                    <LazyLoadImage
                        src={require('../image/Certificate/GK.png')} 
                        alt='png'
                        effect="blur"
                        height='100%'
                        width='100%'
                    />
                    <div className='info'>
                        <p>Google Kickstart</p>
                        <a href={require('../image/Certificate/GK.png')} target="_blank" rel="noopener noreferrer"><button>Open</button></a>
                    </div>
                </div>
                <div className='Box'>
                    {/* <img src={require('../image/Certificate/FLIP.jpeg')} alt='png'></img> */}
                    <LazyLoadImage
                        src={require('../image/Certificate/FLIP.jpeg')} 
                        alt='jpeg'
                        effect="blur"
                        height='100%'
                        width='100%'
                    />
                    <div className='info'>
                        <p>Flipkart Grid</p>
                        <a href={require('../image/Certificate/FLIP.jpeg')} target="_blank" rel="noopener noreferrer"><button>Open</button></a>
                    </div>
                </div>
                <div className='Box'>
                    {/* <img src={require('../image/Certificate/CUP.png')} alt='png'></img> */}
                    <LazyLoadImage
                        src={require('../image/Certificate/CUP.png')} 
                        alt='png'
                        effect="blur"
                        height='100%'
                        width='100%'
                    />
                    <div className='info'>
                        <p>Hacker Cup</p>
                        <a href={require('../image/Certificate/CUP.png')} target="_blank" rel="noopener noreferrer"><button>Open</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificate