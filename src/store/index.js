import Vue from 'vue'
import Vuex from 'vuex'
import * as getters  from './getters';
import * as actions  from './actions';
import * as mutations  from './mutations';

Vue.use(Vuex)
// const API_KEY = '<< your National Park Service api key here >>'
// const WEATHER_API_KEY = '<< your OpenWeather api key here >>'
// const NPS_API_KEY = '<< your NPS api key here >>'

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
