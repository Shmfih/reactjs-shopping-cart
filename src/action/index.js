import {ActionType} from './actionType';

export const addProductToCart = (product, quantity) => ({
    type: ActionType.ADD_PRODUCT_TO_CART,
    product,
    quantity
});