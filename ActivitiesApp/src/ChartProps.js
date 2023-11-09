export const ChartProps = {
    chartArea: {
        border: {
            width: 0,
        }
    },
    primaryXAxis: { // Corrected key to 'primaryXAxis'
        valueType: 'DateTime',
        labelFormat: 'MMM dd',
        intervalType: 'Days',
        // interval: 1,
        edgeLabelPlacement: 'Shift',
        labelIntersectAction: 'Hide',
        labelStyle: {
            size: '16px',
            color: '#56648A',
            fontFamily: 'Inter',
            fontWeight: '500',
        },
        majorGridLines: {
            width: 0,
        }
    },
    primaryYAxis: {
        labelFormat: '{value}%',
        maximum: 100,
        interval: 50,
        labelStyle: {
            size: '16px',
            color: '#56648A',
            fontFamily: 'Inter',
            fontWeight: '500',
        },
        majorGridLines: {
            dashArray: '10,5',
        }
    },
    activityChartHeight: '70%'
};
