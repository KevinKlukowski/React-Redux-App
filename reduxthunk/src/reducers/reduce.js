import { LOAD_IMAGE } from './../actions/action';

export const initialState = {
    image: 'A lovely pic of food'
};

export function reduce(state = initialState, action) {
    switch(action.type) {
        case LOAD_IMAGE:
            return {
                ...state,
                image: action.payload
            };
            default:
                return state;
    }
}