import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
	"bbd4163889ad863ecddbfbdf9a0a64752e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
	const [newsArticles, setNewsArticles] = useState([]);

	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: async (command) => {
				console.log("hehe", command);
				// if (command === "newHeadlines") {
				// 	console.log("hehe", articles);
				// 	setNewsArticles(articles);
				// }
			},
		});
	}, []);

	return (
		<div>
			<h1>Alan AI News Application</h1>
		</div>
	);
};

export default App;
