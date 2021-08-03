require('./bootstrap');


import {createApp}  from 'vue';
import Master from './layout/master.vue';
import router from './router/index';

const app = createApp(Master);

app.use(router);
app.mount('#app');
