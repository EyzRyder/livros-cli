import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vue3Toastify from 'vue3-toastify';
import router from './router';

const app = createApp(App);
app.use(
  Vue3Toastify,
  {
    autoClose: 2000,
    style: {
      opacity: '1',
      userSelect: 'initial',
    },
  },
);

app.use(router);
app.mount('#app');