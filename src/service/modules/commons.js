import axios from "axios"
import store from "@/store"
import qs from "qs" // fromData to string

const baseURL = process.env.NODE_ENV === "development" ? "" : "https://api.defibox.io/yield"


function getHeaders() {
  return {
    chain: "eos",
    channel: "dapp",
    language: store.state.app.language || "en",
    project: "yield",
    "Content-Type": "application/x-www-form-urlencoded",
  }
}

// getNodeList
// export function getNodeList() {
//   return new Promise((resolve, reject) => {
//     axios({
//       baseURL,
//       method: "post",
//       url: `/api/common/getNodeList`,
//       headers: getHeaders(),
//     }).then(
//       (res) => {
//         let result = Object.assign(res, {})
//         resolve({ status: !result.code, result: result.data })
//       },
//       (err) => {
//         reject(err)
//       }
//     )
//   })
// }

// getNodeList
export function getNodeList() {
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/api/v1/nodes`,
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

// getCommonParam
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