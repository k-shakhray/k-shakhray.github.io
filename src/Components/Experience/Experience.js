import React from "react";
import './Experience.css'
import alnarIMG from '../../img/alnar_school_img.jpg'
import danIMG from '../../img/dan_it_img.JPG'
import quantumIMG from '../../img/quantum-system.JPG'
import forkioIMG from '../../img/layout-example.jpg'
import hamIMG from '../../img/ham-layout.jpg'

export default function Experience() {
    return ( 
    <>
        <h2 className='experience-title'>My experience </h2>
        <hr className='experience-hr'/>

        <main className='experience-card-container'>


            <div className='experience-card'>
                <div className='experience-card-illustration'>
                    <a target='_blank' href='http://supermind.com.ua/' rel="noopener noreferrer">
                        <img alt='alnar, site' src={alnarIMG}/>
                        <span>
                            Go to website
                        </span>
                    </a>
                </div>
                <div className='experience-card-description'>
                    <div className='experience-card-title'>
                        <h3>
                            Site web-support
                        </h3>
                        <span>Aug 2020 - Oct 2020</span>
                    </div>
                    <p>
                        Provided assistance in maintaining the site, helped to improve and change
                        the content. Not a commercial experience, I just had an opportunity to test
                        my skills in a real project.
                    </p>
                    <a target='_blank' href='http://supermind.com.ua/' rel="noopener noreferrer">Go to website</a>
                </div>
            </div>


            <div className='experience-card'>
                <div className='experience-card-illustration'>
                    <a target='_blank' href='https://dan-it.com.ua/' rel="noopener noreferrer">
                        <img alt='dan it, site' src={danIMG}/>
                        <span>
                            Go to website
                        </span>
                    </a>
                </div>
                <div className='experience-card-description'>
                    <div className='experience-card-title'>
                        <h3>
                            Front-end course at DAN.IT
                        </h3>
                        <span>Sep 2019 - Oct 2020</span>
                    </div>
                    <p>
                        Studied front-end developer course at <a href='https://dan-it.com.ua/' rel="noopener noreferrer"> DAN.IT Education. </a>
                         During the course, I gained knowledge of layout
                        using HTML5 and CSS3. Learned the JavaScript including the latest
                        ECMAScript 6 syntax, React library and JQuery.
                    </p>
                    <a target='_blank' href='https://dan-it.com.ua/' rel="noopener noreferrer">Go to website</a>
                </div>
            </div>


            <div className='experience-card'>
                <div className='experience-card-illustration'>
                    <a target='_blank' href='https://k-shakhray-portfolio.github.io/k-shakhray-portfolio/quantum-system/' rel="noopener noreferrer">
                        <img alt='quantum-system, site' src={quantumIMG}/>
                        <span>
                            Go to website
                        </span>
                    </a>
                </div>
                <div className='experience-card-description'>
                    <div className='experience-card-title'>
                        <h3>
                            Quantum System. Copy
                        </h3>
                        <span>Example page</span>
                    </div>
                    <p>
                        Just an example. Page copied from here <a href='https://quantumsys.ru/' rel="noopener noreferrer">Quantum System</a>. Made sending the form to mail using PHPmailer
                    </p>
                    <a target='_blank' href='https://k-shakhray-portfolio.github.io/k-shakhray-portfolio/quantum-system/' rel="noopener noreferrer">Go to website</a>
                </div>
            </div>



            <div className='experience-card'>
                <div className='experience-card-illustration'>
                    <a target='_blank' href='https://k-shakhray-portfolio.github.io/k-shakhray-portfolio/step_project_forkio/dist/index.html' rel="noopener noreferrer">
                        <img alt='layout example, site' src={forkioIMG}/>
                        <span>
                            Go to website
                        </span>
                    </a>
                </div>
                <div className='experience-card-description'>
                    <div className='experience-card-title'>
                        <h3>
                            Fork App
                        </h3>
                        <span>Example page</span>
                    </div>
                    <p>
                        Just an example page. Was done according to the provided layout in Photoshop
                    </p>
                    <a target='_blank' href='https://k-shakhray-portfolio.github.io/k-shakhray-portfolio/step_project_forkio/dist/index.html' rel="noopener noreferrer">Go to website</a>
                </div>
            </div>



            <div className='experience-card'>
                <div className='experience-card-illustration'>
                    <a target='_blank' href='https://k-shakhray-portfolio.github.io/k-shakhray-portfolio/step_project_ham/index.html' rel="noopener noreferrer">
                        <img alt='layout example, site' src={hamIMG}/>
                        <span>
                            Go to website
                        </span>
                    </a>
                </div>
                <div className='experience-card-description'>
                    <div className='experience-card-title'>
                        <h3>
                            The Ham
                        </h3>
                        <span>Example page</span>
                    </div>
                    <p>
                        Just an example page. Was done according to the provided layout in Photoshop
                    </p>
                    <a target='_blank' href='https://k-shakhray-portfolio.github.io/k-shakhray-portfolio/step_project_ham/index.html' rel="noopener noreferrer">Go to website</a>
                </div>
            </div>


        </main>


    </>

    )
};