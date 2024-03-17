import { Box, Button, Icon, TextField } from "@mui/material";
import React from "react";
import data from "../../resources/data/data.json";
import Add from "../../resources/icons/add.svg";

export const AddItem = (props) => {
	const article = data.article;
	return (
		<Box
			id={props.id ? "add-item" : ""}
			display={"flex"}
			alignItems={"center"}
			columnGap={"1.5rem"}
			sx={{ color: "#000" }}>
			<Box
				display={"flex"}
				alignItems={"center"}
				fontWeight={600}
				columnGap={"0.75rem"}>
				<TextField className="pce-input" type="number" /> {article.unit}
			</Box>
			<Button
				className="add-to-cart-btn"
				id="add-item-action"
				startIcon={
					<Icon fontSize="large">
						<img src={Add} />
					</Icon>
				}
				sx={{
					lineHeight: "0",
					boxShadow: "none",
					textTransform: "none",
					borderRadius: "0",
				}}>
				Add to cart
			</Button>
		</Box>
	);
};
