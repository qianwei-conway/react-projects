import React from 'react';
import data from './data';
import Question from './Question';
function App() {
	return (
		<div className="accordion">
			<h3>Common Questions And Answers</h3>
			<div>
				{data.map((question) => (
					<Question key={question.id} question={question} />
				))}
			</div>
		</div>
	);
}

export default App;
