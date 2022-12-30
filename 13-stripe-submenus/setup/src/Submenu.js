import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
	const {
		isSubmenuOpen,
		location,
		page: { page, links },
	} = useGlobalContext();

	const [columns, setColumns] = useState("col-2");
	// use useRef to grab the node
	const container = useRef(null);

	// everytime the location changes, use useEffect to rerender
	useEffect(() => {
		const submenu = container.current;
		const { center, bottom } = location;
		submenu.style.left = `${center}px`;
		submenu.style.top = `${bottom}px`;
		setColumns("col-2");
		if (links.length === 3) setColumns("col-3");
		if (links.length > 3) setColumns("col-4");
	}, [location, page, links]);

	return (
		<aside
			className={`${isSubmenuOpen ? "show" : null} submenu`}
			ref={container}
		>
			<h4>{page}</h4>
			<div className={`submenu-center ${columns}`}>
				{links.map((link, index) => {
					const { label, icon, url } = link;
					return (
						<a href={url} key={index}>
							{icon}
							{label}
						</a>
					);
				})}
			</div>
		</aside>
	);
};

export default Submenu;
