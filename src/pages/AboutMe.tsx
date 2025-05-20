import React from 'react';
import '../css/aboutMe.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutMe: React.FC = () => {
    return (
        <div>
            <Header />
            <div id="aboutMePage">
                <div id="aboutMePageInfo" className="aboutMeRow">
                    <h1 className='yellowText fontBebasNeue fontSizeXLarge'>Litt om meg</h1>
                    <p className='whiteText fontRajdhani fontStyleNormal fontSizeMedium'>Hello! I'm [Your Name], a passionate developer with a background in [Your Background].</p>
                </div>

                <div id="pictureInformation">
                    <img id="Bjarne2" src="/bjarne.jpg" alt="Bjarne Haugen" />
                    <div className='contactInformation'>
                        <img className="icon" src="/phone.svg" alt="phone" />
                        <h3 className="whiteText fontInter">+ 47 93 80 15 64 </h3>
                    </div>
                    <div className='contactInformation'>
                        <img className="icon" src="/email.svg" alt="email" />
                        <h3 className="whiteText fontInter">bjarnewilhelmhaugen@hotmail.com</h3>
                    </div>
                </div>
            </div>

            <ul id="cvList">
                <li className="yellowText fontBebasNeue fontSizeMedium">Utdanning
                    <ul>
                        <li className="whiteText fontRajdhani fontSizeSmall">
                            <span className="fontStyleSemiBold">UTDANNELSE</span><br />
                            Bachelor Informasjonsteknologi (180 sp) | Høyskolen Kristiania<br />
                            2018 aug. - 2021. jun<br />
                            Frontend- og mobil-utvikling.
                        </li>
                    </ul>
                </li>
                <li className="yellowText fontBebasNeue fontSizeMedium">Erfaring
                    <ul>
                        <li className="whiteText fontRajdhani fontSizeSmall">
                            <span className="fontStyleSemiBold">Sommervikar | Skagerak energi</span><br />
                            jul. 2018 - aug. 2018<br />
                            Sommervikar innenfor utvendig vedlikehold av trafostasjoner.<br />
                            Arbeidsoppgaver: maling av trafostasjoner, kutting av vegetasjon rundt stasjonene.
                        </li>
                        <li className="whiteText fontRajdhani fontSizeSmall">
                            <span className="fontStyleSemiBold">Hjulutrustningsreparatør | Borgeskogen Dekksenter AS</span><br />
                            sep. 2016 - Jan. 2017<br />
                            Arbeidsoppgaver: reparasjon av dekk, hjulskift, dekkskift, avbalansering,<br />
                            vasking av hjul, pigging av dekk, alle kjøretøy.
                        </li>
                        <li className="whiteText fontRajdhani fontSizeSmall">
                            <span className="fontStyleSemiBold">Lærling | A-dekk AS</span><br />
                            jan. 2014 - jun. 2016<br />
                            Hjulutrustningsreparatør, lærling.<br />
                            Arbeidsoppgaver: reparasjon av dekk, hjulskift, dekkskift, avbalansering,<br />
                            vasking av hjul.
                        </li>
                    </ul>
                </li>
                <li className="yellowText fontBebasNeue fontSizeMedium">Egenskaper
                    <ul>
                        <li className="whiteText fontRajdhani fontSizeSmall"><span className="fontStyleSemiBold">Git & GitHub</span></li>
                        <li className="whiteText fontRajdhani fontSizeSmall"><span className="fontStyleSemiBold">Responsive Design</span></li>
                        <li className="whiteText fontRajdhani fontSizeSmall"><span className="fontStyleSemiBold">Team Collaboration</span></li>
                    </ul>
                </li>
            </ul>
            <Footer />
        </div>
    );
};

export default AboutMe;