// JavaScript Document
Highcharts.chart('pieChart', {
    colors: ['#27a88a', '#7335a6', '#f84f67', '#fca302'],
	chart: {
        backgroundColor: '#f7f8fa',
		plotBackgroundColor: '#f7f8fa',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    //tooltip: {
        //pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //},
	tooltip: {
            pointFormat: '<b>{point.percentage:.2f}%</b><br/>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            //dataLabels: {
                //enabled: false
            //},
            //showInLegend: false
			dataLabels: {
                enabled: true,
                format: '<b>{point.percentage:.2f} %</b>',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 2
                }
            }
        }
    },
    series: [{
        //name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Foundation/Ecosystem Development and Bounty',
            y: 50.00
        }, {
            name: 'Co-founders, Advisors and Core Team Members',
            y: 20.00
            //sliced: true,
            //selected: true
        }, {
            name: 'Pre-Placement/ICO Placement',
            y: 20.00
        }, {
            name: 'Contingency',
            y: 10.00
        }]
    }]
});