import { 
    EMAIL_LOGIN, 
    EMAIL_ERROR,
    VALIDATION_CODE,
    VALIDATION_ERROR,
    AUTHORIZED_SUCCESS,
    AUTHORIZED_ERROR,
    SESSION_TOKEN,
    TOKEN_ERROR,
    USER_DATA
} from '../actions/types';
const INITIAL_STATE = {
  userEmail: false,
  error: "",
  vError: "",  
  aError: "",
  authorized: null,
}

export default function(state = INITIAL_STATE, action) {      
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    
    
  switch (action.type) {    
    case EMAIL_LOGIN:
        return {userEmail: action.payload, error: "" };
    case EMAIL_ERROR:
        return { error: action.payload };
    case VALIDATION_CODE:
        return { ...state, route: action.payload };
    case VALIDATION_ERROR:
        return { ...state, vError: action.payload.message };
    case AUTHORIZED_SUCCESS:
        return { ...state, authorized: action.payload.authorized, token: action.payload.token};
    case AUTHORIZED_ERROR:
        return { ...state, authorized: false, aError: action.payload };
    case USER_DATA:
        return { userData: action.payload };
    default:
      return state;
  }
}