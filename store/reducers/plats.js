import { PLATS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/plats";
import { SET_FILTERS } from "../actions/plats";

const initialState = {
  plats: PLATS,
  filtredPlats: PLATS,
  favoritePlats: [],
};
const platsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoritePlats.findIndex(
        (plat) => plat.id === action.platId
      );
      if (existingIndex >= 0) {
        (updateFavPlats = [...state.favoritePlats]),
          updateFavPlats.splice(existingIndex, 1);
        return { ...state, favoritePlats: updateFavPlats };
      } else {
        const plat = state.plats.find((plat) => plat.id === action.platId);
        return {
          ...state,
          favoritePlats: state.favoritePlats.concat(plat),
        };
      }

    case SET_FILTERS:
      const appliedFilters = action.filters;

      const updatedFilterPlats = state.plats.filter((plat) => {
        if (appliedFilters.gluteenFree && !plat.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !plat.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarianFree && !plat.isVegetarian) {
          return false;
        }
        if (appliedFilters.veganFree && !plat.isVegan) {
          return false;
        }
        return true;
      });

      return { ...state, filtredPlats: updatedFilterPlats };
    default:
      return initialState;
  }
};

export default platsReducer;
