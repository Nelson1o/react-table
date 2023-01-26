import { TCommentsType } from "../redux/slices/types";

export const filterItems = (inputValue: string, comments: TCommentsType[]) => {
	return comments.filter(({ name, email, body }) => {
		if (
			name.toLowerCase().includes(inputValue.toLowerCase()) ||
			email.toLowerCase().includes(inputValue.toLowerCase()) ||
			body.toLowerCase().includes(inputValue.toLowerCase())
		) {
			return true;
		}
		return false;
	});
};
