import React from "react";
import { TPropsType } from "./types";

const TableRow: React.FC<TPropsType> = React.memo(({ items }) => {
	return (
		<table>
			<caption>Таблица данных</caption>
			<thead>
				<tr>
					<th>id</th>
					<th>Name</th>
					<th>Email</th>
					<th>Body</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item) => (
					<tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td>{item.email}</td>
						<td>{item.body}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
});

export default TableRow;
