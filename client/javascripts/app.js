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
    {x: 1200, y: 2}, {x: 1600, y: 3}, {x: 1700, y: 2}, {x: 1800, y: 7}, {x: 1900, y: 14}, {x: 2000, y: 17.5}, {x: 2100, y: 25}, {x: 2200, y: 19}, {x: 2300, y: 16}, {x: 2900, y: 9}
];


mockFitData = {
    x: [
        1400,
        1405,
        1410,
        1415,
        1420,
        1425,
        1430,
        1435,
        1440,
        1445,
        1450,
        1455,
        1460,
        1465,
        1470,
        1475,
        1480,
        1485,
        1490,
        1495,
        1500,
        1505,
        1510,
        1515,
        1520,
        1525,
        1530,
        1535,
        1540,
        1545,
        1550,
        1555,
        1560,
        1565,
        1570,
        1575,
        1580,
        1585,
        1590,
        1595,
        1600,
        1605,
        1610,
        1615,
        1620,
        1625,
        1630,
        1635,
        1640,
        1645,
        1650,
        1655,
        1660,
        1665,
        1670,
        1675,
        1680,
        1685,
        1690,
        1695,
        1700,
        1705,
        1710,
        1715,
        1720,
        1725,
        1730,
        1735,
        1740,
        1745,
        1750,
        1755,
        1760,
        1765,
        1770,
        1775,
        1780,
        1785,
        1790,
        1795,
        1800,
        1805,
        1810,
        1815,
        1820,
        1825,
        1830,
        1835,
        1840,
        1845,
        1850,
        1855,
        1860,
        1865,
        1870,
        1875,
        1880,
        1885,
        1890,
        1895,
        1900,
        1905,
        1910,
        1915,
        1920,
        1925,
        1930,
        1935,
        1940,
        1945,
        1950,
        1955,
        1960,
        1965,
        1970,
        1975,
        1980,
        1985,
        1990,
        1995,
        2000,
        2005,
        2010,
        2015,
        2020,
        2025,
        2030,
        2035,
        2040,
        2045,
        2050,
        2055,
        2060,
        2065,
        2070,
        2075,
        2080,
        2085,
        2090,
        2095,
        2100,
        2105,
        2110,
        2115,
        2120,
        2125,
        2130,
        2135,
        2140,
        2145,
        2150,
        2155,
        2160,
        2165,
        2170,
        2175,
        2180,
        2185,
        2190,
        2195,
        2200,
        2205,
        2210,
        2215,
        2220,
        2225,
        2230,
        2235,
        2240,
        2245,
        2250,
        2255,
        2260,
        2265,
        2270,
        2275,
        2280,
        2285,
        2290,
        2295,
        2300,
        2305,
        2310,
        2315,
        2320,
        2325,
        2330,
        2335,
        2340,
        2345,
        2350,
        2355,
        2360,
        2365,
        2370,
        2375,
        2380,
        2385,
        2390,
        2395,
        2400,
        2405,
        2410,
        2415,
        2420,
        2425,
        2430,
        2435,
        2440,
        2445,
        2450,
        2455,
        2460,
        2465,
        2470,
        2475,
        2480,
        2485,
        2490,
        2495,
        2500
    ],
    y: [
        1.01054947333837,
        1.0533989104055,
        1.09776027855277,
        1.14367208848404,
        1.19117314825549,
        1.24030253170433,
        1.29109954518508,
        1.34360369259981,
        1.39785463871136,
        1.45389217073164,
        1.5117561581802,
        1.57148651101133,
        1.63312313601165,
        1.69670589147324,
        1.76227454015135,
        1.82986870051924,
        1.89952779633664,
        1.97129100455243,
        2.04519720156588,
        2.12128490787553,
        2.19959223114839,
        2.28015680774719,
        2.36301574275737,
        2.44820554856022,
        2.53576208200316,
        2.6257204802228,
        2.71811509518095,
        2.81297942697871,
        2.91034605601825,
        3.0102465740868,
        3.11271151444209,
        3.21777028098306,
        3.32545107659461,
        3.43578083075962,
        3.54878512653607,
        3.66448812700195,
        3.78291250127456,
        3.90407935021574,
        4.02800813193847,
        4.15471658723456,
        4.28422066504712,
        4.41653444811539,
        4.55167007892314,
        4.68963768608546,
        4.83044531131193,
        4.97409883708741,
        5.12060191521449,
        5.26995589636432,
        5.42215976078486,
        5.57721005031791,
        5.73510080187781,
        5.89582348254669,
        6.0593669264419,
        6.2257172735127,
        6.39485791042346,
        6.56676941368134,
        6.74142949516577,
        6.91881295021734,
        7.09889160844223,
        7.28163428738769,
        7.46700674924204,
        7.6549716607113,
        7.84548855622162,
        8.0385138045944,
        8.23400057933779,
        8.4318988326945,
        8.63215527358219,
        8.83471334955836,
        9.03951323293671,
        9.24649181117706,
        9.45558268166531,
        9.66671615099388,
        9.879819238847,
        10.0948156865884,
        10.3116259706417,
        10.5301673207471,
        10.7503537431692,
        10.9720960489233,
        11.1953018870793,
        11.4198757831931,
        11.6457191829063,
        11.8727305007464,
        12.1008051741495,
        12.3298357227176,
        12.5597118127133,
        12.7903203267838,
        13.0215454388955,
        13.2532686944514,
        13.4853690955501,
        13.7177231913377,
        13.9502051733906,
        14.1826869760559,
        14.4150383816688,
        14.6471271305501,
        14.8788190356801,
        15.1099781019332,
        15.3404666497449,
        15.5701454430754,
        15.7988738215199,
        16.0265098364088,
        16.2529103907275,
        16.4779313826782,
        16.7014278526949,
        16.9232541337132,
        17.1432640044886,
        17.3613108457472,
        17.5772477989443,
        17.7909279273987,
        18.002204379563,
        18.210930554182,
        18.4169602670866,
        18.6201479193614,
        18.8203486666216,
        19.0174185891273,
        19.2112148624593,
        19.4015959284774,
        19.5884216662771,
        19.7715535628585,
        19.9508548832184,
        20.1261908395772,
        20.2974287594457,
        20.4644382522441,
        20.627091374178,
        20.7852627910835,
        20.9388299389503,
        21.0876731818367,
        21.2316759668926,
        21.3707249762095,
        21.5047102752204,
        21.6335254573799,
        21.7570677848556,
        21.8752383249735,
        21.9879420821613,
        22.0950881251455,
        22.1965897091626,
        22.2923643929559,
        22.3823341503352,
        22.4664254760902,
        22.5445694860554,
        22.616702011135,
        22.6827636851101,
        22.7427000260584,
        22.7964615112306,
        22.8440036452397,
        22.8852870214317,
        22.9202773763185,
        22.9489456369689,
        22.9712679612654,
        22.9872257709477,
        22.9968057773817,
        23,
        22.9968057773817,
        22.9872257709477,
        22.9712679612654,
        22.9489456369689,
        22.9202773763185,
        22.8852870214317,
        22.8440036452397,
        22.7964615112306,
        22.7427000260584,
        22.6827636851101,
        22.616702011135,
        22.5445694860554,
        22.4664254760902,
        22.3823341503352,
        22.2923643929559,
        22.1965897091626,
        22.0950881251455,
        21.9879420821613,
        21.8752383249735,
        21.7570677848556,
        21.6335254573799,
        21.5047102752204,
        21.3707249762095,
        21.2316759668926,
        21.0876731818367,
        20.9388299389503,
        20.7852627910835,
        20.627091374178,
        20.4644382522441,
        20.2974287594457,
        20.1261908395772,
        19.9508548832184,
        19.7715535628585,
        19.5884216662771,
        19.4015959284774,
        19.2112148624593,
        19.0174185891273,
        18.8203486666216,
        18.6201479193614,
        18.4169602670866,
        18.210930554182,
        18.002204379563,
        17.7909279273987,
        17.5772477989443,
        17.3613108457472,
        17.1432640044886,
        16.9232541337132,
        16.7014278526949,
        16.4779313826782,
        16.2529103907275,
        16.0265098364088,
        15.7988738215199,
        15.5701454430754,
        15.3404666497449,
        15.1099781019332,
        14.8788190356801,
        14.6471271305501,
        14.4150383816688,
        14.1826869760559,
        13.9502051733906,
        13.7177231913377,
        13.4853690955501,
        13.2532686944514,
        13.0215454388955,
        12.7903203267838,
        12.5597118127133,
        12.3298357227176,
        12.1008051741495,
        11.8727305007464,
        11.6457191829063
    ]
};

    var test = ChartistPlus.Histogram(
        '#chart',
        {
            series: [
                mockHistogramData,
                mockHistogramData2
            ],
            xAxisLabel: 'test',
            yAxisLabel: 'ytest',
        },
        {
            // high: 20,
            // low: 10
            // plugins:
            //     [
            //         Chartist.plugins.ctAxisTitle({
            //     axisX: {
            //         axisTitle: 'TEST',
            //         axisClass: 'ct-axis-title',
            //         offset: {
            //             x: 0,
            //             y: 30
            //         },
            //         textAnchor: 'middle'
            //     },
            //     axisY: {
            //         axisTitle: data.yAxisLabel || '',
            //         axisClass: 'ct-axis-title',
            //         offset: {
            //             x: 0,
            //             y: 10
            //         },
            //         textAnchor: 'middle',
            //         flipTitle: true
            //     }
            //     })],
            // chartPadding: {
            //     top: 15,
            //     right: 15,
            //     bottom: 15,
            //     left: 10
            // },
        }
    );
    // new ChartistPlus.Line(
    //     '#chart',
    //     {
    //         series: [mockFitData.y]
    //     }
    //     // plot.options
    // );

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
// new ChartistPlus.Bar('.ct-chart', data);
console.log('tesst');
console.log(test);