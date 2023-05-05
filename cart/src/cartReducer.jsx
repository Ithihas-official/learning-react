import {
	AMOUNT_DECREASE,
	AMOUNT_INCREASE,
	CLEAR_ITEMS,
	DISPLAY_ITEMS,
	LOADING,
	REMOVE_ITEM,
} from "./cartActions";

const cartReducer = (state, action) => {
	if (action.type === CLEAR_ITEMS) {
		return { ...state, cart: new Map() };
	}
	if (action.type === REMOVE_ITEM) {
		const newCartItem = state.cart;
		newCartItem.delete(action.payload.id);
		return { ...state, cart: newCartItem };
	}
	if (action.type === AMOUNT_INCREASE) {
		const newCartItem = new Map(state.cart);
		const itemID = action.payload.id;
		const item = newCartItem.get(itemID);
		const newItem = { ...item, amount: item.amount + 1 };
		newCartItem.set(itemID, newItem);
		return { ...state, cart: newCartItem };
	}
	if (action.type === AMOUNT_DECREASE) {
		const newCartItem = new Map(state.cart);
		const itemID = action.payload.id;
		const item = newCartItem.get(itemID);
		if (item.amount === 1) {
			newCartItem.delete(itemID);
			return { ...state, cart: newCartItem };
		}
		const newItem = { ...item, amount: item.amount - 1 };
		newCartItem.set(itemID, newItem);
		return { ...state, cart: newCartItem };
	}
	if (action.type === DISPLAY_ITEMS) {
		const newCartItem = action.payload.cart;
		return {
			...state,
			cart: new Map(newCartItem.map((item) => [item.id, item])),
			loading: false,
		};
	}
	if (action.type === LOADING) {
		return { ...state, loading: true };
	}
	throw new Error(`no matching action found for ${action.type}`);
};

export default cartReducer;
