import { DataGrid } from "@material-ui/data-grid";

function OutputGrid({ data }) {
	return (
		<DataGrid
			autoHeight={true}
			disableColumnMenu={true}
			disableColumnSelector={true}
			disableSelectionOnClick={true}
			hideFooter={true}
			pageSize={5}
			columns={[
				{
					field: "rarity",
					headerName: "Rarity",
					//		width: 150,
					sortable: false,
				},
				{
					field: "chance",
					headerName: "Chance",
					description: "The chance of finding an item of each rarity",
					//		width: 150,
				},
				{
					field: "tries",
					headerName: "Tries to drop",
					description: "Average tries for a drop of each rarity",
					type: "number",
					//		width: 150,
				},
				{
					field: "dropCount",
					headerName: "Drop count",
					description:
						"How many drops of each rarity you'll get after grinding",
					type: "number",
					//		width: 150,
				},
			]}
			rows={data}
		/>
	);
}

export default OutputGrid;
