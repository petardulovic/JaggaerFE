import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Page } from "./pages/Page";
import "./styles/styles.css";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Page />
		</ThemeProvider>
	);
}

export default App;
