import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import HU from '../packages/components'

const app = createApp(App)
app.use(router)
app.use(HU)
app.mount('#app')
