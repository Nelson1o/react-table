import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommentSlice, TCommentsType, TFetchCommentsTypes } from "./types";

const initialState: ICommentSlice = {
	inputValue: "",
	comments: [],
	status: "loading",
	currentIndex: 100,
};

export const getComments = createAsyncThunk(
	"comment/getComments",
	async ({ currentIndex }: TFetchCommentsTypes, { rejectWithValue, dispatch }) => {
		try {
			dispatch(incrementCurrentIndex(100));
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/comments?_start=0&_limit=${currentIndex}`
			);

			if (!res.ok) {
				throw new Error("Some fetch error");
			}

			const data = await res.json();
			dispatch(setCommentsItem(data));
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const filterSlice = createSlice({
	name: "comment",
	initialState: initialState,
	reducers: {
		setInputValue: (state, action: PayloadAction<string>) => {
			state.inputValue = action.payload;
		},
		setCommentsItem: (state, action: PayloadAction<TCommentsType[]>) => {
			state.comments = [...state.comments, ...action.payload];
		},
		incrementCurrentIndex: (state, action: PayloadAction<number>) => {
			state.currentIndex += action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(getComments.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(getComments.fulfilled, (state, action) => {
			state.status = "success";
		});
		builder.addCase(getComments.rejected, (state, action) => {
			state.status = "error";
		});
	},
});

export const { setInputValue, setCommentsItem, incrementCurrentIndex } = filterSlice.actions;
export default filterSlice.reducer;
