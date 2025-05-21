import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsList from '../components/ProjectsList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/landingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="mainContent">
                <div className="aboutMeRow">
                    <div className="aboutMeText">
                        <h2 className='whiteText fontRajdhani fontStyleSemiBold fontSizeMedium'>Hei jeg heter</h2>
                        <h1><span className="whiteText fontBebasNeue fontStyleNormal fontSizeXLarge">BJARNE</span> <span className="yellowText fontBebasNeue fontSizeXLarge">HAUGEN</span></h1>
                        <p className='whiteText fontRajdhani fontStyleNormal fontSizeMedium'> her kommer det tekst </p>
                        <button
                            id="aboutMeButton"
                            className='fontBebasNeue fontStyleNormal fontSizeMedium'
                            onClick={() => window.location.hash = '#/aboutMe'}
                        >
                            Hvem er jeg?
                        </button>
                    </div>
                    <img id="Bjarne1" src="/bjarne.jpg" alt="Bjarne Haugen" />
                </div>
                <div>
                    <h2 id="myProjects"><span className="whiteText fontBebasNeue fontSizeXLarge">MINE</span> <span className="yellowText fontBebasNeue fontSizeXLarge">PROSJEKTER</span> </h2>
                    <ProjectsList />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;
