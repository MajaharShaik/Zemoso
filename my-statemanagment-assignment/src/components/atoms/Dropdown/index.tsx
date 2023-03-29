import React, { useState } from "react";
import {
	default as ReactSelect,
	components,
	OptionProps,
	GroupBase,
} from "react-select";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button, ThemeProvider } from "@mui/material";
import { ActionMeta } from "react-select";
import theme from "../../Themes/theme";

interface OptionType {
	value: string;
	label: string;
}

interface ExampleProps {
	onOptionSelect: (option: string) => void;
}

const filterOptions: OptionType[] = [
	{ value: "All Status", label: "All Status" },
	{ value: "CLEAR", label: "Clear" },
	{ value: "CONSIDER", label: "Consider" },
	{ value: "ALL", label: "All" },
	{ value: "ENGAGED", label: "Engaged" },
	{ value: "PREADVERSEACTION", label: "Pre adverse action" },
];

const Option = (
	props: OptionProps<OptionType, false, GroupBase<OptionType>>
) => {
	return (
		<div>
			<components.Option {...props}>
				<input
					type="checkbox"
					checked={props.isSelected}
					onChange={() => null}
				/>{" "}
				<label>{props.label}</label>
			</components.Option>
		</div>
	);
};

const Example = ({ onOptionSelect }: ExampleProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [optionSelected, setOptionSelected] = useState<OptionType[]>([]);

	const handleChange = (
		selected: OptionType | null,
		actionMeta: ActionMeta<OptionType>
	) => {
		if (selected) {
			setOptionSelected([selected]);
			onOptionSelect(selected.label);
		}
	};

	return (
		<div>
			<ThemeProvider theme={theme}>
				<Button
					variant="outlined"
					startIcon={<FilterListIcon />}
					onClick={() => setIsOpen(!isOpen)}
					color="secondary"
				>
					Filter
				</Button>
			</ThemeProvider>
			{isOpen && (
				<ReactSelect
					options={filterOptions}
					closeMenuOnSelect={false}
					hideSelectedOptions={false}
					components={{
						Option,
					}}
					onChange={handleChange}
					value={optionSelected}
				/>
			)}
		</div>
	);
};

export default Example;
