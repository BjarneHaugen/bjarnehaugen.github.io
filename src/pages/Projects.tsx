import React from 'react';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'Description of project one.'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.'
        }
    ];

    return (
        <div>
            <h1>My Projects</h1>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;