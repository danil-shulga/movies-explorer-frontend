import './App.css';
import Main from '../Main/Main';
import { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../User/Profile/Profile';
import Login from '../User/Login/Login';
import Register from '../User/Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const JWT = JSON.parse(localStorage.getItem('user'))?.token;

  useEffect(() => {
    setLoggedIn(!!JWT);
  }, [loggedIn, JWT]);

  useEffect(() => {
    if (JWT) {
      Promise.all([mainApi.getUserInfo(JWT), mainApi.getMovies(JWT)])
        .then(([userData, savedMoviesData]) => {
          setCurrentUser(userData);
          setSavedMovies(savedMoviesData);
          setLoggedIn(true);
        })
        .catch((err) => console.error('ошибка загрузки начальных данных', err))
        .finally(() => setIsLoading(false));
    } else {
      setCurrentUser({});
      setLoggedIn(false);
      setIsLoading(false);
    }
  }, [loggedIn, JWT]);

  return isLoading ? (
    <Preloader />
  ) : (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <SavedMoviesContext.Provider value={{ savedMovies, setSavedMovies }}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} header_light />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies loggedIn={loggedIn} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies loggedIn={loggedIn} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRoute loggedIn={!loggedIn}>
                <Login setLoggedIn={setLoggedIn} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute loggedIn={!loggedIn}>
                <Register setLoggedIn={setLoggedIn} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
