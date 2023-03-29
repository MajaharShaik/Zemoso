import React from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material";

interface args {
	vari: "outlined" | "filled" | "standard";
	placeholder?: string;
	type?: "text" | "password";
}

const TextFieldAtom = styled(TextField)({
	borderRadius: "6px",
	width: "344px",
});

const SearchInput = (props: args) => {
	const { vari, placeholder, type } = props;
	return (
		<TextFieldAtom
			variant={vari}
			size="small"
			placeholder={placeholder}
			type={type}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">{<SearchIcon />}</InputAdornment>
				),
			}}
		/>
	);
};

export default SearchInput;
