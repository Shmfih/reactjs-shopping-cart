import { ActionType } from "../action/actionType";

const initState = {
    productList: [],
    totalProduct: 0
};
const localData = JSON.parse(localStorage.getItem('CART_ITEM'));
const initialState = localData? localData : initState;
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_PRODUCT_TO_CART: {

            const cartItemList = [...state.productList];
            const { product, quantity } = action;
            
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
            
            const totalProduct = state.totalProduct + quantity;
            const newState = {
                ...state,
                totalProduct,
                productList: cartItemList,
            };
            localStorage.setItem ('CART_ITEM', JSON.stringify(newState));
            return newState;
        };
        case ActionType.REMOVE_PRODUCT_FROM_CART: {
            
            const cartItemList = [...state.productList];
            const { product, quantity } = action;
            let totalProduct = state.totalProduct;
            let cartIdx = cartItemList.findIndex(x => x.id === product.id);
            if (cartIdx >= 0 && cartItemList[cartIdx].quantity > 1) {
                cartItemList[cartIdx] = {
                    ...cartItemList[cartIdx],
                    quantity: cartItemList[cartIdx].quantity - quantity,
                };
                totalProduct -= quantity;
            }
            
            
            const newState = {
                ...state,
                totalProduct,
                productList: cartItemList,
            };
            localStorage.setItem ('CART_ITEM', JSON.stringify(newState));
            return newState;
        }; 
            case ActionType.DELETE_PRODUCT_FROM_CART: {
            
                const cartItemList = [...state.productList];
                const { product, quantity } = action;
                
                let cartIdx = cartItemList.findIndex(x => x.id === product.id);
                let totalProduct = state.totalProduct;
                if (cartIdx >= 0) {
                    cartItemList.splice(cartIdx,1);
                    totalProduct -=  quantity;
                }
                
                const newState = {
                    ...state,
                    totalProduct,
                    productList: cartItemList,
                };
                localStorage.setItem ('CART_ITEM', JSON.stringify(newState));
                return newState;
        };
        default:
            return state;
    }

};

export default cartReducer;