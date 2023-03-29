import React from "react";
import TypographyElement from "../../atoms/Typography";
import IconButtonAtom from "../../atoms/IconButton";
import theme from "../../Themes/theme";
import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadSharp";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Stack, styled } from "@mui/material";

const HeaderMolecule = styled(Stack)({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
});

const Header = () => {
	return (
		<HeaderMolecule display="row">
			<TypographyElement
				type="h1"
				content="Candidates"
				color={theme.palette.primary.dark}
			/>
			<Stack direction="row" spacing={2}>
				<IconButtonAtom
					variant="outlined"
					content="Export"
					color="info"
					icon={<FileDownloadSharpIcon />}
				/>
				<IconButtonAtom
					variant="contained"
					content="Manual Order"
					color="primary"
					icon={<AddBoxIcon />}
				/>
			</Stack>
		</HeaderMolecule>
	);
};
export default Header;
