import Vue from 'vue'
import Vuex from 'vuex'
import * as getters  from './getters';
import * as actions  from './actions';
import * as mutations  from './mutations';

Vue.use(Vuex)
// const API_KEY = '<< your National Park Service api key here >>'
// const WEATHER_API_KEY = '<< your OpenWeather api key here >>'
// const NPS_API_KEY = 'coa45xILoSovnptVgMsshu0XP1oUs13jB0LkH0Zv'
const NPS_API_KEY = 'l0JUo7zsJwenNuTztSuGOGxj1Y2LlW1acxvJvKA0'
const OW_API_KEY = '395df36cfef9b638b1c632f7a32a4b0d'

export const store = new Vuex.Store({
  state: {
    loading: false,
    parks: [],
    fbError: '',
    orderBy: 'name',
    loadedPark: null,
    hideNav: false,
    loc: "",
    parkState: "",
    loadedParkImage: "",
    loadParkWeather: null,
    message: 'Loading...',
    apiKey: NPS_API_KEY,
    apiWeatherKey: OW_API_KEY
  },
  mutations,
  actions,
  getters
})