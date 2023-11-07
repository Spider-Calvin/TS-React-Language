import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex">
      <div className='navbox'>
        <p>Learn Language</p>
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login</Link>
      </div>
    </div>
  )
}

export default Header