import { types } from "../types/types";

export const filtroReducer = (state = [], action) => {
    switch (action.type) {
    
        case types.filtro:
          return {
           filtro: action.payload,
          };
      default:
        return state;
    }
  };