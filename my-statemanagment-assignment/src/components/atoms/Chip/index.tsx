import React from "react";
import { Chip } from "@mui/material";

import styled from "@emotion/styled";

interface StatusChipProp {
	label: string;
}

const StatusChip = styled(Chip)((props: StatusChipProp) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	background: props.label.toLowerCase() === "clear" ? "#F2FCFB" : "#FAF8EB",
	border: "1px solid #F2FCFB",
	color: props.label.toLowerCase() === "clear" ? "#17A076" : "#A08817",
	borderRadius: "4px",
	gap: "10px",
	width: props.label.toLowerCase() === "clear" ? "70px" : "100px",
}));

const ChipAtom = (props: StatusChipProp) => {
	const { label } = props;

	return <StatusChip label={label} />;
};

export default ChipAtom;
