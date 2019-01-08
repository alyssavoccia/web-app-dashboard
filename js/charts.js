// LINE TRAFFIC CHART
let trafficChart = document.getElementById('main-traffic-chart').getContext('2d');
let trafficLineChart = new Chart(trafficChart, {
  type: "line",
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [
      {
        data: [500, 1250, 1000, 1500, 1750, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
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
          drawTicks: false,
          offsetGridLines: true
        },
        ticks: {
          padding: 10
        }
      }],
      yAxes: [{
        stacked: true,
        gridLines: {
          drawTicks: false,
          offsetGridLines: true
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
});

// BAR TRAFFIC CHART
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