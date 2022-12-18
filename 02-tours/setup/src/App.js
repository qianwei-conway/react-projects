import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		setTours((tours) => {
			return tours.filter((tour) => id !== tour.id);
		});
	};

	const fetchTours = async () => {
		try {
			const res = await fetch(url);
			const data = await res.json();

			setTours(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(true);
			console.log(error);
		}
	};

	// you may wondering why we have to use useEffect, why not just write a line to call fetchTours()? Because doing this makes sure that only at the beginning (with empty dependency) can program call fetchTours() function, otherwise in every re-rendering the program will fetch data from API.
	useEffect(() => {
		fetchTours(); // have to use {} to mean that the function doesn't return anything
	}, []);

	return (
		<main>
			{tours.length === 0 ? (
				<div className="title">
					<h2>no tours left</h2>
					<button onClick={fetchTours} className="btn">
						refresh
					</button>
				</div>
			) : isLoading ? (
				<Loading />
			) : (
				<Tours tours={tours} removeTour={removeTour} />
			)}
		</main>
	);
}

export default App;
