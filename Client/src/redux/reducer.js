import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    case REMOVE_FAV:
      const newFavorites = state.myFavorites.filter(
        (character) => character.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: newFavorites,
        allCharacters: newFavorites,
      };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === payload
        ),
      };
    case ORDER:
      const newOrder = state.allCharacters.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: newOrder,
      };
    case RESET:
      return {
        ...state,
        myFavorites: [...state.allCharacters],
      };
    default:
      return state;
  }
};

export default rootReducer;
