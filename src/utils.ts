import axios from 'axios'

export async function postJson(url: string, data: any, config: Record<string, any> = {}) {
  const resp = await axios.post(url, data, {
    headers: { 'Content-Type': 'application/json', ...(config.headers || {}) },
    ...config,
  })
  return resp.data
}