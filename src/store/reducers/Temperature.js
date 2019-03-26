import * as actions from "../actions";

const initialState = {
    tempLoading : false,
    tempData: {
        temperature: '',
        latitude: '',
        longitude: '',
        lastReceived: ''
    }
};

const startLoading = (state, action) => {
  return { ...state, tempLoading: true };
};

const tempDataReceived = (state, action) => {
  const { data } = action;
  if (!data["consolidated_weather"]) return state;
  const temperature = data.temperature;
return {
    ...state,
    tempLoading: false,
    temperature
  };
};

const handlers = {
  [actions.FETCH_TEMP_DATA]: startLoading,
  [actions.TEMP_DATA_RECEIVED]: tempDataReceived
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
