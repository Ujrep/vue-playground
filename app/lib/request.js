import storage from 'lib/storage';
import 'whatwg-fetch';

function path(url = '') {
  if (url.indexOf('http') === 0) return url;
  return `${process.env.APP_PROCESS_API_URL}${url}`;
}

export default {
  get(url, head) {
    return fetch(path(url), {
      method: 'get',
      headers: head
    }).then((response) => {
      if (response.status === 401) {
        storage.removeItem('x-myaccount-token');
      }
      return response.json();
    });
  },

  getPDF(url, head) {
    return fetch(path(url), {
      method: 'get',
      headers: head
    }).then((response) => {
      return response.blob();
    });
  },

  put(url, data) {
    return new Promise((resolve, reject) => {
      return fetch(path(url), {
        method: 'put',
        body: JSON.stringify(data)
      }).then((response) => {
        const json = response.json();
        json.then((respObj) => {
          if (response.status === 401 && respObj.error !== 'Provided user password is invalid.') {
            storage.removeItem('x-myaccount-token');
          }
          if (response.status >= 200 && response.status < 300) {
            return resolve(respObj);
          } else {
            return reject(respObj);
          }
        });
      });
    });
  },

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(path(url), {
        method: 'post',
        body: JSON.stringify(data)
      }).then(response => {
        const json = response.json();
        json.then((respObj) => {
          if (response.status === 401 && respObj.error !== 'Provided user password is invalid.') {
            storage.removeItem('x-myaccount-token');
          }
          if (response.status >= 200 && response.status < 300) {
            return resolve(respObj);
          } else {
            return reject(respObj);
          }
        });
      });
    });
  },

  del(url, data) {
    return fetch(path(url), {
      method: 'delete',
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
};
