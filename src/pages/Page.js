import React from "react";
import { Item } from "../item/Item";
import { Description } from "../description/Description";
import { Box } from "@mui/material";
import Navbar from "../navbar/Navbar";
import { Item2 } from "../item/Item2";

export const Page = () => {
	return (
		<>
			<Navbar />
			<Item2 />
			<Description />
		</>
	);
};
