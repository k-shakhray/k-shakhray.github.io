import React from "react";
import './Skills.css'

export default class Skills extends React.Component {
    
    render() {
        return (
            <>

    <h2 className='about-title'>Some of my skills</h2>
    <hr className='about-hr'/>
    
    <main className='skills-main-container'>

        <div className='skills-item'>

            <div className='skills-item-header'>
            <span className='skills-item-title'>html</span>
            <div className='progress-container'>
                <div className='progress-item progress-html'></div>
            </div>
            </div>
            <div className='skill-delimiter'></div>

            <p className='skills-item-description'>
                HTML5 • EMMET • SVG • Font Awesome
            </p>

        </div>


        <div className='skills-item'>

            <div className='skills-item-header'>
            <span className='skills-item-title'>css</span>
            <div className='progress-container'>
                <div className='progress-item progress-css'></div>
            </div>
            </div>
            <div className='skill-delimiter'></div>

            <p className='skills-item-description'>
                CSS3 • SASS • LESS • Flexbox • Grid Layout • CSS Sprites • Parallax • Bootsrap • CSS Animations 
                • BEM • Mobile First • Responsive Web Design • Adaptive Web Design
                
            </p>

        </div>


        <div className='skills-item'>

            <div className='skills-item-header'>
            <span className='skills-item-title'>js</span>
            <div className='progress-container'>
                <div className='progress-item progress-js'></div>
            </div>
            </div>
            <div className='skill-delimiter'></div>

            <p className='skills-item-description'>
            ECMAScript 6 • JQuery • React • JSON • Bootstrap
            </p>

        </div>


        <div className='skills-item'>

            <div className='skills-item-header'>
            <span className='skills-item-title'>other</span>
            <div className='progress-container'>
                <div className='progress-item progress-other'></div>
            </div>
            </div>
            <div className='skill-delimiter'></div>

            <p className='skills-item-description'>
                Git • WordPress • Photoshop • Illustrator
            </p>

        </div>
    </main>
    
    </>
        )
    }
}

