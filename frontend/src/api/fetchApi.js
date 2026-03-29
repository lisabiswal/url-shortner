import axios from "axios";

export const fetchShortUrl = async (longUrl) => {
  try {
    const response = await axios.post("http://localhost:3100/api/url", { fullurl: longUrl });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}