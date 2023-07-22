import { useContext } from 'react'

import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../Providers/AuthProvider'
import Loader from '../components/Home/Shared/Spiner'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <Loader/>
  }

  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute