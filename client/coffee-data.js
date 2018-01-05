"use strict";

var toArray = (data) => {
  if(!data) return null;
  var tmp = data.map((obj) => {
    return obj.count;
  })
  return tmp.reverse()
}
var createCharts = function(config){
  var graphID = config.id
  var user = config.user[0].toUpperCase() + config.user.substring(1, config.user.length)
  var graphData = toArray(config.data) || [2, 2, 3, 2, 3, 3, 4, 2, 3, 4]


  var monthNames = ["Jan", "Feb", "March", "April", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  var d = new Date
  var daysAgo = function(count){ 
    var day = d.getDate() - count;
    var lastMonthDay = day;
    var month = monthNames[d.getMonth()];
    if(day < 1) { 
      lastMonthDay = 31 + day
      month = (d.getMonth() != 0) ? monthNames[d.getMonth() - 1] : monthNames[11]
      console.log(month)
    }
    return month + ' ' + lastMonthDay.toString()
  }
  var optsWhsl = {
    type: 'line',
    data: {
      labels: [, daysAgo(8),, daysAgo(6),,daysAgo(4),, daysAgo(2),, daysAgo(0)],
      datasets: [{
        label: `${user}'s cups`,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#32A7EC",
        borderColor: "#32A7EC",
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: graphData,
        pointBorderColor: false,
        spanGaps: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scale: {
        ticks: {
          beginAtZero: false
        }
      },
      scales: {
        xAxes: [{ ticks: {fontSize: 12}}],
        yAxes: [{ ticks: {fontSize: 12}}]
      }
    }
  };

  var optsTemp = {
    type: 'line',
    data: {
      labels: [, "Nov 10",,, "Nov 11",,, "Nov 12",,, "Nov 13",,, "Nov 14",,],
      datasets: [{
        label: "Ty's cups drank",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#5176E8",
        borderColor: "#5176E8",
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [3, 3.2, 4, 3.4, 4.2, 2.9, 2.5, 2.8, 2.7, 3, 2.8, 3, 2.8, 3.5, 2.8],
        pointBorderColor: false,
        spanGaps: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scale: {
        ticks: {
          beginAtZero: true
        }
      }
    }
  };

  Chart.defaults.global.defaultFontColor='turquoise';
  var ctxA = document.getElementById(graphID);

  new Chart(ctxA, optsWhsl);
}

export default createCharts;