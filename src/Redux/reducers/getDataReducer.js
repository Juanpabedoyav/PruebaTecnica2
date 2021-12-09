import { types } from "../types/types";






export const getDataReducer = (state = [], action) => {
    switch (action.type) {
      case types.data:
        return {
         data: action.payload,
        };
      
      default:
        return state;
    }
  };


