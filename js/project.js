document.addEventListener('DOMContentLoaded', () => {
    const projectForm = document.getElementById('projectForm');
    const projectList = document.getElementById('projectList');
    const projectModal = document.getElementById('projectModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const addProjectBtn = document.getElementById('addProjectBtn');
    let currentProjectIndex = null;

    addProjectBtn.addEventListener('click', () => {
        openModal('Add New Project');
        resetForm();
    });

    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const project = {
            projectName: document.getElementById('projectName').value,
            teamName: document.getElementById('teamName').value,
            teamMembers: document.getElementById('teamMembers').value,
            investorDetail: document.getElementById('investorDetail').value,
            projectDescription: document.getElementById('projectDescription').value,
            technologies: document.getElementById('technologies').value,
            amountSpent: document.getElementById('amountSpent').value
        };

        if (currentProjectIndex === null) {
            fetch('http://localhost:5000/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(project),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                closeModal();
                displayProjects();
            });
        } else {
            fetch(`http://localhost:5000/projects/${currentProjectIndex}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(project),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                currentProjectIndex = null;
                closeModal();
                displayProjects();
            });
        }
    });

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            closeModal();
        }
    });

    function openModal(title) {
        document.getElementById('modalTitle').textContent = title;
        projectModal.style.display = 'block';
    }

    function closeModal() {
        projectModal.style.display = 'none';
    }

    function resetForm() {
        projectForm.reset();
    }

    function displayProjects() {
        fetch('http://localhost:5000/projects')
        .then(response => response.json())
        .then(projects => {
            projectList.innerHTML = '';
            projects.forEach((project, index) => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                projectCard.innerHTML = `
                    <h3>${project.projectName}</h3>
                    <p><strong>Team:</strong> ${project.teamName}</p>
                    <p><strong>Members:</strong> ${project.teamMembers}</p>
                    <p><strong>Investor:</strong> ${project.investorDetail}</p>
                    <p><strong>Description:</strong> ${project.projectDescription}</p>
                    <p><strong>Technologies:</strong> ${project.technologies}</p>
                    <p><strong>Amount Spent:</strong> $${project.amountSpent}</p>
                    <button onclick="editProject(${index})">Edit</button>
                    <button onclick="deleteProject(${index})">Delete</button>
                `;
                projectList.appendChild(projectCard);
            });
        });
    }

    window.editProject = (index) => {
        currentProjectIndex = index;
        fetch(`http://localhost:5000/projects/${index}`)
        .then(response => response.json())
        .then(project => {
            document.getElementById('projectName').value = project.projectName;
            document.getElementById('teamName').value = project.teamName;
            document.getElementById('teamMembers').value = project.teamMembers;
            document.getElementById('investorDetail').value = project.investorDetail;
            document.getElementById('projectDescription').value = project.projectDescription;
            document.getElementById('technologies').value = project.technologies;
            document.getElementById('amountSpent').value = project.amountSpent;
            openModal('Edit Project');
        });
    };

    window.deleteProject = (index) => {
        fetch(`http://localhost:5000/projects/${index}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            displayProjects();
        });
    };

    displayProjects();
});
