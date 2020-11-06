import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'



export default function Header() {
    return (

        <>
            <header className='header-bg'>
                <h1 className='header-heading'>
                    <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-code-slash mr-2" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule='evenodd' fill='DarkOrange'
                              d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                    </svg>
                     HTML, CSS, JS, Junior Developer
                </h1>
                
                <div className='header-router'>
                    <NavLink to='/' exact={true} activeClassName="header-router-active">About me</NavLink>
                    <NavLink to='/skills' activeClassName="header-router-active">Skills</NavLink>
                    <NavLink to='/experience' activeClassName="header-router-active">Experience</NavLink>
                </div>
            </header>
        </>
    )
}