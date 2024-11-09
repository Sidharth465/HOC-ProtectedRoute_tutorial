import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

const Navbar = () => {
const {state,dispatch} = useAuth()


const handleLogout  = () =>{
    dispatch({type:"LOGOUT"})
}
  return (
    <nav>
    <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> | {!state.isAuthenticated && <Link to="/login">Login</Link>}
    {state.isAuthenticated && <button onClick={handleLogout}>Logout</button>}
  </nav>
  )
}

export default Navbar;
