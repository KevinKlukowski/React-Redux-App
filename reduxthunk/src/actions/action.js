import axios from "axios";

export const LOAD_IMAGE = 'LOAD_IMAGE';


export const getImage = () => {

    return dispatch => {
        axios.get('https://foodish-api.herokuapp.com/api/')
        .then((res) => {
            console.log(res)
            dispatch({ type: LOAD_IMAGE, payload: res })
        })
    }

}

export function loadImage(image) {
    return {
        type: LOAD_IMAGE,
        payload: image
    };
}