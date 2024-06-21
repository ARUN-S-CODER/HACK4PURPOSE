// dashboard.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard loaded and ready.');

    // Progress bar value (this would typically come from a backend service)
    const progressBar = document.getElementById('progress-bar');
    const progressValue = 75; // Example progress value
    progressBar.style.width = progressValue + '%';
    progressBar.innerText = progressValue + '%';

    // Investment gains chart
    const investmentCtx = document.getElementById('investmentChart').getContext('2d');
    const investmentChart = new Chart(investmentCtx, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Investment Gains ($)',
                data: [5000, 10000, 15000, 20000],
                backgroundColor: '#3498db',
                borderColor: '#2980b9',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins:{
                legend:{
                    labels:{
                        font:{
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });

    // Domain usage chart
    const domainCtx = document.getElementById('domainChart').getContext('2d');
    const domainChart = new Chart(domainCtx, {
        type: 'pie',
        data: {
            labels: ['Web Development', 'AI/ML', 'Data Science', 'Blockchain'],
            datasets: [{
                label: 'Domain Usage',
                data: [40, 30, 20, 10],
                backgroundColor: ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6'],
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins:{
                legend:{
                    labels:{
                        font:{
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });

    // AI suggestions (this would typically come from an AI service)
    const aiSuggestions = 'This user can give the best output in AI and Machine Learning projects based on previous performance and domain expertise.';
    document.getElementById('ai-suggestions').innerText = aiSuggestions;
});
