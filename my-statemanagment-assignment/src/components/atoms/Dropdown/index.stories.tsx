import React from "react";
import Example from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "Atoms/FilterDropDown",
	component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => (
	<Example {...args} />
);

export const DropDown: ComponentStory<typeof Example> = Template.bind({});
