import React from "react";
import TypographyElement from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme from "../../Themes/theme";

export default {
	title: "Atoms/TypographyElement",
	component: TypographyElement,
} as ComponentMeta<typeof TypographyElement>;

const Template: ComponentStory<typeof TypographyElement> = (args) => (
	<TypographyElement {...args} />
);

export const Title: ComponentStory<typeof TypographyElement> = Template.bind(
	{}
);
Title.args = {
	type: "h1",
	content: "Candidates",
	color: theme.palette.primary.dark,
};

export const Subtitle: ComponentStory<typeof TypographyElement> = Template.bind(
	{}
);
Subtitle.args = {
	type: "subtitle1",
	content: "Candidate Information",
	color: theme.palette.primary.dark,
};

export const Location: ComponentStory<typeof TypographyElement> = Template.bind(
	{}
);
Location.args = {
	type: "body2",
	content: "Sukamanath",
	color: theme.palette.primary.dark,
};

export const Name: ComponentStory<typeof TypographyElement> = Template.bind({});
Name.args = {
	type: "body2",
	content: "John Smith",
	color: theme.palette.primary.main,
};
