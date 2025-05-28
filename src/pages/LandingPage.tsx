import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsList from '../components/ProjectsList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/landingPage.css';
import { useEffect } from 'react';

const LandingPage: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <main className="mainContent">
                <div className="greenBar greenBarTop"></div>
                <div className="aboutMeRow">
                    <div className="aboutMeText">
                        <h2 className='whiteText fontRajdhani fontStyleSemiBold fontSizeMedium'>Hei jeg heter</h2>
                        <h1><span className="whiteText fontBebasNeue fontStyleNormal fontSizeXLarge" id='bjarneName'>BJARNE</span> <span className="yellowText fontBebasNeue fontStyleNormal fontSizeXLarge">HAUGEN</span></h1>
                        <button
                            id="aboutMeButton"
                            className='fontBebasNeue fontSizeMedium'
                            onClick={() => window.location.hash = '#/aboutMe'}
                        >
                            Hvem er jeg?
                        </button>
                    </div>
                    <img id="Bjarne1" src="/bjarne.jpg" alt="Bjarne Haugen" />
                </div>
                <div className="greenBar greenBarBottom"></div>
                <div id="projects">
                    <h2 id="myProjects"><span className="whiteText fontBebasNeue fontSizeLarge">MINE</span> <span className="yellowText fontBebasNeue fontSizeLarge">PROSJEKTER</span> </h2>
                    <ProjectsList />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;
