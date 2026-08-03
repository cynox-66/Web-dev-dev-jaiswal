import './navBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to={'/'}>
                <h1>Home</h1>
            </Link>
            <Link to={'/about'}>
                <h1>About</h1>
            </Link>
            <Link to={'/products'}>
                <h1>Products List</h1>
            </Link>
        </div>
    )
}

export default NavBar