<template>
    <div class="card custom-line-chart">
        <div class="card-header border-0">
            <div class="d-flex justify-content-between">
                <h3 class="card-title">Сеансы</h3>
            </div>
        </div>
        <div class="card-body">
            <!-- /.d-flex -->

            <div class="position-relative mb-4">
                <div class="chartjs-size-monitor">
                    <div class="chartjs-size-monitor-expand">
                        <div class=""></div>
                    </div>
                    <div class="chartjs-size-monitor-shrink">
                        <div class=""></div>
                    </div>
                </div>
                <canvas ref="lineChart" id="visitors-chart" height="200"
                        style="display: block; width: 527px; height: 200px;"
                        width="527" class="chartjs-render-monitor"></canvas>
            </div>

        </div>
    </div>
</template>

<script>
    import Chart from 'admin-lte/plugins/chart.js/Chart.bundle'

    export default {
        name: "index",
        props: {
            chartData: {
                type: Object,
            },
            chartOpt: {
                type: Object,
            }
        },
        computed: {
            lineChartCanvas() {
                return this.$refs.lineChart.getContext('2d');
            }
        },
        mounted() {
            new Chart(this.lineChartCanvas, {
                data: this.chartData,
                options: this.chartOpt
            });
        }
    }
</script>

<style scoped>
</style>