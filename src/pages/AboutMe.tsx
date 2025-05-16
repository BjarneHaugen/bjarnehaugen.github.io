import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>Hello! I'm [Your Name], a passionate developer with a background in [Your Background].</p>
            <h2>Skills</h2>
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
            </ul>
            <h2>Contact Information</h2>
            <p>You can reach me at: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        </div>
    );
};

export default AboutMe;