var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Walt Disney Studios Motion Pictures',
              'Universal Pictures',
              'Warner Bros.',
              'Paramount Pictures',
              '20th Century Studios'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [1798079885, 1517803515, 987578555, 696317138, 684075767],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Total Gross Sales for Movie Studios in 2023'
              },
              subtitle: {
                display: true,
                text: 'Disney took the most total gross sales for the year, with Universal Studios following behind.'
              },
            }
          }
        });