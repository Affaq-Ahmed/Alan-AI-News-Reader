import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import React from "react";
import clsx from "clsx";

const styles = {
	activeCard: {
		borderBottom: "10px solid #22289a",
	},
};

const NewsCard = ({ article, i, activeArticle }) => {
	console.log("article: ", activeArticle);
	console.log("i: ", i);

	return (
		<Card
			className={clsx({ [styles.activeCard]: activeArticle === i })}
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				borderBottom: "10px solid white",
			}}
		>
			<CardActionArea href={article.url} target="_blank">
				<CardMedia image={article.urlToImage} style={{ height: "250px" }} />
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						margin: "20px",
					}}
				>
					<Typography variant="body2" color="textSecondary" component="h2">
						{new Date(article.publishedAt).toDateString()}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="h2">
						{article.source.name}
					</Typography>
				</div>
				<Typography
					gutterBottom
					variant="h5"
					component="h2"
					style={{ padding: "0 16px" }}
				>
					{article.title}
				</Typography>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{article.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions
				style={{
					padding: "0px 16px 8px 16px",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Button size="small" color="primary">
					Learn More
				</Button>
				<Typography variant="body2" color="textSecondary" component="p">
					{i + 1}
				</Typography>
			</CardActions>
		</Card>
	);
};

export default NewsCard;
