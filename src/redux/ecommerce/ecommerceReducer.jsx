import * as actionTypes from "./ecommerceTypes";

import productData from "./data/product.json"
import cartData from "./data/cart.json"
import wishListData from "./data/wishlist.json"

const INITIAL_STATE = {
    products: productData,
    cart: cartData,
    wishlist: wishListData,
    currentItem: null,
    searchValue: '',
    priceFilterValue: 'lowest',
};

const ecommerceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );

            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            let itemsCurrentCart = null
            if (state.currentItem != null) {
                itemsCurrentCart = state.currentItem
                itemsCurrentCart.addToCartCheck = true
            }

            const itemChartProducts = state.products.slice()
            const updateCartProducts = { ...itemChartProducts[action.payload.id] }
            updateCartProducts.addToCartCheck = true
            itemChartProducts[action.payload.id] = updateCartProducts

            const itemChartWishlist = state.wishlist.slice()
            const updateCartWishlist = { ...itemChartWishlist[action.payload.id] }
            updateCartWishlist.addToCartCheck = true
            itemChartWishlist[action.payload.id] = updateCartWishlist

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item }
                            : item
                    )
                    : [...state.cart, { ...item }],
                products: itemChartProducts,
                wishlist: itemChartWishlist,
                currentItem: itemsCurrentCart
            };

        case actionTypes.ADD_TO_WISH:
            const itemsWish = state.products.slice()
            const updateWish = { ...itemsWish[action.payload.id] }
            updateWish.wishCheck = true
            itemsWish[action.payload.id] = updateWish

            const itemsWishList = state.products.slice()
            const updateWishList = { ...itemsWishList[action.payload.id] }
            updateWishList.wishCheck = true
            itemsWishList[action.payload.id] = updateWishList

            return {
                ...state,
                wishlist: (
                    [...state.wishlist, action.payload.item],
                    itemsWishList
                ),
                products: itemsWish,
            };

        case actionTypes.REMOVE_FROM_CART:
            const itemsCart = state.products.slice()
            const updateCart = { ...itemsCart[action.payload.id] }
            updateCart.qty = 1
            updateCart.addToCartCheck = false
            itemsCart[action.payload.id] = updateCart

            const itemRemoveWishlist = state.wishlist.slice()
            const updatRemoveWishlist = { ...itemRemoveWishlist[action.payload.id] }
            updatRemoveWishlist.qty = 1
            updatRemoveWishlist.addToCartCheck = false
            itemRemoveWishlist[action.payload.id] = updatRemoveWishlist

            let itemsCurrentRemove = null
            if (state.currentItem != null) {
                itemsCurrentRemove = state.currentItem
                itemsCurrentRemove.qty = 1
                itemsCurrentRemove.addToCartCheck = false
            }

            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
                products: itemsCart,
                wishlist: itemRemoveWishlist,
                currentItem: itemsCurrentRemove
            };

        case actionTypes.REMOVE_FROM_WISHLIST:
            const itemsWishlistRemove = state.wishlist
            itemsWishlistRemove.wishCheck = false

            const itemsProducts = state.products.slice()
            const updateWishlist = { ...itemsProducts[action.payload.id] }
            updateWishlist.wishCheck = false
            itemsProducts[action.payload.id] = updateWishlist

            return {
                ...state,
                wishlist: state.wishlist.filter((item) => item.id !== action.payload.id),
                products: itemsProducts
            };

        case actionTypes.ADJUST_ITEM_QTY:
            let itemsCurrentQty = null
            if (state.currentItem != null) {
                itemsCurrentQty = state.currentItem
                itemsCurrentQty.qty = +action.payload.qty
            }

            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
                products: state.products.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
                wishlist: state.wishlist.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
                currentItem: itemsCurrentQty
            };

        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };

        case actionTypes.SEARCH_PRODUCT:
            return {
                ...state,
                searchValue: action.payload,
            };

        case actionTypes.PRICE_FILTER:
            return {
                ...state,
                priceFilterValue: action.payload,
            };

        default:
            return state;
    }
};

export default ecommerceReducer;
