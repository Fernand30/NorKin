import {
    CHILDREN_FETCH_SUCCESS,
    PARENT_FETCH_SUCCESS,
    PARENT_UPDATE
} from '../actions/types';

const INITIAL_STATE = { email: '', parentName: '', mobile: '', children: [], gaurdians : []};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case CHILDREN_FETCH_SUCCESS: {
            const { email, parentName, mobile, children, gaurdians } = action.payload;
            return {...state, email, parentName, mobile, children, gaurdians };
        }
        case PARENT_UPDATE:
            return { ...state, [action.payload.prop] : action.payload.value };
        default:
            return state;
    }
}