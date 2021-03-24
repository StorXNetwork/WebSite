// JavaScript Document
Highcharts.chart('pieChart', {
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',   
             '#FF9655', '#000000', '#6AF9C4'],
	chart: {
        plotBackgroundColor: null,
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
            name: 'Founders, Advisors, Core Team Members & Community',
            y: 40.00
        }, {
            name: 'Ecosystem Development',
            y: 26.67
            //sliced: true,
            //selected: true
        }, {
            name: 'Contingency',
            y: 6.66
        }, {
            name: 'Pre Placement',
            y: 26.67
        }]
    }]
});