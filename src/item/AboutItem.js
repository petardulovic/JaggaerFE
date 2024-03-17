import React from "react";
import data from "../../resources/data/data.json";
import { Box, Container, Icon, Link, Rating, Typography } from "@mui/material";
import discount from "../../resources/icons/discount.svg";
import Star from "../../resources/icons/star.svg";
import StarFilled from "../../resources/icons/star-filled.svg";

export const AboutItem = () => {
	const article = data.article;
	return (
		<Box>
			<Typography variant="subtitle1" fontWeight={600}>
				{article.description_short}
			</Typography>
			<Typography variant="caption" sx={{ color: "#7A7A7A" }}>
				by{" "}
				<Link href={article.supplier_link} sx={{ textDecoration: "none" }}>
					{article.supplier_name}
				</Link>
			</Typography>
			<Box padding="1rem 0">
				{" "}
				<Rating
					name="half-rating"
					defaultValue={article.stars}
					precision={0.5}
					icon={
						<Icon>
							<img src={StarFilled} />
						</Icon>
					}
					emptyIcon={
						<Icon>
							<img src={Star} />
						</Icon>
					}
				/>
			</Box>

			<Typography variant="h6">
				{article.price + article.currency}{" "}
				<Typography variant="caption" sx={{ color: "#7A7A7A" }}>
					{`+ ${article.transport_costs + article.currency} shipping `}{" "}
					<img className="discount-img" src={discount} />
				</Typography>
			</Typography>
			<Typography variant="caption" sx={{ color: "#7A7A7A" }}>
				all prices Incl. {article.vat_percent} % taxes
			</Typography>
		</Box>
	);
};
