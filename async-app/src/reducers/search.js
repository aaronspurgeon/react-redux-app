import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR
} from "../actions/search";

export const initialState = {
  searchResults: [
    {
      title: null,
      location_type: null,
      woeid: null,
      latt_long: null
    }
  ],
  isLoading: false,
  error: ""
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        searchResults: [
          ...state.searchResults,
          {
            title: action.payload.title,
            location_type: action.payload.location_type,
            woeid: action.payload.woeid,
            latt_long: action.payload.latt_long
          }
        ],
        isLoading: false
      };
    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
