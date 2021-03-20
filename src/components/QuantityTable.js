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
					field: "quantity",
					headerName: "Quantity",
					sortable: false,
					flex: 0.25,
				},
				{
					field: "chance",
					headerName: "Chance (%)",
					description: "The chance of finding a quantity of items",
					flex: 0.25,
				},
				{
					field: "tries",
					headerName: "Tries to drop",
					description:
						"Average tries for a drop the quantity of items",
					type: "number",
					flex: 0.25,
				},
				{
					field: "dropCount",
					headerName: "Drop count",
					description:
						"How many drops of each quantity you'll get after grinding",
					type: "number",
					flex: 0.25,
				},
			]}
			rows={data}
		/>
	);
}

export default OutputGrid;
