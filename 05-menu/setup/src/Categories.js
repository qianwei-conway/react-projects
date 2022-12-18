import React from "react";

const Categories = ({ setCategory, allCategories }) => {
	return (
		<div className="btn-container">
			{allCategories.map((category) => (
				<button
					key={category}
					className="filter-btn"
					onClick={() => setCategory(category)}
				>
					{category}
				</button>
			))}
		</div>
	);
};
export default Categories;
