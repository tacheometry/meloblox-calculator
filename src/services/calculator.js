const rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];

// Functions for each type of calc

const calculate = ({
	goldFind,
	magicFind,
	grindTime,
	blobKingKillSeconds,
	quantityFind,
	willKillBosses = false,
}) => {
	// Parsing the strings to int so I can count with them
	goldFind = parseInt(goldFind);
	magicFind = parseInt(magicFind);
	grindTime = parseInt(grindTime);
	quantityFind = parseInt(quantityFind);
	blobKingKillSeconds = parseInt(blobKingKillSeconds);

	//#region Variables
	const currencyAmount = {
		copper: 0,
		silver: 0,
		gold: 0,
	};
	const chanceData = {
		Common: {
			chance: 0,
			quality: 20,
			tries: 0,
			count: 0,
		},
		Uncommon: {
			chance: 0,
			quality: 49.5,
			tries: 0,
			count: 0,
		},
		Rare: {
			chance: 0,
			quality: 69.5,
			tries: 0,
			count: 0,
		},
		Epic: {
			chance: 0,
			quality: 84.5,
			tries: 0,
			count: 0,
		},
		Legendary: {
			chance: 0,
			quality: 95,
			tries: 0,
			count: 0,
		},
		sum: 0,
	};
	const quantity = {
		flat: willKillBosses ? 100 : 90,
		sum: 0,
		Zero: {
			chance: 0,
			quantity: 0,
			tries: 0,
			count: 0,
		},
		One: {
			chance: 0,
			quantity: 1,
			tries: 0,
			count: 0,
		},
		Two: {
			chance: 0,
			quantity: 2,
			tries: 0,
			count: 0,
		},
		Three: {
			chance: 0,
			quantity: 3,
			tries: 0,
			count: 0,
		},
	};
	const monstersSlain = {
		normal: 0,
		elites: 0,
		bosses: 0,
		total: 0,
	};
	const gold = {
		min: 1,
		max: 8,
		avg: 0, //to be set
	};

	// TODO: Connect to JSON storage in "/db/monstersDB.json"
	const monsters = {
		normal: {
			killTime: 5,
			cooldown: 2,
			findBoost: 0,
		},
		boss: {
			killTime: blobKingKillSeconds,
			cooldown: 300,
			findBoost: 50,
		},
	};
	//#endregion

	//#region Monsters
	monstersSlain.normal =
		grindTime /
		((monsters.normal.killTime + monsters.normal.cooldown) / 60);
	if (willKillBosses) {
		monstersSlain.bosses =
			grindTime /
			((monsters.boss.killTime + monsters.boss.cooldown) / 60);
	}
	monstersSlain.total =
		monstersSlain.normal + monstersSlain.elites + monstersSlain.bosses;
	//#endregion

	let totalFindBoost = monsters.boss.findBoost; // Will add more
	let totalBoostCount = monstersSlain.bosses;
	let avgBoost = totalFindBoost * (totalBoostCount / grindTime);

	var totalMF = magicFind + avgBoost; // Adding the avgBoost breaks it for some reason ;_;

	//#region Chances
	chanceData.Common.chance = 1;
	chanceData.Uncommon.chance = totalMF / 5 / 100;
	chanceData.Rare.chance = (totalMF / 10 / 100) * chanceData.Uncommon.chance;
	chanceData.Epic.chance = (totalMF / 18 / 100) * chanceData.Rare.chance;
	chanceData.Legendary.chance = (totalMF / 38 / 100) * chanceData.Epic.chance;

	chanceData.sum =
		chanceData.Common.chance +
		chanceData.Uncommon.chance +
		chanceData.Rare.chance +
		chanceData.Epic.chance +
		chanceData.Legendary.chance;

	chanceData.Common.chance /= chanceData.sum;
	chanceData.Uncommon.chance /= chanceData.sum;
	chanceData.Rare.chance /= chanceData.sum;
	chanceData.Epic.chance /= chanceData.sum;
	chanceData.Legendary.chance /= chanceData.sum;

	chanceData.Common.tries = 1 / chanceData.Common.chance;
	chanceData.Common.count = chanceData.Common.chance * monstersSlain.total;

	chanceData.Uncommon.tries = 1 / chanceData.Uncommon.chance;
	chanceData.Uncommon.count =
		chanceData.Uncommon.chance * monstersSlain.total;

	chanceData.Rare.tries = 1 / chanceData.Rare.chance;
	chanceData.Rare.count = chanceData.Rare.chance * monstersSlain.total;

	chanceData.Epic.tries = 1 / chanceData.Epic.chance;
	chanceData.Epic.count = chanceData.Epic.chance * monstersSlain.total;

	chanceData.Legendary.tries = 1 / chanceData.Legendary.chance;
	chanceData.Legendary.count =
		chanceData.Legendary.chance * monstersSlain.total;
	//#endregion

	//#region Quantity
	quantity.Zero.chance = 1;
	quantity.One.chance = quantityFind / 100;
	quantity.Two.chance = (quantityFind / 6 / 100) * quantity.One.chance;
	quantity.Three.chance = (quantityFind / 6 / 100) * quantity.One.chance;

	quantity.sum =
		quantity.Zero.chance +
		quantity.One.chance +
		quantity.Two.chance +
		quantity.Three.chance;

	quantity.Zero.chance /= quantity.sum;
	quantity.One.chance /= quantity.sum;
	quantity.Two.chance /= quantity.sum;
	quantity.Three.chance /= quantity.sum;

	quantity.Zero.tries = 1 / quantity.Zero.chance;
	quantity.Zero.count = quantity.Zero.chance * monstersSlain.total;

	quantity.One.tries = 1 / quantity.One.chance;
	quantity.One.count = quantity.One.chance * monstersSlain.total;

	quantity.Two.tries = 1 / quantity.Two.chance;
	quantity.Two.count = quantity.Two.chance * monstersSlain.total;

	quantity.Three.tries = 1 / quantity.Three.chance;
	quantity.Three.count = quantity.Three.chance * monstersSlain.total;
	//#endregion

	//#region Currency
	gold.avg = (gold.min + gold.max) / 2;
	let commonAvg,
		uncommonAvg,
		rareAvg,
		epicAvg,
		legendaryAvg,
		baseAmount,
		totalAmount;

	commonAvg =
		Math.sin(chanceData.Common.quality / 512) *
			(gold.avg * (chanceData.Common.quality / 10)) +
		chanceData.Common.quality / 12 +
		gold.avg;
	uncommonAvg =
		Math.sin(chanceData.Uncommon.quality / 512) *
			(gold.avg * (chanceData.Uncommon.quality / 10)) +
		chanceData.Uncommon.quality / 12 +
		gold.avg;
	rareAvg =
		Math.sin(chanceData.Rare.quality / 512) *
			(gold.avg * (chanceData.Rare.quality / 10)) +
		chanceData.Rare.quality / 12 +
		gold.avg;
	epicAvg =
		Math.sin(chanceData.Epic.quality / 512) *
			(gold.avg * (chanceData.Epic.quality / 10)) +
		chanceData.Epic.quality / 12 +
		gold.avg;
	legendaryAvg =
		Math.sin(chanceData.Legendary.quality / 512) *
			(gold.avg * (chanceData.Legendary.quality / 10)) +
		chanceData.Legendary.quality / 12 +
		gold.avg;

	baseAmount =
		(commonAvg * chanceData.Common.chance +
			uncommonAvg * chanceData.Uncommon.chance +
			rareAvg * chanceData.Rare.chance +
			epicAvg * chanceData.Epic.chance +
			legendaryAvg * chanceData.Legendary.chance) *
		monstersSlain.total;
	totalAmount = Math.floor((goldFind / 100) * baseAmount + baseAmount);

	totalAmount = totalAmount / 10000;
	currencyAmount.gold = Math.floor(totalAmount);
	totalAmount -= Math.floor(totalAmount);
	totalAmount *= 100;
	currencyAmount.silver = Math.floor(totalAmount);
	totalAmount -= Math.floor(totalAmount);
	totalAmount *= 100;
	currencyAmount.copper = Math.floor(totalAmount);
	//#endregion

	let gridOutput = [];
	for (const [rarity, rarityData] of Object.entries(chanceData)) {
		const id = rarities.indexOf(rarity);
		if (id < 0) continue;
		gridOutput.push({
			id,
			rarity,
			chance: Math.round(rarityData.chance * 10000) / 100 + "%",
			tries: Math.round(rarityData.tries),
			dropCount: Math.floor(rarityData.count),
		});
	}

	return {
		currencyAmount,
		gridOutput,
		monstersSlain,
	};
};

export default calculate;
