import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex">
      <div className='navbox'>
        <p>Learn Language</p>
        <Link className='link' to={'/'}>Home</Link>
        {/* <Link className='link' to={'/login'}>Login</Link> */}
      </div>
    </div>
  )
}

export default Header