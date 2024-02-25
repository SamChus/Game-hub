import axios, { AxiosRequestConfig } from "axios";
import { config } from "process";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next?: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "107f4894a4c54a708fb868fc0c3b58f6",
  },
});

class APIClient <T>{
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id : number | string) => {
   return  axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
  }
}


export default APIClient