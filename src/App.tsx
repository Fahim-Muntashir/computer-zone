import Toast from './components/Shared/Toast'
import DashboardLayout from './layout/DashboardLayout'
import ProtectedRoute from './layout/ProtectedRoute'

function App() {

  return (
    <>
      <ProtectedRoute>
        <Toast></Toast>
        <DashboardLayout></DashboardLayout>
      </ProtectedRoute>
    </>
  )
}

export default App
