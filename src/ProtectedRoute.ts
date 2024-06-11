import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUsuarioFromLocalStorage, login } from './store'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const userState = useSelector((state: any) => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {

    const usuarioData = getUsuarioFromLocalStorage();
    if (usuarioData && !userState) {
      console.log(usuarioData)
      dispatch(login(usuarioData))
    }
  }, [userState, dispatch])

  useEffect(() => {
    if (!userState) {
      const usuarioData = getUsuarioFromLocalStorage();
      if (!usuarioData) {
        navigate('/login');
      }
      else {
        dispatch(login(usuarioData))
      }
    }
  }, [userState, navigate])

  if (!userState) {
    return null;
  }

  return children;
}

export default ProtectedRoute;
