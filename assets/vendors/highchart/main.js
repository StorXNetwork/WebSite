// JavaScript Document
Highcharts.chart('pieChart', {
    //colors: ['#e900d2', '#f72828', '#f84f67', '#fca302', '#1f96fc', '#54efbc', '#e900d2', '#7be215', '#7335a6', '#27a88a'],
	colors: ['#f93232', '#f80094', '#a440b8', '#6c40b8', '#0772de', '#00d96c', '#7bd422', '#f5cc00', '#f2a200', '#ff9500', '#ff9500', '#e04b00'],
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
				style: { fontFamily: '\'Lato\', sans-serif', lineHeight: '14px', fontSize: '9px', textOutline: false },
                distance: -30,
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
            name: 'Private Placement',
            y: 7.00
        }, {
            name: 'Seed Round',
            y: 10.00
            //sliced: true,
            //selected: true
        }, {
            name: 'Community Placement',
            y: 23.00
        }, {
			name: 'Core Team',
            y: 17.50
        }, {
			name: 'Technology Ops',
            y: 2.50
        }, {
			name: 'Data Farming Reward',
            y: 12.30
        }, {
			name: 'Ecosystems Adoption Rewards',
            y: 12.70
        }, {
			name: 'Contingency',
            y: 10.00
        }, {
            name: 'Partnership, Market Making & Listing',
            y: 5.00
        }]
    }]
});