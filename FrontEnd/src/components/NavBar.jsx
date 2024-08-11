import './Navbar.css'
// import {Link} from "react-router-dom"
function NavBar(){
    return(
        <>
            <nav className="navbar">
                <ul className='navbar-menu'>
                    <li className='navbar-item'>Home</li>
                    <li className='navbar-item'>Login</li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar