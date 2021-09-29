import { useContext } from 'react';
import {Navbar, Nav, NavLink, NavItem, NavbarBrand} from 'reactstrap';
import UserContext from '../auth/UserContext';
import './NavBar.css';

const NavBar = ({logout}) => {
    const { currUser } = useContext(UserContext);

    const loggedIn = () => {
        return (
            <>
                <NavItem>
                    <NavLink className='nav-item' href='/companies'>Companies</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className='nav-item' href='/jobs'>Jobs</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className='nav-item' href='/profile'>Profile</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className='nav-item' onClick={logout}>Log Out</NavLink>
                </NavItem>
            </>
        )
    }

    const loggedOut = () => {
        return (
            <>
                <NavItem>
                    <NavLink className='nav-item' href='/login'>Login</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className='nav-item' href='/signup'>Sign Up</NavLink>
                </NavItem>
            </>
        )
    }
    
    
    return (
      <div>
        <Navbar>
            <NavbarBrand className='navbar-brand' href="/">Jobly</NavbarBrand>

            <Nav>
                {currUser ? loggedIn() : loggedOut()}

                {/* <NavItem>
                    <NavLink className='nav-item' href="/companies">Companies</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className='nav-item' href='/jobs'>Jobs</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className='nav-item' href='/login'>Login</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className='nav-item' href='/signup'>Sign Up</NavLink>
                </NavItem> */}
            </Nav>
        </Navbar>
      </div>
    );
}

export default NavBar;