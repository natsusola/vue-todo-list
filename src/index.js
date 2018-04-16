import Vue from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import './scss/index.scss';

if (!__DEV__) console.log = () => {};
window.log = console.log.bind(this, `%c LOG `, 'background: #FF7818; color: white');

new Vue({
  components: { App },
  template: `<App/>`
}).$mount('#app');
