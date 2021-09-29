import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './nav&routes/NavBar';
import Routes from './nav&routes/Routes';
import { useEffect, useState } from 'react';
import JoblyAPI from './JoblyAPI';
import UserContext from './auth/UserContext';
import jwt from 'jsonwebtoken';
import useLocalStorage from './hooks/useLocalStorage';
import { Spinner } from 'reactstrap';

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [token, setToken] = useLocalStorage('token');

  useEffect(() => {
    const getCurrUser = async () => {
      if(token) {
        try {
          let {username} = jwt.decode(token);
          JoblyAPI.token = token;
          let currentUser = await JoblyAPI.getCurrUser(username);
          setCurrUser(currentUser);
          setApplicationIds(new Set(currentUser.applications))
        } catch(e) {
          setCurrUser(null);
        }
      }

      setInfoLoaded(true);
    }

    setInfoLoaded(false);
    getCurrUser();
  }, [token]);

  const logout = () => {
    setCurrUser(null);
    setToken(null);
  }

  const alreadyApplied = (id) => {
    return applicationIds.has(id);
  }

  const apply = (id) => {
    if (alreadyApplied(id)) return;
    JoblyAPI.applyToJob(currUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  if(!infoLoaded){
    return (
      <div className='CompanyList-loading'>
        <h1>Loading...</h1> <br></br>
        <Spinner style={{width: '7.5rem', height: '7.5rem'}} color='dark'>{' '}</Spinner>
      </div>
    )
  }

  return (
      <BrowserRouter>
        <UserContext.Provider value={{currUser, setCurrUser, alreadyApplied, apply}}>
          <div className='App'>
            <NavBar logout={logout} />
            <Routes setToken={setToken}/>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
