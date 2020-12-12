import { PLATS } from "../../data/dummy-data";

const initialState = {
  plats: PLATS,
  filteredPlats: PLATS,
  favoritePlats: [],
};
const platsReducer = (state = initialState, action) => {
  return state;
};

export default platsReducer;
