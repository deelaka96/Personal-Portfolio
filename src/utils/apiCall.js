import Global from './globalEvents';

const Api = {
  async call(path, method, data) {
    console.log(path)
    const res = await (method === 'GET' ? (
      fetch(`http://localhost:1337/api/${path}?${Object.keys(data).map(((k) => `${k}=${encodeURIComponent(data[k])}`)).join('&')}`)
    ) : (
      fetch(`http://localhost:1337/api/${path}`, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer  67fd2c25fd5b2296511d39b50484c0070e5bc37194ae278cb91bd9e4b56e0452092791a21980550f6ee436ae7be0a98cbfaf8fb0bb2ffbc9667aa69ddb814387357e900c2b2d8ce0dc976433e107c4a5f2a3389d89ff429d5e5398afa92e138d7b137bc078c129fdabe3607cd49555c1de2c1dc60df7f15453530cc357f41f04' },
        body: JSON.stringify(data),
      })
    ));
    if (res.status === 200) {
      const r = await res.json();
      // console.log('result', path, r)
      return r
    }
    const error = await res.json();
    Global.notify({ type: 'error', msg: error.message });
    return error;
  },
  async get(path, data) {return Api.call(path, 'GET', data)},
  async getAll(path) {return Api.call(path)},
  async post(path, data) {return Api.call(path, 'POST', data)},
  async put(path, data) {return Api.call(path, 'PUT', data)},
  async delete(path, data) {return Api.call(path, 'DELETE', data)},
};

export default Api;
