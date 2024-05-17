import React, { useState } from 'react'
import { Link } from 'react-scroll'

import Song from '../song/music.mp3'
import { LazyLoadImage } from 'react-lazy-load-image-component'


function Navbar() {

    const [audio] = useState(new Audio(Song))
    let on = false;
    const onClickPlay = () => {
        const song_id = document.getElementById("song_id");
        on = !on
        console.log(on)
        if (on) {
            song_id.name = "pause-circle-outline";
            song_id.style.color = "#489d4a"
        }
        else {
            song_id.name = "musical-notes-outline";
            song_id.style.color = "#000"
        }
        on ? audio.play() : audio.pause();
    }
    const Openmenu = () => {

        const res_menu = document.getElementsByClassName('res-menu')[0].style.display;
        const menubtn = document.getElementById('menubtn');
        if (res_menu === "" || res_menu === "none") {
            document.getElementsByClassName('res-menu')[0].style.display = "block";
            menubtn.className = "fa-solid fa-caret-up";
        }
        else {
            document.getElementsByClassName('res-menu')[0].style.display = "none";
            menubtn.className = "fa-solid fa-caret-down"
        }

    }
    

    return (
        <div className='Navbar'>
            <div className='Left'>
                <div className='L'>
                    {/* <img src={require('../image/logo/logo2.png')} alt='png'></img> */}
                    <LazyLoadImage
                        src={require('../image/logo/logo2.png')}
                        alt='png'
                        effect="blur"
                    />
                </div>
                <div className='R' id='Nav_Big'>
                    <ul>
                        <li><Link
                            activeClass="active"
                            to="HomE"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Home</Link></li>
                        <li><Link
                            activeClass="active"
                            to="AbouT"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >About</Link></li>
                        <li><Link
                            activeClass="active"
                            to="ProjecT"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Project</Link></li>
                        <li><Link
                            activeClass="active"
                            to="ExperiencE"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Experience</Link></li>
                        <li><Link
                            activeClass="active"
                            to="CertificatE"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Certificate</Link></li>
                    </ul>
                    <i className="fa-solid fa-caret-down" onClick={Openmenu} id='menubtn'></i>
                    <div className='res-menu'>
                        <ul>
                            <li><Link
                                activeClass="active"
                                to="HomE"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >Home</Link><ion-icon name="chevron-forward-outline"></ion-icon></li>
                            <li><Link
                                activeClass="active"
                                to="AbouT"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >About</Link><ion-icon name="chevron-forward-outline"></ion-icon></li>
                            <li><Link
                                activeClass="active"
                                to="ProjecT"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >Project</Link><ion-icon name="chevron-forward-outline"></ion-icon></li>
                            <li><Link
                                activeClass="active"
                                to="ExperiencE"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >Experience</Link><ion-icon name="chevron-forward-outline"></ion-icon></li>
                            <li><Link
                                activeClass="active"
                                to="CertificatE"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >Certificate</Link><ion-icon name="chevron-forward-outline"></ion-icon></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='Right'>
                {/* <ion-icon name="sunny-outline" ></ion-icon> */}
                <ion-icon name="musical-notes-outline" onClick={onClickPlay} id="song_id"></ion-icon>
                {/* <ion-icon name="notifications-outline"></ion-icon> */}
                <Link
                    activeClass="active"
                    to="ContacT"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <button >Contact Me</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar