import API from './api';

const AuthService = {
  login: async function (data) {
    try {
      const response = await API.post('/api/auth/login', data);
      API.defaults.headers['Authorization'] = `Bearer ${response.data.data.accessToken}`;
      setHeadersAndStorage(response.data.data);
      return response;
    } catch (err) {
      console.log('Auth service error', err);
      throw err;
    }
  },

  register: async function (data) {
    try {
      const response = await API.post('/api/auth/register', data);
      console.log(response.data.data)
      API.defaults.headers['Authorization'] = `Bearer ${response.data.data.accessToken}`;
      setHeadersAndStorage(response.data.data);
      return response;
    } catch (err) {
      console.log('Auth service error', err);
      throw err;
    }
  },

  logout: () => {
    API.defaults.headers['Authorization'] = '';
    localStorage.removeItem('name');
    localStorage.removeItem('accessToken');
  },

//   updateProfile: async function (data) {
//     try {
//       const headers = {
//         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//       }
//       const response = await API.put('/users/update', data, headers);
//       localStorage.setItem('user', JSON.stringify(data));
//       return response;
//     } catch (err) {
//       console.log('Auth service error', err);
//       throw err;
//     }
//   },

}

const setHeadersAndStorage = ({ name, accessToken }) => {
  API.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
  localStorage.setItem('name', JSON.stringify(name));
  localStorage.setItem('accessToken', accessToken);
}

export default AuthService;