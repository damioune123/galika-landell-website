export const GET_GALLERY_ITEMS= "GET_GET_GALLERY_ITEMS";
export const GET_GALLERY_ITEMS_SUCCESS = "GET_GALLERY_ITEMS_SUCCESS";
export const GET_GALLERY_ITEMS_FAILURE = "GET_GALLERY_ITEMS_FAILURE";

export function getGalleryItemsAction() {
    return { type: GET_GALLERY_ITEMS }
}
export function getGalleryItemsSuccessAction(galleryItems) {
    return {
        type: GET_GALLERY_ITEMS_SUCCESS,
        payload: { galleryItems }
    }
}
export function getGalleryItemsFailureAction(error) {
    return {
        type: GET_GALLERY_ITEMS_FAILURE,
        payload: { error }
    }
}