import { createApp } from 'vue'
import App from './App.vue'
import store from '../store'
import router from './router'

import './assets/css/reset.css'
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/jquery/jquery.min';
import 'admin-lte/plugins/jquery-ui/jquery-ui.min.js';
import 'admin-lte/plugins/jqvmap/jqvmap.min.css';
import './assets/js/jquery.vmap.min';
import 'admin-lte/plugins/jquery-knob/jquery.knob.min.js';
import 'admin-lte/plugins/daterangepicker/daterangepicker.js';
import './assets/js/jquery.vmap.world';
import 'admin-lte/plugins/chart.js/Chart.min.js';
import 'admin-lte/dist/js/adminlte.js';

createApp(App).use(store).use(router).mount('#app');
