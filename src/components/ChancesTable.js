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
					sortable: false,
					flex: 0.25,
				},
				{
					field: "chance",
					headerName: "Chance (%)",
					description: "The chance of finding an item of each rarity",
					flex: 0.25,
				},
				{
					field: "tries",
					headerName: "Tries to drop",
					description: "Average tries for a drop of each rarity",
					type: "number",
					flex: 0.25,
				},
				{
					field: "dropCount",
					headerName: "Drop count",
					description:
						"How many drops of each rarity you'll get after grinding",
					type: "number",
					flex: 0.25,
				},
			]}
			rows={data}
		/>
	);
}

export default OutputGrid;
