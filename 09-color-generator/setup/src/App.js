import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [colorList, setColorList] = useState(new Values("#f15025").all(5));

	function handleSubmit(e) {
		e.preventDefault();
		try {
			setError(false);
			let newColorList = new Values(color).all(5);
			setColorList(newColorList);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	}

	return (
		<>
			<section className="container">
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={color}
						placeholder="#f15025"
						onChange={(e) => setColor(e.target.value)}
						className={error ? "error" : null}
					/>
					<button className="btn" type="submit">
						submit
					</button>
				</form>
			</section>
			<section className="colors">
				{colorList.map((color, index) => {
					return (
						<SingleColor key={index} color={color} index={index} />
					);
				})}
			</section>
		</>
	);
}

export default App;
