import Header from '../Header/Header';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import PopupMenu from '../Navigation/PopupMenu/PopupMenu';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../User/Profile/Profile';
import Login from '../User/Login/Login';
import Register from '../User/Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [loggedIn] = useState(false);

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
      {/* <Main loggedIn={loggedIn} header_light /> */}
      {/* <Movies loggedIn={loggedIn} /> */}
      {/* <SavedMovies loggedIn={loggedIn} /> */}
      {/* <Profile loggedIn={loggedIn} /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <NotFoundPage /> */}
    </Routes>
  );
}

export default App;
