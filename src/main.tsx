import { Provider } from 'react-redux'

import { App } from '@/App'
import { store } from '@/features/store'
import { createRoot } from 'react-dom/client'

import '@/styles/index.scss'
import '@fontsource/ubuntu/400.css'
import '@fontsource/ubuntu/500.css'
import '@fontsource/ubuntu/700.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
