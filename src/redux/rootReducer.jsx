import { combineReducers } from "redux";

import calendarReducer from "./calendar/calendarReducer";
import contactReducer from "./contact/contactReducer";
import customiseReducer from "./customise/customiseReducer";
import ecommerceReducer from "./ecommerce/ecommerceReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  contact: contactReducer,
  ecommerce: ecommerceReducer,
  customise: customiseReducer,
  userData: userReducer, // Agrega el reducer del usuario al estado global
});

export default rootReducer;