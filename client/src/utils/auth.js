import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      sessionStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    return sessionStorage.getItem('id_token');
  }

  login(idToken) {
    sessionStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    sessionStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
