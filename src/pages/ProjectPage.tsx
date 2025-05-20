import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../projects.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/projectPage.css';

const ProjectPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => String(p.id) === String(id));
    const [currentImg, setCurrentImg] = useState(0);

    if (!project) {
        return (
            <div>
                <Header />
                <main className="projectPage-main not-found">
                    <h2 className="yellowText fontBebasNeue fontSizeLarge">Prosjekt ikke funnet</h2>
                    <button onClick={() => navigate(-1)} className="fontBebasNeue fontStyleNormal fontSizeMedium projectPage-backBtn">Tilbake</button>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <main className="projectPage-main">
                <h1 className="yellowText fontBebasNeue fontSizeXLarge">{project.name}</h1>
                {/* Single Gallery Image with Dots */}
                <div className="projectPage-gallery">
                    <img
                        className="projectPage-gallery-img"
                        src={project.gallery?.[currentImg] || project.photo}
                        alt={project.name + ' bilde ' + (currentImg + 1)}
                    />
                    <div className="projectPage-gallery-dots">
                        {project.gallery && project.gallery.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImg(idx)}
                                className={`projectPage-dot${idx === currentImg ? ' active' : ''}`}
                                aria-label={`Bilde ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
                {/* Symbols */}
                <div className="symbols projectPage-symbols">
                    {project.symbols && project.symbols.map((symbol) => (
                        <img
                            key={symbol}
                            src={`/${symbol}.svg`}
                            alt={symbol}
                            title={symbol}
                        />
                    ))}
                </div>
                {/* Background, Development, Solution */}
                <div className="projectPage-sections">
                    <h2 className="yellowText fontBebasNeue fontSizeLarge">Bakgrunn</h2>
                    <p className="whiteText fontRajdhani fontSizeMedium">{project.background}</p>
                    <h2 className="yellowText fontBebasNeue fontSizeLarge">Utvikling</h2>
                    <p className="whiteText fontRajdhani fontSizeMedium">{project.development}</p>
                    <h2 className="yellowText fontBebasNeue fontSizeLarge">Løsning</h2>
                    <p className="whiteText fontRajdhani fontSizeMedium">{project.solution}</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectPage;
