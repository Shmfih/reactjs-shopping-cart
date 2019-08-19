import { ActionType } from "../action/actionType";

const initialState = {
    productList: [],
    totalProduct: 3,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_TO_CART: {
            // Check product if exist
            // If yes, increase quantity
            // If no, add new item to list
            // Calc total
            console.log(state);
            const cartItemList = [...state.productList];
            const { product, quantity } = action;
            // Find cart item of selected product
            let cartIdx = cartItemList.findIndex(x => x.id === product.id);
            if (cartIdx >= 0) {
                cartItemList[cartIdx] = {
                    ...cartItemList[cartIdx],
                    quantity: cartItemList[cartIdx].quantity + quantity,
                };
            } else {
                const cartItem = {
                    product,
                    id: product.id,
                    quantity: quantity,
                };
                cartItemList.push(cartItem);
            }

            // Calc total
            const totalProduct = state.totalProduct + product.price;
            console.log(state);
            return {
                ...state,
                totalProduct,
                productList: cartItemList,
            };
        };
        default:
            return state;
    }

};

export default cartReducer;