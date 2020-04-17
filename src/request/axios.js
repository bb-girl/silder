import axios from 'axios'
let base = ''
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV == 'development') {
    base = process.env.VUE_APP_BASEURL

  } else if (process.env.NODE_ENV == 'production') {
    base = process.env.VUE_APP_BASEURL
  } else {
    base = process.env.VUE_APP_BASEURL
  }

//过滤请求
axios.interceptors.request.use(config => {
    config.timeout = 10 * 1000
    return config
}, error => {
    return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.code === 2000) {   //服务端定义的响应code码为2000时请求成功

            return Promise.resolve(response.data) //使用Promise.resolve 正常响应
        } else if (response.data.code === 4000) {

            return Promise.reject(response.data)    //使用Promise.reject 抛出错误和异常
        } else {
            return Promise.reject(response.data)
        }
    },
    error => {
        if (error && error.response) {
            let res = {}
            res.code = error.response.status

            return Promise.reject(res)
        }
        return Promise.reject(error)
    }
)
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        params: params,
        // headers: {
        //   // 'accessToken': accessToken
        // }
    });
};

export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'accessToken': accessToken
        }
    });
};

export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'accessToken': accessToken
        }
    });
};

export const deleteRequest = (url, params) => {
    // let accessToken = getStore('accessToken');
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        params: params,
        // headers: {
        //   // 'accessToken': accessToken
        // }
    });
};

export const importRequest = (url, params) => {
    // let accessToken = getStore('accessToken');
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        headers: {
            // 'accessToken': accessToken
        }
    });
};

export const uploadFileRequest = (url, params) => {
    // let accessToken = getStore('accessToken');
    return axios({
        method: 'post',
        url: `${base}${url}`,
        params: params,
        headers: {
            // 'accessToken': accessToken
        }
    });
};
