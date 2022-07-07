import axios from "axios"
import store from "@/store"

const baseURL = process.env.NODE_ENV === "development" ? "" : "https://api.defibox.io/yield"
// const baseURL = "https://api.defibox.io/yield"

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
export function lines1(time_frame) {
  time_frame = time_frame || 'day'
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/api/v1/line/{time_frame}/stats`,
      params: {
        time_frame
      },
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
export function lines2(time_frame) {
  time_frame = time_frame || 'day'
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/api/v1/echart/lines/{time_frame}`,
      params: {
        time_frame
      },
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
export function lines3(time_frame) {
  time_frame = time_frame || 'day'
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      params: {
        time_frame
      },
      url: `/api/v1/echart/line/{time_frame}/categorystats`,
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
  params.time_frame = params.time_frame || 'day'
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      params,
      url: `/api/v1/lines/{time_frame}`,
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
