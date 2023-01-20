import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
	cartItems: [],
	amount: 4,
	total: 0,
	isLoading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => {
	try {
		/*
		console.log(name); // this is the param that passed from where calls this function
		console.log(thunkAPI); // A very powerful stuff
		console.log(thunkAPI.getState()); // Can access the whole stored states
		thunkAPI.dispatch(openModal()); // Can access any actions from any reducers
        */

		const resp = await axios(url);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue('something went wrong');
	}
});

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, action) => {
			state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
		},
		toggleAmount: (state, action) => {
			const { id, type } = action.payload;

			state.cartItems.forEach((item) => {
				if (item.id === id) {
					item.amount += type === 'inc' ? 1 : -1;
				}
			});
		},
		calculateTotals: (state) => {
			const { total, amount } = state.cartItems.reduce(
				(acc, curr) => {
					acc.amount += curr.amount;
					acc.total += curr.amount * curr.price;
					return acc;
				},
				{
					total: 0,
					amount: 0,
				}
			);
			state.total = total;
			state.amount = amount;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCartItems.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCartItems.fulfilled, (state, action) => {
				state.isLoading = false;
				state.cartItems = action.payload;
			})
			.addCase(getCartItems.rejected, (state, action) => {
				console.log(action);
				state.isLoading = false;
			});
	},
});

// console.log(cartSlice);
export const { clearCart, removeItem, toggleAmount, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
