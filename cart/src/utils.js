export const getTotals = (cart) => {
	let totalCartItems = 0;
	let totalPrice = 0;
	for (const { amount, price } of cart.values()) {
		totalCartItems += amount;
		totalPrice += amount * price;
	}
	return { totalPrice, totalCartItems };
};
