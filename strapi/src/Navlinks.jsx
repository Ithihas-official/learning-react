import { useAppContext } from "./context";
import sublinks from "./data";
const Navlinks = () => {
	const { setPageId } = useAppContext();
	return (
		<div className="nav-links">
			{sublinks.map((item) => {
				const { pageId, page } = item;
				return (
					<button
						className="nav-link"
						key={pageId}
						onMouseEnter={() => setPageId(pageId)}
					>
						{page}
					</button>
				);
			})}
		</div>
	);
};

export default Navlinks;
