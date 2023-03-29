import React from "react";
import ChipAtom from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "Atoms/ChipAtom",
	component: ChipAtom,
} as ComponentMeta<typeof ChipAtom>;

const Template: ComponentStory<typeof ChipAtom> = (args) => (
	<ChipAtom {...args} />
);

export const Clear: ComponentStory<typeof ChipAtom> = Template.bind({});
Clear.args = {
	label: "CLEAR",
};

export const Consider: ComponentStory<typeof ChipAtom> = Template.bind({});
Consider.args = {
	label: "CONSIDER",
};
