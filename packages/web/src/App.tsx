import './App.css'
import { AppLayout } from './layout'
import { AuthGuard } from '@/router/auth-guard.tsx'

function App() {
  return (
    <div className={'App'}>
      <AppLayout>
          <AuthGuard ></AuthGuard>
      </AppLayout>
    </div>
  )
}

export default App
