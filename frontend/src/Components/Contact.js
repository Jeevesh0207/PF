import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component'
function Contact() {

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Message, setMessage] = useState("")
    const [Load,setLoad]=useState(false)
    const notify = (type) => {
        switch (type) {
            case 'success':
                toast.success("Submitted", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                break;
            case 'error':
                toast.error("Something went wrong..", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                break;
            default:
                toast("Try Again....", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                break;
        }

    }

    const SendHandler = async (e) => {
        e.preventDefault()
        setLoad(true)
        const ConData = {
            name: Name,
            email: Email,
            message: Message
        }
        await axios.post('https://pf-f0fx.onrender.com/contact', ConData)
            .then((res) => {
                notify('success')
                setLoad(false)
                document.getElementById("Form_id").reset()
            })
            .catch(err => {
                notify('error')
                setLoad(false)
                console.log(err)
            })
    }

    return (
        <div className='Contact' id="ContacT">
            <div className='Head'>
                <h1>Contact Me</h1>
                {/* <img src={require('../image/Contact/CALL.png')} alt='png'></img> */}
                <LazyLoadImage
                    src={require('../image/Contact/CALL.png')} 
                    alt='png'
                    effect="blur"
                />

            </div>
            <div className='item'>
                <div className='L'>
                    <iframe 
                    src="https://lottie.host/?file=259ed0f4-b62e-4ddd-b321-8492b14a3d07/DN8gOAdlOq.json" 
                    title="contact"
                    loading='lazy'
                    effect='blur'
                    ></iframe>
                </div>
                <div className='R'>
                    <ToastContainer />
                    <form onSubmit={SendHandler} id='Form_id'>
                        <div className='Box Name'>
                            <p>Name</p>
                            <input type='text' onChange={(e) => { setName(e.target.value) }} required ></input>
                            <i className="fa-solid fa-address-card"></i>
                        </div>
                        <div className='Box Gmail'>
                            <p>Email</p>
                            <input type='email' onChange={(e) => { setEmail(e.target.value) }} required ></input>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className='Box Msg'>
                            <p>Message</p>
                            <textarea onChange={(e) => { setMessage(e.target.value) }} required></textarea>
                            <i className="fa-solid fa-message"></i>
                        </div>
                        <div className='btn'>
                            <button type='submit'>Submit</button>
                            {
                               Load && <div className='Loader'></div>
                            }
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact