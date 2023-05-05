// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer.jsx";
import { useAppCart } from "./CartManager";
function App() {
	const { loading } = useAppCart();
	if (loading) {
		return (
			<main>
				<div className="loading" style={{ marginTop: '30vh' }} ></div>
			</main>
		)
	}
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}

export default App;
