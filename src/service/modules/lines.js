import axios from "axios"
import store from "@/store"
import { baseURL } from "../../config";


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
      url: `/v1/lines/${duration}/stats`,
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
export function lines2(duration, tvl_type) {
  duration = duration || 'day'
  const params = {
    tvl_type
  }
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/v1/echart/lines/${duration}`,
      headers: getHeaders(),
      params
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
  const params = {
    tvl_type: 'tvl_usd'
  }
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/v1/echart/lines/${duration}/categorystats`,
      headers: getHeaders(),
      params
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
  params.duration = params.duration || '180'
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      params,
      url: `/v1/lines/day`,
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

// Overview reports
export function overviewReports(params) {
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      params,
      url: `/v1/reports`,
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
