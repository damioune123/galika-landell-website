import {
    GET_GALLERY_ITEMS,
    GET_GALLERY_ITEMS_SUCCESS,
    GET_GALLERY_ITEMS_FAILURE
} from "../actions";

import { initialState } from '../constants/initialState';

export default function contactReducer(
    state = initialState()['galleryItems'],
    action
) {
    switch (action.type) {
        case GET_GALLERY_ITEMS:
            return {
                ...state,
                loading: true,
                galleryItems: null,
                error: null
            };
        case GET_GALLERY_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                galleryItems: action.payload.galleryItems
            };

        case GET_GALLERY_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                galleryItems: null
            };

        default:
            return state;
    }
}
