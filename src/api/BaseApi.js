class BaseApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(url, data, headers) {
    const fullUrl = `${this.baseUrl}/${url}?${new URLSearchParams(data)}`;
    const response = await fetch(fullUrl, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      accept: "application/vnd.github.v3+json",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
    });
    const responseData = await response.json();
    if (!response.ok) {
      return { success: false , message: responseData.message }
    }
    return { success: true, data: responseData };
  }
}

export default BaseApi;
