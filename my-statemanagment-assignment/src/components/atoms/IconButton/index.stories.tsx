import React from "react";
import IconButtonAtom from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme from "../../Themes/theme";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadSharp";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default {
	title: "Atoms/IconButton",
	component: IconButtonAtom,
} as ComponentMeta<typeof IconButtonAtom>;

const Template: ComponentStory<typeof IconButtonAtom> = (args) => (
	<IconButtonAtom {...args} />
);

export const Export: ComponentStory<typeof IconButtonAtom> = Template.bind({});
Export.args = {
	variant: "outlined",
	content: "Export",
	color: "info",
	icon: <FileDownloadSharpIcon />,
};

export const ManualOrder: ComponentStory<typeof IconButtonAtom> = Template.bind(
	{}
);
ManualOrder.args = {
	variant: "contained",
	content: "Manual Order",
	color: "primary",
	icon: <AddBoxIcon />,
};

export const Filter: ComponentStory<typeof IconButtonAtom> = Template.bind({});
Filter.args = {
	variant: "outlined",
	content: "Filter",
	color: "info",
	icon: <FilterListIcon />,
};

export const More: ComponentStory<typeof IconButtonAtom> = Template.bind({});
More.args = {
	variant: "outlined",
	content: "",
	color: "info",
	icon: <MoreVertIcon />,
};
