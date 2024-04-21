var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              } , {
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#88FF6D",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,

              } , {
                data: [
                  {x: 71.9, y: 11461},
                  ],
                  label: "Brazil",
                  borderColor: "#9D6DFF",
                  backgroundColor:"rgb(255,165,0,0.1)",
                  borderWidth:2,
  
              } , {
                data: [
                  {x: 65.4, y: 13173},
                  ],
                  label: "Russia",
                  borderColor: "#F56DFF",
                  backgroundColor:"rgb(255,165,0,0.1)",
                  borderWidth:2,
              } , {
                data: [
                  {x: 62.6, y: 3366},
                  ],
                  label: "Pakistan",
                  borderColor: "#FF6D77",
                  backgroundColor:"rgb(255,165,0,0.1)",
                  borderWidth:2,
              } , {
                data: [
                  {x: 65.8, y: 1632},
                  ],
                  label: "Bangladesh",
                  borderColor: "#DAF7A6",
                  backgroundColor:"rgb(255,165,0,0.1)",
                  borderWidth:2,
              } , {
                data: [
                  {x: 81.1, y: 32193},
                  ],
                  label: "Japan",
                  borderColor: "#4640FF",
                  backgroundColor:"rgb(255,165,0,0.1)",
                  borderWidth:2,
              }
            ]
          },
          options: {
            plugins: {
            title: {
              display: true,
              text: 'Top 10 Highest Life Expectancies and GDP'
            },
            subtitle: {
              display: true,
              text: 'Of the countries with the top 10 highest average life expectancies, a positive trend can be seen between the life expectancy the country\'s Gross Domestic Product.'
            } ,
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Gross Domestic Product'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Average life expectancy in years'
                  }
              }
            }
          }
          }
        });