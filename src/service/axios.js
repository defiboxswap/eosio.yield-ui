import axios from "axios"
import store from "@/store"
import qs from "qs" // fromData to string
// const CancelToken = axios.CancelToken
const https = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "https://api.tokenyield.io": "",
  timeout: process.env.NODE_ENV === "production" ? 20000 : 60000,
  auth: {
    username: localStorage.getItem("token") || "",
  },
  headers: {
    "Content-Type": "application/json",
  },
})

https.defaults.transformRequest = [
  (data, header) => {
    const headerThis = header
    if (localStorage.getItem("token")) {
      headerThis.token = localStorage.getItem("token")
    }
    headerThis.account = store.state.app.accountInfo.account || ""
    headerThis.channel = "dapp"
    headerThis.language = store.state.app.language || "en"
    headerThis.ref = store.state.app.accountInfo.wallet
    const token = localStorage.getItem('token');
    if (token) {
      headerThis.token = token; // eslint-disable-line
    }
    if (store.state.app.scatter && store.state.app.accountInfo.account) {
      headerThis.account = store.state.app.accountInfo.account
      const wallet = store.state.app.scatter.scatterFrom
      if (wallet) {
        headerThis.ref = encodeURI(wallet)
        headerThis.chain = store.state.app.scatter.chain || "eos"
      }
    }
    if (!header["Content-Type"] || header["Content-Type"] === "application/x-www-form-urlencoded") {
      return qs.stringify(data)
    }
    return JSON.stringify(data)
  },
]

https.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error)
)
https.interceptors.response.use(
  (response) => {
    const res = response.data
    return res // eslint-disable-line
  },
  (error) => {
    console.log(error) // eslint-disable-line
    return false
  }
)

export default https
