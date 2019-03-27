import * as actions from "../actions";

const initialState = {
    tempData: {
        temperature: '',
        latitude: '',
        longitude: '',
        lastReceived: ''
    }
};

const tempDataReceived = (state, action) => {
  const { tempData } = action;
  return {
    ...state,
    tempData
  };
};

const handlers = {
  [actions.TEMP_DATA_RECEIVED]: tempDataReceived
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
