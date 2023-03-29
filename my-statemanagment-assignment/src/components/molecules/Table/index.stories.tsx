import React from "react";
import TableMolecule from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "Molecules/Table",
	component: TableMolecule,
} as ComponentMeta<typeof TableMolecule>;

const Template: ComponentStory<typeof TableMolecule> = (args) => (
	<TableMolecule {...args} />
);

export const AllData: ComponentStory<typeof TableMolecule> = Template.bind({});
AllData.args = {
	data: "All Status",
};

export const ClearData: ComponentStory<typeof TableMolecule> = Template.bind(
	{}
);
ClearData.args = {
	data: "Clear",
};

export const ConsiderData: ComponentStory<typeof TableMolecule> = Template.bind(
	{}
);
ConsiderData.args = {
	data: "Consider",
};
