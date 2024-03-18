import AxiosInstance from "./axiosInstance";
import Cookies from "js-cookie";

export const fetchUserData = async () => {
  try {
    const token = Cookies.get("token");
    const response = await AxiosInstance.get("/user", {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
