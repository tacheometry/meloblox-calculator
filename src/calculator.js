const rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];

const calculate = ({
	goldFind = 0,
	magicFind = 0,
	grindTime = 0,
	blobKingKillSeconds = 0,
}) => {
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

	// TODO: Probs do XML ??
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

	monstersSlain.normal =
		(60 / (monsters["normal"].killTime + monsters["normal"].cooldown)) *
		grindTime;
	monstersSlain.bosses =
		(60 / (monsters["boss"].killTime + monsters["boss"].cooldown)) *
		grindTime;
	monstersSlain.total =
		monstersSlain.normal + monstersSlain.elites + monstersSlain.bosses;

	chanceData["Common"].tries = 1 / chanceData["Common"].chance;
	chanceData["Common"].count =
		(1 / chanceData["Common"].chance) * monstersSlain.total;

	chanceData["Uncommon"].chance = magicFind / 5 / 100;
	chanceData["Uncommon"].tries = 1 / chanceData["Uncommon"].chance;
	chanceData["Uncommon"].count =
		(1 / chanceData["Uncommon"].chance) * monstersSlain.total;

	chanceData["Rare"].chance =
		(magicFind / 10 / 100) * chanceData["Uncommon"].chance;
	chanceData["Rare"].tries = 1 / chanceData["Rare"].chance;
	chanceData["Rare"].count =
		(1 / chanceData["Rare"].chance) * monstersSlain.total;

	chanceData["Epic"].chance =
		(magicFind / 18 / 100) * chanceData["Rare"].chance;
	chanceData["Epic"].tries = 1 / chanceData["Epic"].chance;
	chanceData["Epic"].count =
		(1 / chanceData["Epic"].chance) * monstersSlain.total;

	chanceData["Legendary"].chance =
		(magicFind / 38 / 100) * chanceData["Epic"].chance;
	chanceData["Legendary"].tries = 1 / chanceData["Legendary"].chance;
	chanceData["Legendary"].count =
		(1 / chanceData["Legendary"].chance) * monstersSlain.total;

	chanceData.sum =
		chanceData["Common"].chance +
		chanceData["Uncommon"].chance +
		chanceData["Rare"].chance +
		chanceData["Epic"].chance +
		chanceData["Legendary"].chance;

	gold.avg = (gold.min + gold.max) / 2;
	let commonAvg,
		uncommonAvg,
		rareAvg,
		epicAvg,
		legendaryAvg,
		baseAmount,
		totalAmount;

	commonAvg =
		Math.sin(chanceData["Common"].quality / 512) *
			(gold.avg * (chanceData["Common"].quality / 10)) +
		chanceData["Common"].quality / 12 +
		gold.avg;
	uncommonAvg =
		Math.sin(chanceData["Uncommon"].quality / 512) *
			(gold.avg * (chanceData["Uncommon"].quality / 10)) +
		chanceData["Uncommon"].quality / 12 +
		gold.avg;
	rareAvg =
		Math.sin(chanceData["Rare"].quality / 512) *
			(gold.avg * (chanceData["Rare"].quality / 10)) +
		chanceData["Rare"].quality / 12 +
		gold.avg;
	epicAvg =
		Math.sin(chanceData["Epic"].quality / 512) *
			(gold.avg * (chanceData["Epic"].quality / 10)) +
		chanceData["Epic"].quality / 12 +
		gold.avg;
	legendaryAvg =
		Math.sin(chanceData["Legendary"].quality / 512) *
			(gold.avg * (chanceData["Legendary"].quality / 10)) +
		chanceData["Legendary"].quality / 12 +
		gold.avg;

	baseAmount =
		(commonAvg * chanceData["Common"].chance +
			uncommonAvg * chanceData["Uncommon"].chance +
			rareAvg * chanceData["Rare"].chance +
			epicAvg * chanceData["Epic"].chance +
			legendaryAvg * chanceData["Legendary"].chance) *
		monstersSlain.total;
	totalAmount = Math.floor((goldFind / 100) * baseAmount + baseAmount);

	currencyAmount.gold = Math.floor(totalAmount / 10000);
	totalAmount -= Math.floor(totalAmount / 10000);
	totalAmount *= 100;
	currencyAmount.silver = Math.floor(totalAmount);
	totalAmount -= Math.floor(totalAmount);
	currencyAmount.copper = Math.floor(totalAmount);

	let gridOutput = [];
	for (const [rarity, rarityData] of Object.entries(chanceData)) {
		const id = rarities.indexOf(rarity);
		if (id < 0) continue;
		gridOutput.push({
			id,
			rarity,
			chance: rarityData.chance,
			tries: Math.ceil(rarityData.tries),
			dropCount: Math.round(rarityData.count),
		});
	}

	return {
		currencyAmount,
		gridOutput,
		monstersSlain,
	};
};

export default calculate;
