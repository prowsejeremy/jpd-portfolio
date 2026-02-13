import fetchEncryptKey from "./fetchEncryptKey";

const dataCache = new Map();
const ttl = 120000;

const fetchAndCache = async (url: string, ts: number) => {
  const ACT = await fetchEncryptKey({ allowedMethod: "GET" });

  const fetchResponse = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${ACT}`,
    },
  }).then(async (res) => {
    const data = await res.json();

    if (data.status == 401) {
      return data;
    } else {
      const newDataObj = { ts, data };
      dataCache.set(url, newDataObj);

      return newDataObj;
    }
  });

  return fetchResponse;
};

export const getData = async (url: string) => {
  const ts = Date.now();
  let currentData = await dataCache.get(url);

  if (!currentData || ts - currentData.ts > ttl) {
    currentData = await fetchAndCache(url, ts);
  }

  if (currentData.status == 401) {
    throw Error("Whats the magic word.");
  } else {
    return currentData.data;
  }
};
