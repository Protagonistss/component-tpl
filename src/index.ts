import type { App } from 'vue'
import TButton from './button/TSXButton'
import { createApp } from 'vue'

createApp(TButton).mount('#root')

export { TButton }

export default { 
  install(app: App) : void {
    app.component(TButton.name, TButton)
  }
}