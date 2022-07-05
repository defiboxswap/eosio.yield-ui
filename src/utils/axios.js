import axios from "axios"
import qs from "qs" 
import store from "@/store"

const https = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "https://eos.defibox.io": "",
  timeout: process.env.NODE_ENV === "production" ? 20000 : 60000,
  auth: {
    username: localStorage.getItem("token") || "", // TokenKey = 'token';
  },
})

https.defaults.transformRequest = [
  (data, header) => {
    const headerThis = header
    const token = localStorage.getItem('token');
    if (token) { // 
      headerThis.token = token; // eslint-disable-line
    }
    if (store.state.app.scatter && store.state.app.accountInfo.account) {
      headerThis.account = store.state.app.accountInfo.account
    }
    if (!header["Content-Type"]) {
      return qs.stringify(data)
    }
    return data
  },
]

https.interceptors.request.use(
  (config) => {
    
    // console.log(config);
    const token = localStorage.getItem("token")
    if (token) {
      
      config.auth.username = token // eslint-disable-line
    }
    return config
  },
  (error) => Promise.reject(error)
)

https.interceptors.response.use(
  (response) => {
    
    const res = response.data
    if (res.code === 401) {
      localStorage.setItem("token", "")
    }
    return res // eslint-disable-line
  },
  (error) => {
    console.log(error) // eslint-disable-line
    return false
  }
)

export default https
