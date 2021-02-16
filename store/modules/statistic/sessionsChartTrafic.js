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
            label: 'Сеансы (все пользователи)',
            type: 'line',
            data: [320, 250, 220, 280, 440, 390, 450],
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            pointBorderColor: '#007bff',
            pointBackgroundColor: '#007bff',
            fill: false
        }, {
            label: 'Сеансы (Трафик планшетных и обчных ПК)',
            type: 'line',
            data: [455, 122, 500, 333, 255, 240, 100],
            backgroundColor: 'transparent',
            borderColor: '#ffc50a',
            pointBorderColor: '#ffc50a',
            pointBackgroundColor: '#ffc50a',
            fill: false
        }, {
            label: 'Сеансы (Трафик с молильных устройств)',
            type: 'line',
            data: [322, 266, 100, 158, 300, 450, 300],
            backgroundColor: 'transparent',
            borderColor: '#0b7900',
            pointBorderColor: '#0b7900',
            pointBackgroundColor: '#0b7900',
            fill: false
        }, {
            label: 'Сеансы (Трафик смарфонов и планшетных ПК)',
            type: 'line',
            data: [180, 250, 360, 480, 450, 200, 350],
            backgroundColor: 'transparent',
            borderColor: '#76105d',
            pointBorderColor: '#76105d',
            pointBackgroundColor: '#76105d',
            fill: false
        }],
        labels: ['8 авг.', '', '15 авг.', '', '22 авг.', '', '29 авг.']
    }
});

export default {
    state
}