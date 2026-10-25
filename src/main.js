import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const gaId = import.meta.env.VUE_APP_GOOGLE_ANALYTICS_ID;
if (gaId) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', gaId);
}

createApp(App).use(router).mount('#app');
