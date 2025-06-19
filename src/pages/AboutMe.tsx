import React, { useEffect } from 'react';
import '../css/aboutMe.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutMe: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <div className="greenBar greenBarTop"></div>
            <div id="aboutMePage">
                <div id="aboutMePageInfo">
                    <h1 className='yellowText fontBebasNeue '>Litt om meg</h1>
                    <p className='whiteText fontInter fontStyleLight '>Hvem er jeg? <br />
                        Hei, jeg heter Bjarne og er en 30 år gammel mann fra Sandefjord, Vestfold. Jeg har en bachelor i informasjonsteknologi og fagbrev som hjulutrustningsreparatør, noe som gir meg en bakgrunn som kombinerer både teknisk forståelse og praktiske ferdigheter.<br /><br />
                        Jeg er en pliktoppfyllende og punktlig person. Andre ferdigheter som beskriver meg vil være fleksibel, effektiv og praktisk anlagt. Jeg trekkes mot logisk tenkning og liker å finne smarte løsninger på utfordringer. I tillegg er jeg glad i å lære nye ting og deler gjerne kunnskap med andre. <br /><br />
                        Gaming har alltid vært en stor del av fritiden min, og jeg har lagt ned over 4000 timer i Europa Universalis IV – et grand strategy-spill som reflekterer min tilhørighet til logisk tenkning. Selv om jeg ikke spiller det like mye nå, har erfaringen formet måten jeg analyserer og løser problemer på. Samtidig liker jeg variasjon, både i spill og ellers, noe som viser at jeg er fleksibel og tilpasningsdyktig.<br /><br />
                        Ellers har interessene vært mange og varierte – sjonglering, kajakkpolo med to NM-gull samt sølv og bronse, og bygging av PC-er siden åtteårsalderen. Jeg har erfaring med praktiske ferdigheter, alt fra datamaskiner til bilreparasjon og mye annet.</p>
                </div>

                <div id="pictureInformation">
                    <img id="Bjarne2" src="/bjarne.jpg" alt="Bjarne Haugen" />
                    <div className='contactInformation'>
                        <img className="icon" src="/phone.svg" alt="phone" />
                        <h3 className="whiteText fontInter">+ 47 93 80 15 64 </h3>
                    </div>
                    <div className='contactInformation'>
                        <img className="icon" src="/email.svg" alt="email" onClick={() => window.open('mailto:bjarnewilhelmhaugen@hotmail.com', '_blank')} style={{ cursor: 'pointer' }} />
                        <h3 className="whiteText fontInter">bjarnewilhelmhaugen@hotmail.com</h3>
                    </div>
                    <div className='contactInformation'>
                        <img className='icon' src="/pdf.svg" alt="cv" onClick={() => window.open('/Bjarne_CV.pdf', '_blank')} style={{ cursor: 'pointer' }} />
                        <h3 className="whiteText fontInter">Last ned CV</h3>
                    </div>
                    <div className='contactInformation'>
                        <img id="github" className="icon" src="/github.svg" alt="github" onClick={() => window.open('https://github.com/bjarnehaugen', '_blank')} style={{ cursor: 'pointer' }} />
                        <img className="icon" src="/linkedin.svg" alt="linkedin" onClick={() => window.open('https://www.linkedin.com/in/bjarne-haugen/', '_blank')} style={{ cursor: 'pointer' }} />
                    </div>

                </div>
            </div>

            <div className="greenBar greenBarBottom"></div>

            <ul id="cvList">
                <li>
                    <h2 className="yellowText fontRajdhani ">UTDANNING</h2>
                    <ul>
                        <li className="whiteText fontInter ">
                            <h3 className="fontStyleSemiBold">Høyskolen Kristiania</h3>
                            <p className='fontInter'>

                                Bachelor Informasjonsteknologi (180 sp) <br />
                                Aug. 2018 - jun. 2021<br />
                                Frontend- og mobil-utvikling.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 className="yellowText fontRajdhani ">ERFARING</h2>
                    <ul>
                        <li className="whiteText fontInter ">
                            <h3 className="fontStyleSemiBold">Sommervikar | Skagerak energi</h3>
                            <p className='fontInter'>
                                Jul. 2018 - aug. 2018<br />
                                Sommervikar innenfor utvendig vedlikehold av trafostasjoner.<br />
                                Arbeidsoppgaver: Maling av trafostasjoner, kutting av vegetasjon rundt stasjonene.
                            </p>
                        </li>
                        <li className="whiteText fontInter ">
                            <h3 className="fontStyleSemiBold">Hjulutrustningsreparatør | Borgeskogen Dekksenter AS</h3>
                            <p className='fontInter'>
                                Sep. 2016 - jan. 2017<br />
                                Arbeidsoppgaver: reparasjon av dekk, hjulskift, dekkskift, avbalansering,<br />
                                vasking av hjul, pigging av dekk, alle kjøretøy.
                            </p>
                        </li>
                        <li className="whiteText fontInter ">
                            <h3 className="fontStyleSemiBold">Lærling | A-dekk AS</h3>
                            <p className='fontInter'>
                                Jan. 2014 - jun. 2016<br />
                                Hjulutrustningsreparatør, lærling.<br />
                                Arbeidsoppgaver: reparasjon av dekk, hjulskift, dekkskift, avbalansering,<br />
                                vasking av hjul.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 className="yellowText fontRajdhani ">EGENSKAPER</h2>
                    <ul>
                        <li className="whiteText fontRajdhani ">
                            <h3 className="fontStyleSemiBold">Programmering språk</h3>
                            <div className="programmingIcons">
                                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                                    <img src='react.svg' alt='React' className='icon' />
                                </a>
                                <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                                    <img src='javascript.svg' alt='JavaScript' className='icon' />
                                </a>
                                <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
                                    <img src='vite.svg' alt='Vite' className='icon' />
                                </a>
                                <a href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                                    <img src='css3.svg' alt='CSS3' className='icon' />
                                </a>
                                <a href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                                    <img src='html5.svg' alt='HTML5' className='icon' />
                                </a>
                                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                                    <img src='nodejs.svg' alt='Node.js' className='icon' />
                                </a>
                                <a href="https://kotlinlang.org/" target="_blank" rel="noopener noreferrer">
                                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original-wordmark.svg' alt='Kotlin' className='icon' />
                                </a>
                                <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer">
                                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg' alt='Java' className='icon' />
                                </a>
                                <a href="https://dotnet.microsoft.com/en-us/languages/csharp" target="_blank" rel="noopener noreferrer">
                                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' alt='Csharp' className='icon' />
                                </a>
                                <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer">
                                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' alt='C++' className='icon' />
                                </a>
                                <a href="https://www.swift.com/" target="_blank" rel="noopener noreferrer">
                                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original-wordmark.svg' alt='Swift' className='icon' />
                                </a>
                                <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
                                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg' alt='Vue.js' className='icon' />
                                </a>
                                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' alt='Typescript' className='icon' />
                                </a>
                                <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg' alt='PostgresSQL' className='icon' />
                                </a>

                            </div>
                        </li>
                        <li className="whiteText fontRajdhani ">
                            <h3 className="fontStyleSemiBold">Team Collaboration</h3>
                        </li>
                    </ul>
                </li>
            </ul>
            <Footer />
        </div>
    );
};

export default AboutMe;