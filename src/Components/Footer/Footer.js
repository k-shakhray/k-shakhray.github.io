import React from 'react';
import './Footer.css'


export default function Footer() {
    return (
        <>
        <footer className='footer-container clearfix'>
            
            <div className='footer-contact'>
                <p>Contacts:</p>
                <ul>
                    <li>phone: <a href='tel: +380961246909'>(096) 124 69 09</a></li>
                    <li>mail: <a href='mailto: shakhray3@gmail.com'>shakhray3@gmail.com</a></li>
                    <li>telegram: <a target='_blank' rel="noopener noreferrer" href='https://t.me/klliim'>@klliim</a></li>
                </ul>
            </div>
            <div className='footer-copyright'>
            <p>&copy; 2022 Shakhray Klymentii. Nothing is protected</p>
            </div>
        </footer>
        </>
    )
}
