import axios from "axios"
import store from "@/store"

const baseURL = process.env.NODE_ENV === "development" ? "" : "https://api.tokenyield.io"
// const baseURL = "https://api.tokenyield.io"

function getHeaders() {
  return {
    chain: "eos",
    channel: "dapp",
    language: store.state.app.language || "en",
    project: "yield",
    "Content-Type": "application/json; charset=utf-8",
  }
}

// Overview first lines
export function lines1(duration) {
  duration = duration || 'day'
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/v1/line/${duration}/stats`,
      headers: getHeaders(),
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// Overview second lines
export function lines2(duration) {
  duration = duration || 'day'
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/v1/echart/lines/${duration}`,
      headers: getHeaders(),
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}


// Overview third lines
export function lines3(duration) {
  duration = duration || 'day'
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/v1/echart/line/${duration}/categorystats`,
      headers: getHeaders(),
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// ProtocolsDetails lines
export function protocolsDetails(params) {
  params.duration = params.duration || 'day'
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      params,
      url: `/v1/lines/${params.duration}`,
      headers: getHeaders(),
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
