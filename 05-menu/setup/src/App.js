import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
console.log(allCategories);

function App() {
	const [items, setItems] = useState(data);
	const [category, setCategory] = useState("all");

	useEffect(() => {
		console.log("use effect");
		const newData = data.filter((item) => {
			if (category === "all") return true;
			return item.category === category;
		});

		setItems(newData);
	}, [category]);

	return (
		<section className="menu">
			<div>
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
			</div>
			<Categories
				setCategory={setCategory}
				allCategories={allCategories}
			/>
			<Menu items={items} />
		</section>
	);
}

export default App;
