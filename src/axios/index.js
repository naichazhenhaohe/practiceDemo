import axios from 'axios'
import { Modal } from 'antd';

export default options => {
  const baseURL = 'https://www.easy-mock.com/mock/5d08edc967ab5161d5af5d11/demo'
  let loading
  if (options.data && options.data.isShowLoading !== false) {
    loading = document.getElementById('loading')
    loading.style.display = 'block'
  }
  return new Promise((resolve, reject) => {
    axios({
      url: options.url,
      method: 'get',
      baseURL,
      timeout: 5000,
      params: (options.data && options.data.params) || ''
    }).then(response => {
      if (options.data && options.data.isShowLoading !== false) {
        loading = document.getElementById('loading')
        loading.style.display = 'none'
      }
      if (response.status === 200) {
        let res = response.data;
        if (res.code === 0) {
          resolve(res);
        } else {
          Modal.info({
            title: "提示",
            content: res.msg
          })
        }
      } else {
        reject(response.data);
      }
    })
  })
}