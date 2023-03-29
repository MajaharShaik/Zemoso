import { createTheme } from "@mui/material";
const theme = createTheme({
	palette: {
		primary: {
			dark: "#2C2C2E",
			main: "#224DFF",
			light: "#696A6E",
		},
		secondary: {
			main: "#696A6E",
			dark: "#D3D3D3",
		},
		success: {
			main: "#17A076",
			dark: "#F7F8FA",
		},
		warning: {
			main: "#A08817",
			dark: "#ffffff",
		},
		info: {
			main: "#696A6E",
		},
	},
	typography: {
		h1: {
			// fontFamily: "Inter",
			fontStyle: "normal",
			fontWeight: "500",
			fontSize: "20px",
			lineHeight: "30px",
		},
		subtitle1: {
			// fontFamily: "Inter",
			fontStyle: "normal",
			fontWeight: "500",
			fontSize: "16px",
			lineHeight: "24px",
		},
		body2: {
			// fontFamily: "Inter",
			fontStyle: "normal",
			fontWeight: "400",
			fontSize: "17px",
			lineHeight: "20px",
		},
		caption: {
			// fontFamily: "Inter",
			fontStyle: "normal",
			fontWeight: "500",
			fontSize: "10px",
			lineHeight: "18px",
		},
	},
});

export default theme;
