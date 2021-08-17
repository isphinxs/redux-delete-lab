import uuid from 'uuid';

export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
      const band = {
        id: uuid(),
        name: action.name
      }
      // console.log("Action: ", action);
      // console.log({bands: state.bands.concat(band)});
      // return {...state, bands: state.bands.concat(action.name)}
      return {...state, bands: state.bands.concat(band)};
      // return { bands: state.bands.concat(band) };
    case "DELETE_BAND":
      return { bands: state.bands.filter(band => band.id !== action.id)};
    default:
      return state
  
  }
};
