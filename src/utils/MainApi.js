class MainApi {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  };

  _request({ url, options }) {
    return fetch(url, options).then(this._checkResponse);
  }

  signup({ email, password }) {
    return this._request({
      url: `${this.baseUrl}/signup`,
      options: {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      },
    });
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.danil-shulga-mesto.nomoredomainsicu.ru',
  headers: { 'Content-Type': 'application/json' },
});

export default mainApi;
