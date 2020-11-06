import React from "react";
import './About.css'
import resumeIMG from '../../img/resume_photo.jpg'


export default function About() {
        return (
    <>
    
    <h2 className='about-title'>A little bit about myself</h2>
    <hr className='about-hr'/>
    
    <main className='about-main-container'>
        <div className='about-photo-container'>
        <img className='about-photo' alt='portrait' src={resumeIMG}></img>
        </div>
        <h3 className='about-name'>
            Shakhray Klymentii
        </h3>
        <div className='about-description-container'>
            <p className='about-descriprion-item'>
            A young web developer is looking for a job in a company where he could reveal his potential,
            gain a lot of experience and advance in the commercial work environment.
            </p>
            <p className='about-descriprion-item'>
            The employer receives a well-mannered, modest, stress-resistant and diligent employee 
            who can fit into any team.
            </p>
            <p className='about-description-quotes'>"Since brevity is the soul of wit, аnd tediousness the limbs and outward flourishes, I will be brief"
            <span>(W. Shakespeare, Hamlet, act II, sc. 2)</span>
            </p>
        </div>
    </main>
    </>
        )    
};