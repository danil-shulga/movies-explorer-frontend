class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  };

  _request({ url, options }) {
    return fetch(url, options).then(this._checkResponse);
  }

  getMovies() {
    return this._request({
      url: `${this._baseUrl}/beatfilm-movies`,
      options: {
        method: 'GET',
        headers: this._headers,
      },
    });
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: { 'Content-Type': 'application/json' },
});

export default moviesApi;
