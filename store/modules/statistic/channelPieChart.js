const state = () => ({
    donutData: {
        labels: [
            'Display',
            'Paid Search',
            'Organic Search',
            'Referral',
            'Social',
            'Direct',
            '(Other)'
        ],
        datasets: [
            {
                data: [41.4, 20.5, 18.3, 7.4, 4.1, 4.1, 4.2],
                backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
            }
        ]
    }
});

const mutations =  {
    setData(state, data) {
        state.donutData = data;
    }
};

export default {
    state,
    mutations
}