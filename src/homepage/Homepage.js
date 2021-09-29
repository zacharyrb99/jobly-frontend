import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import './Homepage.css'

const Homepage = () => {
    const {currUser} = useContext(UserContext);
    console.debug("Homepage", "currentUser=", currUser);

    return (
        <div className='Homepage'>
            <div className='Homepage-text'>
                <h1>Jobly</h1>
                <p className='lead'>Better than Indeed!</p>

                {currUser 
                    ? <h3> Welcome Back, { currUser.firstName || currUser.username }</h3>
                    : (
                        <>
                            <Link to='/login' className='btn btn-outline-primary'>Log In</Link>
                            <Link to='/signup' className='btn btn-outline-primary'>Sign Up</Link>
                        </>
                    )}
            </div>
        </div>
    )
}

export default Homepage;