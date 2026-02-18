import './Works.css';
import githubLogo from '../images/github.png';
import demo from '../images/demo.png';
export default function Works() {
    return (
        <div className="w-100 workContainer text-center p-5">
            
            <div className='d-flex flex-column align-items-center'>
                <div className="mb-4">
                    <div className="">
                        <h1>Works</h1>
                        <p>Here you can see some of my projects with github links</p>
                    </div>
                </div>

                <div className="d-flex justify-content-start">
                    <div className="projectBox border border-2 border-dark p-3 my-2">
                        <h1>Single Page Application (SPA)</h1>
                        <p className='projectDescription pb-3 pt-3'>Responsive single-page application (SPA) This project focuses on complex layouts, interactive elements, and clean HTML.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="https://github.com/ppikelis99/Single-Page-Application"><img className='refLogo m-1' src={githubLogo} alt="GitHub"/></a>
                            <a href="https://pauliusp.lt/spa/"><img className='refLogo m-1' src={demo} alt="Demo"/></a>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-start">
                    <div className="projectBox border border-2 border-dark p-3 my-2 m-md-5">
                        <h1>eShop Project</h1>
                        <p className='projectDescription pb-3 pt-3'>A modern, multi-page e-commerce website designed for a seamless shopping experience. Users can browse products, manage their shopping cart, and view detailed product information in real-time.</p>
                        <a href="https://github.com/ppikelis99/eShop"><img className='refLogo m-1' src={githubLogo} alt="GitHub"/></a>
                        <a href="https://pauliusp.lt/eshop/"><img className='refLogo m-1' src={demo} alt="Demo"/></a>
                    </div>
                </div>

                <div className="d-flex justify-content-start">
                    <div className="projectBox border border-2 border-dark p-3 my-2 m-md-5">
                        <h1>Project 3</h1>
                        <p className='projectDescription pb-3 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                        <a href=""><img className='refLogo m-1' src={githubLogo} alt="GitHub"/></a>
                        <a href=""><img className='refLogo m-1' src={demo} alt="Demo"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}