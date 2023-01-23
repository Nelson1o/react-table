import React, { useEffect } from "react";
import { getComments, TCommentsType } from "./redux/slices/commentSlice";
import { useAppDispatch, useStateSelector } from "./redux/store";

import TableRow from "./components/TableRow";
import Header from "./components/Header";

import "./App.scss";

// import "normalize.css";
// import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
// import "@blueprintjs/table/lib/css/table.css";

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	const { inputValue, comments, status } = useStateSelector((state) => state.comment);

	useEffect(() => {
		dispatch(getComments());
	}, [dispatch]);

	const filterItems = (inputValue: string, comments: TCommentsType[]) => {
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

	const items = filterItems(inputValue, comments);

	return (
		<div className="wrapper">
			<Header inputValue={inputValue} />
			<div className="main">
				<div className="main_table">
					{status === "loading" ? "Loading..." : <TableRow items={items} />}
				</div>
			</div>
		</div>
	);
};

export default App;
