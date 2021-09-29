import { Route, Switch } from 'react-router-dom';
import CompanyDetails from '../companies/CompanyDetails';
import CompanyList from '../companies/CompanyList';
import JobList from '../jobs/JobList';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import Homepage from '../homepage/Homepage';
import PrivateRoute from './PrivateRoute';
import ProfileForm from '../profile/ProfileForm';

const Routes = ({setToken}) => {
    return (
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <PrivateRoute exact path="/companies" child={<CompanyList/>}> </PrivateRoute>

        <PrivateRoute exact path="/companies/:handle" child={<CompanyDetails />}> </PrivateRoute>

        <PrivateRoute exact path="/jobs" child={<JobList />}> </PrivateRoute>

        <Route exact path="/login">
          <LoginForm setToken={setToken} />
        </Route>

        <Route exact path="/signup">
          <SignUpForm setToken={setToken} />
        </Route>

        <Route exact path="/profile">
          <ProfileForm />
        </Route>
      </Switch>
    );
}

export default Routes;