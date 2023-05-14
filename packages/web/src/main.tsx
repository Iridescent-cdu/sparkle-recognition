import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AppProviders } from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

   <AppProviders>
     <App />
   </AppProviders>,

)
