import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(true);

	return (
		<div className="nav-center">
			<div className="nav-header">
				<img src={logo} alt="logo" />
				<button
					className="nav-toggle"
					onClick={() => setShowLinks(!showLinks)}
				>
					<FaBars />
				</button>
			</div>

			<div
				className={
					showLinks
						? "links-container show-container"
						: "links-container"
				}
			>
				<ul className="links">
					{links.map((link) => {
						return (
							<li key={link.id}>
								<a href={link.url}>{link.text}</a>
							</li>
						);
					})}
				</ul>
			</div>

			<ul className="social-icons">
				{social.map((socialIcon) => {
					return (
						<li key={socialIcon.id}>
							<a href={socialIcon.url}>{socialIcon.icon}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Navbar;
