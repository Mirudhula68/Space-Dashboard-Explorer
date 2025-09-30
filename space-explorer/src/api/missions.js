import axios from "axios";

const API_URL = "https://api.spacexdata.com/v3/launches";

export const getMissions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching missions:", error);
    return [];
  }
};
