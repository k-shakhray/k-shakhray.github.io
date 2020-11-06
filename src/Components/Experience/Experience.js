import React from "react";
import './Experience.css'
import alnarIMG from '../../img/alnar_school_img.jpg'
import danIMG from '../../img/dan_it_img.JPG'
    

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
                        <span>Sep 2020 - Oct 2020</span>
                    </div>
                    <p>
                        Administering and maintaining pages with WordPress and ADM.tools
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
                        <span>Sep 2019 - now</span>
                    </div>
                    <p>
                        Studied front-end developer course at <a href='https://dan-it.com.ua/' rel="noopener noreferrer"> DAN.IT Education. </a>
                    </p>
                    <a target='_blank' href='https://dan-it.com.ua/' rel="noopener noreferrer">Go to website</a>
                </div>
            </div>


        </main>


    </>

    )
};