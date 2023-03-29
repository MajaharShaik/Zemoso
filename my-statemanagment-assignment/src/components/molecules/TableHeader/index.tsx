import React, { useState } from "react";
import TypographyElement from "../../atoms/Typography";
import SearchInput from "../../atoms/SearchInput";
import theme from "../../Themes/theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack, styled, IconButton } from "@mui/material";
import Example from "../../atoms/Dropdown/index";

const TableHeaderMolecule = styled(Stack)({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	height: "36px",
	backgroundColor: theme.palette.warning.dark,
	padding: "13px 5px",
});

const Tablehead = styled(Stack)({
	height: "36px",
});

const MoreIcon = styled(IconButton)({
	border: "1px solid #E5E7ED",
	borderRadius: "6px",
	height: "36px",
});

const TableHeader = ({
	onOptionSelect,
}: {
	onOptionSelect: (option: string) => void;
}) => {
	const [selectedOption, setSelectedOption] = useState("All Status");

	const handleOptionSelect = (option: string) => {
		setSelectedOption(option);
		onOptionSelect(option);
	};
	return (
		<TableHeaderMolecule display="row">
			<TypographyElement
				content="Candidate Information"
				type="subtitle1"
				color={theme.palette.primary.dark}
			/>
			<Tablehead spacing={1} direction="row">
				<SearchInput
					vari="outlined"
					placeholder="Search any Candidate"
					type="text"
				/>
				<Example onOptionSelect={handleOptionSelect} />
				<MoreIcon>
					<MoreVertIcon />
				</MoreIcon>
			</Tablehead>
		</TableHeaderMolecule>
	);
};

export default TableHeader;
