// This file will handle dynamic content for the projects page
document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.getElementById('projects-container');

    const projects = [
        {
            title: 'Project One',
            description: 'Description for project one.',
            link: 'https://github.com/username/project-one'
        },
        {
            title: 'Project Two',
            description: 'Description for project two.',
            link: 'https://github.com/username/project-two'
        },
        {
            title: 'Project Three',
            description: 'Description for project three.',
            link: 'https://github.com/username/project-three'
        }
    ];

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        const projectTitle = document.createElement('h2');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = 'View Project';
        projectLink.target = '_blank';

        projectElement.appendChild(projectTitle);
        projectElement.appendChild(projectDescription);
        projectElement.appendChild(projectLink);
        projectsContainer.appendChild(projectElement);
    });
});