export const GET_HOMES = "GET_HOMES";
export const GET_HOMES_SUCCESS = "GET_HOMES_SUCCESS";
export const GET_HOMES_FAILURE = "GET_HOMES_FAILURE";

export function getHomesAction() {
    return { type: GET_HOMES }
}
export function getHomesSuccessAction(homes) {
    return {
        type: GET_HOMES_SUCCESS,
        payload: { homes }
    }
}
export function getHomesFailureAction(error) {
    return {
        type: GET_HOMES_FAILURE,
        payload: { error }
    }
}