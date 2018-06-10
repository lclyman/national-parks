import Vue from 'vue';
import { db } from '../firebase'
import router from '../router/index'
import {HTTP, HTTP2} from '../axios';

export const loadParks = ({commit, state}) => {
  const parks = db.collection('locations').orderBy(state.orderBy)

  parks.onSnapshot(querySnapshot => {
    const myParks = []
    querySnapshot.forEach(doc => {
      myParks.push({ id: doc.id, ...doc.data() })
    })
    commit('loadParks', myParks)
    commit('setLoading', false)
  })
};

export const addNewPark = ({commit}, newPark) => {
  db.collection('locations').add(newPark)
  router.push('/parks')
};

export const loadPark = ({commit, state}, park) => {
  commit('clearLoadedPark')
  HTTP.get('parks?parkCode=' + park.parkCode + '&api_key=' + state.apiKey)
  .then(response => {
    let objPark = response.data.data[0]
    commit('loadParkImage', park.image)
    commit('loadPark', objPark)
    let strLatLong = objPark.latLong
    let arrLatLong = strLatLong.split(",");
    let lat = arrLatLong[0].replace('lat:', '').trim()
    let longitude = arrLatLong[1].replace('long:', '').trim()

    let str = `weather?lat=${lat}&lon=${longitude}&APPID=${state.apiWeatherKey}`

    HTTP2.get(`${str}`)
    .then(response => {
      commit('loadParkWeather', response.data)
      router.push('parkDetails')
    })
  })
  .catch(err => {
    console.log(err);
  })
};

export const deletePark = ({commit}, id) => {
  db.collection('locations').doc(id).delete()
  router.push('/parks')
};

export const clearParks = ({commit}) => {
  commit('clearParks')
  router.push('/')
};

export const orderBy = ({commit, dispatch}) => {
  commit('orderBy')
  dispatch('loadParks', 'yes"')
  router.push('/parks')
};

export const clearMessage = ({commit}) => {
  commit('clearMessage')
};

export const setParkState = ({commit}, strState) => {
  if(strState === 'United States Virgin Islands'){
    commit('setParkState', 'VI')
  } else {
    commit('setParkState', strState)
  }
};

export const setLoading = ({commit}, status) => {
  commit('setLoading', status)
};
