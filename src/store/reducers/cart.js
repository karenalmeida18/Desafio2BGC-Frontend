export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const indexProduct = state.map(item => item.productId).indexOf(action.data.productId);
      if (indexProduct === -1)
        return [...state, action.data];
      return state;
    case 'REMOVE_PRODUCT':
      return state.filter(product => product.productId !== action.id);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}
