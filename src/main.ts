import { createApp } from 'vue'
import App from './App.vue'
import HU from '../packages/components'

createApp(App)
.use(HU)
.mount('#app')
