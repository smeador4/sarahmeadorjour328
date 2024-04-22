var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Avatar: The Way of Water', 'Barbie', 'The Super Mario Bros. Movie', 'Black Panther: Wakanda Forever', 'Spider-Man: Across the Spider-Verse', 'Guardians of the Galaxy: Vol. 3', 'Oppenheimer', 'The Little Mermaid', 'Ant-Man and the Wasp: Quantumania', 'John Wick: Chapter 4'],
        datasets: [{
            label: "Total Gross",
            data: [684075767, 594254460, 574759600, 453829060, 381178195, 358995815, 300144670, 297895447, 214504909, 187131806],
            backgroundColor: ["grey", "grey", "grey", "red", "grey", "red", "grey", "red", "red", "grey"]
        },
    ],
    } ,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Disney takes four of the top 10 highest grossing movies of 2023',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Walt Disney Studios Motion Pictures distrubuted nearly half of the year\s highest grossing movies. Movies distributed by Disney are highlighted in red.'
            }
        },
        scales: {
            y: {
                title:{
                    text: "Total Gross in Dollars",
                    display: true,
                },
                beginAtZero: true, 
            },
        },
    }, 
},
);