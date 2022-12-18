import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
	return (
		<>
			<div className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
			</div>
			<Menu />
			<Categories items={items} />
		</>
	);
}

export default App;
