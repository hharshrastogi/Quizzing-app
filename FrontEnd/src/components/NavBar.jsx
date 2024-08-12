import './Navbar.css'
import {Link} from "react-router-dom"
function NavBar(){
    return(
        <>
            <nav className="navbar">
                <ul className='navbar-menu'>
                    <li className='navbar-item'><Link to='/home'>Home</Link></li>
                    <li className='navbar-item'><Link to='/createFlashCard'>Create</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar