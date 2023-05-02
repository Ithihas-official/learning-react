import React from "react";
import { useAppContext } from "./context";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
const Sidebar = () => {
	const { closeSidebar, isSidebarOpen } = useAppContext();
	return (
		<aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
			<div className="sidebar-header">
				<img src={logo} alt="coding-addict" className="logo" />
				<button type="button" className="close-btn" onClick={closeSidebar}>
					<FaTimes />
				</button>
			</div>
			<ul className="links">
				{links.map((item) => {
					const { id, url, text } = item;
					return <li key={id}>
						<a href={url}>{text}</a>
					</li>
				})}
			</ul>
			<ul className="social-icons" >
				{
					social.map((item) => {
						const { id, url, icon } = item;
						return <li key={id} >
							<a href={url}>
								{icon}
							</a>

						</li>
					})
				}
			</ul>
		</aside>
	);
};

export default Sidebar;
