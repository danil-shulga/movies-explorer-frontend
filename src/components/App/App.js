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

function App() {
  const [loggedIn] = useState(true);

  return (
    <Routes>
      <Route path="/" element={<Main loggedIn={loggedIn} header_light />} />
      <Route path="/movies" element={<Movies loggedIn={loggedIn} />} />
      <Route
        path="/saved-movies"
        element={<SavedMovies loggedIn={loggedIn} />}
      />
      <Route path="/profile" element={<Profile loggedIn={loggedIn} />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
