import { App, Plugin } from 'vue'
import { ButtonPlugin } from './button'
import { InputPlugin } from './input'

const HPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    InputPlugin.install?.(app)
  }
}

export default HPlugin
export * from './button'
export * from './input'
