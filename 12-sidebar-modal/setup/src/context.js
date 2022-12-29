import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	function openSidebar() {
		setIsSidebarOpen(true);
	}
	function closeSidebar() {
		setIsSidebarOpen(false);
	}
	function openModal() {
		setIsModalOpen(true);
	}
	function closeModal() {
		setIsModalOpen(false);
	}

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isModalOpen,
				openSidebar,
				openModal,
				closeSidebar,
				closeModal,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// custom hook, then you don't have to import useContext and AppContext in every child component.
// And this custom hook is essentially just a function that return the value of AppContext.
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
