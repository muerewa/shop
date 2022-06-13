const { makeAutoObservable } = require("mobx");

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._token = localStorage.getItem('token')
    
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  get token() {
    return this._token
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
