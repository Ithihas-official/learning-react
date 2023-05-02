import { FaBars } from "react-icons/fa";
import { useAppContext } from "./context";
import Navlinks from "./Navlinks";

const Navbar = () => {
	const { openSidebar, setPageId } = useAppContext();
	const handleMouseOver = (event) => {
		if (event.target.className !== "nav-link") {
			setPageId(null);
		}
	};
	return (
		<nav>
			<div className="nav-center" onMouseOver={handleMouseOver}>
				<h3 className="logo">strapi</h3>
				<button type="button" className="toggle-btn" onClick={openSidebar}>
					<FaBars />
				</button>
				<Navlinks />
			</div>
		</nav>
	);
};

export default Navbar;
