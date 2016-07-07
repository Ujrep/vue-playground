export default {
  setItem(name, value) {
    window.localStorage.setItem(name, value);
  },

  getItem(name) {
    if (window.localStorage[name]) {
      return window.localStorage[name];
    }
    return false;
  },

  removeItem(name) {
    if (window.localStorage[name]) {
      window.localStorage.removeItem(name);
    }
    return false;
  }
};
