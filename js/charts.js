////////////////////////////
// LINE TRAFFIC CHARTS
///////////////////////////

// Default chart settings
let chartLabels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
let dataset = [500, 1250, 1000, 1500, 1750, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250];
let trafficChart = document.getElementById('main-traffic-chart').getContext('2d');
// Default button with class
let activeButton = document.getElementById('weekly');

// WEEKLY LINE TRAFFIC CHART CONFIG (DEFAULT)
let config = {
  type: "line",
  data: {
    labels: chartLabels,
    datasets: [
      {
        data: dataset,
        backgroundColor: 'rgba(116,119,191, .3)',
        borderColor: "#ADB0E6",
        pointBackgroundColor: '#FBFBFB',
        pointBorderColor: '#7478BF',
        lineTension: 0,
        radius: 5
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: false
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawTicks: false
        },
        ticks: {
          padding: 10
        }
      }],
      yAxes: [{
        stacked: true,
        gridLines: {
          drawTicks: false
        },
        ticks: {
          min: 500,
          max: 2500,
          stepSize: 500,
          padding: 10
      }
      }]
    }
  }
};

// PUTS LINE CHART ONTO PAGE
let lineTrafficChart = new Chart(trafficChart, config);

// Weekly line chart (default)
let weekly = document.getElementById('weekly');
weekly.addEventListener('click', (e) => {
    // Add and remove active class to the button
    activeButton.classList.remove('traffic-list-active');
    e.target.classList.add("traffic-list-active");
    activeButton = e.target;
    // Update chart data
    let data = lineTrafficChart.config.data;
    data.datasets[0].data = dataset;
    data.labels = chartLabels;  
    // Update chart tick options
    let tickOptions = lineTrafficChart.config.options.scales.yAxes[0].ticks;
    tickOptions.max = 2500;
    tickOptions.min = 500;
    tickOptions.stepSize = 500;
    lineTrafficChart.update();
    return activeButton;
});

// Hourly line chart
let hourly = document.getElementById('hourly');
hourly.addEventListener('click', (e) => {
  // Add and remove active class to the button
  activeButton.classList.remove('traffic-list-active');
  e.target.classList.add("traffic-list-active");
  activeButton = e.target;
  // Update chart data
  let chartLabels = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', 
                    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
  let dataset = [62, 74, 37, 30, 50, 32, 43, 27, 80, 63, 92, 38, 73, 112, 54, 98, 23, 165, 43, 86, 186, 122, 78, 57, 37];
  let data = lineTrafficChart.config.data;
  data.datasets[0].data = dataset;
  data.labels = chartLabels;
  // Update chart tick options
  let tickOptions = lineTrafficChart.config.options.scales.yAxes[0].ticks;
  tickOptions.max = 200;
  tickOptions.min = 0;
  tickOptions.stepSize = 25;
  lineTrafficChart.update();
  return activeButton;
});

// Daily line chart
let daily = document.getElementById('daily');
daily.addEventListener('click', (e) => {
  // Add and remove active class to the button
  activeButton.classList.remove('traffic-list-active');
  e.target.classList.add("traffic-list-active");
  activeButton = e.target;
  // Update chart data
  let chartLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  let dataset = [50, 75, 150, 100, 200, 175, 75];
  let data = lineTrafficChart.config.data;
  data.datasets[0].data = dataset;
  data.labels = chartLabels;
  // Update chart tick options
  let tickOptions = lineTrafficChart.config.options.scales.yAxes[0].ticks;
  tickOptions.max = 200;
  tickOptions.min = 0;
  tickOptions.stepSize = 50;
  lineTrafficChart.update();
  return activeButton;
});

// Monthly line chart
let monthly = document.getElementById('monthly');
monthly.addEventListener('click', (e) => {
  // Add and remove active class to the button
  activeButton.classList.remove('traffic-list-active');
  e.target.classList.add("traffic-list-active");
  activeButton = e.target;
  // Update hart data
  let chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let dataset = [900, 1200, 750, 932, 862, 697, 839, 901, 743, 838, 912, 874];
  let data = lineTrafficChart.config.data;
  data.datasets[0].data = dataset;
  data.labels = chartLabels;
  // Update chart tick options
  let tickOptions = lineTrafficChart.config.options.scales.yAxes[0].ticks;
  tickOptions.max = 1200;
  tickOptions.min = 600;
  tickOptions.stepSize = 50;
  lineTrafficChart.update();
  return activeButton;
});


///////////////////////
// BAR TRAFFIC CHART
//////////////////////
let dailyTrafficChart = document.getElementById('daily-traffic-chart').getContext('2d');
let barDailyTrafficChart = new Chart(dailyTrafficChart, {
  type: "bar",
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        backgroundColor: '#7377BF',
        data: [50, 75, 150, 100, 200, 175, 75]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    legend: {display: false},
    scales: {
      xAxes: [{
        gridLines: {
          drawTicks: false,
          offsetGridLines: true
        },
        ticks: {
          padding: 10
        }
      }],
      yAxes: [{
        gridLines: {
          drawTicks: false,
          offsetGridLines: true
        },
        ticks: {
          min: 0,
          max: 250,
          stepSize: 50,
          padding: 10
        }
      }]
    }
  }
});

// MOBILE USERS CHART
let mobileUsersChart = document.getElementById('mobile-users-chart').getContext('2d');
let pieMobileUsersChart = new Chart(mobileUsersChart, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [15, 15, 70],
        backgroundColor: ['#74B1BF', '#81C98F', '#7377BF'],
        borderWidth: 0
    }],
    labels: [
      'Phones',
      'Tablets',
      'Desktop'
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 15,
        padding: 20,
        fontFamily: "'Open Sans', sans-serif"
      }
    }
  }
});