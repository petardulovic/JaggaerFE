import { Box, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import data from "../../resources/data/data.json";

export const ItemShipping = () => {
	const {
		minimum_order_quantity,
		unit,
		currency,
		transport_costs,
		delivery_time,
		price_breaks,
	} = data.article;

	return (
		<Box display="flex" flexDirection="column" rowGap="1rem">
			<Typography variant="redSubHeader">PRICING & SHIPPING</Typography>
			<Divider />

			<List sx={{ listStyleType: "disc", paddingLeft: "24px" }} disablePadding>
				<ListItem
					key={"min_quantity"}
					sx={{ display: "list-item" }}
					disablePadding>
					<Typography variant="subtitle1">
						Minimum order: <b>{`${minimum_order_quantity} ${unit}`}</b>
					</Typography>
				</ListItem>
				<ListItem
					key={"shipping_costs"}
					sx={{ display: "list-item" }}
					disablePadding>
					<Typography variant="subtitle1">
						Shipping: <b>{`${transport_costs} ${currency}`}</b>
					</Typography>
				</ListItem>
				<ListItem
					key={"delivery_time"}
					sx={{ display: "list-item" }}
					disablePadding>
					<Typography variant="subtitle1">
						Delivery: <b>{delivery_time + " days"}</b>
					</Typography>
				</ListItem>
			</List>
			<Box>
				<Typography variant="graySubText">Price breaks</Typography>
				<Grid container xs={6}>
					{Object.entries(price_breaks).map(([pcBreak, value], i) => (
						<>
							<Grid
								item
								xs={5}
								textAlign="center"
								borderTop={i === 0 ? "1px solid #CED4DB" : ""}
								borderBottom={"1px solid #CED4DB"}
								fontWeight={600}
								padding="0.4em">
								{`ex ${pcBreak} ${data.article.unit}`}
							</Grid>
							<Grid
								item
								xs={7}
								textAlign="center"
								borderTop={i === 0 ? "1px solid #CED4DB" : ""}
								borderBottom={"1px solid #CED4DB"}
								fontWeight={600}
								padding="0.4em">
								{`${value} ${data.article.currency}/${data.article.unit}`}
							</Grid>
						</>
					))}
				</Grid>
			</Box>
		</Box>
	);
};
