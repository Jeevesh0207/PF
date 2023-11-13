import React from 'react'
import resume from '../Resume/R.pdf'
function Header() {
    
    return (
        <div className='Header'>
            <div className='Name'>
                <h1><span>Nice to see you,</span> I am <span>Jeevesh Rai</span></h1>
                <p>A highly skilled and motivated web developer
                    and competitive programmer.</p>
                <a href={resume} target='_blank' download='Jeevesh_Resume' rel="noreferrer" > <button>Download Resume</button>    </a>
            </div>
        </div>
    )
}

export default Header