import React from "react";
import SearchInput from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "Atoms/SearchInput",
	component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
	<SearchInput {...args} />
);

export const Search: ComponentStory<typeof SearchInput> = Template.bind({});
Search.args = {
	vari: "outlined",
	placeholder: "Search any Candidate",
	type: "text",
};
