import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  data: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // params: {
  //   key,
  // },
});

class APICLient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);

  get = (id: number | string) =>
    axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);

  // eslint-disable-next-line class-methods-use-this
  post = (data: T) =>
    axiosInstance
      .post<FetchResponse<T>>('/genres', data)
      .then((res) => res.data);
}

export default APICLient;
