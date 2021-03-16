import { Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

function makeData(i) {
	return {
		id: i,
		rarity: "Common",
		chance: "100",
		tries: Math.random() * 100,
		dropCount: Math.random() * 100,
	};
}

function OutputGrid({
	rowData = [makeData(1), makeData(2), makeData(3), makeData(4)],
}) {
	return (
		<div style={{ width: "100%" }}>
			<DataGrid
				autoHeight={true}
				disableColumnMenu={true}
				disableColumnSelector={true}
				disableSelectionOnClick={true}
				hideFooter={true}
				autoPageSize
				columns={[
					{
						field: "rarity",
						headerName: "Rarity",
						width: 150,
						sortable: false,
					},
					{
						field: "chance",
						headerName: "Chance",
						description:
							"The chance of finding an item of each rarity",
						width: 150,
					},
					{
						field: "tries",
						headerName: "Tries to drop",
						description: "Average tries for a drop of each rarity",
						type: "number",
						width: 150,
					},
					{
						field: "dropCount",
						headerName: "Drop count",
						description:
							"How many drops of each rarity you'll get after grinding",
						type: "number",
						width: 150,
					},
				]}
				rows={[
					{
						id: 1,
						rarity: `Common`,
						chance: "100",
						tries: Math.random() * 100,
						dropCount: Math.random() * 100,
					},
					{
						id: 2,
						rarity: "Uncommon",
						chance: "100",
						tries: Math.random() * 100,
						dropCount: Math.random() * 100,
					},
					{
						id: 3,
						rarity: "Rare",
						chance: "100",
						tries: Math.random() * 100,
						dropCount: Math.random() * 100,
					},
					{
						id: 4,
						rarity: "Epic",
						chance: "100",
						tries: Math.random() * 100,
						dropCount: Math.random() * 100,
					},
					{
						id: 5,
						rarity: "Legendary",
						chance: "100",
						tries: Math.random() * 100,
						dropCount: Math.random() * 100,
					},
				]}
			/>
		</div>
	);
}

export default OutputGrid;
