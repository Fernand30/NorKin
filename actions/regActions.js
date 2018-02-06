import {
    USER_UPDATE,  
    CHILD_UPDATE,
    GAURDIAN_UPDATE,
    IMAGE_SAVE,
    GAURDIAN_SAVE,
} from './types';

export const userUpdate = ({ prop, value }) => {
    return {
      type: USER_UPDATE,
      payload: { prop, value }
    };
};

export const childUpdate = ({ prop, value }) => {
    return {
      type: CHILD_UPDATE,
      payload: { prop, value }
    };
}; 

export const gaurdianUpdate = ({ prop, value }) => { 
    return {
      type: GAURDIAN_UPDATE,
      payload: { prop, value }
    };
}; 

export const saveImage = imageURI => {
    return {
        type: IMAGE_SAVE,
        payload: imageURI
    };
};

export const guardianSave = (data) => {    
    return { 
        type: GAURDIAN_SAVE,
        payload: data
    };
}