import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsList from '../components/projectsList';
import Footer from '../components/footer';
import Header from '../components/header';

const LandingPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="mainContent">
                <div className="aboutMeRow">
                    <div className="aboutMeText">
                        <h2 className='whiteText'>Welcome to My Portfolio</h2>
                        <h1><span className="whiteText">BJARNE</span> <span className="yellowText">HAUGEN</span></h1>
                        <p className='whiteText'> her kommer det tekst </p>
                        <button id="AboutMeButton"> Hvem er jeg?</button>
                    </div>
                    <img id="Bjarne1" src="src/assets/bjarne.jpg" alt="Bjarne Haugen" />
                </div>
                <div>
                    <h2><span className="whiteText">MINE</span> <span className="yellowText">PROSJEKTER</span> </h2>
                    <ProjectsList />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;
