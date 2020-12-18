export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, platId: id };
};

export const setFilters = (filterStettings) => {
  return { type: SET_FILTERS, filters: filterStettings };
};
