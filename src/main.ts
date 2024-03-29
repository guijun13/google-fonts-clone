import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import * as MdIcons from 'oh-vue-icons/icons/md';

import App from './App.vue';
import router from './router';

const Md = Object.values({ ...MdIcons });
addIcons(...Md);

const app = createApp(App);

app.component('v-icon', OhVueIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
