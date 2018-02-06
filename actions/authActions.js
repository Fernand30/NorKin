import axios from 'axios';
import {   
  EMAIL_LOGIN,
  EMAIL_ERROR,
  VALIDATION_CODE,
  VALIDATION_ERROR,
  AUTHORIZED_SUCCESS,
  AUTHORIZED_ERROR,
  USER_DATA,
  USER_ERROR
} from './types';

export const login = email => async dispatch => {   
    
    try {
        const { data } = await axios.post('https://api.kinder-id.com/auth/mobile/email_login', {email});        
        dispatch({ type: EMAIL_LOGIN, payload: data }); 
    } catch (err) {     
        console.log('error: ', err.response);
        if (err.response.status == 502) {                        
            return dispatch({ type: EMAIL_ERROR, payload: "Network error, Please try again later" });
            
        }
        dispatch({ type: EMAIL_ERROR, payload: err.response.data });
    }
};

export const verify = (user, verificationCode) => async dispatch => {
    try {        
        const { data } = await axios.post('https://api.kinder-id.com/auth/mobile/validate_user', {user, verificationCode});
        
        dispatch({ type: VALIDATION_CODE, payload: data }); 
    } catch (err) {
        console.log('request error: ', err.response)
        if (err.response.status == 502) {                        
            return dispatch({ type: VALIDATION_ERROR, payload: "Network error, Please try again later" });
            
        }
        dispatch({ type: VALIDATION_ERROR, payload: err.response.data });
    }
};

export const authorize = (email, password) => async dispatch => {
    try {        
        const { data } = await axios.post('https://api.kinder-id.com/auth/mobile/authorize_user', {email, password});
        dispatch({ type: AUTHORIZED_SUCCESS, payload: data }); 
    } catch (err) {
        console.log('request error: ', err.response)
        if (err.response.status == 502) {                        
            return dispatch({ type: AUTHORIZED_ERROR, payload: "Network error, Please try again later" });
            
        }
        dispatch({ type: AUTHORIZED_ERROR, payload: err.response.data });
    }
};

export const getUserFromToken = (token) => async dispatch => {
    
    try {        
        const { data } = await axios.post('https://api.kinder-id.com/auth/mobile/getuserfromtoken', null, { headers: {"Authorization": `Bearer ${token}`}});
        console.log('token response ', data);        
        dispatch({ type: USER_DATA, payload: data.token.user }); 
    } catch (err) {
        console.log('request error: ', err.response)
        if (err.response.status == 502) {                        
            return dispatch({ type: USER_ERROR, payload: "Network error, Please try again later" });            
        }
        dispatch({ type: USER_ERROR, payload: err.response.data });
    }
};


