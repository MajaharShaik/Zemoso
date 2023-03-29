import React from "react";
import FinalPage from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
export default {
	title: "Organisms/FinalPage",
	component: FinalPage,
} as ComponentMeta<typeof FinalPage>;

const Template: ComponentStory<typeof FinalPage> = () => <FinalPage />;

export const Tabledata: ComponentStory<typeof FinalPage> = Template.bind({});
