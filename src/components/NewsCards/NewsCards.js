import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@mui/material";

const NewsCards = ({ articles }) => {
	return (
		<Grow in>
			<Grid
				container
				alignItems="stretch"
				spacing={4}
				style={{
					padding: "0 5%",
					width: "100%",
					margin: 0,
				}}
			>
				{articles ? (
					articles.map((article, index) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							lg={3}
							key={index}
							style={{ display: "flex" }}
						>
							<NewsCard article={article} i={index} />
						</Grid>
					))
				) : (
					<Typography variant="h2" component="h2" color="textSecondary">
						Something Went wrong while fetching the News.
					</Typography>
				)}
			</Grid>
		</Grow>
	);
};

export default NewsCards;
