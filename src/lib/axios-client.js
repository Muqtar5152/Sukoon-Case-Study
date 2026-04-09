import axios from 'axios';

export const createAxiosClient = ({ baseURL, headers, token, interceptResponses }) => {
  const client = axios.create({
    baseURL,
    headers: {
      ...headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (interceptResponses) {
    client.interceptors.response.use(
      (response) => response.data,
      (error) => {
        if (error.response) {
          return Promise.reject({
            ...error.response.data,
            status: error.response.status,
          });
        }
        return Promise.reject(error);
      }
    );
  }

  return client;
};
