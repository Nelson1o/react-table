import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCommentsType = {
	id: number;
	name: string;
	email: string;
	body: string;
};

interface ICommentSlice {
	inputValue: string;
	comments: TCommentsType[];
	status: "loading" | "success" | "error";
}

const initialState: ICommentSlice = {
	inputValue: "",
	comments: [],
	status: "loading",
};

export const getComments = createAsyncThunk(
	"comment/getComments",
	async (_, { rejectWithValue, dispatch }) => {
		const res = await fetch(
			"https://jsonplaceholder.typicode.com/comments?_start=0&_limit=500"
		);
		const data = await res.json();
		dispatch(setCommentsItem(data));
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

export const { setInputValue, setCommentsItem } = filterSlice.actions;
export default filterSlice.reducer;
