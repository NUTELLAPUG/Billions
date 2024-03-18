// userReducer.js
import { SET_USER_DATA } from "./userActions";


const initialState = {
  userData: null, // Inicialmente, no hay datos de usuario
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload, // Almacena los datos del usuario en el estado
      };
      case "CLEAR_USER_DATA":
        return {
          ...state,
          userData: null,
      };
    default:
      return state;
  }
};

export default userReducer;