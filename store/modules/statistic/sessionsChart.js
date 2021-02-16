const state = () => ({
    options: {
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: true
        },
        hover: {
            mode: 'index',
            intersect: true
        },
        legend: {
            display: true
        },
        scales: {
            yAxes: [{
                // display: false,
                gridLines: {
                    display: true,
                    lineWidth: '4px',
                    color: 'rgba(0, 0, 0, .2)',
                    zeroLineColor: 'transparent'
                },
            }],
            xAxes: [{
                display: true,
                gridLines: {
                    display: false
                },
                ticks: {
                    fontColor: '#495057',
                    fontStyle: 'bold'
                }
            }]
        }
    },
    data: {
    datasets: [{
        label: 'Сеансы',
        type: 'line',
        data: [320, 250, 220, 280, 440, 390, 450],
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
    }],
    labels: ['8 авг.', '', '15 авг.', '', '22 авг.', '', '29 авг.']
    }
});

export default {
    state
}