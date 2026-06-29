import { createApp } from 'vue'
import './style.css'
// @ts-expect-error Vue SFC type declarations may be provided by tooling configuration
import App from './App.vue'

createApp(App).mount('#app')
