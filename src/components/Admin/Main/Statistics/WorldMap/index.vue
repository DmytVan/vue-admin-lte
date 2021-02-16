<template>
    <div class="card bg-gradient-primary">
        <div class="card-header border-0">
            <h3 class="card-title">
                <i class="fas fa-map-marker-alt mr-1"></i>
                Visitors
            </h3>
            <!-- card tools -->
            <div class="card-tools">
                <button type="button" class="btn btn-primary btn-sm" data-card-widget="collapse" title="Collapse">
                    <i class="fas fa-minus"></i>
                </button>
            </div>
            <!-- /.card-tools -->
        </div>
        <div class="card-body">
            <div id="world-map" style="height: 250px; width: 100%;"></div>
        </div>
        <!-- /.card-body-->
        <div class="card-footer bg-transparent">
            <div class="row">
                <div class="col-4 text-center">
                    <div id="sparkline-1"></div>
                    <div class="text-white">Visitors</div>
                </div>
                <!-- ./col -->
                <div class="col-4 text-center">
                    <div id="sparkline-2"></div>
                    <div class="text-white">Online</div>
                </div>
                <!-- ./col -->
                <div class="col-4 text-center">
                    <div id="sparkline-3"></div>
                    <div class="text-white">Sales</div>
                </div>
                <!-- ./col -->
            </div>
            <!-- /.row -->
        </div>
    </div>
</template>

<script>
    import jQuery from 'admin-lte/plugins/jquery/jquery.min';
    import Sparkline from 'admin-lte/plugins/sparklines/sparkline.js';


    export default {
        name: "index",
        props: {
            visitorsData: {
                type: Object,
                default: () => ({})
            }
        },
        mounted() {
            jQuery('#world-map').vectorMap({
                map: 'world_en',
                backgroundColor: 'transparent',
                regionStyle: {
                    initial: {
                        fill: 'rgba(255, 255, 255, 0.7)',
                        'fill-opacity': 1,
                        stroke: 'rgba(0,0,0,.2)',
                        'stroke-width': 1,
                        'stroke-opacity': 1
                    }
                },
                series: {
                    regions: [{
                        values: this.visitorsData,
                        scale: ['#ffffff', '#0154ad'],
                        normalizeFunction: 'polynomial'
                    }]
                },
                onRegionLabelShow: function (e, el, code) {
                    if (typeof this.visitorsData[code] !== 'undefined') {
                        el.html(el.html() + ': ' + this.visitorsData[code] + ' new visitors')
                    }
                }
            })
            const sparkline1 = new Sparkline(jQuery('#sparkline-1')[0], { width: 80, height: 50, lineColor: '#92c1dc', endColor: '#ebf4f9' })
            const sparkline2 = new Sparkline(jQuery('#sparkline-2')[0], { width: 80, height: 50, lineColor: '#92c1dc', endColor: '#ebf4f9' })
            const sparkline3 = new Sparkline(jQuery('#sparkline-3')[0], { width: 80, height: 50, lineColor: '#92c1dc', endColor: '#ebf4f9' })

            sparkline1.draw([1000, 1200, 920, 927, 931, 1027, 819, 930, 1021]);
            sparkline2.draw([515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]);
            sparkline3.draw([15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]);
        }
    }
</script>

<style scoped>

</style>