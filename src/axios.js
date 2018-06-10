  import axios from 'axios';

  export const HTTP = axios.create({
    baseURL: 'https://developer.nps.gov/api/v1/'
  })

  export const HTTP2 = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
  })


//   export const HTTP = axios.create({
//     baseURL: 'https://developer.nps.gov/api/v1/'
//   })

//     // before a request is made start the nprogress
//   HTTP.interceptors.request.use(config => {
//     NProgress.start()
//     return config
//   })

//   // before a response is returned stop nprogress
//   HTTP.interceptors.response.use(response => {
//     NProgress.done()
//     return response
//   })


// export const HTTP2 = axios.create({
//   baseURL: 'https://developer.nps.gov/api/v1/'
// })

//   // before a request is made start the nprogress
// HTTP2.interceptors.request.use(config => {
//   NProgress.start()
//   return config
// })

// // before a response is returned stop nprogress
// HTTP2.interceptors.response.use(response => {
//   NProgress.done()
//   return response
// })