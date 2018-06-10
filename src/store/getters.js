export const getParks = state => {
  var filterBy = state.parkState

  if (filterBy === "") {
    return state.parks
  } else {
    let arrFiltered = state.parks.filter(el => {
      return el.state === filterBy
    })
    return arrFiltered
  }

};

export const getLoadedPark = state => {
  return state.loadedPark
};

export const getLoadedParkImage = state => {
  return state.loadedParkImage
};

export const getLoadedParkWeather = state => {
  return state.loadParkWeather
};

export const getMessage = state => {
  return state.message
};

export const getParkState = state => {
  return state.parkState
};

export const isLoading = state => {
  return state.loading
};
