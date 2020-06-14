export const GET_META_DATA = "GET_META_DATA";
export const GET_META_DATA_SUCCESS = "GET_META_DATA_SUCCESS";
export const GET_META_DATA_FAILURE = "GET_META_DATA_FAILURE";

export function getMetaDataAction() {
    return { type: GET_META_DATA }
}
export function getMetaDataSuccessAction(metaData) {
    return {
        type: GET_META_DATA_SUCCESS,
        payload: { metaData }
    }
}
export function getMetaDataFailureAction(error) {
    return {
        type: GET_META_DATA_FAILURE,
        payload: { error }
    }
}