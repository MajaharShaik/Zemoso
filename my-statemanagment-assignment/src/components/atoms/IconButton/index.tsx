import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "../../Themes/theme";

type color =
	| "inherit"
	| "primary"
	| "secondary"
	| "success"
	| "error"
	| "info"
	| "warning"
	| undefined;
interface args {
	variant?: "text" | "outlined" | "contained" | undefined;
	content?: string;
	icon?: React.ReactNode;
	color?: color;
}

const IconButtonAtom = (props: args) => {
	const { variant, content, icon, color } = props;
	return (
		<ThemeProvider theme={theme}>
			<Button variant={variant} startIcon={icon} size="small" color={color}>
				{content}
			</Button>
		</ThemeProvider>
	);
};

export default IconButtonAtom;
