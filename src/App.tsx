import React, { useEffect } from "react";
import { getComments } from "./redux/slices/commentSlice";
import { useAppDispatch, useStateSelector } from "./redux/store";

import TableRow from "./components/TableRow/TableRow";
import Header from "./components/Header/Header";
import { filterItems } from "./helpers/helpers";

import "./App.scss";
import Loader from "./components/Loader";

// import "normalize.css";
// import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
// import "@blueprintjs/table/lib/css/table.css";

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	const { inputValue, comments, status, currentIndex } = useStateSelector(
		(state) => state.comment
	);

	useEffect(() => {
		dispatch(getComments({ currentIndex }));
	}, [dispatch]);

	const findMoreComments = () => {
		dispatch(getComments({ currentIndex }));
	};

	const idComments = new Set(comments.map((comment) => comment.id));
	let items = comments.filter((comment) => {
		if (idComments.has(comment.id)) {
			idComments.delete(comment.id);
			return true;
		} else {
			return false;
		}
	});

	items = filterItems(inputValue, items);

	return (
		<div className="wrapper">
			<Header inputValue={inputValue} />
			<div className="main">
				<div className="main_table">
					{status === "loading" ? <Loader /> : <TableRow items={items} />}
				</div>
			</div>
			{currentIndex !== 600 && (
				<button className="btn" onClick={findMoreComments}>
					Show more
				</button>
			)}
		</div>
	);
};

export default App;
