import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
	const [markdown, setMarkdown] = useState(`## Markdown Preview
> Designed by Qianwei
#### Hello World
Lorem, ipsum dolor sit amet consectetur **adipisicing** elit. Minima asperiores iste blanditiis. Pariatur adipisci mollitia aspernatur
\`\`\`
alert()
\`\`\`
[Go google](https://www.google.com)
`);

	return (
		<main>
			<section className="markdown">
				<textarea
					className="input"
					value={markdown}
					onChange={(e) => setMarkdown(e.target.value)}
				></textarea>
				<article className="result">
					<ReactMarkdown>{markdown}</ReactMarkdown>
				</article>
			</section>
		</main>
	);
}

export default App;
