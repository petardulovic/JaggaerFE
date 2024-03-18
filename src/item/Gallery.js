import {
	Box,
	Grid,
	Icon,
	IconButton,
	ImageListItem,
	ImageListItemBar,
	SvgIcon,
	Typography,
} from "@mui/material";
import React from "react";
import data from "../../resources/data/data.json";
import Package from "../../resources/icons/package.svg";
import ZoomIn from "../../resources/icons/zoom-in.svg";

export const Gallery = () => {
	const images = data.article.images;
	return (
		<Grid container spacing={1}>
			<Grid
				item
				xs={3}
				direction={"column"}
				display={"flex"}
				justifyContent={"space-between"}>
				{images.map(
					(img, i) =>
						i <= 2 && <img key={img} className="gallery-img" src={Package} />
				)}
			</Grid>
			<Grid item xs={9} alignSelf={"end"}>
				<ImageListItem key={images[0]} sx={{ border: "1px solid #efefef" }}>
					<img srcSet={Package} src={Package} loading="lazy" />
					<ImageListItemBar
						sx={{
							background:
								"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
								"rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 0%)",
							paddingRight: "1rem",
						}}
						actionIcon={
							<Icon>
								<img className="zoom-in-img" src={ZoomIn} />
							</Icon>
						}
					/>
				</ImageListItem>
			</Grid>
		</Grid>
	);
};
