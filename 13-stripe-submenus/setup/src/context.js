import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({});
	const [page, setPage] = useState({ page: "", links: [] });

	function openSidebar() {
		setIsSidebarOpen(true);
	}
	function closeSidebar() {
		setIsSidebarOpen(false);
	}
	function openSubmenu(text, coords) {
		// use find but not filter, because filter returns an array
		const page = sublinks.find((sublink) => sublink.page === text);
		setPage(page);
		setLocation(coords);
		setIsSubmenuOpen(true);
	}
	function closeSubmenu() {
		setIsSubmenuOpen(false);
	}

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isSubmenuOpen,
				openSidebar,
				openSubmenu,
				closeSubmenu,
				closeSidebar,
				location,
				page,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
