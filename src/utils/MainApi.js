class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res);
  };

  _request({ url, options }) {
    return fetch(url, options).then(this._checkResponse);
  }

  signup({ name, email, password }) {
    return this._request({
      url: `${this._baseUrl}/signup`,
      options: {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      },
    });
  }

  signin({ email, password }) {
    return this._request({
      url: `${this._baseUrl}/signin`,
      options: {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          password: password,
          email: email,
        }),
      },
    });
  }

  getUserInfo(JWT) {
    return this._request({
      url: `${this._baseUrl}/users/me`,
      options: {
        method: 'GET',
        headers: { ...this._headers, Authorization: `Bearer ${JWT}` },
      },
    });
  }

  patchUserInfo({name, email}, JWT) {
    return this._request({
      url: `${this._baseUrl}/users/me`,
      options: {
        method: 'PATCH',
        headers: { ...this._headers, Authorization: `Bearer ${JWT}` },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      },
    });
  }

  getMovies(JWT) {
    return this._request({
      url: `${this._baseUrl}/movies`,
      options: {
        headers: { ...this._headers, Authorization: `Bearer ${JWT}` },
      },
    });
  }

  createMovie(movieData, JWT) {
    return this._request({
      url: `${this._baseUrl}/movies`,
      options: {
        method: 'POST',
        headers: { ...this._headers, Authorization: `Bearer ${JWT}` },
        body: JSON.stringify({
          movieId: movieData.id,
          nameRU: movieData.nameRU,
          nameEN: movieData.nameEN,
          director: movieData.director,
          country: movieData.country,
          year: movieData.year,
          duration: movieData.duration,
          description: movieData.description,
          trailerLink: movieData.trailerLink,
          image: `https://api.nomoreparties.co${movieData.image.url}`,
          thumbnail: `https://api.nomoreparties.co${movieData.image.formats.thumbnail.url}`,
        }),
      },
    });
  }

  deleteMovie(movieId, JWT) {
    return this._request({
      url: `${this._baseUrl}/movies/${movieId}`,
      options: {
        method: 'DELETE',
        headers: { ...this._headers, Authorization: `Bearer ${JWT}` },
      },
    });
  }
}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
  // baseUrl: 'https://api.danil-shulga-mesto.nomoredomainsicu.ru',
  headers: { 'Content-Type': 'application/json' },
});

export default mainApi;
