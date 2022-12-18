import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = people[index];

	const handleShift = (dir) => {
		dir === "prev"
			? index === 0
				? setIndex(people.length - 1)
				: setIndex(index - 1)
			: index === people.length - 1
			? setIndex(0)
			: setIndex(index + 1);
	};

	const handleRandom = () => {
		const getRandom = () => Math.floor(Math.random() * people.length);
		let randomNumber;
		while (true) {
			randomNumber = getRandom();
			if (randomNumber !== index) break;
		}
		setIndex(randomNumber);
	};

	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="button-container">
				<button
					className="prev-btn"
					onClick={() => handleShift("prev")}
				>
					<FaChevronLeft />
				</button>
				<button
					className="next-btn"
					onClick={() => handleShift("next")}
				>
					<FaChevronRight />
				</button>
			</div>
			<button className="random-btn" onClick={handleRandom}>
				surprise me
			</button>
		</article>
	);
};

export default Review;
