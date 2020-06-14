export const GET_REALTORS = "GET_REALTORS";
export const GET_REALTORS_SUCCESS = "GET_REALTORS_SUCCESS";
export const GET_REALTORS_FAILURE = "GET_REALTORS_FAILURE";

export function getRealtorsAction() {
    return { type: GET_REALTORS }
}
export function getRealtorsSuccessAction(realtors) {
    return {
        type: GET_REALTORS_SUCCESS,
        payload: { realtors }
    }
}
export function getRealtorsFailureAction(error) {
    return {
        type: GET_REALTORS_FAILURE,
        payload: { error }
    }
}