import React, { useState } from "react";
import TableMolecule from "../../molecules/Table";
import TableHeader from "../../molecules/TableHeader";
import Header from "../../molecules/Header";
import styled from "@emotion/styled";
import theme from "../../Themes/theme";

const FinalComponentOne = styled("div")({
	marginTop: "20px",
	padding: "15px 15px",
});

const FinalComponent = styled("div")({
	padding: "10px 10px",
	margin: "0",
});

const FinalComp = styled("div")({
	width: "1056px",
	height: "700px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "inherit",
	alignContent: "inherit",
	marginLeft: "200px",
	backgroundColor: theme.palette.success.dark,
});

const FinalPage = () => {
	const [key, setKey] = useState<string>("All Status");
	const handleOptionSelect = (selectedOption: string) => {
		setKey("" + selectedOption);
	};
	return (
		<FinalComp>
			<FinalComponentOne>
				<Header />
			</FinalComponentOne>
			<FinalComponent>
				<TableHeader onOptionSelect={handleOptionSelect} />
				<TableMolecule data={key} />
			</FinalComponent>
		</FinalComp>
	);
};

export default FinalPage;
