// profile.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Profile page loaded and ready.');

    // Sample data (this would typically come from a database)
    const userType = 'user'; // Change to 'investor' to see the investor profile
    const profileData = {
        user: {
            name: ' John Doe',
            email: ' john.doe@example.com',
            dob: ' 1990-01-01',
            age: 34,
            education: ' MSc Computer Science',
            projectsDone: 5,
            projectsOngoing: 2,
            skills: ' JavaScript, Python, React',
            domainExpertise: ' Web Development',
            currentInterest: ' AI and Machine Learning'
        },
        investor: {
            name: ' Jane Smith',
            email: ' jane.smith@investments.com',
            projectsFunded: 10,
            currentlyInvestedProjects: 3,
            currentInterest: ' Green Energy Solutions'
        }
    };

    // Populate profile based on user type
    const profileContainer = document.getElementById('profile-container');

    if (userType === 'user') {
        profileContainer.innerHTML = `
            <div class="profile-card">
                <h2>User Profile</h2>
                <p><i class="fa fa-user"></i> Name: <span>${profileData.user.name}</span></p>
                <p><i class="fa fa-envelope"></i> Email: <span>${profileData.user.email}</span></p>
                <p><i class="fa fa-birthday-cake"></i> DOB: <span>${profileData.user.dob}</span></p>
                <p><i class="fa fa-calendar"></i> Age: <span>${profileData.user.age}</span></p>
                <p><i class="fa fa-graduation-cap"></i> Education: <span>${profileData.user.education}</span></p>
                <p><i class="fa fa-tasks"></i> Projects Done: <span>${profileData.user.projectsDone}</span></p>
                <p><i class="fa fa-spinner"></i> Projects Ongoing: <span>${profileData.user.projectsOngoing}</span></p>
                <p><i class="fa fa-code"></i> Skills: <span>${profileData.user.skills}</span></p>
                <p><i class="fa fa-briefcase"></i> Domain Expertise: <span>${profileData.user.domainExpertise}</span></p>
                <p><i class="fa fa-lightbulb"></i> Current Interest: <span>${profileData.user.currentInterest}</span></p>
            </div>
        `;
    } else if (userType === 'investor') {
        profileContainer.innerHTML = `
            <div class="profile-card">
                <h2>Investor Profile</h2>
                <p><i class="fa fa-user"></i> Name: <span>${profileData.investor.name}</span></p>
                <p><i class="fa fa-envelope"></i> Email: <span>${profileData.investor.email}</span></p>
                <p><i class="fa fa-dollar-sign"></i> Projects Funded: <span>${profileData.investor.projectsFunded}</span></p>
                <p><i class="fa fa-spinner"></i> Currently Invested Projects: <span>${profileData.investor.currentlyInvestedProjects}</span></p>
                <p><i class="fa fa-lightbulb"></i> Current Interest: <span>${profileData.investor.currentInterest}</span></p>
            </div>
        `;
    }
});
