 const get = async (url,data,headers) => {
  const params = Object.keys(data);
  const fullUrl = `${url}?${new URLSearchParams(data)}`;
  const response = await fetch(fullUrl, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    accept: 'application/vnd.github.v3+json',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
  });
  return await response.json();
 };

 const post = async (url, data, headers) => {
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    accept: 'application/vnd.github.v3+json',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json();
 };

 export {get, post}