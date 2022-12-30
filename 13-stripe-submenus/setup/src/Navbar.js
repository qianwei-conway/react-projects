import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

	function displaySubmenu(e) {
		const page = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 3;
		openSubmenu(page, { center, bottom });
	}

	function handleCloseSubmenu(e) {
		// because the buttons are IN the navbar, so if we close submenu when mouse is over the navbar, then we won't be able to open the submenu ever.
		if (!e.target.classList.contains("link-btn")) {
			closeSubmenu();
		}
	}

	return (
		<nav className="nav" onMouseOver={handleCloseSubmenu}>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="stripe" className="nav-logo" />
					<button className="btn toggle-btn" onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							products
						</button>
					</li>
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							developers
						</button>
					</li>
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							company
						</button>
					</li>
				</ul>
			</div>
			<button className="btn signin-btn">Sign in</button>
		</nav>
	);
};

export default Navbar;
