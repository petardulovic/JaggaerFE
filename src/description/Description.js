import { Box, Container, Typography } from "@mui/material";
import React from "react";
import data from "../../resources/data/data.json";
import { ItemDetails } from "./ItemDetails";
import { ItemShipping } from "./ItemShipping";

export const Description = () => {
	return (
		<Box className="box gray">
			<Container className="description-container" maxWidth="lg">
				<Box maxWidth={"lg"}>
					<Typography variant="redSubHeader">DESCRIPTION</Typography>
					<Typography sx={{ padding: "12px 0 48px 0", fontWeight: "500" }}>
						{data.article.description_long}
					</Typography>
				</Box>
				<Box className="item-details-container">
					<Box className="item-details-card">
						<ItemDetails />
					</Box>
					<Box className="item-details-card">
						<ItemShipping />
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
