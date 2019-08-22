import {ActionType} from './actionType';

export const addProductToCart = (product, quantity) => ({
    type: ActionType.ADD_PRODUCT_TO_CART,
    product,
    quantity
});

export const removeProductFromCart = (product, quantity) => ({
    type: ActionType.REMOVE_PRODUCT_FROM_CART,
    product,
    quantity
});

export const deleteProductFromCart = (product, quantity) => ({
    type: ActionType.DELETE_PRODUCT_FROM_CART,
    product,
    quantity
});