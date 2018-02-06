import axios from 'axios';
import { AsyncStorage } from 'react-native'
import {
    CHILDREN_FETCH_SUCCESS,
    GAURDIAN_FETCH_SUCCESS,
    PARENT_FETCH_SUCCESS,
    PARENT_UPDATE
} from './types';

export const parentUpdate = ({ prop, value }) => {
    return {
      type: PARENT_UPDATE,
      payload: { prop, value }
    };
};
export const fetchChildren = () => async dispatch => {    
    const token = await AsyncStorage.getItem('kinderID_sessionToken');
    const config = {
        headers: {'Authorization': "Bearer " + token}
   };
    try {
        let {data} = await axios.post('https://api.kinder-id.com/mobile/getuserdata', null, config);
       
        dispatch({ type: CHILDREN_FETCH_SUCCESS, payload: data})
    } catch (err) {     
        console.log('error: ', err.response);
        if (err.response.status == 502) {                        
            return  console.log('network error');
            //dispatch({ type: CHILDREN_FETCH_ERROR, payload: "Network error, Please try again later" });            
        }
        // dispatch({ type: CHILDREN_FETCH_ERROR, payload: err.response });
        console.log('error', err.respose);        
    }
};

export const fetchParent= (id) => async dispatch => {
    try {
        let {data} = await axios.post('https://api.kinder-id.com/mobile/getuserdata', {id});
        
        dispatch({ type: PARENT_FETCH_SUCCESS, payload: data.gaurdians})
    } catch (err) {     
        console.log('error: ', err.response);
        if (err.response.status == 502) {                        
            return console.log('network error');
            //dispatch({ type: GAURDIAN_FETCH_SUCCESS, payload: "Network error, Please try again later" });            
        }
        // dispatch({ type: GAURDIAN_FETCH_SUCCESS, payload: err.response });
        console.log('error', err.respose);
    }
};