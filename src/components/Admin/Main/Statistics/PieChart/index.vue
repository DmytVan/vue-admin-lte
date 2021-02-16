<template>
    <div class="card card-header border-0">
            <div class="d-flex justify-content-between">
                <h3 class="card-title">{{title}}</h3>
            </div>
        <div class="card-body">
            <div class="chartjs-size-monitor">
                <div class="chartjs-size-monitor-expand">
                    <div class=""></div>
                </div>
                <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                </div>
            </div>
            <canvas ref="chart" id="pieChart"
                    style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block; width: 379px;"
                    width="379" height="250" class="chartjs-render-monitor"></canvas>
        </div>
    </div>
</template>

<script>
    import Chart from 'admin-lte/plugins/chart.js/Chart.bundle'

    export default {
        name: "index",
        props: {
            donutData: {
                type: Object,
                default: () => ({})
            },
            title: {
                type: String,
                default: () => ('')
            }
        },
        computed: {
            pieChartCanvas() {
                return this.$refs.chart.getContext('2d');
            }
        },
        mounted() {
            const pieOptions = {
                maintainAspectRatio: false,
                responsive: true,
            };
            new Chart(this.pieChartCanvas, {
                type: 'pie',
                data: this.donutData,
                options: pieOptions
            });
        }
    }
</script>

<style scoped>

</style>