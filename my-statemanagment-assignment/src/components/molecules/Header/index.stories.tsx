import React from "react";
import Header from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "Molecules/Header",
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Search: ComponentStory<typeof Header> = Template.bind({});
