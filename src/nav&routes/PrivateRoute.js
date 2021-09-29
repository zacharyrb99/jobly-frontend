import { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import UserContext from "../auth/UserContext";

function PrivateRoute({ exact, path, child }) {
    const { currUser } = useContext(UserContext);
    
    console.debug(
      "PrivateRoute",
      "exact=", exact,
      "path=", path,
      "child=", child,
      "currentUser=", currUser,
  );

    if(!currUser) {
        return <Redirect to='/login' />;
    }

    return (
        <Route exact={exact} path={path}>
            {child}
        </Route>
    )
}

export default PrivateRoute;