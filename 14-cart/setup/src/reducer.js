function reducer(state, action) {
	switch (action.type) {
		case "LOADING":
			return { ...state, loading: true };
		case "DISPLAY_ITEMS":
			return { ...state, loading: false, cart: action.payload };
		case "CLEAR_CART":
			return {
				...state,
				cart: [],
			};
		case "REMOVE_ITEM":
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};
		case "TOGGLE_AMOUNT":
			const newCart = state.cart
				.map((item) => {
					if (item.id === action.payload.id) {
						return action.payload.type === "INCREASE"
							? { ...item, amount: item.amount + 1 }
							: { ...item, amount: item.amount - 1 };
					}
					return item;
				})
				.filter((item) => item.amount !== 0);
			return {
				...state,
				cart: newCart,
			};
		case "GET_TOTALS":
			let { total, amount } = state.cart.reduce(
				(totals, item) => {
					totals.total += item.amount * item.price;
					totals.amount += item.amount;
					return totals;
				},
				{
					total: 0,
					amount: 0,
				}
			);
			total = parseFloat(total.toFixed(2));
			return {
				...state,
				amount,
				total,
			};
		default:
			throw new Error("no matching action type");
	}
}

export default reducer;
