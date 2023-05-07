import './App.css'
import { useRoutes } from 'react-router-dom'
import { AppLayout } from './layout'
import { routes } from '@/router'

function App() {
  return (
    <div className={'App'}>
      <AppLayout>
          {useRoutes(routes)}
      </AppLayout>
    </div>
  )
}

export default App
