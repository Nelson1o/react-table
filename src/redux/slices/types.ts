export type TCommentsType = {
	id: number;
	name: string;
	email: string;
	body: string;
};

export interface ICommentSlice {
	inputValue: string;
	comments: TCommentsType[];
	status: "loading" | "success" | "error";
	currentIndex: number;
}

export type TFetchCommentsTypes = {
	currentIndex: number;
};
