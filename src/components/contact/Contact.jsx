import React , {useRef} from 'react';
import './contact.scss' ;

export default function Contact() {

    const email = useRef();
    const add = useRef();

    const handleBtn = (e) => {
        e.preventDefault();

    }

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" srcset="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleBtn}>
                    <input type="email" id='emailId' placeholder='Email' ref={email} />
                    <textarea placeholder='Message'ref={add} id='textA'></textarea>
                    <button type='submit'>Send</button>
                </form>

            </div>
        </div>
    );
}
