import DashboardLayout from './layout/DashboardLayout'
import ProtectedRoute from './layout/ProtectedRoute'

function App() {

  return (
    <>
      <ProtectedRoute>

        <DashboardLayout></DashboardLayout>
      </ProtectedRoute>
    </>
  )
}

export default App
