import { EncryptKey } from "lib/helpers/crypt"

const dataCache = new Map()
const ttl = 120000

const fetchAndSet = async (url:string, ts:number) => {

  const ACT = EncryptKey(process.env.NEXT_PUBLIC_API_TOKEN, process.env.NEXT_PUBLIC_API_SECRET)

  const fetchResponse = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${ACT}`
    }
  })
  .then( async (res) => {
    const data = await res.json()

    if (data.status == 401) {
      return data
    } else {
      const newDataObj = { ts, data }
      dataCache.set(url, newDataObj)

      return newDataObj
    }

  })
  .catch((err) => {})

  return fetchResponse
}

export const getData = async (url: string) => {
  const ts = Date.now()
  let currentData = await dataCache.get(url)

  if (!currentData || ts - currentData.ts > ttl) {
    currentData = await fetchAndSet(url, ts)
  }

  if (currentData.status == 401) {
    throw Error('Whats the magic word.')
  } else {
    return currentData.data
  }
}