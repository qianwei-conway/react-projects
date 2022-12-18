import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ question }) => {
	const { title, info } = question;
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="question">
			<header>
				<h4>{title}</h4>
				<button className="btn" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{isOpen ? <p>{info}</p> : null}
		</div>
	);
};

export default Question;
