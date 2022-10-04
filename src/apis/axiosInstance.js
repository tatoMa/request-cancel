import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getReq = async () => {
  try {
    const { data } = await instance.get("/posts/1");
    return data;
  } catch (err) {
    return err;
  }
};
