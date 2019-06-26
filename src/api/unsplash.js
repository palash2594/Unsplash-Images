import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 836cd88da016a504a493fa88e9938b09afe8f4e297faec21ee8387e8397df149"
  }
});
