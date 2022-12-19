import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ color, index }) => {
	const [isCopied, setIsCopied] = useState(false);
	const { rgb, weight } = color;
	const hex = rgbToHex(...rgb);
	const bcg = rgb.join(",");

	// un-display the alert message
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setIsCopied(false);
		}, 2000);

		// cleanup function
		return () => clearTimeout(timeOut);
	}, [isCopied]);

	return (
		<article
			className={index > 20 ? "color-light" : null}
			style={{ backgroundColor: `rgb(${bcg})` }}
			onClick={() => {
				setIsCopied(true);
				navigator.clipboard.writeText(hex);
			}}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hex}</p>
			{isCopied ? <p className="alert">copied to clipboard</p> : null}
		</article>
	);
};

export default SingleColor;
