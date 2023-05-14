import axios from 'axios';

// Konfigurasi default Axios
axios.defaults.baseURL = process.env.VUE_APP_API_URL; 
// axios.defaults.headers.common['Authorization'] = 'Bearer your-auth-token';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.interceptors.request.use(function(config) {
//     config.headers['Access-Control-Allow-Origin'] = '*'; // Atur header Access-Control-Allow-Origin untuk mengizinkan semua domain
//     config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'; // Atur header Access-Control-Allow-Methods untuk mengizinkan metode permintaan yang diinginkan
//     config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'; // Atur header Access-Control-Allow-Headers untuk mengizinkan header yang diinginkan
//     return config;
//   });


export default axios;
