import React from "react";
import { setInputValue } from "../redux/slices/commentSlice";
import { useAppDispatch } from "../redux/store";

type TPropsType = {
	inputValue: string;
};

const Header: React.FC<TPropsType> = ({ inputValue }) => {
	const dispatch = useAppDispatch();

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setInputValue(e.target.value));
	};

	return (
		<div className="header">
			<input
				type="text"
				value={inputValue}
				onChange={inputHandler}
				placeholder={"Поиск..."}
			/>
		</div>
	);
};

export default Header;
