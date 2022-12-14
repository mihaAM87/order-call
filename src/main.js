import { createApp } from 'vue';
import App from './App.vue';

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import './store';
import store from './store';

const app = createApp(App).use(store);

// app.use(router);

app.mount('#app');
