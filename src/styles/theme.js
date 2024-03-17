import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	palette: {
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#f50057",
		},
		red: {
			main: "#E14F43",
		},
		gray: {
			main: "#EFEFEF",
		},
		grayText: {
			main: "#7A7A7A ",
		},
	},
	typography: (palette) => ({
		fontFamily: "Roboto, sans-serif",
		redSubHeader: {
			fontSize: "1.25rem",
			color: palette.red.main,
			fontWeight: "600",
		},
		graySubText: {
			fontSize: "1.20rem",
			color: palette.grayText.main,
		},
	}),
});

export default theme;
