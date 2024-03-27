import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  data: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // params: {
  //   key,
  // },
});

class APICLient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
  post = (data: T) => {
    return axiosInstance
      .post<FetchResponse<T>>("/genres", data)
      .then((res) => res.data);
  };
}

export default APICLient;
