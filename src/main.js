import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from "./router"
//style
import './index.css'
import './styles/style.scss'


// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

