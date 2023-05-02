import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setSidebar] = useState(false);
	const [isModalOpen, setModal] = useState(false);

	const openSidebar = () => setSidebar(true);
	const closeSidebar = () => setSidebar(false);

	const openModal = () => setModal(true);
	const closeModal = () => setModal(false);



	return (
		<AppContext.Provider
			value={{ isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
