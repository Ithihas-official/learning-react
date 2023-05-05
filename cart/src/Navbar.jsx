import { FaCartPlus } from "react-icons/fa";
import { useAppCart } from "./CartManager";
const Navbar = () => {
	const { totalCartItems } = useAppCart();
	return (
		<nav>
			<div className="nav-center">
				<h4>useReducer</h4>
				<div className="nav-container">
					<FaCartPlus className="cart-icon" />
					<div className="amount-container">
						<p className="total-amount">{totalCartItems}</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
