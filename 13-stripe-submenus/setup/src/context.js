import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

	function openSidebar() {
		setIsSidebarOpen(true);
	}
	function closeSidebar() {
		setIsSidebarOpen(false);
	}
	function openSubmenu() {
		setIsSubmenuOpen(true);
	}
	function closeSubmenu() {
		setIsSubmenuOpen(false);
	}

	return (
		<AppContext.Provider
			value={
				(isSidebarOpen,
				isSubmenuOpen,
				openSidebar,
				openSubmenu,
				closeSubmenu,
				closeSidebar)
			}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
