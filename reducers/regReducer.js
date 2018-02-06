import {
  USER_UPDATE, 
  CHILD_UPDATE,
  GAURDIAN_UPDATE,
  IMAGE_SAVE,
  GAURDIAN_SAVE
} from '../actions/types';
const INITIAL_STATE = {
  parentName: "",
  parentTel: "",
  parentPassword: "",
  parentRPassword: "",
  childName: "",
  wristband: "",
  gaurdianName: "",
  gaurdianTel: "",
  gaurdianEmail: "",
  uri: "",
  gaurdianData: []  
};

export default function(state = INITIAL_STATE, action) {      
  
    
  switch (action.type) {
    case USER_UPDATE:
      return { ...state, [action.payload.prop] : action.payload.value };   
    case CHILD_UPDATE:
      return { ...state, [action.payload.prop] : action.payload.value }; 
    case GAURDIAN_UPDATE:
      return { ...state, [action.payload.prop] : action.payload.value };
    case IMAGE_SAVE:
      return { ...state, uri: action.payload };
    case GAURDIAN_SAVE:
      return  { ...state, gaurdianData: action.payload, gaurdianName: "", gaurdianTel: "", gaurdianEmail: "" }
    default:
      return state;
  }
}