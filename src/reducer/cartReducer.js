import { ActionType } from "../action/actionType";

const initialState = {
    list: [],
    total: 0,
};



const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_TO_CART: {
            // Check product if exist
            // If yes, increase quantity
            // If no, add new item to list
            // Calc total
        
        const cartItemList = [...state.list];
        const product = action.payload;
        // Find cart item of selected product
        let cartIdx = cartItemList.findIndex(x => x.id === product.id);
        if (cartIdx >= 0) {
            cartItemList[cartIdx] = {
            ...cartItemList[cartIdx],
            quantity: cartItemList[cartIdx].quantity + 1,
            };
        } else {
            const cartItem = {
            product,
            id: product.id,
            quantity: 1,
            };
            cartItemList.push(cartItem);
        }

        // Calc total
        const total = state.total + product.price;
        return { 
            ...state,
            total,
            list: cartItemList,
        };
    };
    default:
        return state;
    }
};

export default cartReducer;