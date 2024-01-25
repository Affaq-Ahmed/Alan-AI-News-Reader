import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
	"bbd4163889ad863ecddbfbdf9a0a64752e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
	const [newsArticles, setNewsArticles] = useState([]);
	const [activeArticle, setActiveArticle] = useState(-1);

	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: (commandData) => {
				console.log("commandData: ", commandData);
				if (commandData.command === "newHeadlines") {
					setNewsArticles(commandData.articles);
					setActiveArticle(-1);
				} else if (commandData.command === "highlight") {
					setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
				}
			},
		});
	}, []);

	return (
		<div>
			<div
				style={{
					padding: "0 5%",
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
					width: "100%",
				}}
			>
				<img
					src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg"
					alt="Alan AI Logo"
					style={{
						height: "27vmin",
						borderRadius: "15%",
						padding: "0 5%",
						margin: "3% 0",
					}}
				/>
			</div>
			<NewsCards articles={newsArticles} activeArticle />
		</div>
	);
};

export default App;
