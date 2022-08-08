import axios from "axios"
import store from "@/store"
import qs from "qs" // fromData to string
import { baseURL, VUE_APP_TIMEOUT } from "../config";

// const CancelToken = axios.CancelToken
const https = axios.create({
  baseURL,
  timeout: VUE_APP_TIMEOUT,
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
