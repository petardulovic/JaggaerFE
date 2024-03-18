import React from "react";
import { Description } from "../description/Description";
import Navbar from "../navbar/Navbar";
import { Item } from "../item/Item";

export const Page = () => {
	return (
		<>
			<Navbar />
			<Item />
			<Description />
		</>
	);
};
