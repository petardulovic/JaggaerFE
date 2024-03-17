import React from "react";
import { AboutItem } from "./AboutItem";
import { AddItem } from "./AddItem";
import { Box, Container } from "@mui/material";

export const ItemInformation = () => {
	return (
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			flexDirection={"column"}>
			<AboutItem />
			<AddItem id={true} />
		</Box>
	);
};
