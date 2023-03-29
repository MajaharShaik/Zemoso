import React from "react";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../Themes/theme";

interface args {
	type?:
		| "button"
		| "caption"
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "subtitle1"
		| "subtitle2"
		| "body1"
		| "body2"
		| "overline"
		| "inherit"
		| undefined;
	content?: string;
	color?: string;
}

const TypographyElement = (props: args) => {
	const { type, content, color } = props;
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Typography variant={type} color={color}>
					{content}
				</Typography>
			</ThemeProvider>
		</div>
	);
};

export default TypographyElement;
