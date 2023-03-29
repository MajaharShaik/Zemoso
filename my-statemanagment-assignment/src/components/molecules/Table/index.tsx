import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
} from "@mui/material";
import TypographyElement from "../../atoms/Typography";
import ChipAtom from "../../atoms/Chip";
import theme from "../../Themes/theme";
import styled from "@emotion/styled";
import tableData from "../../Data/data.json";

const TableHeadComponent = styled(TableHead)({
	backgroundColor: theme.palette.success.dark,
});

interface args {
	data: string;
}
export const TableMolecule = (props: args) => {
	const { data } = props;

	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHeadComponent>
					<TableCell>
						{
							<TypographyElement
								content="NAME"
								color={theme.palette.primary.light}
							/>
						}
					</TableCell>
					<TableCell>
						{
							<TypographyElement
								content="ADJUDICATION"
								color={theme.palette.primary.light}
							/>
						}
					</TableCell>
					<TableCell>
						{
							<TypographyElement
								content="STATUS"
								color={theme.palette.primary.light}
							/>
						}
					</TableCell>
					<TableCell>
						{
							<TypographyElement
								content="LOCATION"
								color={theme.palette.primary.light}
							/>
						}
					</TableCell>
					<TableCell>
						{
							<TypographyElement
								content="DATE"
								color={theme.palette.primary.light}
							/>
						}
					</TableCell>
					<TableCell>
						{
							<TypographyElement
								content="--------------"
								color={theme.palette.success.dark}
							/>
						}
					</TableCell>
				</TableHeadComponent>
				<TableBody>
					{tableData
						.filter((row) => {
							if (data === "All Status") return true;
							return row.status === data;
						})
						.map((row) => (
							<TableRow key={row.id}>
								<TableCell>
									{
										<TypographyElement
											type="body2"
											content={row.name}
											color={theme.palette.primary.main}
										/>
									}
								</TableCell>
								<TableCell>{row.adjudication}</TableCell>
								<TableCell>
									<ChipAtom label={row.status.toUpperCase()} />
								</TableCell>
								<TableCell>{row.location}</TableCell>
								<TableCell>{row.data}</TableCell>
								<TableCell>{}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableMolecule;
