import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Gallery } from "./Gallery";
import { ItemInformation } from "./ItemInformation";

export const Item = () => {
	return (
		<Container className="item-container">
			<Grid container spacing={4}>
				<Grid item xs={7}>
					<Gallery />
				</Grid>
				<Grid item xs={4}>
					<ItemInformation />
				</Grid>
			</Grid>
		</Container>
	);
};
