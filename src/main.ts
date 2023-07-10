
import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './components/Layout/index.vue'
import router from './router'

// layout
import "./assets/css/main.css"

// library
import 'boxicons';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
