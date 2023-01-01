import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	const searchValue = React.useRef("");

	useEffect(() => {
		searchValue.current.focus();
	}, []);

	function searchCocktail() {
		setSearchTerm(searchValue.current.value);
	}

	return (
		<section className="section search">
			<form
				className="search-form"
				// to prevent that when user hit enter, the site won't refresh
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<div className="form-control">
					<label htmlFor="name">search your favourite cocktail</label>
					<input
						type="text"
						id="name"
						ref={searchValue}
						onChange={searchCocktail}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
