import axios from '../../src/axios-contact';


export const SAVE_CONTACT_CHANGES = 'SAVE_CONTACT_CHANGES';
export const DELETE_CONTACT_CHANGES ='DELETE_CONTACT_CHANGES';
export const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST';
export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
export const FETCH_CONTACT_ERROR = 'FETCH_CONTACT_ERROR';


export const saveContactChanges = (e, contacts) => {
    e.preventDefault();
    return (dispatch, getState) => {
        dispatch(fetchContactRequest());
        axios.post('/contact.json', {contacts: contacts}).then(() => {
            dispatch(fetchContact());
        });
    }
};

export const fetchContactRequest = () => {
    return {type: FETCH_CONTACT_REQUEST};
};

export const fetchContactSuccess = (contacts) => {
    return {type: FETCH_CONTACT_SUCCESS, contacts: contacts}
};

export const fetchContactError = () => {
    return {type: FETCH_CONTACT_SUCCESS}
};


export const fetchContact = () => {
    return dispatch => {
        dispatch(fetchContactRequest());
        axios.get('/contact.json').then(response => {
            console.log(response.data);
            dispatch(fetchContactSuccess(response.data));
        }, error => {
            dispatch(fetchContactError());
        });
    }
};