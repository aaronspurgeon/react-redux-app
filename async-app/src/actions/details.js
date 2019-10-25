import axios from "axios";

export const FETCH_LOCATION_START = "FETCH_LOCATION_START";
export const FETCH_LOCATION_SUCCESS = "FETCH_LOCATION_SUCCESS";
export const FETCH_LOCATION_ERROR = "FETCH_LOCATION_ERROR";

export function fetchLocation(woeid) {
  return dispatch => {
    dispatch({ type: FETCH_LOCATION_START });
    axios
      .get(`https://www.metaweather.comapi/location/${woeid}/`)
      .then(res => {
        dispatch({ type: FETCH_LOCATION_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_LOCATION_ERROR, payload: err });
      });
  };
}
