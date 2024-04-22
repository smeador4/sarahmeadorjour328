var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'Region',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#ff0800'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Average of Gross Domestic Product per Capita',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Europe & Central Asia have the highest Gross Domestic Product per Capita, while South Asia and Sub-Saharan Africa have the lowest.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }, 
        },
    },
});