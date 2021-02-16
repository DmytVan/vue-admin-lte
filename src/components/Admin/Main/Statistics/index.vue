<template>
    <div class="statistics">
        <div class="statistics-panel">
            <div class="statistics-films">
                <ChanelGroup class="statistics-films-form"></ChanelGroup>
                <div class="statistics-films-charts">
                    <PieChart title="Лучшие каналы" :donutData="channelDonutData" class="pie-chart"></PieChart>
                    <LineChart :chartData="sessionChartData" :chartOpt="sessionChartOpt" class="line-chart"></LineChart>
                </div>
            </div>
            <UserInfo users-registered="44"></UserInfo>
        </div>
        <div class="session-param">
            <select v-model="session">
                <option value="opt1">Сеансы</option>
            </select>
            И <a href="#" class="session-param-choose-link"> Выбор показателя</a>
        </div>
        <LineChart :chartData="sessionsChartTraficData" :chartOpt="sessionsChartTraficOpt"></LineChart>
        <p>Основной параметр: <strong> Тип устройства</strong></p>
        <div class="visitors-statistics">
            <WorldMap class="visitors-world-map" :visitorsData="visitorsMapData"></WorldMap>
            <PieChart title="Пол" :donutData="visitorsDonutData" class="visitors-donut"></PieChart>
        </div>
    </div>
</template>

<script>
    import ChanelGroup from './ChannelGroups/index'
    import PieChart from './PieChart/index'
    import LineChart from './LineChart/index'
    import UserInfo from './UserInfo/index'
    import WorldMap from './WorldMap/index'

    export default {
        name: "index",
        components: {
            ChanelGroup,
            PieChart,
            LineChart,
            UserInfo,
            WorldMap
        },
        data() {
            return {session: "opt1"}
        },
        computed: {
            sessionChartData() {
                return this.$store.state.statistic.sessionsChart.data;
            },
            sessionChartOpt() {
                return this.$store.state.statistic.sessionsChart.options;
            },
            sessionsChartTraficData() {
                return this.$store.state.statistic.sessionsChartTrafic.data;
            },
            sessionsChartTraficOpt() {
                return this.$store.state.statistic.sessionsChartTrafic.options;
            },
            visitorsMapData() {
                return this.$store.state.statistic.visitorsMap.visitorsData;
            },
            channelDonutData() {
                return this.$store.state.statistic.channelPieChart.donutData;
            },
            visitorsDonutData() {
                return this.$store.state.statistic.visitorsPieChart.donutData;
            },
        }
    }
</script>

<style scoped>
    .statistics-panel {
        display: flex;
        align-items: center;

    }


    .statistics-films-form {
        margin-bottom: 20px;
    }

    .statistics-films-charts {
        display: flex;
    }

    .pie-chart {
        flex: 1;
    }

    .line-chart {
        flex: 1;
    }
    .session-param-choose-link {
        margin-left: 10px;
    }
    .visitors-statistics {
        display: flex;
    }
    .visitors-donut {
        flex: 1;
    }
    .visitors-world-map {
        flex: 1;
    }

    @media all and (max-width: 1000px){
        .statistics-panel {
            flex-direction: column;
        }
    }
    @media all and (max-width: 600px){
        .statistics-films-charts {
            flex-direction: column;
        }
        .visitors-statistics {
            flex-direction: column;
        }
        .statistics-films-form {
            flex-direction: column;
            align-items: center;
        }
    }

</style>