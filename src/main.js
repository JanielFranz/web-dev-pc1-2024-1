import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import SelectButton from "primevue/selectbutton";
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import Menubar from "primevue/menubar";

const app = createApp(App)
app.use(PrimeVue, {ripple: true, theme: { preset:Aura, options: {
    prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }})

app.component('pv-card', Card)
    .component('pv-toolbar', Toolbar)
    .component('pv-select-button', SelectButton)
    .component('pv-menubar', Menubar)

app.mount('#app')
