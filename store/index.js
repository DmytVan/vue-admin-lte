import {createStore } from 'vuex'
import statistic from './modules/statistic'
import banners from './modules/banners'

export default createStore({
    modules: {
        statistic,
        banners
    }
})