var unitsRegex = /^oz\.?|drops?|dash(es)?|barspns?|tb?sps?|grams?|pints?|cups?$/;

var SUGGESTION_COUNT_LIMIT = 5;

var GLASSWARE = [
	{
		name: "absinthe",
		regex: /absinthe\s+glass/i
	},
	{
		name: "champagne",
		regex: /champagne\s+(glass|flute)/i
	},
	{
		name: "collins",
		regex: /collins/i
	},
	{
		name: "collins",
		regex: /fizz\s+glass/i
	},
	{
		name: "cordial",
		regex: /cordial\s+glass/i
	},
	{
		name: "coupe",
		regex: /coupe/i
	},
	{
		name: "doubleoldfashioned",
		regex: /double\s+old[\-\s]fashioned/i
	},
	// Order matters for these old fashioneds, regex below would
	// test true for anything that matches regex above.
	{
		name: "oldfashioned",
		regex: /old[\-\s]fashioned/i
	},
	{
		name: "goblet",
		regex: /goblet/i
	},
	{
		name: "highball",
		regex: /highball/i
	},
	{
		name: "hurricane",
		regex: /hurricane\s+glass/i
	},
	{
		name: "largesnifter",
		regex: /large\s+snifter/i
	},
	{
		name: "martini",
		regex: /martini\s+glass/i
	},
	{
		name: "pilsner",
		regex: /pilsner/i
	},
	{
		name: "pint",
		regex: /pint/i
	},
	{
		name: "rocks",
		regex: /rocks/i
	},
	{
		name: "snifter",
		regex: /snifter/i
	},
	{
		name: "toddy",
		regex: /toddy/i
	},
	{
		name: "wine",
		regex: /wine\s+glass/i
	},
	{
		name: "cocktail",
		regex: /cocktail\s+glass/i
	},
	{
		name: "tiki",
		regex: /tiki\s+(mug|glass)/i
	},
	{
		name: "tikibowl",
		regex: /(tiki|scorpion)\s+bowl/i
	},
	{
		name: "pineapple",
		regex: /hollowed.+pineapple/i
	},
	{
		name: "coconut",
		regex: /coconut\s+shell/i
	},
	{
		name: "julep",
		regex: /julep\s+cup/i
	},
	{
		name: "punch",
		regex: /punch\s+glass/i
	},
];