import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
	"bbd4163889ad863ecddbfbdf9a0a64752e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
	const [newsArticles, setNewsArticles] = useState([]);

	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: (commandData) => {
				console.log("commandData: ", commandData);
				if (commandData.command === "newHeadlines") {
					console.log("articles: ", commandData.articles);
					setNewsArticles(commandData.articles);
				}
			},
		});
	}, []);

	return (
		<div>
			<h1>Alan AI News Application</h1>
			<NewsCards articles={newsArticles} />
		</div>
	);
};

export default App;
