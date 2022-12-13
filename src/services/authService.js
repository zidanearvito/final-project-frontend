import API from "./api";

const AuthService = {
  login: async function (data) {
    try {
      const response = await API.post("/api/auth/login", data);
      API.defaults.headers[
        "Authorization"
      ] = `Bearer ${response.data.data.accessToken}`;
      setHeadersAndStorage(response.data.data);
      return response;
    } catch (err) {
      console.log("Auth service error", err);
      throw err;
    }
  },

  loginAdmin: async function (data) {
    try {
      const response = await API.post("/api/auth/login/admin", data);
      console.log(response.data.data);
      API.defaults.headers[
        "Authorization"
      ] = `Bearer ${response.data.data.accessToken}`;
      setHeadersAndStorage(response.data.data);
      return response;
    } catch (err) {
      console.log("Auth service error", err);
      throw err;
    }
  },

  register: async function (data) {
    try {
      const response = await API.post("/api/auth/register", data);
      console.log(response.data.data);
      API.defaults.headers[
        "Authorization"
      ] = `Bearer ${response.data.data.accessToken}`;
      setHeadersAndStorage(response.data.data);
      return response;
    } catch (err) {
      console.log("Auth service error", err);
      throw err;
    }
  },

  logout: () => {
    API.defaults.headers["Authorization"] = "";
    localStorage.removeItem("name");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("roleId");
    localStorage.removeItem("email");
  },

  getUser: async function () {
    try {
      const response = await API.get("/api/user");
      // console.log(response.data.data)
      // localStorage.setItem('data', response.data.data);
      return response;
    } catch (err) {
      console.log("Auth service error", err);
      throw err;
    }
  },

  updateProfile: async function (data) {
    try {
      const headers = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }
      const response = await API.put("/api/user/update/", data, headers);
      localStorage.removeItem("name");
      localStorage.setItem("name", response.data.data.firstName);
      return response;
    } catch (err) {
      console.log("Auth service error", err);
      throw err;
    }
  },
};

const setHeadersAndStorage = ({ name, accessToken, roleId, email }) => {
  API.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("roleId", roleId);
  localStorage.setItem("accessToken", accessToken);
};

export default AuthService;
