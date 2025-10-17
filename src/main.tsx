import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import "@radix-ui/themes/styles.css"
import { Theme } from '@radix-ui/themes'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Theme>
      <App />
      <Analytics />
    </Theme>
  </BrowserRouter>
)
