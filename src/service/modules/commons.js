import axios from "axios"
import store from "@/store"
import { baseURL } from "../../config"

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
export function getNodeList() {
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/v1/nodes`,
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
