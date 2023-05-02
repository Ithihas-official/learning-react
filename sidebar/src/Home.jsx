import React from "react";
import { useAppContext } from "./context";
import { FaBars } from "react-icons/fa";
const Home = () => {
	const { openSidebar, openModal } = useAppContext();
	return (
		<main>
			<button type="button" onClick={openSidebar} className="sidebar-toggle">
				<FaBars />
			</button>
			<button type="button" onClick={openModal} className="btn">
				get modal
			</button>
		</main>
	);
};

export default Home;
