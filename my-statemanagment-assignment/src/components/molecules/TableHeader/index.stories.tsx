import React from "react";
import TableHeader from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
export default {
	title: "Molecules/TableHeader",
	component: TableHeader,
} as ComponentMeta<typeof TableHeader>;

const Template: ComponentStory<typeof TableHeader> = (args) => (
	<TableHeader {...args} />
);

export const Export: ComponentStory<typeof TableHeader> = Template.bind({});
