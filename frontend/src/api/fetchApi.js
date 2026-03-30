import axios from "axios";
const API = import.meta.env.VITE_API_URL;
console.log("API URL:", API);
export const fetchShortUrl = async (longUrl) => {
  try {
    const response = await axios.post(
      `${API}/api/url`,
      { fullurl: longUrl }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};