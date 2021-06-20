const { parse } = JSON;
interface IAuth {
  clear(key: string): void;
  clearAppStorage(): void;
  get(key: string): JSON;
  setToken(token: string): void;
  getToken(): string;
  setRefreshToken(token: string): void;
  getRefreshToken(): string;
  setEmail(key: string): void;
  getEmail(): string;
}
const auth: IAuth = {
  clear(key) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }
    return null;
  },
  clearAppStorage() {
    return localStorage.clear();
  },
  get(key) {
    return parse(localStorage.getItem(key) as string);
  },
  setToken(token) {
    return localStorage.setItem('token', token);
  },
  getToken() {
    return localStorage.getItem('token');
  },
  setRefreshToken(token) {
    return localStorage.setItem('refreshToken', token);
  },
  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  },
  setEmail(email) {
    return localStorage.setItem('email', email);
  },
  getEmail() {
    return localStorage.getItem('email');
  }
};
export default auth;
