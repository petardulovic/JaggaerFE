import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import data from "../../resources/data/data.json";
import Cart from "../../resources/icons/cart.svg";
import Facts from "../../resources/icons/facts-soft.svg";
import Favorite from "../../resources/icons/favorite.svg";
import FavoriteFilled from "../../resources/icons/favorite-filled.svg";
import { Badge, Divider } from "@mui/material";
import { AddItem } from "../item/AddItem";

function ElevationScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

export default function Navbar(props) {
	const [shouldDisplayAddItem, setShouldDisplayAddItem] = useState(false);
	const [cartItems, setCartItems] = useState(data.cart.items);
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		function scrollHandler() {
			const addItemElement = document.getElementById("add-item");
			const rect = addItemElement.getBoundingClientRect();

			if (rect.y <= 0) {
				setShouldDisplayAddItem(true);
			} else {
				setShouldDisplayAddItem(false);
			}
		}

		window.addEventListener("scroll", scrollHandler);

		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	});

	useEffect(() => {
		function clickHandler(e) {
			if (e.target.id === "add-item-action" && !animate) {
				setAnimate(true);
				setTimeout(() => {
					setCartItems((prev) => prev + 1);
				}, 500);
			}
		}

		window.addEventListener("click", clickHandler);

		return () => {
			window.removeEventListener("click", clickHandler);
		};
	});

	return (
		<>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar sx={{ borderBottom: "1.5px solid #EFEFEF" }}>
					<Toolbar sx={{ bgcolor: "#fff" }}>
						<Typography
							variant="body1"
							component="div"
							sx={{ flexGrow: 1, color: "#E14F43", fontWeight: "600" }}>
							{data.article.title}
						</Typography>
						{shouldDisplayAddItem && <AddItem id={false} />}
						<Box sx={{ paddingLeft: "4rem" }}>
							<img
								className="navbar-icon left"
								src={
									data.user.favorite_articles.find(
										(item) => item === data.article.id
									)
										? FavoriteFilled
										: Favorite
								}
							/>
							<img className="navbar-icon left" src={Facts} />
						</Box>

						<Divider orientation="vertical" flexItem color="#EFEFEF" />
						<Badge
							className={animate ? "animation-drop" : ""}
							onAnimationEnd={() => setAnimate(false)}
							badgeContent={
								<div className={animate ? "animate-slide-top" : ""}>
									{cartItems}
								</div>
							}
							color="error"
							overlap="circular">
							<img className="navbar-icon cart" src={Cart} />
						</Badge>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar />
		</>
	);
}
