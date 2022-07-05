import axios from "axios"
import store from "@/store"
import qs from "qs" // fromData to string

const baseURL = process.env.NODE_ENV === "development" ? "" : "https://defibox.io"


function getHeaders() {
  return {
    chain: "eos",
    channel: "dapp",
    language: store.state.app.language || "en",
    project: "yield",
    "Content-Type": "application/x-www-form-urlencoded",
  }
}

// getFreeCpuWallet
export function getFreeCpuWallet(channel) {
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "post",
      url: `/defibox/commons/getFreeCpuWallet`,
      headers: getHeaders(),
    })
      .then((res) => {
        // setFreeCpuWhiteList
        const arr = res.data.freeCpuWallet.split(",")
        store.dispatch("setFreeCpuWhiteList", arr)
        const channelData = channel ? channel : localStorage.getItem("channel")
        store.dispatch("setIsFreeCpuWhite", channelData)

        let result = Object.assign(res.data, {
          isFreeCpuWhite: store.state.whiteConfig.isFreeCpuWhite,
        })
        resolve({ status: !result.code, result })
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// getNodeList
export function getNodeList() {
  // console.log('baseURL is ', baseURL, process.env);
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "post",
      url: `/api/common/getNodeList`,
      headers: getHeaders(),
    }).then(
      (res) => {
        let result = Object.assign(res, {})
        resolve({ status: !result.code, result: result.data })
      },
      (err) => {
        reject(err)
      }
    )
  })
}

// 获取通用参数
export function getCommonParam(params) {
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "post",
      url: "/api/common/getCommonParam",
      headers: getHeaders(),
      data: qs.stringify(params),
    }).then(
      (res) => {
        let result = Object.assign(res, {})
        resolve({ status: !result.code, result: result.data })
      },
      (err) => {
        reject(err)
      }
    )
  })
}