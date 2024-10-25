import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import Preeti from "../componet/Assets/preeti_diwakar.png";

import "./About.css";

const About = () => {
    return (
        <div>
            <h1 className="about">About</h1>
            <h3 className='about'>🌟 Passionate Web Developer Creating Engaging Experiences🌟</h3>
            <div className="box2" id="box2">
                <h1 className="h-about">About</h1>
                <div className="coding-img">
                    
                    <div className='image_style'>
                        <img src={Preeti}/>
                    </div>
                    <div className="men">
                        <p>
                        Hi, I'm Preeti Diwakar, a frontend developer from Kanpur. I have a strong foundation in web development, with technical skills in JavaScript, HTML, and CSS, along with basic knowledge of Python and C programming. I hold a Software Engineering Diploma from Navgurukul and have experience building user-friendly web applications. My passion lies in solving complex problems, continuously learning new technologies, and working on innovative projects that make a difference. Outside of work, I find joy in cooking and engaging in creative activities that fuel my inspiration. I am eager to join a dynamic team where I can continue to grow, contribute, and make a positive impact.

                        </p>
                    </div>
                </div>
                
                {/* CTA Button */}
                <button className="cta-button"><a href='https://drive.google.com/file/d/1fPvKW8tOQmmQ0VFC6NgNNDw5wkjWlqk8/view?usp=sharing'>Resume</a></button>
                
            </div>
        </div>
    );
};

export default About;