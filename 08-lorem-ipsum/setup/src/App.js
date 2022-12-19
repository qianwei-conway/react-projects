import React, { useState } from "react";
import data from "./data";
function App() {
	const [amount, setAmount] = useState(1);
	const [text, setText] = useState([data[0]]);

	function handleClick(e) {
		e.preventDefault();
		let count = amount;
		if (amount <= 0) {
			count = 0;
		} else if (amount > data.length) {
			count = data.length;
		}

		setText((text) => data.slice(0, count));
	}

	return (
		<section className="section-center">
			<h3>TIRED OF BORING LOREM IPSUM?</h3>
			<form className="lorem-form">
				<label htmlFor="amount">paragraphs:</label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={amount}
					onChange={(e) => {
						setAmount(e.target.value);
					}}
				></input>
				<button className="btn" onClick={handleClick}>
					generate
				</button>
			</form>
			<article className="lorem-text">
				{text.map((par, index) => {
					return <p key={index}>{par}</p>;
				})}
			</article>
		</section>
	);
}

export default App;
