import React from "react";
import { TPropsType } from "./types";
// import { Column, Cell, Table } from "@blueprintjs/table";

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

	// const test = (index: number) => {
	// 	return items.filter(item => item.id === index)
	// }

	// // Sample Column One data
	// const sampleColumnOne = (index: number) => {

	// 	return <Cell>{test(index)}</Cell>;
	// };

	// // Sample Column two data
	// const sampleColumnTwo = (name: string) => {
	// 	return <Cell>{name}</Cell>;
	// };

	// // Sample Column two data
	// const sampleColumnThree = (email: string) => {
	// 	return <Cell>{email}</Cell>;
	// };

	// // Sample Column two data
	// const sampleColumnFour = (body: string) => {
	// 	return <Cell>{body}</Cell>;
	// };

	// return (
	// 	// <div style={{ display: "block", width: 390, padding: 30 }}>
	// 	<div>
	// 		<h4>Таблица данных</h4>
	// 		<Table numRows={items.length}>
	// 				<Column name="id" cellRenderer={sampleColumnOne} />
	// 				{/* <Column name="Name" cellRenderer={() => sampleColumnTwo(item.name)} />
	// 				<Column name="Email" cellRenderer={() => sampleColumnThree(item.email)} />
	// 				<Column name="Body" cellRenderer={() => sampleColumnFour(item.body)} /> */}
	// 		</Table>
	// 	</div>
	// );
});

export default TableRow;
