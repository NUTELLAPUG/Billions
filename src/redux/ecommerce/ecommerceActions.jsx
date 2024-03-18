import * as actionTypes from "./ecommerceTypes";

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        },
    };
};

export const addToWish = (itemID, item) => {
    return {
        type: actionTypes.ADD_TO_WISH,
        payload: {
            id: itemID,
            item: item,
        },
    };
};

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    };
};

export const removeFromWishlist = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_WISHLIST,
        payload: {
            id: itemID,
        },
    };
};

export const adjustItemQty = (itemID, qty) => {
    return {
        type: actionTypes.ADJUST_ITEM_QTY,
        payload: {
            id: itemID,
            qty: qty,
        },
    };
};

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    };
};

export const searchProduct = (value) => {
    return {
        type: actionTypes.SEARCH_PRODUCT,
        payload: value,
    };
};

export const priceFilter = (filter) => {
    return {
        type: actionTypes.PRICE_FILTER,
        payload: filter,
    };
};
