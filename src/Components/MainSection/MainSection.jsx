import './MainSection.css'
import reactLogo from '../images/react.png'
import jsLogo from '../images/js.png'
import bsLogo from '../images/bootstrap.png'
import linkedingLogo from '../images/linkedin.png'
import githubLogo from '../images/github.png'
import './MainSection.js'
import { Link } from 'react-router-dom';

export default function MainSection() {

    function changePosition(className) {
        const clickOnMe = document.querySelector('.clickOnMe');
        clickOnMe.style.animation = 'textFadeOut 1s ease-in';

        const randomTop = Math.floor(Math.random() * 80) + 10;
        const randomLeft = Math.floor(Math.random() * 80) + 10;
        const randomHeight = Math.floor(Math.random() * 20) + 10;
        const element = document.querySelector(`.${className}`);

        element.style.top = `${randomTop}%`;
        element.style.left = `${randomLeft}%`;
        element.style.height = `${randomHeight}%`;
    }

    return (
        <section className="mainSection d-flex flex-column pt-5">
            <div className='position-relative logoContainer align-items-center text-center'>
                <h1 className="mainTitle">
                    <span>H</span><span>i</span><span>,</span>{' '}
                    <span>I</span><span>'</span><span>m</span>{' '}
                    <span>P</span><span>a</span><span>u</span><span>l</span><span>i</span><span>u</span><span>s</span>
                </h1>
                <h3 className="mainSubtitle">Aspiring Front-End, React, Bootstrap Developer</h3>
                <h3 className="mainSubtitle">Currently focused on React and responsive web development</h3>
                <p className="mainText">Here you can see my projects and progress</p>

                <img onClick={() => changePosition('reactLogo')} data-speed="0.3" className='smallLogo reactLogo position-absolute end-90 bottom-80' src={reactLogo} alt="React" />
                <img onClick={() => changePosition('jsLogo')} data-speed="0.3" className='smallLogo jsLogo position-absolute start-50 bottom-0' src={jsLogo} alt="JavaScript" />
                <img onClick={() => changePosition('bsLogo')} data-speed="0.3" className='smallLogo bsLogo position-absolute' src={bsLogo} alt="Bootstrap" />
            </div>

            <div className='d-flex flex-column align-items-center pb-5'>
                <div>
                    <a href="https://www.linkedin.com/in/paulius-pikelis-755a16381/"><img className='refLogo m-1' src={linkedingLogo} alt="LinkedIn"/></a>
                    <a href="https://github.com/ppikelis99?tab=repositories"><img className='refLogo m-1' src={githubLogo} alt="GitHub"/></a>
                </div>
                <span><a href="#aboutContainer">Scroll down</a></span>
                <div>↓</div>
            </div>

            <div id='aboutContainer' className='containerAbout d-flex justify-content-center position-sticky top-0'>
                <div className='d-flex flex-column w-100 m-2'>

                    <h1 className='text-center mt-md-5'>About This Website</h1>
                    <div className='containerBox d-flex align-items-center justify-content-between m-1 m-md-5 border border-2 border-dark p-3'>

                        <div className='text-center'>
                            <h1 className='mb-5'>Technologie used</h1>
                            <p>React • Bootstrap • JavaScript</p>
                        </div>

                        <div className='d-flex flex-column flex-md-row align-items-center justify-content-center'>
                            <img className='aboutLogo' src={reactLogo} alt="React" />
                            <img className='aboutLogo' src={jsLogo} alt="JavaScript" />
                            <img className='aboutLogo' src={bsLogo} alt="Bootstrap" />
                        </div>

                    </div>
                    <div className='containerBox d-flex flex-column flex-md-row align-items-center justify-content-between align-items-end m-1 m-md-5 border border-2 border-dark p-3'>
                        
                        <div className='d-flex justify-content-start'>
                            <a href="https://www.linkedin.com/in/paulius-pikelis-755a16381/"><img className='urlSize m-5' src={linkedingLogo} alt="LinkedIn"/></a>
                            <a href=""><img className='urlSize m-5' src={githubLogo} alt="GitHub"/></a>
                        </div>

                        <div className='text-center'>
                            <h1 className='mb-5'>Built by <span>Paulius Pikelis</span></h1>
                            <p>a passionate Front-End Developer</p>
                            <p className=''>Has a little experience with backend technologies like Django</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='containerProjects d-flex flex-column align-items-center justify-content-center'>

                <div className='d-flex flex-column gap-5 align-items-center containerBox border border-2 border-dark p-3'>
                    <h1>Projects</h1>
                    <p className='fs-3'>Here you can see some of my projects with live demo and github links</p>
                    <Link to="/works" className='clickMoreDetails fs-2'>Click here to see more details</Link>
                </div>

                <div>
                    <div className='p-2 mt-5 d-flex gap-5'>
                        <a href="https://www.linkedin.com/in/paulius-pikelis-755a16381/"><img className='projectImgUrl m-1' src={linkedingLogo} alt="LinkedIn"/></a>
                        <a href="https://github.com/ppikelis99?tab=repositories"><img className='projectImgUrl m-1' src={githubLogo} alt="GitHub"/></a>
                    </div>
                </div>

            </div>
        </section>
    )
}