import React, { createContext, useState, useContext } from "react";

const appContext = createContext();

const AppGlobalContext = ({ children }) => {
	const [isSidebarOpen, setSidebar] = useState(false);
	const [isPageId, setPageId] = useState(null);

	const openSidebar = () => setSidebar(true);
	const closeSidebar = () => setSidebar(false);

	return (
		<appContext.Provider value={{ openSidebar, closeSidebar, isSidebarOpen, isPageId, setPageId }}>
			{children}
		</appContext.Provider>
	);
};

export const useAppContext = () => useContext(appContext);

export default AppGlobalContext;
