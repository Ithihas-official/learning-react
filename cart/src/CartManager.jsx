import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer.jsx";
import {
	AMOUNT_DECREASE,
	AMOUNT_INCREASE,
	CLEAR_ITEMS,
	DISPLAY_ITEMS,
	LOADING,
	REMOVE_ITEM,
} from "./cartActions.js";
import { getTotals } from "./utils.js";
const appCartContext = createContext();

const initialCartState = {
	cart: new Map(),
	loading: false,
};

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialCartState);
	const { totalCartItems, totalPrice } = getTotals(state.cart);
	const url = "https://course-api.com/react-useReducer-cart-project";

	useEffect(() => {
		fetchCartItems();
	}, []);
	const clearCart = () => {
		dispatch({ type: CLEAR_ITEMS });
	};

	const removeItem = (id) => {
		dispatch({ type: REMOVE_ITEM, payload: { id } });
	};

	const increaseItems = (id) => {
		dispatch({ type: AMOUNT_INCREASE, payload: { id } });
	};

	const decreaseItems = (id) => {
		dispatch({ type: AMOUNT_DECREASE, payload: { id } });
	};
	const fetchCartItems = async () => {
		dispatch({ type: LOADING });
		const response = await fetch(url);
		const cart = await response.json();
		dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
	};

	return (
		<appCartContext.Provider
			value={{
				...state,
				clearCart,
				removeItem,
				increaseItems,
				decreaseItems,
				totalCartItems,
				totalPrice,
			}}
		>
			{children}
		</appCartContext.Provider>
	);
};

export const useAppCart = () => useContext(appCartContext);

export default CartProvider;
