import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
	loading: false,
	cart: cartItems,
	total: 0,
	amount: 0,
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	function clearCart() {
		dispatch({ type: "CLEAR_CART" });
	}

	function removeItem(id) {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	}

	function toggleAmount(id, type) {
		dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
	}

	async function fetchData() {
		dispatch({ type: "LOADING" });
		const response = await fetch(url);
		const cart = await response.json();
		dispatch({ type: "DISPLAY_ITEMS", payload: cart });
	}

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		dispatch({ type: "GET_TOTALS" });
	}, [state.cart]);

	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				removeItem,
				toggleAmount,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
