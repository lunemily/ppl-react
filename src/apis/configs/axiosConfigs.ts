import axios from "axios";

// Helper function to get token
const token = () => {
  const name = "token";
  const nameLenPlus = name.length + 1;
  return (
    document.cookie
      .split(";")
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null
  );
};

const createApi = () => {
  let headers = {
    "Content-Type": "application/json",
    "PPL-Event": process.env.REACT_APP_PPL_LOCATION,
    Platform: "web",
  };
  if (token()) {
    headers["Authorization"] = `Bearer ${token()}`;
  }
  return axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: headers,
  });
};

export const api = createApi();

// defining a custom error handler for all APIs
const errorHandler = (error) => {
  const statusCode = error.response?.status;

  // logging only errors that are not 401
  if (statusCode && statusCode > 200) {
    console.error(error);
  }

  return Promise.reject(error);
};

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
