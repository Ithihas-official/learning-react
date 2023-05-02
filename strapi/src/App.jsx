import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Sidebar from "./Sidebar.jsx";
import Submenu from "./Submenu.jsx";
const App = () => {
	return (
		<main>
			<Navbar />
			<Submenu />
			<Hero />
			<Sidebar />
		</main>
	);
};
export default App;
