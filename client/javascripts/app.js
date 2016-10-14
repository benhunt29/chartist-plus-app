// var Chartist = require('./bower_components/chartist/dist/chartist.min.js');
// global.Chartist = Chartist;
// var chartistPluginZoom = require('./bower_components/chartist-plugin-zoom/dist/chartist-plugin-zoom.min.js');
// console.log(Chartist);
var ChartistPlus = require('chartist-plus');
var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
        [5, 2, 4, 2, 0]
    ]
};

// mockHistogramData =  {
//     x: [1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400],
//     y: [2, 3, 2, 7, 14, 17.5, 25, 19, 16, 9]
// };

mockHistogramData =  [
        {x: 1500, y: 2}, {x: 1600, y: 3}, {x: 1700, y: 2}, {x: 1800, y: 7}, {x: 1900, y: 14}, {x: 2000, y: 17.5}, {x: 2100, y: 25}, {x: 2200, y: 19}, {x: 2300, y: 16}, {x: 2400, y: 9}
];

mockHistogramData2 =  [
    {x: 1500, y: 4}, {x: 1600, y: 1}, {x: 1700, y: 3}, {x: 1800, y: 9}, {x: 1900, y: 17}, {x: 2000, y: 16.1}, {x: 2100, y: 25.9}, {x: 2200, y: 24}, {x: 2300, y: 12}, {x: 2400, y: 9.5}
];

var chart1 = ChartistPlus.Histogram(
    '#chart1',
    {
        series: [
            mockHistogramData,
            mockHistogramData2
        ],
        yAxisLabel: 'Counts [#/cc]',
        xAxisLabel: 'Voltage [V]'
    });
var chart2 = ChartistPlus.Scatter(
    '#chart2',
    {
        series: [
            mockHistogramData,
            mockHistogramData2
        ],
        yAxisLabel: 'Counts [#/cc]',
        xAxisLabel: 'Voltage [V]'
    });