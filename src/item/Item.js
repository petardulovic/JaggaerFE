import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Gallery } from "./Gallery";
import { ItemInformation } from "./ItemInformation";

export const Item = () => {
	return (
		<Container
			className="item-container"
			maxWidth="lg"
			sx={{ maxWidth: "1150px !important" }}>
			<Gallery />
			<ItemInformation />
		</Container>
	);
};
