import React from "react";

const Categories = ({ items }) => {
	return (
		<div>
			{items.map((item) => {
				return (
					<div className="section-center">
						<article className="menu-item">
							<img
								className="photo"
								src={item.img}
								alt={item.title}
							/>
						</article>
					</div>
				);
			})}
		</div>
	);
};
export default Categories;
