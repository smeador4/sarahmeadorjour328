var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Total Gross in Dollars',
            data: [0, 214504909, 0, 3541159, 656891262, 369053382, 62291150, 0, 0, 0, 491798023, 0],
            fill: true,
            borderColor: 'rgba(255, 8, 0)',
            backgroundColor: 'rgba(255, 8, 0, 0.1)',
            tension: 0.1},
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Walt Disney Studios Motion Pictures 2023 Box Office Success',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Disney saw the highest gross of the year for their movies released in May, including "Guardians of the Galaxy Vol. 3," "The Little Mermaid" and "Indiana Jones and the Dial of Destiny."',
            },
        },
        scales: {
            y: {
                title:{
                    text: "Total Gross in Dollars",
                    display: true,
                },
                beginAtZero: true,
            }
        },
    },
});