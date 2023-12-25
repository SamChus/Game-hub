import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "107f4894a4c54a708fb868fc0c3b58f6",
  },
});