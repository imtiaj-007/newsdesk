import React, { useContext } from 'react'
import { isMobile } from 'react-device-detect';
import ModeContext from '../context/ModeContext';
import Tools from './Tools';

const About = () => {
    const { mode } = useContext(ModeContext);

    return (
        <>
        {(isMobile || window.innerWidth < 450) && <Tools/>}
        
        <div className={`container-fluid about`} style={{backgroundColor: mode === 'light' ? "#f5f5f5" : "#000000", padding: "20px"}}>
            <div className={`container about-me bg-${mode} shadow-${mode} px-5 py-3 rounded`} data-bs-theme={mode} style={{width: '50%'}}>

                <div className={`text-${mode === 'dark' ? 'white' : 'dark'}`}>
                    <h3 className="text-center mb-3">About Me</h3>
                    <p>
                        Hello and thank you for visiting my news platform NewsDesk! <br />
                        I'm <strong>SK IMTIAJ UDDIN</strong>, pre-final year undergraduate student, currently pursuing B.Tech in
                        Information Technology, from Budge
                        Budge Institute of Technology, Kolkata. <br />
                        I'm showcasing my skills in Web Development by creating this platform for learning and
                        demonstration purpose only. Dive into the features, enjoy the API based news experience, and
                        feel free to navigate through the various sections.
                    </p>
                </div>

                <div class={`text-${mode === 'dark' ? 'white' : 'dark'} mt-4`}>

                    <h3>Disclaimer :</h3>
                    <p>
                        This platform has been developed solely for educational purposes to showcase web development
                        skills and technologies. I want to emphasize that this site is not intended for commercial use,
                        and it does not aim to infringe upon any copyright or intellectual property rights.
                        <ul>
                            <li>
                                All news are fetched from GNews API for demonstration and educational purpose only.
                            </li>
                            <li>
                                The information provided on this news platform is intended for informational purposes only. The completeness, timeliness, or reliability of the content is not guaranted. Readers are encouraged to cross-reference information from multiple sources and exercise critical thinking when consuming news.
                            </li>
                            <li>
                                Readers are responsible for verifying the accuracy and credibility of the information presented on this platform. 
                            </li>
                            <li>
                                Users are expected to engage with the platform responsibly and within the educational
                                context provided.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default About
