const initState = {
    cartItems: [],
    total: 0,
    checkoutMsg: false,
}

const CartReducer = (state = initState, action) => {
    let findProduct, index;
  switch (action.type) {
    case "ADD_TO_CART":
      //   destructre the product, Qty
      const { product, qty } = action.payload;
      //  check if item is already in cart
      const check = state.cartItems.find((item) => item.id === product.id);
      if (check) {
        return state;
      } else {
        const cartTotal = state.total + product.price * qty;
        product.qty = qty;
        return {
          ...state,
          cartItems: [...state.cartItems, product],
          total: cartTotal,
        };
      }
    case "INCR":
      findProduct = state.cartItems.find((item) => item.id === action.payload);
      index = state.cartItems.findIndex((item) => item.id === action.payload);
      findProduct.qty += 1;
      state.cartItems[index] = findProduct;
      return {
          ...state,
          total: state.total + findProduct.price,
      }
    case "DECR":
      findProduct = state.cartItems.find((item) => item.id === action.payload);
      index = state.cartItems.findIndex((item) => item.id === action.payload);
      if (findProduct.qty > 1) {
        findProduct.qty -= 1;
        state.cartItems[index] = findProduct;
        return {
          ...state,
          total: state.total - findProduct.price,
        }
      } else {
          return state;
      }
      case 'REMOVE':
        findProduct = state.cartItems.find((item) => item.id === action.payload);
        const filteredItems = state.cartItems.filter(item => item.id !== action.payload);
        return {
            ...state,
            cartItems: filteredItems,
            total: state.total - findProduct.price * findProduct.qty
        }
        case 'PLACE':
            return {
              cartItems: [],
              total: 0,
              checkoutMsg: true,
            };
    default:
      return state;
  }
}

export default CartReducer;