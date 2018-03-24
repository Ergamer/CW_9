import {
    DELETE_CONTACT_CHANGES, FETCH_CONTACT_ERROR, FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS,
    SAVE_CONTACT_CHANGES
} from "./actions";


const initialState = {
  contacts: {},
  loading: false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CONTACT_CHANGES:
            return {...state, contacts: action.contacts};
        case DELETE_CONTACT_CHANGES:
            return {...state};
        case FETCH_CONTACT_REQUEST:
            return {...state, loading: true};
        case FETCH_CONTACT_SUCCESS:
            return {...state, contacts: action.contacts || {}, loading: false};
        case FETCH_CONTACT_ERROR:
            return {...state, loading: false};
        default:
            return state;
    }
};

export default reducer;