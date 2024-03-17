import {
	Box,
	Chip,
	Divider,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import React from "react";
import data from "../../resources/data/data.json";
import Attachment from "../../resources/icons/attachment.svg";

export const ItemDetails = () => {
	const article = data.article;
	return (
		<Box display="flex" rowGap="1rem" flexDirection="column">
			<Typography variant="redSubHeader">DETAILS</Typography>
			<Divider />
			<Box>
				<Typography variant="graySubText">Features</Typography>
				<List
					sx={{ listStyleType: "disc", paddingLeft: "24px" }}
					component="ul"
					disablePadding>
					{Object.entries(article.features).map(([feat, value]) => (
						<ListItem sx={{ display: "list-item" }} disablePadding key={feat}>
							<Typography variant="subtitle1">
								{feat}: <b>{value}</b>
							</Typography>
						</ListItem>
					))}
				</List>
			</Box>
			<Box>
				<Typography variant="graySubText">Attachments</Typography>
				<List className="attachments-list" disablePadding>
					{article.attachments.map((attachment, i) => (
						<ListItem
							disablePadding
							key={attachment.file_label}
							sx={{ cursor: "pointer" }}>
							<ListItemIcon
								disablePadding
								sx={{ minWidth: "14px", textDecoration: "none" }}>
								<img className="list-img" src={Attachment} />
							</ListItemIcon>
							<ListItemText>
								<Link
									target="_blank"
									href={article.attachments[i].file_link}
									sx={{ textDecoration: "none" }}
									download>
									{attachment.file_label}
								</Link>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Box>

			<Box>
				<Typography variant="graySubText" lineHeight="1.75rem">
					Keywords
				</Typography>
				<br />
				<Box display="flex" columnGap="0.75rem">
					{article.keywords.map((keyword) => (
						<Chip
							key={keyword}
							label={keyword}
							sx={{
								backgroundColor: "#CED4DB",
								color: "#fff",
								textTransform: "uppercase",
								fontWeight: "600",
							}}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
};
