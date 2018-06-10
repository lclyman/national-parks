export const loadParks = (state, parks) => {
  state.parks = parks
};

export const clearParks = (state) => {
  state.parks = []
  state.orderBy = "name"
  state.loadedPark = null
};

export const orderBy = (state) => {
  state.orderBy = "state"
};

export const loadPark = (state, park) => {
  state.loadedPark = park
};

export const clearLoadedPark = state => {
  state.loadedPark = null
};

export const clearMessage = state => {
  state.message = ''
};

export const loadParkImage = (state, image) => {
  state.loadedParkImage = image
};

export const loadParkWeather = (state, objWeather) => {
  state.loadParkWeather = objWeather
};

export const setParkState = (state, strState) => {
  state.parkState = strState
};

export const setLoading = (state, status) => {
  state.loading = status
};
