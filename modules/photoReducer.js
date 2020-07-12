import { logger } from 'react-native-logs';
const log = logger.createLogger();

const initialState = {
    pending: false,
    photos: [],
    error: null
}

export default function PhotosReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PHOTOS_PENDING":
            return {
                ...state,
                pending: true
            }
        case "GET_PHOTOS_SUCCESS":
            return {
                ...state,
                pending: false,
                photos: action.payload
            }
        case "GET_PHOTOS_ERROR":
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}