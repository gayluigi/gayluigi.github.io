const recipes = [
	{
		"name": "Paper Plane",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Amaro Nonino"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon Juice"
			}
		],
		"procedure": "Shake with ice, strain into coupe, lemon twist, tiny origami paper plane",
		"glass": "coupe"
	},
	{
		"name": "Osedax",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Elijah Craig Bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Fernet Valet"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			}
		],
		"procedure": "Rocks glass over big rock, dehydrated orange wheel",
		"glass": "rocks"
	},
	{
		"name": "It Slaps",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Reyka Vodka"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Combier Pamplemousse Rose"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Aquafaba"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "2:1 Simple syrup"
			}
		],
		"procedure": "Double shake, crushed ice, rocks glass, grapefruit peel.",
		"glass": "rocks"
	},
	{
		"name": "Rye Not",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "TLW Knob Creek Rye"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Combier Kummel"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "2:1 Simple syrup"
			}
		],
		"procedure": "Shake, rocks glass, dehydrated lemon wheel",
		"glass": "rocks"
	},
	{
		"name": "The Allfathers Eye",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Norden Aquavit"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Meletti"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cold Brew"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Cherry Vanilla Bark bitters"
			}
		],
		"procedure": "Stirred, coupe. Dehydrated lemon wheel",
		"glass": "coupe"
	},
	{
		"name": "There's Always Money in the Banana Stand",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Banhez mezcal"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Banana Liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Domaine de Canton"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			}
		],
		"procedure": "Shake, coupe. Dehydrated banana chip",
		"glass": "coupe"
	},
	{
		"name": "Borderline",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Egg white/aquafaba"
			}
		],
		"procedure": "Double shake, coupe.",
		"glass": "coupe"
	},
	{
		"name": "Sweet Talker",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Titos vodka"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Strawberry Mint syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Kombucha"
			}
		],
		"procedure": "Shake. Collins. Cube ice, top with kombucha, mint sprig",
		"glass": "collins"
	},
	{
		"name": "Nice Guy",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Elijah Craig bourbon"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Peach Shrub"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			}
		],
		"procedure": "Shake, double strain into Collins. Cube ice, top with soda, dehydrated lemon wheel",
		"glass": "collins"
	},
	{
		"name": "The New Hotness",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lunazul"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grapefruit Liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Dolin Dry vermouth"
			}
		],
		"procedure": "Stir, coupe, grapefruit peel",
		"glass": "coupe"
	},
	{
		"name": "Honma Highball",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Japanese Plum liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Hibiscus-infused Aperol"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Cold-brewed Oolong Tea"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Citric/Malic Acid Solution"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Suntory Toki scotch or Suntori Roku Gin"
			}
		],
		"procedure": "Shake, Collins, cube ice. Carbonate before pouring or add a splash of soda. Orange peel",
		"glass": "collins"
	},
	{
		"name": "Norden Sour",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Norden Aquavit"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Apricot brandy"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Aquafaba"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "2:1 or .75 oz 1:1 Simple syrup"
			}
		],
		"procedure": "Shake, chilled rocks glass, no ice, lemon zest (discard). Three marigold flowers",
		"glass": "rocks"
	},
	{
		"name": "Hunter's Rally",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pisco"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Plantation Dark rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Egg white"
			}
		],
		"procedure": "Double shake, double strain into Collins, dehydrated lime, Angostura bitters drops",
		"glass": "collins"
	},
	{
		"name": "You're My Boy Blue",
		"ingredients": [
			{
				"measure": 7,
				"ingredient": "Blueberries"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Elijah Craig bourbon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Muddle blueberries, add the rest. Shake, double strain into rocks glass with ice.",
		"glass": "rocks"
	},
	{
		"name": "Caraway My Wayward Son",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Norden Aquavit"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Montenegro"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Don Ciccio & Figli"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			}
		],
		"procedure": "Shake, coupe, orange peel.",
		"glass": "coupe"
	},
	{
		"name": "Hot Chocavit",
		"ingredients": [
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Norden Aquavit"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Averna"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 1,
				"unit": "tbsp",
				"ingredient": "Hot chocolate powder"
			},
			{
				"measure": 3,
				"unit": "drops",
				"ingredient": "Chocolate extract"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Hot water"
			}
		],
		"procedure": "Coffee mug or toddy glass, stir, top with Caraway whipped cream, cocoa dust",
		"glass": "toddy"
	},
	{
		"name": "Kentucky Square",
		"ingredients": [
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Phoenix Barrel Brandy"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Punt e mes"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Becherovka"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Berentzen Apple"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Dash Orange bitters"
			}
		],
		"procedure": "Stir, rocks glass, big cube, dehydrated orange wheel",
		"glass": "rocks"
	},
	{
		"name": "Rosie",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Rose Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "Osborn",
		"ingredients": [
			{
				"measure": 1,
				"ingredient": "Jalepeno slice"
			},
			{
				"measure": 2,
				"ingredient": "Pineapple cubes"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Muddle jalepeno and pineapple. Shake, double strain, old fashioned glass",
		"glass": "oldfashioned"
	},
	{
		"name": "Sunset Curse",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Espelon Reposado tequila"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Ancho Reyes"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			}
		],
		"procedure": "Stirred, cocktail glass, flamed orange peel",
		"glass": "cocktail"
	},
	{
		"name": "Christmas in Cozmel",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Don Julio reposado"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lustau Oloroso sherry"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Agave"
			}
		],
		"procedure": "Stirred, coupe glass, lime flag",
		"glass": "coupe"
	},
	{
		"name": "Hold Up",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Norden Aquavit"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Saline solution"
			}
		],
		"procedure": "Shake, absinthe-rinsed glass, one mint leaf",
		"glass": null
	},
	{
		"name": "Manhattan #1",
		"ingredients": [
			{
				"measure": 2.25,
				"unit": "oz",
				"ingredient": "Wild Turkey whiskey"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			}
		],
		"procedure": "Stir, rocks glass, lemon flag",
		"glass": "rocks"
	},
	{
		"name": "Manhattan #2",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rittenhouse Rye"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Carpano punt e Mes"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, rocks glass, orange flag",
		"glass": "rocks"
	},
	{
		"name": "The Last Word",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Shake, martini glass, lime Wheel",
		"glass": "martini"
	},
	{
		"name": "Los Lobos",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lunazul Blanco tequila"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Agave syrup"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			}
		],
		"procedure": "Shake, rocks glass, crushed pink peppercorn",
		"glass": "rocks"
	},
	{
		"name": "Cabaret",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Titos vodka"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amaretto"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Agave syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Bitter Truth Jerry Thomas bitters"
			}
		],
		"procedure": "Shake, martini glass, lime wheel",
		"glass": "martini"
	},
	{
		"name": "Kentucky Sunshine",
		"ingredients": [
			{
				"measure": 4,
				"ingredient": "Basil leaves (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Elijiah Craig Small Batch bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Brown Simple syrup"
			},
			{
				"measure": 5,
				"unit": "drops",
				"ingredient": "Celery Shrub"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Ginger beer"
			}
		],
		"procedure": "Shake first 5 ingredients, double strain, rocks glass. Top with ginger beer, basil leaf",
		"glass": "rocks"
	},
	{
		"name": "Old West Side",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Wild Turkey whiskey"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Smoked Domaine de Canton"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "stir, rocks glass, grapefruit peel",
		"glass": "rocks"
	},
	{
		"name": "Baker Street",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "St. George Terroir Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Dolin Blanc vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			}
		],
		"procedure": "Stir, coupe, rosemary sprig",
		"glass": "coupe"
	},
	{
		"name": "Mother's Ruin",
		"ingredients": [
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Tanqueray Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			}
		],
		"procedure": "Shake, cocktail glass, rosemary sprig.",
		"glass": "cocktail"
	},
	{
		"name": "Party Police",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Vida Mezcal"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Strawberry balsamic shrub"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Domaine de Canton"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "2:1 Simple syrup"
			}
		],
		"procedure": "Shake, collins glass",
		"glass": "collins"
	},
	{
		"name": "Smash Brothers",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Elijah Craig bourbon"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Limoncello"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Black Sage syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "2:1 Simple syrup"
			}
		],
		"procedure": "Shake, highball glass. Top with soda, sage leaf.",
		"glass": "highball"
	},
	{
		"name": "A Morning Rum",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Plantation Original Dark rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Chicory syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cold brew"
			},
			{
				"measure": 7,
				"unit": "drops",
				"ingredient": "Banana extract"
			}
		],
		"procedure": "Stir, rocks glass, dehydrated lime or orange wheel",
		"glass": "rocks"
	},
	{
		"name": "Snake Oil Salesman",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Myers's Dark Rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Laphroaig 10 scotch"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Brown Simple syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, crushed ice, dragon glass, lime wheel",
		"glass": null
	},
	{
		"name": "The Heist",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Hayman's Old Tom Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Averna"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "2:1 Honey syrup"
			}
		],
		"procedure": "Shake, Absinthe glass, lemon peel",
		"glass": "absinthe"
	},
	{
		"name": "Rhum Old Fashioned",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Clement Barrel Select rhum agricole"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Cherry Vanilla Bark bitters"
			},
			{
				"measure": 1,
				"unit": "Dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, rocks glass, orange peel",
		"glass": "rocks"
	},
	{
		"name": "Kissed by a Rose",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Hayman's gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Claret syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Egg white"
			}
		],
		"procedure": "Double shake, coupe, rose bud",
		"glass": "coupe"
	},
	{
		"name": "(C)ole' fashioned",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Wild Turkey 101 whiskey"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dolin Genepy"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "2:1 Brown Simple syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, big cube, rocks glass, lemon peel",
		"glass": "rocks"
	},
	{
		"name": "Senor Burns",
		"ingredients": [
			{
				"measure": 7,
				"unit": "drops",
				"ingredient": "Jalapeno tincture"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Ancho Reyes"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "2:1 Simple syrup"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "Pining Princess",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			}
		],
		"procedure": "Shake, crushed ice, Collins glass",
		"glass": "collins"
	},
	{
		"name": "Sacred Heart",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Streyga"
			}
		],
		"procedure": "Shake, coupe, grapefruit peel",
		"glass": "coupe"
	},
	{
		"name": "Queen of Cups",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Haymans Old Tom Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Fennel liqueur"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Becherovka"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			}
		],
		"procedure": "Shake, cocktail glass, rosemary sprig",
		"glass": "cocktail"
	},
	{
		"name": "Ice Planet",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Reyka"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dolin Blanc vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Becherovka"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Streyga"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Stir, rocks glass, orange peel",
		"glass": "rocks"
	},
	{
		"name": "Sea Castle",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Vida Mezcal"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Creme de Violette"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Egg white or Aquafaba"
			}
		],
		"procedure": "Double shake, martini glass, Peychaud's bitters",
		"glass": "martini"
	},
	{
		"name": "Last Minute",
		"ingredients": [
			{
				"measure": null,
				"unit": null,
				"ingredient": "Muddled Ginger"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Tanqueray Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Domaine de Canton"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Shake, double strain, martini glass, grapefruit peel",
		"glass": "martini"
	},
	{
		"name": "Estrella Negra",
		"ingredients": [
			{
				"measure": 1.75,
				"unit": "oz",
				"ingredient": "Don Julio Reposado tequila"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Fernet Valet"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Piloncillo syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Hyperion Cold Brew"
			}
		],
		"procedure": "Shake, rocks glass, big cube",
		"glass": "rocks"
	},
	{
		"name": "Tell Me No Fibs, I'll Tell You No Lies",
		"ingredients": [
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Copper & Kings American Brandy"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Don Ciccio e Figli Fennel liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Berentzen Apple liqueur"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "1:1 Simple syrup"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "The Stampede",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Buffalo Trace bourbon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Fernet Branca"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "2:1 Simple syrup"
			}
		],
		"procedure": "Shake, rocks glass, mint sprig",
		"glass": "rocks"
	},
	{
		"name": "TRUE GRIT",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Bulleit Rye"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Tawny Port"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, rocks glass, big cube, lemon wheel",
		"glass": "rocks"
	},
	{
		"name": "Roaring 40's",
		"ingredients": [
			{
				"measure": 1,
				"ingredient": "Thick cucumber slice (muddled)"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Barsol Pisco"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Muddle with sea salt. Shake, double strain, coupe, cucumber slice",
		"glass": "coupe"
	},
	{
		"name": "Rye Daiquiri",
		"ingredients": [
			{
				"measure": 1.75,
				"unit": "oz",
				"ingredient": "Bulliet Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			}
		],
		"procedure": "Shake, coupe, lime wheel",
		"glass": "coupe"
	},
	{
		"name": "Basil & Bubbles",
		"ingredients": [
			{
				"measure": 3,
				"ingredient": "Basil leaves (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Champagne"
			}
		],
		"procedure": "Shake first 4 ingredients, double strain, champagne flute. Top with champagne, basil leaf",
		"glass": "champagne"
	},
	{
		"name": "The Purple Gang",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Titos vodka"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Creme de Violette"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Champagne"
			}
		],
		"procedure": "Shake, champagne flute. Top with champagne, lemon twist.",
		"glass": "champagne"
	},
	{
		"name": "Wise Guy",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Buffalo Trace bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lazzeroni Amaretto"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, coupe, orange peel",
		"glass": "coupe"
	},
	{
		"name": "Paradiso Sour",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Buffalo Trace bourbon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Egg White"
			}
		],
		"procedure": "Double shake, rocks glass, orange peel",
		"glass": "rocks"
	},
	{
		"name": "Nevermore",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Four Roses bourbon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Branca Menta"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cold brew"
			}
		],
		"procedure": "Shake, rocks glass, orange peel",
		"glass": "rocks"
	},
	{
		"name": "Blood & Smoke",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Punt E Mes"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orange juice"
			}
		],
		"procedure": "Shake, martini glass",
		"glass": "martini"
	},
	{
		"name": "Dr. Ordinaire",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Tanqueray Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Absinthe Ordinaire"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "1:1 Simple syrup"
			}
		],
		"procedure": "Shake, coupe with one drop of Peychaud's in glass, orange peel",
		"glass": "coupe"
	},
	{
		"name": "Red Rum",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Ron Zacapa rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Rum Barbancourt 8 rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, rocks glass, orange cherry flag",
		"glass": "rocks"
	},
	{
		"name": "Spice and Everything Nice",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Colonel Taylor Small Batch bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Tawny Port"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			}
		],
		"procedure": "Stir, rocks glass, big rock, express orange peel, torched cinnamon stick",
		"glass": "rocks"
	},
	{
		"name": "Yellow Bird",
		"ingredients": [
			{
				"measure": 2.25,
				"unit": "oz",
				"ingredient": "El Dorado 3 Year Demerara rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Apricot brandy"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Jamaican bitters"
			}
		],
		"procedure": "Shake, collins, crushed ice",
		"glass": "collins"
	},
	{
		"name": "Apricot Julep",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 10,
				"ingredient": "Mint leaves (muddled)"
			},
			{
				"measure": 3,
				"ingredient": "Apricot slices (muddled)"
			}
		],
		"procedure": "Stir with crushed ice. Mint sprig",
		"glass": null
	},
	{
		"name": "Age of Aquarius",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Campari"
			}
		],
		"procedure": "Shake first 4 ingredients, rocks glass, crushed ice. Float Campari, mint sprig",
		"glass": "rocks"
	},
	{
		"name": "Scofflaw",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Rye"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dolin Blanc vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, cocktail glass",
		"glass": "cocktail"
	},
	{
		"name": "Lost Lake",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Jamaican rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			}
		],
		"procedure": "Mix/whip shake, crushed ice, footed pilsner",
		"glass": "pilsner"
	},
	{
		"name": "Bitter Mai Tai",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Smith & Cross rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			}
		],
		"procedure": "Mix/whip shake, crushed ice, rocks glass. Mint, lime wheel",
		"glass": "rocks"
	},
	{
		"name": "Mr. Bodi Hai",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Real McCoy Rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Coffee liqueur"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Macadamia Orgeat"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake with crushed ice, pour into footed pilsner. Top up, pineapple fronds",
		"glass": "pilsner"
	},
	{
		"name": "Banana Farmer",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Smith & Cross rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Plantation 3 Star white rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			}
		],
		"procedure": "Mix/whip shake, crushed ice, Collins glass, pineapple fronds",
		"glass": "collins"
	},
	{
		"name": "Fay Wray",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Gold Rum Barbancourt"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cognac"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Rhum agricole"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "2:1 Demerara syrup"
			}
		],
		"procedure": "Lightly muddle lime wedge, mix/whip shake, crushed ice, rocks glass. Dried banana or mint sprig",
		"glass": "rocks"
	},
	{
		"name": "Keicho Embassy",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Suntory Toki Japanese whiskey"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Fuji apple juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "Father Knows Best",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Macallan 12 year Scotch whiskey"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Jagermeister"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Root beer syrup"
			}
		],
		"procedure": "Stir with ice, pour into bottle and smoke. Pour into rocks glass with large cube",
		"glass": "rocks"
	},
	{
		"name": "Arrack Punch",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Batavia Arrack"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Jamaican rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			}
		],
		"procedure": "Mix/whip shake, crushed ice, goblet. Fresh fruit, pineapple fronds",
		"glass": "goblet"
	},
	{
		"name": "Seven Seas Swizzle",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Batavia Arrack"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Green Tea syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Swizzle, crushed ice, Collins glass. Mint sprig, lime wheel, grated nutmeg",
		"glass": "collins"
	},
	{
		"name": "Boilermaker House Sour",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "JW Double Black Scotch whiskey"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.375,
				"unit": "oz",
				"ingredient": "2:1 Simple syrup"
			},
			{
				"measure": 0.375,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "IPA beer"
			}
		],
		"procedure": "Double shake all but beer, cocktail glass. Top with IPA",
		"glass": "cocktail"
	},
	{
		"name": "Chamomile Sour",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Chamomile Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dolin Blanc vermouth"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			}
		],
		"procedure": "Double shake, chilled coupe, chamomile flowers",
		"glass": "coupe"
	},
	{
		"name": "Chamomile Gin",
		"ingredients": [
			{
				"measure": 8,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 8,
				"unit": "grams",
				"ingredient": "Chamomile flowers or tea bags"
			}
		],
		"procedure": "Shake or stir gently to combine, let infuse for 5 days or to taste",
		"glass": null
	},
	{
		"name": "Guardian Angel",
		"ingredients": [
			{
				"measure": 2,
				"ingredient": "Cucumber slices (lightly muddled)"
			},
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Wray and Nephew Overproof rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 3,
				"unit": "drops",
				"ingredient": "Rosewater"
			}
		],
		"procedure": "Shake, double strain, coupe, cucumber slice",
		"glass": "coupe"
	},
	{
		"name": "Billionaire",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Overproof Bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Absinthe bitters"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Shake, cocktail glass, dehydrated lemon wheel",
		"glass": "cocktail"
	},
	{
		"name": "Blood and Sand",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Scotch"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Sweet vermouth"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orange juice"
			}
		],
		"procedure": "Shake first 3 ingredients, rocks glass. Top with orange juice",
		"glass": "rocks"
	},
	{
		"name": "Fernando",
		"ingredients": [
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Fernet Branca"
			},
			{
				"measure": 1.75,
				"unit": "oz",
				"ingredient": "Cinzano Bianco vermouth"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Galliano"
			}
		],
		"procedure": "Stir, large ice, cocktail glass, mint sprig",
		"glass": "cocktail"
	},
	{
		"name": "Nerina",
		"ingredients": [
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Meletti amaro"
			},
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Punt e Mes"
			}
		],
		"procedure": "Stir, large ice, cocktail glass orange twist",
		"glass": "cocktail"
	},
	{
		"name": "Peche Bourbon",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Massenez Creme de Peche or Peach liqueur"
			},
			{
				"measure": 1,
				"ingredient": "Brown sugar cube"
			},
			{
				"measure": 0.5,
				"unit": "tsp",
				"ingredient": "Superfine sugar"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Fee Brothers peach bitters"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Peach-Infused Bourbon"
			}
		],
		"procedure": "Muddle sugar and bitters in mixing glass, add bourbon, stir with ice. Rocks glass rinsed with creme de peche, mint sprig",
		"glass": "rocks"
	},
	{
		"name": "Jersey Devil",
		"ingredients": [
			{
				"measure": 1.75,
				"unit": "oz",
				"ingredient": "English Bishop"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Laird's straight apple brandy"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Berentzen Apfelkorn apple liqueur"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Stir, large ice, cocktail glass, orange wheel",
		"glass": "cocktail"
	},
	{
		"name": "Mata Hari",
		"ingredients": [
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Louis Royer Force 53 VSOP cognac"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Chai-Infused Sweet vermouth"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pomegranate juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, cocktail glass, 3 dried rose buds",
		"glass": "cocktail"
	},
	{
		"name": "Pisco Punch",
		"ingredients": [
			{
				"measure": 2,
				"ingredient": "1-inch cubes Pineapple"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pineapple syrup"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Barsol Pisco"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 5,
				"unit": "drops",
				"ingredient": "Bitter Truth Celery bitters"
			}
		],
		"procedure": "Muddle pineapple and pineapple syrup, add the rest, shake, double strain, goblet filled with ice. Lemon wheel, pineapple wedge",
		"glass": "goblet"
	},
	{
		"name": "Ruby Tuesday",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "5 ripe Black cherries (muddled)"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Wild Turkey 101 Rye"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, strain into chilled cocktail glass. Lemon twist",
		"glass": "cocktail"
	},
	{
		"name": "Waterloo",
		"ingredients": [
			{
				"measure": 4,
				"ingredient": "(1-2 inch) cubes Watermelon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Campari"
			}
		],
		"procedure": "Muddle watermelon and syrup until liquid. Add the rest, shake, unstrained into collins glass. Watermelon wedge.",
		"glass": "collins"
	},
	{
		"name": "Yellow Jacket",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Partida Reposado tequila"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, large ice, cocktail glass, lemon twist",
		"glass": "cocktail"
	},
	{
		"name": "Mid-Morning Fizz",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 1.75,
				"unit": "oz",
				"ingredient": "Martin Miller's Westbourne Strength 100-proof Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 5,
				"unit": "drops",
				"ingredient": "Orange Blossom water"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			}
		],
		"procedure": "Pour chartreuse into collins glass with ice and club soda, chill. Shake the other ingredients for 2 minutes. Strain into glass. Orange wheel",
		"glass": "collins"
	},
	{
		"name": "English Bishop",
		"isIngredient": true,
		"ingredients": [
			{
				"measure": 1,
				"ingredient": "Orange"
			},
			{
				"measure": 30,
				"ingredient": "Cloves"
			},
			{
				"measure": 1,
				"ingredient": "(750 ml) bottle Ruby port"
			},
			{
				"measure": 1,
				"unit": "cup",
				"ingredient": "Superfine sugar"
			}
		],
		"procedure": "Stud orange with cloves, place in baking dish, bake at 400°F until entire orange is browned, about 30 minutes. Carefully cut into quarters, place into saucepan with the port simmer on medium heat for 30 minutes. Strain, add the sugar to the liquid. Cool, strain again, and bottle.",
		"glass": null
	},
	{
		"name": "Robb's Grandma",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Early Times whiskey"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Sweet vermouth"
			},
			{
				"measure": 2,
				"ingredient": "Maraschino cherries"
			}
		],
		"procedure": "Rocks glass, large cube, barspoon of cherry syrup, stir",
		"glass": "rocks"
	},
	{
		"name": "Citric Acid Solution",
		"isIngredient": true,
		"ingredients": [
			{
				"measure": 100,
				"unit": "grams",
				"ingredient": "filtered water"
			},
			{
				"measure": 25,
				"unit": "grams",
				"ingredient": "citric acid powder"
			}
		],
		"procedure": "Mix until dissolved",
		"glass": null
	},
	{
		"name": "#3 Cup",
		"ingredients": [
			{
				"measure": 4,
				"ingredient": "Mint leaves (muddled)"
			},
			{
				"measure": 2,
				"ingredient": "Cucumber slices (muddled)"
			},
			{
				"measure": 1,
				"ingredient": "Orange slice (muddled)"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Hine V.S.O.P. cognac"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Ginger Beer"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Martini sweet vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Shake, double strain, Collins glass, mint sprig, orange slice",
		"glass": "collins"
	},
	{
		"name": "20th Century",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Creme de Cacao"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lillet Blanc"
			},
			{
				"measure": 75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "Against All Odds",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Bushmills Irish Whiskey"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Channing Daughters Scuttlehole Chardonnay"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Rhum Clement Creole Shrubb"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Mezcal"
			}
		],
		"procedure": "Shake first 4 ingredients, coupe rinsed with Mezcal",
		"glass": "coupe"
	},
	{
		"name": "Aguil a Azteca",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Jose Cuervo tequila"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Honeydew Melon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Domaine de Canton"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Creme de Violette"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "Airmail",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Banks 5 Island Rum"
			},
			{
				"measure": 5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Champagne"
			}
		],
		"procedure": "Shake, coupe, top with 1 oz champagne, lime wheel",
		"glass": "coupe"
	},
	{
		"name": "Albert Mathieu",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lillet Blanc"
			},
			{
				"measure": 75,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "St. Germain"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, coupe, orange twist",
		"glass": "coupe"
	},
	{
		"name": "Applejack Rabbit",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Apple Brandy"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grade B Maple syrup"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "Blackbeard",
		"ingredients": [
			{
				"measure": 4,
				"ingredient": "Blackberries (muddled)"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Beefeater Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Aquavit"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Agave syrup"
			}
		],
		"procedure": "Dry shake, unstrained pour, rocks glass, pebble ice, mint sprig",
		"glass": "rocks"
	},
	{
		"name": "Black Thorn",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Sloe Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, coupe, orange twist",
		"glass": "coupe"
	},
	{
		"name": "Champs-elysees",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Hine V.S.O.P. cognac"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "Chrysanthemum",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Dolin Dry vermouth"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Vieux Pontarlier Absinthe"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, coupe",
		"glass": "coupe"
	},
	{
		"name": "Cloister",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Tanqueray Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, coupe, grapefruit twist",
		"glass": "coupe"
	},
	{
		"name": "Conquistador",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Matusalem Gran Reserva rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Siembra Azul Blanco tequila"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			}
		],
		"procedure": "Double shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "Corpse Reviver #2",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cointreau"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lillet Blanc"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Absinthe (rinse)"
			}
		],
		"procedure": "Shake, rinsed coupe",
		"glass": "coupe"
	},
	{
		"name": "De La Louisiane",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Wild Turkey Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Dolin Sweet vermouth"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Absinthe"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Stir, coupe, three brandied cherries",
		"glass": "coupe"
	},
	{
		"name": "East India Cocktail",
		"ingredients": [
			{
				"measure": 1.75,
				"unit": "oz",
				"ingredient": "Martell V.S.O.P. cognac"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Pampero Aniversario rum"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, coupe, orange twist",
		"glass": "coupe"
	},
	{
		"name": "El Puente",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Jose Cuervo Platino Tequila"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Martini Bianco vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Mezcal (rinse)"
			}
		],
		"procedure": "Shake, coupe, grapefruit twist",
		"glass": "coupe"
	},
	{
		"name": "Ephemeral",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Ransom Old Tom Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dolin Blanc vermouth"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "St. Germain"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Celery bitters"
			}
		],
		"procedure": "Stir, coupe, grapefruit twist",
		"glass": "coupe"
	},
	{
		"name": "Espresso Bongo",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Appleton Reserve rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Espresso Liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			}
		],
		"procedure": "Shake, unstrained pour, tiki mug",
		"glass": "tiki"
	},
	{
		"name": "Fish House Punch",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Gosling's Black Seal rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pierre Ferrand Ambre cognac"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Peach liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Shake, rocks glass",
		"glass": "rocks"
	},
	{
		"name": "Flying Dutchman",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Clear Creek Plum brandy"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Bols Genever"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Creme Yvette"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Maraschino liqueur"
			}
		],
		"procedure": "Shake, coupe, brandied cherry",
		"glass": "coupe"
	},
	{
		"name": "Foreign Legion",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Mount Gay X.O. rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dubonnet Rouge"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lustau Manzanilla sherry"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Dark Creme de Cacao"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Rhubarb bitters"
			}
		],
		"procedure": "Stir, rocks glass, ice sphere, orange twist",
		"glass": "rocks"
	},
	{
		"name": "French Maid",
		"ingredients": [
			{
				"measure": 3,
				"ingredient": "Cucumber wheels (muddled)"
			},
			{
				"measure": 6,
				"ingredient": "Mint leaves (muddled)"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Hine V.S.O.P. cognac"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Ginger beer"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			}
		],
		"procedure": "Shake, double strain, Collins glass, mint sprig in cucumber wheel",
		"glass": "collins"
	},
	{
		"name": "Gilchrist",
		"ingredients": [
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Compass Box Asyla Blended Scotch Whiskey"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pear brandy"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Averna Amaro"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Fee Brothers Grapefruit bitters"
			}
		],
		"procedure": "Shake, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "GOLDEN STAR FIZZ",
		"ingredients": [
			{
				"measure": 3,
				"ingredient": "Cucumber slices (muddled)"
			},
			{
				"measure": 1,
				"ingredient": "Dill sprig (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Krogstad Aquavit"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Sparkling White Jasmine Tea"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Absinthe (rinse)"
			}
		],
		"procedure": "Shake first 5 ingredients, double strain, rinsed fizz glass. Top with jasmine tea, cucumber slice",
		"glass": "collins"
	},
	{
		"name": "GREAT PUMPKIN",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Southampton Pumpkin Ale"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Rittenhouse Bonded Rye"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Laird's Bonded Apple Brandy"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grade B Maple syrup"
			},
			{
				"measure": 1,
				"ingredient": "Whole Egg"
			}
		],
		"procedure": "Stir, double shake, strain into fizz glass, grated nutmeg",
		"glass": "collins"
	},
	{
		"name": "GREEN DEACON",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Sloe Gin"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Absinthe (rinse)"
			}
		],
		"procedure": "Shake, rinsed coupe",
		"glass": "coupe"
	},
	{
		"name": "GREEN HARVEST",
		"ingredients": [
			{
				"measure": 7,
				"ingredient": "Concord Grapes (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Chilled Brewed Hibiscus Tea"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Jose Cuervo Platino Tequila"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			}
		],
		"procedure": "Stir, double strain, fizz glass, three concord grapes",
		"glass": "collins"
	},
	{
		"name": "GREENPOINT",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rittenhouse Bonded Rye"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Punt e Mes"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, coupe",
		"glass": "coupe"
	},
	{
		"name": "HARVEST MOON",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Wild Turkey Rye"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lillet Blanc"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Laird's Bonded Apple Brandy"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Abbott's bitters"
			}
		],
		"procedure": "Stir, coupe, orange twist",
		"glass": "coupe"
	},
	{
		"name": "HARVEST SLING",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Laird's Bonded Apple Brandy"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Sweet vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Ginger beer"
			}
		],
		"procedure": "Shake, Collins glass, cherry and orange flag",
		"glass": "collins"
	},
	{
		"name": "HEIRLOOM",
		"ingredients": [
			{
				"measure": 7,
				"ingredient": "Concord Grapes (muddled)"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Hayman's Old Tom Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Strega"
			}
		],
		"procedure": "Shake, double strain, coupe, two spritzes anise hyssop essence",
		"glass": "coupe"
	},
	{
		"name": "HEMINGWAY DAIQUIRI",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Banks 5 Island rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			}
		],
		"procedure": "Shake, coupe, lime wheel",
		"glass": "coupe"
	},
	{
		"name": "HENRY HUDSON",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Bols Genever"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Chardonnay"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Batavia Arrack"
			}
		],
		"procedure": "Stir, rocks glass, large cube, grated nutmeg ",
		"glass": "rocks"
	},
	{
		"name": "HONEYMOON COCKTAIL",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Laird's Bonded Apple Brandy"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "HOTEL D'ALSACE",
		"ingredients": [
			{
				"measure": 1,
				"ingredient": "Small sprig Rosemary (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bushmills Irish Whiskey"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cointreau"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			}
		],
		"procedure": "Stir, double strain, rocks glass, large cube, rosemary sprig",
		"glass": "rocks"
	},
	{
		"name": "JAPANESE COURAGE",
		"ingredients": [
			{
				"measure": 6,
				"unit": "oz",
				"ingredient": "Kamoizumi “Shusen” Sake (warm)"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Bols Genever"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Domaine de Canton"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Honey syrup"
			}
		],
		"procedure": "Stir, pre-heated mug, lemon wheel studded with 6 cloves",
		"glass": null
	},
	{
		"name": "JAPANESE COCKTAIL",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Hine V.S.O.P. cognac"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "JUDGMENT DAY",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Macchu Pisco"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"ingredient": "Egg White"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Absinthe (rinse)"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Allspice dram (spritz)"
			}
		],
		"procedure": "Double shake, rinsed coupe, 2 spritzes allspice dram",
		"glass": "coupe"
	},
	{
		"name": "JUNIOR",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rittenhouse Bonded Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "KANSAI KICK",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Yamazaki 12-Year-Old whiskey"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Blandy's Sercial Madeira"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.4,
				"unit": "oz",
				"ingredient": "Orgeat"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "KINA MIELE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dolin Dry vermouth"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cocchi Americano"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Nonino Gioiello"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Pear Brandy"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Lemon bitters"
			}
		],
		"procedure": "Stir, rocks glass, large cube, grapefruit twist",
		"glass": "rocks"
	},
	{
		"name": "KING BEE",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Barsol Quebranta Pisco"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Barenjager"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lustau Palo Cortado Sherry"
			}
		],
		"procedure": "Shake first 4 ingredients, coupe, float sherry",
		"glass": "coupe"
	},
	{
		"name": "LA FLORIDA COCKTAIL",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Banks 5 Island rum"
			},
			{
				"measure": 75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Creme de Cacao"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Martini Sweet vermouth"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Grenadine"
			}
		],
		"procedure": "Shake, coupe, lime wheel",
		"glass": "coupe"
	},
	{
		"name": "LA LOUCHE",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Hendricks Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lillet Rouge"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "LEAPFROG",
		"ingredients": [
			{
				"measure": 6,
				"ingredient": "Mint leaves (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, double strain, coupe",
		"glass": "coupe"
	},
	{
		"name": "LE PeRE BIS",
		"ingredients": [
			{
				"measure": 4,
				"unit": "oz",
				"ingredient": "Chamomile Tea"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Ardbeg 10-Year-Old Single Malt scotch"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			}
		],
		"procedure": "Stir, pre-heated mug, lemon wedge studded with three cloves",
		"glass": null
	},
	{
		"name": "LUAU",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Wray & Nephew Overproof rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Appleton Estate V/X rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "El Dorado 15-Year-Old rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, rocks glass, crushed ice, lime wheel, orange slice",
		"glass": "rocks"
	},
	{
		"name": "MASATAKA SWIZZLE",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Nikka Taketsuru 12-Year-Old Japanese whiskey"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Luxardo Amaretto"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Swizzle, rocks glass, crushed ice, 3 dash bitters, mint sprig",
		"glass": "rocks"
	},
	{
		"name": "MEZCAL MULE",
		"ingredients": [
			{
				"measure": 3,
				"ingredient": "Cucumber slices (muddled)"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Sombra Mezcal"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Ginger beer"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			}
		],
		"procedure": "Shake, rocks glass, candied ginger, cucumber slice, pinch of ground chili",
		"glass": "rocks"
	},
	{
		"name": "NEW ORLEANS MILK PUNCH",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Whole Milk"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pierre Ferrand Ambre cognac"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Myers's Dark rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, rocks glass, large cube",
		"glass": "rocks"
	},
	{
		"name": "MONTGOMERY SMITH",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Hine V.S.O.P. Cognac"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Fernet Branca"
			}
		],
		"procedure": "Stir, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "MONKEY GLAND",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Beefeater Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Pomegranate Molasses"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Absinthe (rinse)"
			}
		],
		"procedure": "Shake, rinsed coupe",
		"glass": "coupe"
	},
	{
		"name": "MOUNT VERNON",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Kirschwasser"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Brandy de Jerez"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lustau Pedro Ximenez sherry"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			}
		],
		"procedure": "Shake, coupe, three brandied cherries",
		"glass": "coupe"
	},
	{
		"name": "NEW AMSTERDAM",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bols Genever"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Kirschwasser"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Stir, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "NEWARK",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Laird's Bonded Apple Brandy"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Vya Sweet vermouth"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Fernet Branca"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Maraschino Liqueur"
			}
		],
		"procedure": "Stir, coupe",
		"glass": "coupe"
	},
	{
		"name": "NOUVEAU CARRe",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Ocho Anejo Tequila"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lillet Blanc"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Stir, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "NTH DEGREE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Rhum Clement V.S.O.P."
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Laird's Bonded Apple Brandy"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 1,
				"ingredient": "Demerara Sugar cube"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Fee Brothers Whiskey Barrel Aged bitters"
			}
		],
		"procedure": "Muddle bitters with sugar cube, add the rest, stir, rocks glass, large cube, orange and lemon twist",
		"glass": "rocks"
	},
	{
		"name": "OCCIDENTAL",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Linie Aquavit"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grand Marnier"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amaro Nonino"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Fernet Branca (rinse)"
			}
		],
		"procedure": "Stir, rinsed coupe, orange twist",
		"glass": "coupe"
	},
	{
		"name": "OLD PAL",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Old Overholt Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Dolin Dry vermouth"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Campari"
			}
		],
		"procedure": "Stir, coupe",
		"glass": "coupe"
	},
	{
		"name": "PADDINGTON",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Banks 5 Island rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lillet Blanc"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Orange Marmalade"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Absinthe (rinse)"
			}
		],
		"procedure": "Shake, rinsed coupe, grapefruit twist",
		"glass": "coupe"
	},
	{
		"name": "PHARAOH COOLER",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Partida Blanco Tequila"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Watermelon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 4,
				"unit": "drops",
				"ingredient": "Rosewater"
			}
		],
		"procedure": "Shake, Collins glass, top with 1 oz soda",
		"glass": "collins"
	},
	{
		"name": "PROFESSOR",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rhum Clement V.S.O.P"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Dow's Tawny Port"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, coupe, orange twist",
		"glass": "coupe"
	},
	{
		"name": "REMEMBER THE MAINE",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Wild Turkey Russell's Reserve 6-Year-Old Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Pernod"
			}
		],
		"procedure": "Stir, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "RESTING POINT",
		"ingredients": [
			{
				"measure": 1,
				"ingredient": "Strawberry (muddled)"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Siete Leguas Reposado tequila"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Punt e Mes"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Agave syrup"
			}
		],
		"procedure": "Shake, double strain, coupe, strawberry fan",
		"glass": "coupe"
	},
	{
		"name": "RHUM CLUB",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Banks 5 Island Rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Rhum Clement Creole Shrubb"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Martinique Sugar Cane syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, coupe, orange wedge",
		"glass": "coupe"
	},
	{
		"name": "RIO BRAVO",
		"ingredients": [
			{
				"measure": 3,
				"ingredient": "Ginger slices (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Sagatiba Cachaca"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			}
		],
		"procedure": "Shake, double strain, coupe, orange twist",
		"glass": "coupe"
	},
	{
		"name": "ROSITA",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Partida Reposado tequila"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Martini Sweet vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dolin Dry vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, coupe, orange twist",
		"glass": "coupe"
	},
	{
		"name": "RUST BELT",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Barbancourt 8-Year-Old Rhum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Navan Vanilla liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 1,
				"ingredient": "Egg White"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Angostura bitters (spritz)"
			}
		],
		"procedure": "Double shake, coupe, 2 spritzes Angostura bitters",
		"glass": "coupe"
	},
	{
		"name": "ROYAL BERMUDA YACHTCLUB COCKTAIL",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Mount Gay Eclipse Amber rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cointreau"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			}
		],
		"procedure": "Shake, coupe, lime wheel",
		"glass": "coupe"
	},
	{
		"name": "RYE WITCH",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rittenhouse Bonded Rye"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Strega"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Lustau Palo Cortado Sherry"
			},
			{
				"measure": 1,
				"ingredient": "Sugar Cube"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Muddle bitters and sugar cube, add the rest, stir, rocks glass, express orange peel",
		"glass": "rocks"
	},
	{
		"name": "SEELBACH COCKTAIL",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Bulleit Bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cointreau"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Champagne"
			}
		],
		"procedure": "Stir, coupe. Top with 2 oz champagne, orange twist",
		"glass": "coupe"
	},
	{
		"name": "SILVER LINING",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Old Overholt Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Licor 43"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			}
		],
		"procedure": "Double shake, fizz glass. Top with 1 oz soda",
		"glass": "collins"
	},
	{
		"name": "SLOE GIN FIZZ",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Sloe Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, fizz glass. Top with 3 oz soda",
		"glass": "collins"
	},
	{
		"name": "SOLSTICE",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Rittenhouse Bonded Rye"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Laird's Bonded Apple Brandy"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Nonino Amaro"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dubonnet Rouge"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Grenadine"
			}
		],
		"procedure": "Stir, coupe",
		"glass": "coupe"
	},
	{
		"name": "STATESMAN",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Beefeater 24 Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pear liqueur"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "TALBOTT LEAF",
		"ingredients": [
			{
				"measure": 6,
				"ingredient": "Mint leaves (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Old Grand-Dad Bonded Bourbon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Strawberry preserves"
			}
		],
		"procedure": "Shake, double strain, coupe, mint leaf",
		"glass": "coupe"
	},
	{
		"name": "TUXEDO",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Dolin Dry vermouth"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Absinthe (rinse)"
			}
		],
		"procedure": "Stir, rinsed coupe, lemon twist, cherry",
		"glass": "coupe"
	},
	{
		"name": "VAUVERT SLIM",
		"ingredients": [
			{
				"measure": 6,
				"ingredient": "Mint leaves (muddled)"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Laphroaig 10 scotch (rinse)"
			}
		],
		"procedure": "Double shake, double strain, rinsed coupe, mint leaf",
		"glass": "coupe"
	},
	{
		"name": "VELVET CLUB",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Hine V.S.O.P. cognac"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lillet Blanc"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "White Creme de Cacao"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Champagne"
			}
		],
		"procedure": "Stir, coupe. Top with 1 oz champagne",
		"glass": "coupe"
	},
	{
		"name": "VIEUX MOT",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "VIEUX CARRe",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Sazerac 6-Year-Old Rye"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Hine V.S.O.P. Cognac"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Stir, rocks glass, large cube ",
		"glass": "rocks"
	},
	{
		"name": "WHISKEY SMASH",
		"ingredients": [
			{
				"measure": 3,
				"ingredient": "Lemon Wedges (muddled)"
			},
			{
				"measure": 6,
				"ingredient": "Mint Leaves (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rittenhouse Bonded Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, double strain, rocks, mint sprig",
		"glass": "rocks"
	},
	{
		"name": "WHITE BIRCH FIZZ",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Strega"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 1,
				"ingredient": "Egg White"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Suze (spritz)"
			}
		],
		"procedure": "Double shake, Collins glass. Top with 2 oz soda, spritz of Suze",
		"glass": "collins"
	},
	{
		"name": "WITCH'S KISS",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Jose Cuervo Platino tequila"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Strega"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Apple Butter"
			}
		],
		"procedure": "Shake, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "AKU AKU",
		"ingredients": [
			{
				"measure": 5,
				"ingredient": "(1-inch-square) chunks pineapple (muddled)"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Peach liqueur"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			}
		],
		"procedure": "Mix/whip shake, double-strain, coupe, mint sprig",
		"glass": "coupe"
	},
	{
		"name": "PUPULE",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Vanilla syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Column still aged rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, spiral-cut orange peel, mint sprig",
		"glass": "pilsner"
	},
	{
		"name": "DON'S OWN GROG",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Blackberry Liqueur"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Black blended rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angosutra bitters"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, freshly grated nutmeg",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "PORT AU PRINCE",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Cane coffey still aged rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, lime wedge",
		"glass": "pilsner"
	},
	{
		"name": "THREE DOTS AND A DASH",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Rhum agricole vieux"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, three maraschino cherries and pineapple chunk",
		"glass": "pilsner"
	},
	{
		"name": "MEXICAN EL DIABLO",
		"ingredients": [
			{
				"measure": 1,
				"ingredient": "Lime wedge (lightly muddled)"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Creme de Cassis"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blanco tequila"
			},
			{
				"measure": 4,
				"unit": "oz",
				"ingredient": "Ginger ale"
			}
		],
		"procedure": "Swizzle, collins glass, cracked ice",
		"glass": "collins"
	},
	{
		"name": "PORT LIGHT",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Egg white"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			}
		],
		"procedure": "Dry shake egg white and bourbon, add the rest, Mix/whip shake, footed pilsner, crushed ice",
		"glass": "pilsner"
	},
	{
		"name": "DEMERARA DRY FLOAT",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Black blended overproof rum"
			}
		],
		"procedure": "Mix/whip shake first 6 ingredients, double old-fashioned glass, crushed ice, serve with overproof rum on the side",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "JET PILOT",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Black blended rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Black blended overproof rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Herbstura"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "HALEKULANI COCKTAIL",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "tsp",
				"ingredient": "Grenadine"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, double strain, coupe, edible orchid",
		"glass": "coupe"
	},
	{
		"name": "SIDEWINDER'S FANG",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Black blended rum"
			}
		],
		"procedure": "Mix/whip shake, strain, large brandy snifter, cracked ice, sidewinder's fang orange peel, mint sprig.",
		"glass": "snifter"
	},
	{
		"name": "HAWAIIAN SUNSET",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Grenadine"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Vodka"
			}
		],
		"procedure": "Shake, double strain, coupe, lime peel.",
		"glass": "coupe"
	},
	{
		"name": "CAPTAIN'S GROG",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grade A Maple syrup"
			},
			{
				"measure": 3,
				"unit": "drops",
				"ingredient": "Vanilla extract"
			},
			{
				"measure": 3,
				"unit": "drops",
				"ingredient": "Almond extract"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Black Blended rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Blended Lightly Aged rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Blended Aged rum"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, mint sprig",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "SUFFERING BASTARD",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "London Dry Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Brandy"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 4,
				"unit": "oz",
				"ingredient": "Ginger beer"
			}
		],
		"procedure": "Shake first 5 ingredients, Collins glass, cracked ice. Top with ginger beer, mint sprig",
		"glass": "collins"
	},
	{
		"name": "MERCILESS VIRGIN",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			}
		],
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, Maraschino cherry",
		"glass": "pilsner"
	},
	{
		"name": "SATURN",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "London Dry Gin"
			}
		],
		"procedure": "Shake, coupe, lemon peel rings",
		"glass": "coupe"
	},
	{
		"name": "TIKI BOWL FOR TWO",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Black blended rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Black blended overproof rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Column still aged rum"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Herbstura"
			}
		],
		"procedure": "Mix/blend, tiki bowl, crushed ice, edible orchid",
		"glass": "tikibowl"
	},
	{
		"name": "HURRICANE",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 4,
				"unit": "oz",
				"ingredient": "Black blended rum"
			}
		],
		"procedure": "Mix/whip shake, hurricane glass, crushed ice, lemon wedge",
		"glass": "hurricane"
	},
	{
		"name": "MUNDO PERDIDO",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apple brandy"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Black blended rum"
			}
		],
		"procedure": "Shake, coupe.",
		"glass": "coupe"
	},
	{
		"name": "FORMIDABLE DRAGON",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Molasses syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amaro Di Angostura"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Black blended rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Pot still lightly aged rum (overproof)"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Mix/Blend, large brandy snifter, crushed ice, edible orchid, multiple mint sprigs",
		"glass": "snifter"
	},
	{
		"name": "LEI LANI NOUVEAU",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Coconut cream"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Bundaberg Guava soda"
			}
		],
		"procedure": "Shake first 4 ingredients, double strain, Collins glass, cracked ice. Top with guava soda, edible orchid",
		"glass": "collins"
	},
	{
		"name": "TRADEWINDS",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Coconut cream"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Black blended rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			}
		],
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, lemon wedge",
		"glass": "pilsner"
	},
	{
		"name": "PEACHTREE PUNCH 2.0",
		"ingredients": [
			{
				"measure": 0.5,
				"ingredient": "Yellow/White peach (muddled)"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Coconut cream"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Peach liqueur"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Mix/whip shake, double strain, double old-fashioned glass, cracked ice, grated nutmeg, peach wedge",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "JUNGLE BIRD",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Black blended rum"
			}
		],
		"procedure": "Mix/whip shake, Collins glass, crushed ice, pineapple fronds",
		"glass": "collins"
	},
	{
		"name": "GOLDEN GUN",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, Collins glass, cracked ice",
		"glass": "collins"
	},
	{
		"name": "HINKY DINKS FIZZY",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "London Dry Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended Lightly Aged rum"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Sparkling wine"
			}
		],
		"procedure": "Mix/whip shake first 6 ingredients, large brandy snifter, crushed ice. Top with sparkling wine, mint sprig",
		"glass": "snifter"
	},
	{
		"name": "PAMPANITO",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Molasses syrup"
			},
			{
				"measure": 2.5,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Black blended rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, Collins glass, crushed ice, lemon twist",
		"glass": "collins"
	},
	{
		"name": "MAX'S MISTAKE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "London Dry Gin"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Fentimans Victorian Lemonade"
			}
		],
		"procedure": "Mix/whip shake, large brandy snifter, crushed ice, mint sprig",
		"glass": "snifter"
	},
	{
		"name": "LA GUILDIVE",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Licor 43"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Peach liqueur"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Ginger beer"
			}
		],
		"procedure": "Shake first 4 ingredients, coupe. Top with ginger beer, lime twist, pinch of cinnamon",
		"glass": "coupe"
	},
	{
		"name": "THE TWENTY SEVENTY SWIZZLE",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Column still aged rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Black blended overproof rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Herbstura"
			}
		],
		"procedure": "Swizzle, Collins glass, crushed ice, grated nutmeg, mint sprig",
		"glass": "collins"
	},
	{
		"name": "SHUDDERS IN A WHISPER",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pear liqueur"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Drambuie"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Column still aged rum"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, large brandy snifter, crushed ice, edible orchid, mint sprig",
		"glass": "snifter"
	},
	{
		"name": "CUEVAS",
		"ingredients": [
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Punt e Mes"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Tawny port"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 6,
				"unit": "drops",
				"ingredient": "Bittermens ‘Elemakule Tiki bitters"
			}
		],
		"procedure": "Shake, coupe, maraschino cherry",
		"glass": "coupe"
	},
	{
		"name": "NORWEGIAN PARALYSIS",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Aquavit"
			}
		],
		"procedure": "Shake, Collins glass, cracked ice, lemon wedge",
		"glass": "collins"
	},
	{
		"name": "JUAN HO ROYALE",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Blue curacao"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blanco tequila"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Champagne or Sparkling wine"
			}
		],
		"procedure": "Shake first 5 ingredients, coupe. Top with champagne",
		"glass": "coupe"
	},
	{
		"name": "CHARTREUSE SWIZZLE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			}
		],
		"procedure": "Swizzle, Collins glass, crushed ice, grated nutmeg, mint sprig",
		"glass": "collins"
	},
	{
		"name": "ROSELITA",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Hibiscus liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pear liqueur"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Column still aged rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake first 6 ingredients, Collins glass, cracked ice. Top with seltzer, edible hibiscus flower",
		"glass": "collins"
	},
	{
		"name": "CENTER OF THE GALAXY",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Raspberry liqueur"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Ground cinnamon (pinch)"
			}
		],
		"procedure": "Shake, coupe, raspberry on lime wheel",
		"glass": "coupe"
	},
	{
		"name": "CALLALOO COOLER",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake first 5 ingredients, Collins glass, cracked ice. Top with seltzer, grated cinnamon, mint sprig",
		"glass": "collins"
	},
	{
		"name": "TOP NOTCH VOLCANO FOR TWO",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			}
		],
		"procedure": "Mix/whip shake, scorpion bowl, lime and orange slices, fire",
		"glass": "tikibowl"
	},
	{
		"name": "THE NAKED APE",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Giffard Banane du Bresil banana liqueur"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Black blended rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pot still lightly aged rum (overproof)"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice",
		"glass": "tiki"
	},
	{
		"name": "SWIZZLE FRANcAIS",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Martinique sugarcane syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rhum agricole vieux"
			}
		],
		"procedure": "Swizzle, Collins glass, crushed ice, ground nutmeg",
		"glass": "collins"
	},
	{
		"name": "SPARKLING MAI TAI",
		"ingredients": [
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Black blended overproof rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 4,
				"unit": "oz",
				"ingredient": "chilled sparkling wine"
			}
		],
		"procedure": "Stir first 5 ingredients, champagne flute. Top with sparkling wine, lime twist, mint leaf",
		"glass": "champagne"
	},
	{
		"name": "THE ERNESTO",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blanco tequila"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Herbstura"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Ting Grapefruit soda"
			}
		],
		"procedure": "Shake first 5 ingredients, double old-fashioned glass, cracked ice. Top with soda, lime wheel, edible orchid",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "HANA REVIVER",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Passionfruit Honey syrup"
			},
			{
				"measure": 0.25,
				"unit": "bspn",
				"ingredient": "Li Hing Mui powder"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pot Still Unaged rum"
			}
		],
		"procedure": "Mix/whip shake, footed pilsner glass, crushed ice, mint sprig",
		"glass": "pilsner"
	},
	{
		"name": "KAITEUR SWIZZLE",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grade A maple syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended aged rum (Guyana)"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Swizzle, Collins glass, crushed ice, mint sprig",
		"glass": "collins"
	},
	{
		"name": "THE EXPEDITION",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Vanilla syrup"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Bittermens New Orleans Coffee Liqueur"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Black Blended rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Bourbon"
			}
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice, edible orchid",
		"glass": "tiki"
	},
	{
		"name": "THE UNDEAD GENTLEMAN",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice (white or pink)"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Black blended overproof rum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Absinthe Blanc (rinse)"
			}
		],
		"procedure": "Shake, rinsed coupe, intertwined lime and grapefruit twists",
		"glass": "coupe"
	},
	{
		"name": "THE DEAD RECKONING",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grade A maple syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Vanilla-infused brandy"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Tawny port"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Mix/whip shake first 7 ingredients, Collins glass, cracked ice. Top with seltzer, pineapple fronds, mint spring, lemon spiral",
		"glass": "collins"
	},
	{
		"name": "FALINUM",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Coconut cream"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Column still aged rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice",
		"glass": "tiki"
	},
	{
		"name": "HUMUHUMUNUKUNUKUAPUA'A",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, edible orchid, maraschino cherry",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "LAUWILIWILINUKUNUKU'OI'OI",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, edible orchid, maraschino cherry",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "FOR PETE'S SAKE",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Hibiscus liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pisco"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, edible hibiscus flower, maraschino cherry",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "ARRACK PUNCH FOR TWO",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Batavia Arrack"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pot still lightly aged rum (overproof)"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Carbonated Chai Tea"
			}
		],
		"procedure": "Mix/whip shake, tiki bowl, lemon and lime slices",
		"glass": "tikibowl"
	},
	{
		"name": "EL DRAQUE",
		"ingredients": [
			{
				"measure": 5,
				"ingredient": "Mint leaves (muddled)"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pot Still Aged cachaca"
			}
		],
		"procedure": "Shake, coupe, lime wheel",
		"glass": "coupe"
	},
	{
		"name": "CALIBOGUS",
		"ingredients": [
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Molasses syrup"
			},
			{
				"measure": 1,
				"unit": "drop",
				"ingredient": "Spruce Beer Soda extract"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Zirbenz Stone Pine liqueur"
			},
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Blended Aged rum"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Mix/whip shake first 5 ingredients, Collins glass, cracked ice. Top with seltzer",
		"glass": "collins"
	},
	{
		"name": "MARY PICKFORD",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Grenadine"
			},
			{
				"measure": 6,
				"unit": "drops",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "DAIQUIRI NO. 1",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended Lightly Aged rum"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "HOTEL NACIONAL SPECIAL",
		"ingredients": [
			{
				"measure": 4,
				"ingredient": "(1-inch-square) pineapple chunks (muddled)"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "DAISY DE SANTIAGO",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1.5,
				"unit": "tsp",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			}
		],
		"procedure": "Shake, double old-fashioned glass, crushed ice, mint sprig",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "EL PRESIDENTE",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "tsp",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Dry vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended Lightly Aged rum"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "TWELVE MILE LIMIT",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended Lightly Aged rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Rye"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Brandy"
			}
		],
		"procedure": "Shake, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "PARISIAN BLONDE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Sweeted Heavy cream"
			}
		],
		"procedure": "Stir first two ingredients, coupe. Float the cream, grated cinnamon",
		"glass": "coupe"
	},
	{
		"name": "CORA MIDDLETON",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Egg white"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended Aged rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Raspberry Gum syrup"
			}
		],
		"procedure": "Double shake, coupe, Angostura bitters drops",
		"glass": "coupe"
	},
	{
		"name": "MILLIONAIRE COCKTAIL #1",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Black Pot Still rum or Blended Aged rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Sloe Gin"
			}
		],
		"procedure": "Shake, coupe, lime wheel",
		"glass": "coupe"
	},
	{
		"name": "BATIDA DE MARACUJA E COCO",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Passionfruit puree"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Coconut milk"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pot Still Aged cachaca"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Sweetened Condensed milk"
			}
		],
		"procedure": "Mix/whip shake, old fashioned glass, crushed ice, mint sprig",
		"glass": "oldfashioned"
	},
	{
		"name": "HIBISCUS RUM PUNCH",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Hibiscus liqueur"
			},
			{
				"measure": 0.33,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended aged rum (Jamaica)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake first 4 ingredients, Collins glass, cracked ice. Top with seltzer, edible hibiscus flower, lime wheel",
		"glass": "collins"
	},
	{
		"name": "BARBADOS RUM PUNCH",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended aged rum (Barbados)"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, footed pilsner, cracked ice, grated nutmeg",
		"glass": "pilsner"
	},
	{
		"name": "JAMAICAN MILK PUNCH",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Whole milk"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Heavy whipping cream"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Black Blended Jamaican rum"
			},
			{
				"measure": 6,
				"unit": "drops",
				"ingredient": "Vanilla extract"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, grated nutmeg.",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "CORN AND OIL",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended aged rum (Barbados)"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, old-fashioned glass, crushed ice",
		"glass": "oldfashioned"
	},
	{
		"name": "QUEEN'S PARK SWIZZLE",
		"ingredients": [
			{
				"measure": 4,
				"ingredient": "Mint leaves (muddled)"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Black blended rum"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Swizzle, Collins glass, crushed ice, mint sprig",
		"glass": "collins"
	},
	{
		"name": "THE CHADBURN",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Tawny port"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pear liqueur"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 6,
				"unit": "drops",
				"ingredient": "Bittermens Xocolatl (Chocolate) Mole bitters"
			}
		],
		"procedure": "Stir, coupe",
		"glass": "coupe"
	},
	{
		"name": "A WISH FOR GRACE",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "2:1 Simple syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pot still lightly aged rum (New England)"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Blandy's 5 Year Verdelho Madeira"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "ABRICOT VIEUX",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rhum agricole vieux"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, coupe, express orange peel",
		"glass": "coupe"
	},
	{
		"name": "PANIOLO OLD-FASHIONED",
		"ingredients": [
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Li Hing Mui syrup"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, old-fashioned glass, large cube, express orange peel, drop peel in",
		"glass": "oldfashioned"
	},
	{
		"name": "PORT ROYAL",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Jamaican Jerk syrup"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Wray & Nephew white overproof rum"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Hellfire tincture"
			}
		],
		"procedure": "Shake, coupe, five spread-out drops Hellfire tincture",
		"glass": "coupe"
	},
	{
		"name": "KINGSTON PALAKA",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.125,
				"unit": "tsp",
				"ingredient": "Li hing mui powder"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Drambuie"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended aged rum (Jamaica)"
			}
		],
		"procedure": "Shake, coupe, lemon peel",
		"glass": "coupe"
	},
	{
		"name": "DONN DAY AFTERNOON",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 4,
				"unit": "oz",
				"ingredient": "Stiegl-Radler"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rhum Agricole blanc"
			}
		],
		"procedure": "Stir, double old-fashioned glass, express grapefruit peel, drop peel in",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "BAIE DU GALION",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Drambuie"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rhum agricole blanc"
			}
		],
		"procedure": "Stir, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "AGRICOLE GUAVA COOLER",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Licor 43"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rhum agricole blanc"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bundaberg guava soda"
			}
		],
		"procedure": "Shake first 4 ingredients, Collins glass, cracked ice. Top with soda, mint sprig, cinnamon stick, lime wheel",
		"glass": "collins"
	},
	{
		"name": "RICHARD SEALEBACH",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "R. L. Seale 10 Year rum"
			},
			{
				"measure": 7,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 7,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": 4,
				"unit": "oz",
				"ingredient": "Champagne"
			}
		],
		"procedure": "Stir first 4 ingredients, champagne flute. Top with champagne, lemon twist",
		"glass": "champagne"
	},
	{
		"name": "COSA NOSTRA #2",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Amaro Averna"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended Lightly Aged rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Ginger ale"
			}
		],
		"procedure": "Stir first 4 ingredients, footed pilsner glass, cracked ice. Top with ginger ale, lemon twist",
		"glass": "pilsner"
	},
	{
		"name": "BOO LOO FOR TWO",
		"ingredients": [
			{
				"measure": 6,
				"ingredient": "(1-inch-square) chunks pineapple (muddled)"
			},
			{
				"measure": 2.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Column still aged rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Black blended rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Black blended overproof rum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Mix/whip shake, hollowed-out pineapple, crushed ice",
		"glass": "pineapple"
	},
	{
		"name": "CARIBENO",
		"ingredients": [
			{
				"measure": 4,
				"unit": "oz",
				"ingredient": "Coconut water"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Column Still Lightly Aged rum or London Dry Gin"
			}
		],
		"procedure": "Mix/whip shake, coconut shell, cracked ice",
		"glass": "coconut"
	},
	{
		"name": "MONK'S RESPITE",
		"ingredients": [
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Coconut water"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Broker's Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Mix/whip shake, coconut shell, crushed ice",
		"glass": "coconut"
	},
	{
		"name": "THE MASTADON",
		"ingredients": [
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Passionfruit puree"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Licor 43"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Mix/whip shake, hollowed-out pineapple, crushed ice",
		"glass": "pineapple"
	},
	{
		"name": "PINATA",
		"ingredients": [
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Domaine de Canton"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Black blended rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			}
		],
		"procedure": "Mix/whip shake, hollowed-out pineapple, crushed ice, freshly grated nutmeg",
		"glass": "pineapple"
	},
	{
		"name": "BUMBOAT",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Rye"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended Lightly Aged rum"
			},
			{
				"measure": 3,
				"unit": "drops",
				"ingredient": "Almond extract"
			},
			{
				"measure": 6,
				"unit": "drops",
				"ingredient": "Bittermens ‘Elemakule Tiki bitters"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Black Blended Overproof rum (float)"
			}
		],
		"procedure": "Mix/whip shake, hollowed-out pineapple, crushed ice. Float the overproof rum",
		"glass": "pineapple"
	},
	{
		"name": "PLANTER'S PUNCH",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Blended aged rum (Jamaica)"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, Collins glass, crushed ice, mint Sprig",
		"glass": "collins"
	},
	{
		"name": "MAI TAI",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Mai Tai syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			}
		],
		"procedure": "Shake, double old-fashioned glass, crushed ice, lime shell, mint sprig",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "DOCTOR FUNK",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Herbsaint"
			},
			{
				"measure": 2.25,
				"unit": "oz",
				"ingredient": "black Pot still unaged rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned, crushed ice, ti leaf or pineapple fronds",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "ZOMBIE",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Column still aged rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Black blended overproof rum"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Herbstura"
			}
		],
		"procedure": "Mix/whip shake, Collins glass, crushed ice, mint sprig",
		"glass": "collins"
	},
	{
		"name": "NAVY GROG",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pot still lightly aged (overproof) rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Column still aged rum"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, ice cone, mint sprig",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "SCORPION BOWL FOR TWO",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Brandy"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "London Dry Gin"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended Lightly Aged rum"
			}
		],
		"procedure": "Mix/whip shake, tiki bowl, cracked ice",
		"glass": "tikibowl"
	},
	{
		"name": "FOG CUTTER",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pisco"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended lightly Aged rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Oloroso sherry (float)"
			}
		],
		"procedure": "Mix/whip shake, Fog Cutter mug, crushed ice. Float sherry, mint sprig",
		"glass": null
	},
	{
		"name": "SINGAPORE SLING",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "London Dry Gin"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake first 7 ingredients, Collins glass, cracked ice. Top with seltzer, lemon wedge",
		"glass": "collins"
	},
	{
		"name": "HONDO HATTIE'S JUNGLE PUNCH!",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Blue curacao"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Tawny port"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Pear liqueur"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blended Aged rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, punch glass, cracked ice",
		"glass": "punch"
	},
	{
		"name": "KAHIKO PUNCH",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Passionfruit Honey"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Hibiscus liqueur"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pot still unaged rum"
			},
			{
				"measure": 6,
				"unit": "drops",
				"ingredient": "Bittermans ‘Elemakule Tiki bitters"
			}
		],
		"procedure": "Stir, punch glass, cracked ice, edible orchid",
		"glass": "punch"
	},
	{
		"name": "TRIUMVIRATE PUNCH",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Passionfruit Honey"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pot still unaged rum"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Grated nutmeg (pinch)"
			}
		],
		"procedure": "Stir, punch glass, cracked ice, mint sprig",
		"glass": "punch"
	},
	{
		"name": "EUREKA PUNCH",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Column still aged rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Ginger ale"
			}
		],
		"procedure": "Stir, punch glass, cracked ice, lemon twist, mint sprig",
		"glass": "punch"
	},
	{
		"name": "YULETIDAL WAVE",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pear liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Licor 43"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Brandy"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Column Still Aged rum"
			}
		],
		"procedure": "Stir, punch glass, cracked ice",
		"glass": "punch"
	},
	{
		"name": "RUMBUSTION PUNCH",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Herbstura"
			}
		],
		"procedure": "Stir, punch glass, cracked ice",
		"glass": "punch"
	},
	{
		"name": "PUKA PUNCH",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended aged rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended lightly aged rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Black blended rum"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Black blended overproof rum"
			}
		],
		"procedure": "Mix/whip shake first 10 ingredients, large brandy snifter, crushed ice. Float the overproof rum, mint sprig",
		"glass": "snifter"
	},
	{
		"name": "THE FOX HUNT",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pimm's"
			},
			{
				"measure": 0.5,
				"ingredient": "Tanqueray Gin"
			},
			{
				"measure": 0.75,
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Cynar (rinse)"
			}
		],
		"procedure": "Shake, coupe, 7 drops Peychaud's bitters",
		"glass": "coupe"
	},
	{
		"name": "BRIAR PATCH",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Blackberry cordial"
			}
		],
		"procedure": "Shake first 3 ingredients, Collins glass, crushed ice. Top with blackberry cordial, blackberry, lemon twist",
		"glass": "collins"
	},
	{
		"name": "BLACKBERRY CORDIAL",
		"ingredients": [
			{
				"measure": 1,
				"unit": "pint",
				"ingredient": "Blackberries (muddled)"
			},
			{
				"measure": 1,
				"unit": "cup",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 4,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Infuse for 1 hour, strain through a fine chinois or cheesecloth",
		"glass": null
	},
	{
		"name": "THE RIVIERA",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pineapple Infused Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"ingredient": "Egg White"
			}
		],
		"procedure": "Double shake, coupe, mint leaf, orange bitters drops",
		"glass": "coupe"
	},
	{
		"name": "PINEAPPLE INFUSED GIN",
		"ingredients": [
			{
				"measure": 1,
				"unit": "cup",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.5,
				"unit": "cup",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 0.25,
				"unit": "cup",
				"ingredient": "Campari"
			},
			{
				"measure": 1,
				"unit": "cup",
				"ingredient": "Pineapple cubes"
			}
		],
		"procedure": "Combine and let sit for 24 hours, strain through a fine chinois or cheesecloth",
		"glass": null
	},
	{
		"name": "BLUE RIDGE MANHATTAN",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rittenhouse Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Noilly Pratt Dry vermouth"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Peach bitters (rinse)"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Laphroig 10 Scotch(rinse)"
			}
		],
		"procedure": "Shake, rinsed coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "PART & PARCEL",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 5,
				"unit": "drops",
				"ingredient": "Grapefruit bitters"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "RANGOON FIZZ",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Tanqueray Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Ginger syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 9,
				"unit": "drops",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 5,
				"ingredient": "Mint sprigs"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Tonic water"
			}
		],
		"procedure": "Shake, Collins glass, cracked ice. Top with tonic water, mint Sprig",
		"glass": "collins"
	},
	{
		"name": "SAZERAC #1",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Old Overholdt Rye"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Peychauds bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Herbsaint (rinse)"
			}
		],
		"procedure": "Stir, rinsed old fashioned glass, big cube, lemon peel",
		"glass": "oldfashioned"
	},
	{
		"name": "CHI-TOWN FLIP",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Buffalo Trace bourbon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Tawny Port"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Heavy cream"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Licor 43"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"ingredient": "Whole Egg"
			}
		],
		"procedure": "Shake, Collins glass, grated nutmeg, 3 drops Fees Old Fashioned bitters",
		"glass": "collins"
	},
	{
		"name": "HUSH & WONDER",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Matusalem rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Grapefruit bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Creme de Violette (rinse)"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "LADY CLOVER",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Blackberry syrup"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			},
			{
				"measure": 7,
				"unit": "drops",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Double shake, Collins glass, cracked ice. Top with soda, 5 drops Angostura bitters",
		"glass": "collins"
	},
	{
		"name": "TAX THE DAISY",
		"ingredients": [
			{
				"measure": 1.75,
				"unit": "oz",
				"ingredient": "Bombay Dry Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Ramazotti Amaro"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 7,
				"unit": "drops",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 7,
				"unit": "drops",
				"ingredient": "Orange bitters"
			},
			{
				"measure": 1,
				"ingredient": "Orange peel"
			},
			{
				"measure": 1,
				"ingredient": "Lemon peel"
			}
		],
		"procedure": "Shake liquids and peels, coupe, 3 drops Angostura bitters",
		"glass": "coupe"
	},
	{
		"name": "ANGOSTURA FIZZ",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Ginger Ale"
			}
		],
		"procedure": "Double shake first 5 ingredients, Collins glass, cracked ice. Top with ginger ale, lemon Wheel",
		"glass": "collins"
	},
	{
		"name": "EYES WIDE",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bulleit Bourbon"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Raspberry syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Ginger syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.25,
				"ingredient": "Hibiscus syrup"
			}
		],
		"procedure": "Shake first 5 ingredients, Collins glass, cracked ice. Top with soda, float Hibiscus syrup, grapefruit peel",
		"glass": "collins"
	},
	{
		"name": "IRON CROSS",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pisco"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			},
			{
				"measure": 3,
				"unit": "drops",
				"ingredient": "Orange Flower water"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Lavender Grapefruit bitters"
			}
		],
		"procedure": "Dry shake, shake with ice for two minutes, coupe, 4 drops Angostura bitters",
		"glass": "coupe"
	},
	{
		"name": "SEEING TRACES",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lillet Blanc"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Ginger syrup"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			}
		],
		"procedure": "Double shake, coupe, 4 drops orange flower water",
		"glass": "coupe"
	},
	{
		"name": "DAISY 17",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Wild Turkey 101 whiskey"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, coupe, flamed orange twist (discarded)",
		"glass": "coupe"
	},
	{
		"name": "JAMAICAN JULEP",
		"ingredients": [
			{
				"measure": 4,
				"ingredient": "Mint leaves (lightly muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Smith and Cross Jamaican rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demarara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			}
		],
		"procedure": "Stir first 3 ingredients, julep cup, top with pineapple juice",
		"glass": "julep"
	},
	{
		"name": "SPEAKING IN TONGUES",
		"ingredients": [
			{
				"measure": 2,
				"ingredient": "Strawberries (muddled)"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Chichicapa Mezcal"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Luxardo Amaro"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, double strain, coupe",
		"glass": "coupe"
	},
	{
		"name": "THE VIOLET HOUR",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Buffalo Trace Bourbon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Noilly Prat or Vya dry vermouth"
			},
			{
				"measure": 0.5,
				"unit": "tsp",
				"ingredient": "Cruzan Black Strap rum"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "EEYORE'S REQUIEM",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Tanqueray Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dolin Blanc vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Fernet Branca"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, rocks glass, large cube, express orange oil, orange twist",
		"glass": "rocks"
	},
	{
		"name": "THE WARNING LABEL",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon Hart 151 Demerara rum "
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Punt e Mes"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Grapefruit bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Campari (rinse)"
			}
		],
		"procedure": "Stir, rinsed cocktail glass, lemon twist",
		"glass": "cocktail"
	},
	{
		"name": "A MOMENT OF SILENCE",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Rye"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Averna"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Lairds Apple brandy"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Campari (rinse)"
			}
		],
		"procedure": "Stir, rinsed rocks glass, orange twist",
		"glass": "rocks"
	},
	{
		"name": "VARIATION ON A THEME",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Hayman's Old Tom Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 0.5,
				"unit": "bspn",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, rocks glass, orange twist",
		"glass": "rocks"
	},
	{
		"name": "IMPROVED SCOTCH SLING",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "McClelland's Islay Single Malt scotch"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Sweet vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, rocks glass, lemon twist",
		"glass": "rocks"
	},
	{
		"name": "PIMM'S UP",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Bols Genever"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pimm's"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 7,
				"unit": "drops",
				"ingredient": "Celery bitters"
			}
		],
		"procedure": "Shake, coupe, two drops celery bitters",
		"glass": "coupe"
	},
	{
		"name": "GUNSHOP FIZZ",
		"ingredients": [
			{
				"measure": 2,
				"ingredient": "Strawberries (muddled)"
			},
			{
				"measure": 3,
				"ingredient": "Cucumber slices (muddled)"
			},
			{
				"measure": 3,
				"ingredient": "Grapefruit peels (muddled)"
			},
			{
				"measure": 3,
				"ingredient": "Orange peels (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Sanbitter"
			}
		],
		"procedure": "Shake first 7 ingredients, Collins glass, cracked ice. Top with Sanbitter, cucumber slice",
		"glass": "collins"
	},
	{
		"name": "WESTERN PASSAGE",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Batavia Arrack"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dolin Sweet vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dolin Dry vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, coupe, cherry, express orange peel",
		"glass": "coupe"
	},
	{
		"name": "PATENT PENDING",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Smith & Cross Rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Batavia Arrack"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Don's Mix"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Vanilla syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Amargo Peruvian bitters"
			}
		],
		"procedure": "Stir, double old fashioned glass, large cube, express grapefruit peel",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "BAMBOO",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Dolin Blanc vermouth"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lustau palo cortado sherry"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "OLD FRIEND",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Beefeater gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "St. Germain"
			}
		],
		"procedure": "Shake, coupe, lemon twist.",
		"glass": "coupe"
	},
	{
		"name": "GREEN TEA PUNCH",
		"ingredients": [
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Banks 5-Island rum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Brewed sencha tea"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Brewed mint tisane"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Stir, punch glass, cracked ice, grated nutmeg",
		"glass": "punch"
	},
	{
		"name": "MONTE CARLO",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Rittenhouse Rye"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, old-Fashioned glass, large cube. Express lemon peel, drop in",
		"glass": "oldfashioned"
	},
	{
		"name": "AUTUMN OLD-FASHIONED",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "George Dickel Rye"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Laird's Apple brandy"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Tariquet VSOP Bas-Armagnac"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Bank Note scotch"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Grade B maple syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Bittermens Xocolatl mole bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, old-Fashioned glass, large cube, express lemon and orange peel, drop in",
		"glass": "oldfashioned"
	},
	{
		"name": "THE FIELD MARSHALL",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Tariquet Classique VS Bas-Armagnac"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Royal Combier"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Champagne"
			}
		],
		"procedure": "Stir first 4 ingredients, Champagne flute. Top with Champagne, lemon twist",
		"glass": "champagne"
	},
	{
		"name": "SHERRY COBBLER",
		"ingredients": [
			{
				"measure": 3,
				"ingredient": "orange slices (muddled)"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 3.5,
				"unit": "oz",
				"ingredient": "Amontillado Sherry"
			}
		],
		"procedure": "Stir, Collins glass, crushed ice, orange wheel, mint sprig",
		"glass": "collins"
	},
	{
		"name": "TRACTION",
		"ingredients": [
			{
				"measure": 2,
				"ingredient": "Lemon wedges (muddled)"
			},
			{
				"measure": 1,
				"ingredient": "Strawberry (muddled)"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lustau Amontillado sherry"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Santa Teresa 1796 rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			}
		],
		"procedure": "Shake, double strain, old-Fashioned glass, crushed ice, strawberry, lemon wedge, mint sprig",
		"glass": "oldfashioned"
	},
	{
		"name": "SMOKE AND MIRRORS",
		"ingredients": [
			{
				"measure": 4,
				"ingredient": "Mint leaves (muddled)"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended scotch"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Laphroaig 10-year scotch"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Absinthe"
			}
		],
		"procedure": "Shake, double old-Fashioned glass, large cube, mint sprig",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "SMOKESCREEN",
		"ingredients": [
			{
				"measure": 4,
				"ingredient": "Mint leaves (muddled)"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended scotch"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Laphroaig 10-year scotch"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Shake, double old-Fashioned glass over, large cube, mint sprig",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "JACK FROST",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cabeza blanco tequila"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pear brandy"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "La Quintinye Vermouth Royal extra dry"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Creme de Menthe"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Swizzle, Collins glass, crushed ice, with the mint sprig, sage bouquet, dusting of powdered sugar",
		"glass": "collins"
	},
	{
		"name": "RATIONAL THOUGHT",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Paul Beau VSOP Cognac"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pear brandy"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Cinnamon syrup"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "MAIDEN'S BLUSH",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Raspberry Cordial"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pernod Absinthe"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Hayman's Old Tom Gin"
			}
		],
		"procedure": "Shake, punch glass",
		"glass": "punch"
	},
	{
		"name": "RASPBERRY CORDIAL",
		"ingredients": [
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Raspberries"
			},
			{
				"measure": 2,
				"unit": "cups",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Rosewater"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Everclear"
			}
		],
		"procedure": "Puree raspberries, mix in sugar syrup. Strain through a chinois or cheesecloth into a bottle. Add rose water and Everclear and shake",
		"glass": null
	},
	{
		"name": "DELICIOUS SOUR",
		"ingredients": [
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Eucalyptus Tincture"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pistachio Orgeat"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Laird's Apple brandy"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Peach liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Pernod Absinthe"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			}
		],
		"procedure": "Shake, punch glass, cracked ice, grated nutmeg.",
		"glass": "punch"
	},
	{
		"name": "WHISKEY COCKTAIL #2",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Old Overholt Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Royal Combier"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Orange bitters"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Pernod Absinthe"
			}
		],
		"procedure": "Stir, cocktail glass, express orange peel",
		"glass": "cocktail"
	},
	{
		"name": "BIJOU",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Tanqueray Gin"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Sweet vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Pernod Absinthe"
			}
		],
		"procedure": "Stir, cocktail glass, express orange peel",
		"glass": "cocktail"
	},
	{
		"name": "SUISSESSE #2",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Aquavit"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Creme de Cacao"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "La Clandestine Absinthe"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": 0.5,
				"ingredient": "Egg white"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Chilled water"
			}
		],
		"procedure": "Shake, cocktail glass, express lemon peel, grated nutmeg",
		"glass": "cocktail"
	},
	{
		"name": "FLOR DE JEREZ",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Appleton Estate Reserve rum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lustau amontillado sherry"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "CITY OF GOLD SLING",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Hayman's Old Tom Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "El Dorado 12-year rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Donn's Spices #2"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Vieux Pontarlier absinthe"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Shake, highball glass, cracked ice, pineapple wedge",
		"glass": "highball"
	},
	{
		"name": "PRETTY BIRD",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Bombay London Dry Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Rhum Clement Creole Shrub"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Cinnamon Bark syrup"
			}
		],
		"procedure": "Shake, double rocks glass, large cube, lime wheel, cherry flag",
		"glass": "rocks"
	},
	{
		"name": "BERMUDA DUNES",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "White rum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Gold rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			}
		],
		"procedure": "Shake, footed pilsner, crushed ice, mint sprig, lime wedge, cherry",
		"glass": "pilsner"
	},
	{
		"name": "HONI HONI",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shaken, old fashioned glass, crushed ice, mint sprig, lime wedge, cherry",
		"glass": "oldfashioned"
	},
	{
		"name": "MOJAVE PUNCH",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cruzan Silver Rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Black Blended rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Hibiscus syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orange juice"
			}
		],
		"procedure": "Shake, footed pilsner, crushed ice",
		"glass": "pilsner"
	},
	{
		"name": "DESERT ROSE",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Tanqueray Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Galliano"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Rose syrup"
			},
			{
				"measure": 2,
				"unit": "Dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, old fashioned glass, crushed ice, orange twist",
		"glass": "oldfashioned"
	},
	{
		"name": "THE HARD SELL",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Jeppson's Malort"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Beefeater Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, cocktail glass, express grapefruit peel",
		"glass": "cocktail"
	},
	{
		"name": "THE WARDLOW",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bulliet Rye"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Shake, coupe, 2 spritzes Absinthe",
		"glass": "coupe"
	},
	{
		"name": "FEAR AND LOATHING",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Marischino liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Blood Orange juice"
			}
		],
		"procedure": "Shake, highball glass, cracked ice, top with blood orange juice, blood orange wheel, mint sprig",
		"glass": "highball"
	},
	{
		"name": "SCOTTISH KISS",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Auchentoshan 12 yr scotch"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pimm's"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Domaine de Canton"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Brown Sugar syrup"
			}
		],
		"procedure": "Shake, coupe, raspberry",
		"glass": "coupe"
	},
	{
		"name": "MIDNIGHT BOTANIST",
		"ingredients": [
			{
				"measure": 3,
				"ingredient": "Blackberries (muddled)"
			},
			{
				"measure": 2,
				"ingredient": "Rosemary needles (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz.",
				"ingredient": "Botanist Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz.",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz.",
				"ingredient": "Simple syrup"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake, double strain, Collins glass, cracked ice. Top with seltzer, two blackberries, rosemary sprig",
		"glass": "collins"
	},
	{
		"name": "OAXACAN SMOKE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz.",
				"ingredient": "El Silencio Espladin Mezcal"
			},
			{
				"measure": 1,
				"unit": "oz.",
				"ingredient": "Aperol"
			},
			{
				"measure": 1,
				"unit": "oz.",
				"ingredient": "Vya Sweet vermouth"
			}
		],
		"procedure": "Stir, rocks glass, large cube, orange peel",
		"glass": "rocks"
	},
	{
		"name": "LINCOLN COUNTY REVIVAL",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Dickel No. 12 whiskey"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Peach liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Maple syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Absinthe"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "STARBOARD LIGHT",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pigs Nose blended scotch"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 2,
				"unit": "bspn",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			}
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice, pineapple wedge, mint sprig",
		"glass": "tiki"
	},
	{
		"name": "RAIL CAR",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Four Roses bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Verjus Rouge"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Maple syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "FATHER'S ADVICE",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Bacardi 8 rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cardamaro amaro"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Punt e Mes"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lustau Amontillado"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			}
		],
		"procedure": "Shake, coupe, orange peel, cherry",
		"glass": "coupe"
	},
	{
		"name": "PARLIAMENT PUNCH",
		"ingredients": [
			{
				"measure": 1.5,
				"ingredient": "Flor de Cana rum"
			},
			{
				"measure": 0.25,
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.5,
				"ingredient": "Creme de Mure"
			},
			{
				"measure": 0.5,
				"ingredient": "Coconut cream"
			},
			{
				"measure": 0.5,
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"ingredient": "Orange juice"
			}
		],
		"procedure": "Shake, Collins glass, crushed ice, frozen raspberries, edible orchid",
		"glass": "collins"
	},
	{
		"name": "BRIDGETOWN",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Mt. Gay Black Barrel rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Dolin Rouge vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Creme de Cacao"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, Collins glass, crushed ice",
		"glass": "collins"
	},
	{
		"name": "KINGSTON CLUB",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Drambuie"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Fernet Branca"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake, Collins glass, cracked ice. Top with seltzer, orange twist",
		"glass": "collins"
	},
	{
		"name": "NORWEGIAN WOOD",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Aquavit"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Laird's Apple brandy"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Sweet vermouth"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "AUTUMN LEAVES",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Wild Turkey Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Laird's Apple brandy"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Strega"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Cinnamon tincture"
			}
		],
		"procedure": "Stir, old fashioned glass, cracked ice, orange peel",
		"glass": "oldfashioned"
	},
	{
		"name": "PEGU CLUB",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cointreau"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, cocktail glass, lime wheel",
		"glass": "cocktail"
	},
	{
		"name": "ANDALUSIAN BUCK",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Amontillado sherry"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Ginger beer"
			}
		],
		"procedure": "Shake first 4 ingredients, Collins glass, cracked ice. Top with ginger beer, lime wheel",
		"glass": "collins"
	},
	{
		"name": "PRESTON-BAKER",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Beefeater Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Clement Premiere Canne Rhum Agricole"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Dolin Blanc vermouth"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, cocktail glass, lemon twist",
		"glass": "cocktail"
	},
	{
		"name": "WORTHY ADVERSARY",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Clement Premiere Canne Rhum Agricole"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Elijah Craig Bourbon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cocchi Americano"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, tiki mug, crushed ice, orange slice, mint sprig, pinch of curry powder",
		"glass": "tiki"
	},
	{
		"name": "ITALIAN JOB",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Smith & Cross Rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cocchi Americano"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Byrrh Grand Quinquina"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, cocktail glass, express orange peel, dehydrated orange wheel",
		"glass": "cocktail"
	},
	{
		"name": "THE COUNT RIDES AGAIN",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "White Overproof Rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Batavia Arrack"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "151 Overproof Demerara rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Don's Mix"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Grenadine"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 6,
				"unit": "drops",
				"ingredient": "Absinthe"
			}
		],
		"procedure": "Stir, rocks glass, cracked ice, grapefruit twist",
		"glass": "rocks"
	},
	{
		"name": "X MARKS THE SPOT",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Appleton Estate White Rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Domaine de Canton"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1,
				"unit": "bspn",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 1,
				"ingredient": "Egg White"
			}
		],
		"procedure": "Double shake, cocktail glass, float star anise pod",
		"glass": "cocktail"
	},
	{
		"name": "MANHATTAN PROJECT",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Gold of Mauritius Dark rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "PX Sherry"
			},
			{
				"measure": 0.125,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 0.125,
				"unit": "oz",
				"ingredient": "Montenegro Amaro"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Lemon bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Amargo Peruvian bitters"
			}
		],
		"procedure": "Stir, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "CALM",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Anejo Tequila"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amontillado Sherry"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Chamomile syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Amargo Peruvian bitters"
			}
		],
		"procedure": "Stir, rocks glass, large cube, lemon peel, chamomile flowers",
		"glass": "rocks"
	},
	{
		"name": "TALL TALE",
		"ingredients": [
			{
				"measure": 3,
				"ingredient": "Cucumber wheels (muddled)"
			},
			{
				"measure": 2,
				"ingredient": "Blackberries (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Blanco Tequila"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Agave syrup"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Ginger beer"
			}
		],
		"procedure": "Shake first 5 ingredients, Collins glass, cracked ice. Top with ginger beer, cucumber wheel",
		"glass": "collins"
	},
	{
		"name": "NICHOL PUNCH",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Inca Gold Pisco"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Amargo Peruvian bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, cocktail glass",
		"glass": "cocktail"
	},
	{
		"name": "SWEET HEREAFTER",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Encanto Pisco"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cocchi Americano"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dolin Blanc vermouth"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "St. Germain"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Grapefruit bitters"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			}
		],
		"procedure": "Stir, coupe, express grapefruit peel",
		"glass": "coupe"
	},
	{
		"name": "MOONSHAKE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Grapefruit bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Vanilla extract"
			},
			{
				"measure": 1,
				"ingredient": "Egg White"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Double shake first 7 ingredients, highball glass. Top with seltzer, mint sprig, express grapefruit peel",
		"glass": "highball"
	},
	{
		"name": "GOLDEN EYE",
		"ingredients": [
			{
				"measure": 5,
				"ingredient": "Rosemary leaves (muddled)"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Grand Marnier"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Lambrusco wine"
			}
		],
		"procedure": "Shake first 4 ingredients, cocktail glass. Top with Lambrusco, rosemary sprig",
		"glass": "cocktail"
	},
	{
		"name": "SANTIAGO PUNCH",
		"ingredients": [
			{
				"measure": 3,
				"ingredient": "Thai basil leaves (muddled)"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Barsol Pisco"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple shrub"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Tiki bitters"
			}
		],
		"procedure": "Shake, double strain, rocks glass, big cube, Thai basil sprig",
		"glass": "rocks"
	},
	{
		"name": "MONKEY FLIP",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Monkey Shoulder Blended scotch"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Maple syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Bittermens Xocolatl mole bitters"
			},
			{
				"measure": 1,
				"ingredient": "Whole egg"
			}
		],
		"procedure": "Double shake, double strain, cocktail glass, grated cinnamon, dehydrated banana chip",
		"glass": "cocktail"
	},
	{
		"name": "VAGABOND",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Montelebos Mezcal"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			}
		],
		"procedure": "Shake, cocktail glass",
		"glass": "cocktail"
	},
	{
		"name": "THROUGH THE LOOKING GLASS",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Novo Fogo Calibri Cachaca"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Domaine de Canton"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Port (float)"
			}
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice. Float Port, dehydrated lemon wheel",
		"glass": "tiki"
	},
	{
		"name": "CARTHUSIAN STAR",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "White rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			}
		],
		"procedure": "Shake, coupe glass",
		"glass": "coupe"
	},
	{
		"name": "WITCH DOCTOR",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cognac"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Sweet vermouth"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Grapefruit bitters"
			}
		],
		"procedure": "Stir, sage leaf-smoked rocks glass, large cube, express grapefruit peel",
		"glass": "rocks"
	},
	{
		"name": "LEVIATHAN",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Aged Puerto Rican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Tiki bitters (float)"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Grapefruit bitters (float)"
			}
		],
		"procedure": "Swizzle, tiki mug, crushed ice. Float bitters, edible orchid",
		"glass": "tiki"
	},
	{
		"name": "SILK ROAD SOUR",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "London Dry Gin"
			},
			{
				"measure": 2,
				"unit": "tsp",
				"ingredient": "Benedictine"
			},
			{
				"measure": 2,
				"unit": "tsp",
				"ingredient": "Apricot Liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, coupe glass, grapefruit twist",
		"glass": "coupe"
	},
	{
		"name": "CHICAGO TYPEWRITER",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Bols Genever"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Punt e Mes"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, coupe glass, express lemon peel",
		"glass": "coupe"
	},
	{
		"name": "STRAW DOG",
		"ingredients": [
			{
				"measure": 1,
				"ingredient": "Strawberry (muddled)"
			},
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Blended scotch"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Laphroaig 10 Year scotch"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dolin Blanc vermouth"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Grapefruit bitters"
			}
		],
		"procedure": "Shake, double strain, coupe glass, strawberry",
		"glass": "coupe"
	},
	{
		"name": "ABSENT STARS",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Rhum Agricole Blanc"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 5,
				"unit": "drops",
				"ingredient": "Saline solution"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Grapefruit bitters"
			}
		],
		"procedure": "Shake, cocktail glass, orange twist",
		"glass": "cocktail"
	},
	{
		"name": "TRANSATLANTIC ORBIT",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Batavia Arrack"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Navy Strength Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Tiki bitters"
			}
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice, lime shell, mint sprig",
		"glass": "tiki"
	},
	{
		"name": "DOPPELGANGER",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Bols Genever"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Rhum Agricole"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, cocktail glass, mint sprig",
		"glass": "cocktail"
	},
	{
		"name": "WINCHESTER",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Tanqueray London Dry Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Hayman's Old Tom Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Martin Miller's Westbourne Strength Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Ginger syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice, mint sprig",
		"glass": "tiki"
	},
	{
		"name": "LIGHTNING SWORDS OF DEATH",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Jeppson's Malort"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Smith & Cross rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Swizzle, tiki mug, crushed ice, mint sprig",
		"glass": "tiki"
	},
	{
		"name": "ELIXIR ALPESTRE",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bols Genever"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Becherovka"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			},
			{
				"measure": 6,
				"unit": "drops",
				"ingredient": "Absinthe"
			}
		],
		"procedure": "Stir, coupe glass, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "BEACHCOMBER'S PUNCH",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Demerara rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 6,
				"unit": "drops",
				"ingredient": "Absinthe"
			}
		],
		"procedure": "Mix/whip shake, champagne flute, crushed ice, mint sprig",
		"glass": "champagne"
	},
	{
		"name": "GOLD CUP",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Gold Jamaican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Absinthe"
			},
			{
				"measure": 3,
				"unit": "drops",
				"ingredient": "Almond extract"
			}
		],
		"procedure": "Shake, coupe glass",
		"glass": "coupe"
	},
	{
		"name": "HAWAIIAN ROOM",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Light Puerto Rican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Laird's Apple Brandy"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			}
		],
		"procedure": "Shake, cocktail glass",
		"glass": "cocktail"
	},
	{
		"name": "PLANET OF THE APES",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dark Jamaican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amber 151-proof rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orange juice"
			}
		],
		"procedure": "Mix/whip shake, Collins glass, crushed ice, banana slice, cocktail cherry, edible orchid",
		"glass": "collins"
	},
	{
		"name": "RUM RUNNER",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "151-proof Caribbean rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blackberry liqueur"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grenadine"
			}
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice",
		"glass": "tiki"
	},
	{
		"name": "KRAKATOA",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Gold Puerto Rican rum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Demerara rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Coffee liqueur"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Apricot nectar"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Kona coffee (float)"
			}
		],
		"procedure": "Mix/whip shake large brandy snifter, crushed ice. Float coffee",
		"glass": "snifter"
	},
	{
		"name": "TORTUGA",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon Hart 151-proof Demerara rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "151-proof Bacardi rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Italian vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "White Creme de cacao"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Grenadine"
			}
		],
		"procedure": "Shake, footed pilsner, crushed ice, lime wedge",
		"glass": "pilsner"
	},
	{
		"name": "NEVER SAY DIE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Gold Barbados rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Light Puerto Rican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dark Jamaican rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, wine glass, crushed ice",
		"glass": "wine"
	},
	{
		"name": "PAINKILLER",
		"ingredients": [
			{
				"measure": 2.5,
				"unit": "oz",
				"ingredient": "Pusser’s Navy Rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Coconut cream"
			},
			{
				"measure": 4,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Ground cinnamon (dusting)"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Ground nutmeg (dusting)"
			}
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice. Dust with cinnamon and nutmeg, pineapple stick, cinnamon stick, orange wheel",
		"glass": "tiki"
	},
	{
		"name": "Q.B. COOLER",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Gold Jamaican rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Light Puerto Rican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.5,
				"unit": "tsp",
				"ingredient": "Ginger syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, multiple mint sprigs",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "BLACKBEARD'S GHOST",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Light Virgin Islands rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, orange slice, cocktail cherry",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "ANCIENT MARINER",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Demerara rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dark Jamaican rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, mint sprig, lime wedge",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "BEACHBUM'S OWN",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Demerara rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dark Jamaican rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, mint sprig, lime wedge",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "COCOANUT GROVE COOLER",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blended scotch"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 3,
				"unit": "tsp",
				"ingredient": "Passionfruit puree"
			},
			{
				"measure": 3,
				"unit": "tsp",
				"ingredient": "Grenadine"
			},
			{
				"measure": 0.5,
				"unit": "tsp",
				"ingredient": "Orgeat"
			}
		],
		"procedure": "Mix/whip shake, Collins glass, crushed ice, orange slice, cocktail cherry, mint sprig",
		"glass": "collins"
	},
	{
		"name": "FU MANCHU",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Light rum"
			},
			{
				"measure": 1.5,
				"unit": "tsp",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Green Creme de menthe"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, old-fashioned glass, lime wedge, cocktail cherry",
		"glass": "oldfashioned"
	},
	{
		"name": "GOLDEN DREAM",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Galliano"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cointreau"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Heavy Cream"
			}
		],
		"procedure": "Shake, cocktail glass",
		"glass": "cocktail"
	},
	{
		"name": "GOLDEN WAVE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Light Puerto Rican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Mix/whip shake, old-fashioned glass, crushed ice, pineapple stick, edible orchid",
		"glass": "oldfashioned"
	},
	{
		"name": "JAGUAR",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Dark Jamaican rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cognac"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Sloe gin"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Cointreau"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Creme de cacao"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Port wine"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Italian vermouth"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Champagne"
			}
		],
		"procedure": "Stir first 10 ingredients, Collins glass, crushed ice. Top with champagne, pineapple stick, cocktail cherry",
		"glass": "collins"
	},
	{
		"name": "SCHOONER",
		"ingredients": [
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Light Puerto Rican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "151-proof Caribbean rum"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Port wine"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Papaya nectar"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "PARADISE COOLER",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "White rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Shake, Collins glass, crushed ice, cocktail cherry, apple wedge, mint sprig",
		"glass": "collins"
	},
	{
		"name": "KAVA BOWL FOR TWO",
		"ingredients": [
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Light Puerto Rican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Rhum Barbancourt"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			}
		],
		"procedure": "Mix/whip shake, tiki bowl, cracked ice, gardenia",
		"glass": "tikibowl"
	},
	{
		"name": "RUM KEG FOR TWO",
		"ingredients": [
			{
				"measure": 2.5,
				"unit": "oz",
				"ingredient": "Light Puerto Rican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dark Jamaican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Mix/whip shake, tiki bowl, cracked ice",
		"glass": "tikibowl"
	},
	{
		"name": "OAHU GIN SLING",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Creme de cassis"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake first 5 ingredients, footed pilsner, crushed ice. Top with seltzer, stir, lime spiral",
		"glass": "pilsner"
	},
	{
		"name": "PAGO PAGO",
		"ingredients": [
			{
				"measure": 3,
				"ingredient": "Pineapple chunks (muddled)"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Gold Puerto Rican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "White Creme de cacao"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Shake, cocktail glass",
		"glass": "cocktail"
	},
	{
		"name": "RUM BARREL",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Dark Jamaican rum"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "White Puerto Rican rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Passionfruit syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 6,
				"unit": "drops",
				"ingredient": "Absinthe"
			},
			{
				"measure": 3,
				"unit": "drops",
				"ingredient": "almond extract"
			}
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, orange peel",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "SUNDOWNER",
		"ingredients": [
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Cognac"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Galliano"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cointreau"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Shake, old-fashioned glass, crushed ice, lime wheel",
		"glass": "oldfashioned"
	},
	{
		"name": "MOLOKAI MULE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Demerara rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Light Puerto Rican rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cognac"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Shake, double old-fashioned glass, crushed ice, pineapple stick, mint sprig, edible orchid",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "TAHITIAN RUM PUNCH",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Gold Jamaican rum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Light Puerto Rican rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dry white wine"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 2,
				"unit": "drops",
				"ingredient": "Vanilla extract"
			}
		],
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, mint sprig",
		"glass": "pilsner"
	},
	{
		"name": "YELLOW SUBMARINE",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Gold Virgin Islands rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "White Creme de cacao"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, Collins glass, cracked ice, pineapple chunk, cocktail cherry",
		"glass": "collins"
	},
	{
		"name": "ARIKI MAU",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bacardi 8 rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cruzan Single Barrel Estate rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Barenjager"
			},
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Black tea"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Yerba mate"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orange juice"
			}
		],
		"procedure": "Shake, large tiki mug, crushed ice, express orange peel, orange wheel",
		"glass": "tiki"
	},
	{
		"name": "BEACHBUM",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Flor de Cana white rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Gold Barbados rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Shake, rocks glass, cracked ice, cocktail cherry, orange slice",
		"glass": "rocks"
	},
	{
		"name": "CUSCO FIZZ",
		"ingredients": [
			{
				"measure": 5,
				"ingredient": "Green grapes (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pisco"
			},
			{
				"measure": 1,
				"unit": "oz.",
				"ingredient": "St-Germain"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake first 4 ingredients, old-fashioned glass, cracked ice. Top with seltzer",
		"glass": "oldfashioned"
	},
	{
		"name": "FAREWELL FLIP",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "El Dorado 12-year Demerara rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Heavy cream"
			},
			{
				"measure": 0.75,
				"unit": "tsp",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 0.75,
				"unit": "tsp",
				"ingredient": "Vanilla extract"
			},
			{
				"measure": 1,
				"ingredient": "Whole Egg"
			}
		],
		"procedure": "Shake, old-fashioned glass, grated nutmeg, chocolate flakes",
		"glass": "oldfashioned"
	},
	{
		"name": "GANTT'S TOMB",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Gosling’s Black Seal rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Rittenhouse 100-proof rye"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "El Dorado 151-proof rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, footed pilsner, crushed ice, mint sprig",
		"glass": "pilsner"
	},
	{
		"name": "KIWI'S NEST GROG",
		"ingredients": [
			{
				"measure": 1,
				"ingredient": "Whole Lemon (muddled)"
			},
			{
				"measure": 1,
				"ingredient": "Half Kiwi fruit (muddled)"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Amber Martinique rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Light Virgin Islands rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dark Jamaican rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice dram"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, double strain, Collins glass, crushed ice, kiwi fruit wheel",
		"glass": "collins"
	},
	{
		"name": "KERALA",
		"ingredients": [
			{
				"measure": 2,
				"ingredient": "Green Cardamom pods (muddled)"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Scarlet Ibis rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Buffalo Trace bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Peychaud’s bitters"
			}
		],
		"procedure": "Shake, double strain, coupe glass",
		"glass": "coupe"
	},
	{
		"name": "RUMSCULLION",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "El Dorado 12-year rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Punt e Mes"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 8,
				"unit": "drops",
				"ingredient": "Absinthe"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, cocktail glass, express orange peel, orange twist",
		"glass": "cocktail"
	},
	{
		"name": "VAVA VOOM",
		"ingredients": [
			{
				"measure": 1.75,
				"unit": "oz",
				"ingredient": "Brugal Añejo rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "White Crème de cacao"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Fee’s Old Fashion bitters"
			}
		],
		"procedure": "Shake, coupe glass, lime wedge",
		"glass": "coupe"
	},
	{
		"name": "VOYAGER",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Light Puerto Rican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, old-fashioned glass, cracked ice, lime wedge",
		"glass": "oldfashioned"
	},
	{
		"name": "ROAD TO MANHATTAN",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Angostura 1824 rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Amaro di Angostura"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Domaine de Canton"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, rocks glass, large cube",
		"glass": "rocks"
	},
	{
		"name": "T & T SOUR",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Amaro di Angostura"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Maple syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			}
		],
		"procedure": "Double shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "FLYING ELVIS",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Privateer Navy Yard rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amaro di Angostura"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			}
		],
		"procedure": "Double shake, old-fashioned glass, 3 drops Angostura bitters ",
		"glass": "oldfashioned"
	},
	{
		"name": "BOMBAY GOVERNMENT PUNCH",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Batavia Arrack"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cognac"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 2.5,
				"unit": "oz",
				"ingredient": "Green tea"
			}
		],
		"procedure": "Stir, double old-fashioned glass, cracked ice, grated nutmeg",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "OLD TIMER",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Punt e Mes"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake first 6 ingredients, Collins glass, cracked ice. Top with seltzer, orange twist",
		"glass": "collins"
	},
	{
		"name": "NORTH SEA OIL",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Aquavit"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cocchi Americano"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Laphroaig 10 Year scotch"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cointreau"
			}
		],
		"procedure": "Stir, double old-fashioned glass, large cube, grapefruit twist",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "NATIONAL TREASURE",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Wild Turkey Rye"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Laird's Bonded Apple Brandy"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cynar"
			}
		],
		"procedure": "Stir, rocks glass, large cube, lemon twist",
		"glass": "rocks"
	},
	{
		"name": "LAHAINA NOON",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Plantation OFTD Rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Mix/whip shake, tiki mug , crushed ice, mint sprig",
		"glass": "tiki"
	},
	{
		"name": "CHAOS CALMER",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cointreau"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Grenadine"
			}
		],
		"procedure": "Shake, double old-fashioned glass, orange wheel",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "HERMOSA BEACH",
		"ingredients": [
			{
				"measure": 1,
				"ingredient": "basil leaf (lightly muddled)"
			},
			{
				"measure": 4,
				"ingredient": "strawberry chunks (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Reposado tequila"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			}
		],
		"procedure": "Shake, rocks glass, large cube, basil leaf",
		"glass": "rocks"
	},
	{
		"name": "LIFE IS BEAUTIFUL",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Templeton Rye"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			}
		],
		"procedure": "Shake, cocktail glass, two cherries",
		"glass": "cocktail"
	},
	{
		"name": "PERFECT AMARETTO SOUR",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Amaretto"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Cask-proof bourbon"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Egg white"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Double shake, old fashioned glass, cracked ice, lemon peel, brandied cherry",
		"glass": "oldfashioned"
	},
	{
		"name": "TARUS THE BULL",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Bulleit Rye"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Blood orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Fernet Branca"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir first four ingredients, cocktail glass. Top with bitters, lemon twist",
		"glass": "cocktail"
	},
	{
		"name": "ALAMAGOOZLUM",
		"ingredients": [
			{
				"measure": 0.5,
				"ingredient": "Egg white"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Genever"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Water"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Jamaican rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Yellow or Green Chartreuse"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Gomme syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake vigorously, large cocktail glass",
		"glass": "cocktail"
	},
	{
		"name": "DROVE MY CHEVY TO THE LEVEE",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Redemption Rye"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Peach juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Brown simple syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			}
		],
		"procedure": "Stir, old-fashioned glass, cracked ice, sliced peaches",
		"glass": "oldfashioned"
	},
	{
		"name": "THE AVENUE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Calvados"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Passion fruit puree"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Grenadine"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange flower water"
			}
		],
		"procedure": "Shake, cocktail glass, edible carnation",
		"glass": "cocktail"
	},
	{
		"name": "BARNUM WAS RIGHT",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, cocktail glass, lemon twist",
		"glass": "cocktail"
	},
	{
		"name": "CHATHAM HOTEL SPECIAL",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Brandy"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Ruby port"
			},
			{
				"measure": 0.5,
				"ingredient": "Heavy cream"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Dark Creme de cacao"
			}
		],
		"procedure": "Shake, cocktail glass",
		"glass": "cocktail"
	},
	{
		"name": "THE COMMUNIST",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Shake, cocktail glass",
		"glass": "cocktail"
	},
	{
		"name": "THE CORPSE REVIVER #2",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cointreau"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lillet Blanc"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "drops",
				"ingredient": "Absinthe"
			}
		],
		"procedure": "Shake, coupe, cherry",
		"glass": "coupe"
	},
	{
		"name": "CRIMEAN CUP A LA MARMORA",
		"ingredients": [
			{
				"measure": 1,
				"ingredient": "Lemon peel slice (muddled)"
			},
			{
				"measure": 0.5,
				"unit": "tsp",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Dark Jamaican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Brandy"
			},
			{
				"measure": 0.25,
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Jamaican rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.25,
				"ingredient": "Lemon juice"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Seltzer"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Champagne"
			}
		],
		"procedure": "Stir first 9 ingredients, large cocktail glass, large cubes. Top with champagne",
		"glass": "cocktail"
	},
	{
		"name": "THE DERBY",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Sweet vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Shake, cocktail glass, mint leaf",
		"glass": "cocktail"
	},
	{
		"name": "EAST INDIA COCKTAIL",
		"ingredients": [
			{
				"measure": 3,
				"unit": "oz",
				"ingredient": "Brandy"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Raspberry syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Maraschino liqueur"
			}
		],
		"procedure": "Shake, cocktail glass, cherry",
		"glass": "cocktail"
	},
	{
		"name": "THE FORD COCKTAIL",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Hayman's Old Tom Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dry vermouth"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Benedictine"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, martini glass, orange twist",
		"glass": "martini"
	},
	{
		"name": "GEORGIA MINT JULEP",
		"ingredients": [
			{
				"measure": 4,
				"ingredient": "Mint leaves (muddled)"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Sugar"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Water"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Cognac"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Peach brandy"
			}
		],
		"procedure": "Stir, julep cup, crushed ice, several mint sprigs",
		"glass": "julep"
	},
	{
		"name": "GOLDEN DAWN",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Calvados"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Grenadine (float)"
			}
		],
		"procedure": "Shake, cocktail glass, cherry",
		"glass": "cocktail"
	},
	{
		"name": "INCOME TAX",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Dry vermouth"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Sweet vermouth"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, cocktail glass, orange wheel",
		"glass": "cocktail"
	},
	{
		"name": "THE JAPALAC COCKTAIL",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Dry vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Raspberry syrup"
			}
		],
		"procedure": "Shake, cocktail glass, orange twist",
		"glass": "cocktail"
	},
	{
		"name": "JASPER'S RUM PUNCH",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Wray & Nephew White Overproof rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 0.125,
				"unit": "tsp",
				"ingredient": "Grated nutmeg"
			}
		],
		"procedure": "Stir, Collins glass, cracked ice, cherry",
		"glass": "collins"
	},
	{
		"name": "LUCIEN GAUDIN",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cointreau"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry vermouth"
			}
		],
		"procedure": "Stir, cocktail glass, orange twist",
		"glass": "cocktail"
	},
	{
		"name": "PARK AVENUE",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Sweet vermouth"
			},
			{
				"measure": 2,
				"unit": "tbsp",
				"ingredient": "Dry Curacao"
			}
		],
		"procedure": "Shake, cocktail glass",
		"glass": "cocktail"
	},
	{
		"name": "PEGU CLUB",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cointreau"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "THE PENDENNIS",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "3/4 oz Lime juice"
			}
		],
		"procedure": "Shake, cocktail glass",
		"glass": "cocktail"
	},
	{
		"name": "THE SECRET COCKTAIL",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Plymouth Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Laird's Bonded Apple Brandy"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Grenadine"
			}
		],
		"procedure": "Double shake, Double strain, rocks glass, large cube, three brandied cherries",
		"glass": "rocks"
	},
	{
		"name": "SAINT CROIX RUM FIX",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Cruzan Estate Dark rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple syrup"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 2,
				"unit": "tsp",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Stir, wine glass, crushed ice, seasonal fruit",
		"glass": "wine"
	},
	{
		"name": "SEELBACH",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Old Forester bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cointreau"
			},
			{
				"measure": 7,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 7,
				"unit": "dash",
				"ingredient": "Peychaud's bitters"
			},
			{
				"measure": 5,
				"unit": "oz",
				"ingredient": "Champagne"
			}
		],
		"procedure": "Stir first 4 ingredients, champagne flute. Top with champagne, orange twist",
		"glass": "champagne"
	},
	{
		"name": "THE SOOTHER",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cognac"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Coruba Jamaican rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Apple juice"
			},
			{
				"measure": 0.5,
				"unit": "tsp",
				"ingredient": "Simple syrup"
			}
		],
		"procedure": "Shake, goblet, lemon twist",
		"glass": "goblet"
	},
	{
		"name": "THE STRAITS SLING",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Kirschwasser"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Benedictine"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake first 6 ingredients, champagne flute. Top with seltzer, cherry, orange wheel, lemon twist",
		"glass": "champagne"
	},
	{
		"name": "WILD IRISH ROSE",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Connemara Peated Single Malt Irish whiskey"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Laird's Bonded Applejack"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pama Pomegranate Liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Bittermens Burlesque bitters"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Absinthe"
			},
			{
				"measure": 1,
				"ingredient": "Egg white"
			}
		],
		"procedure": "Shake, punch glass",
		"glass": "punch"
	},
	{
		"name": "FLAMENCO",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Lustau Amontillado sherry"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Bols Genever"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "PHILADELPHIA FISH HOUSE PUNCH FOR TWO",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 2.5,
				"unit": "oz",
				"ingredient": "Sugar"
			},
			{
				"measure": 5,
				"unit": "oz",
				"ingredient": "Water"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Peach brandy"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cognac"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Jamaican rum"
			}
		],
		"procedure": "Stir, punch glass",
		"glass": "punch"
	},
	{
		"name": "DON'T TREAD ON ME",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "London Dry Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Thyme-infused Honey syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pear liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Shake, coupe, thyme sprig",
		"glass": "coupe"
	},
	{
		"name": "ARCHIPELAGO",
		"ingredients": [
			{
				"measure": 2.5,
				"unit": "oz",
				"ingredient": "Batavia Arrack"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Calvados"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pear liqueur"
			},
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Ginger syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Mix/whip shake, tiki mug, cracked ice, lemon peel, mint sprig",
		"glass": "tiki"
	},
	{
		"name": "LINGUA FRANCA",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pisco"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Wray & Nephew rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pear liqueur"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake first 7 ingredients, Collins glass, cracked ice. Top with seltzer, mint sprig, lemon twist",
		"glass": "collins"
	},
	{
		"name": "BIRD ON A WIRE",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Buffalo Trace Bourbon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pear liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 9,
				"unit": "drops",
				"ingredient": "Fee Brothers Old Fashion Bitters"
			}
		],
		"procedure": "Shake, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "STEEPLECHASE",
		"ingredients": [
			{
				"measure": 3,
				"ingredient": "Mint leaves (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Blackberry liqueur"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Shake, rocks glass, mint sprig",
		"glass": "rocks"
	},
	{
		"name": "GOLDEN SWIZZLE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "El Dorado 8 Year rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Pineapple syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Fee Brothers Barrel-Aged bitters"
			}
		],
		"procedure": "Swizzle, Collins glass, crushed ice, pineapple slice, mint sprig",
		"glass": "collins"
	},
	{
		"name": "ISLAND BATIDA",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Rhum Barbancourt 3 Star rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Condensed milk"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			}
		],
		"procedure": "Shake, Collins glass, crushed ice, pineapple wedge, grated nutmeg",
		"glass": "collins"
	},
	{
		"name": "PARTRIDGE IN A PEAR TREE",
		"ingredients": [
			{
				"measure": 2,
				"ingredient": "Green apple slices (muddled)"
			},
			{
				"measure": 2,
				"ingredient": "Bosc pear slices (muddled)"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pear liqueur"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "lemon juice"
			}
		],
		"procedure": "Shake, coupe, rosemary sprig",
		"glass": "coupe"
	},
	{
		"name": "MOUNT MAKANA",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Pot Still Black rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pot Still Gold rum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Fernet Branca"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Coffee liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			}
		],
		"procedure": "Shake, tiki mug, crushed ice, mint sprig",
		"glass": "tiki"
	},
	{
		"name": "GHOST IN THE GRAVEYARD",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cocchi Americano"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Shake, old-fashioned glass, cracked ice, mint sprig",
		"glass": "oldfashioned"
	},
	{
		"name": "SCARECROW",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Four Roses Bourbon"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Fernet Branca"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, coupe, express orange peel",
		"glass": "coupe"
	},
	{
		"name": "BATTLE OF TRAFALGAR",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pimm's No. 1"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Batavia Arrack"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			}
		],
		"procedure": "Shake, rocks glass, express orange peel",
		"glass": "rocks"
	},
	{
		"name": "POLYNESIAN REMEDY",
		"ingredients": [
			{
				"measure": 1.75,
				"unit": "oz",
				"ingredient": "Plantation Dark Rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Ginger syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Laphroaig scotch"
			}
		],
		"procedure": "Shake, Tiki mug, crushed ice, candied ginger, lemon wheel, pineapple frond",
		"glass": "tiki"
	},
	{
		"name": "JUNGLE BOOBY",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blanco Tequila"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Grapefruit juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 4,
				"unit": "dash",
				"ingredient": "Absinthe"
			}
		],
		"procedure": "Mix/whip shake, rocks glass, crushed ice, pineapple wedge, mint sprig",
		"glass": "rocks"
	},
	{
		"name": "SEAHORSE",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Bonded Bourbon"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice Dram"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Simple syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, rocks glass, crushed ice, mint sprig, grated cinnamon",
		"glass": "rocks"
	},
	{
		"name": "BANANA CUP #1",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Pimm's No. 1"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Giffard Banane du Bresil"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon Juice"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Ginger beer"
			}
		],
		"procedure": "Shake first 4 ingredients, rocks glass, cracked ice. Top with ginger beer, mint sprig",
		"glass": "rocks"
	},
	{
		"name": "THE FINAL WARD",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Green Chartreuse"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Maraschino liqueur"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Shake, cocktail glass",
		"glass": "cocktail"
	},
	{
		"name": "OLD NUMBER ONE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Laird's Apple Brandy"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended Scotch"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Sweet vermouth"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "es Angostura bitters"
			}
		],
		"procedure": "Stir, coupe, cherry",
		"glass": "coupe"
	},
	{
		"name": "EARTHBOUND",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Blanco Tequila"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			}
		],
		"procedure": "Shake, coupe, grapefruit twist",
		"glass": "coupe"
	},
	{
		"name": "BURROUGH'S REVIVER",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Beefeater 24 Gin"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Aquavit"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "es Absinthe"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "RIKI TIKI TAVI",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Plantation Pineapple rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Blended scotch"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Pear Liqueur"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "es Angostura bitters"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "es Orange bitters"
			}
		],
		"procedure": "Swizzle, Julep cup, crushed ice, mint sprig, grated cinnamon",
		"glass": "julep"
	},
	{
		"name": "IMMIGRANT SONG",
		"ingredients": [
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Old Overholt Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Aquavit"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amontillado sherry"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Apricot liqueur"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "es Celery bitters"
			}
		],
		"procedure": "Stir, rocks glass, cracked ice, lemon twist",
		"glass": "rocks"
	},
	{
		"name": "THE FRONTIER",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Templeton Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Amaro Nonino"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Aquavit"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Demerara syrup"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "ELEVENTH HOUR",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Aquavit"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Reposado Tequila"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Yellow Chartreuse"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": 1,
				"ingredient": "barspn Cane Syrup"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "MASTER'S CHAIR",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Larceny Bourbon"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Aquavit"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cherry Heering"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Stir, coupe",
		"glass": "coupe"
	},
	{
		"name": "BROKEN COMPASS",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Smith & Cross rum"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Aquavit"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Manzanilla Sherry"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curaçao"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Grenadine"
			},
			{
				"measure": 5,
				"unit": "drops",
				"ingredient": "Almond Extract"
			}
		],
		"procedure": "Stir, rocks glass, large cube, orange peel",
		"glass": "rocks"
	},
	{
		"name": "MR. WEDNESDAY",
		"ingredients": [
			{
				"measure": 1.25,
				"unit": "oz",
				"ingredient": "Aquavit"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Smith & Cross rum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cruzan Black Strap rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Banana liqueur"
			}
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice, edible orchid",
		"glass": "tiki"
	},
	{
		"name": "MILES AHEAD",
		"ingredients": [
			{
				"measure": 2,
				"ingredient": "Cardamon pods (muddled)"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Rittenhouse Rye"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Aquavit"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dolin Blanc vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amontillado Sherry"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "es Orange bitters"
			}
		],
		"procedure": "Shake, coupe",
		"glass": "coupe"
	},
	{
		"name": "SAILOR'S DELIGHT",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Laird's Applejack"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Beefeater Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Orange juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Amontillado Sherry"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Orgeat"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cherry Heering (float)"
			}
		],
		"procedure": "Shake, Collins glass, crushed ice, cherry",
		"glass": "collins"
	},
	{
		"name": "LOST HORIZON",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Appleton Signature rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cognac"
			},
			{
				"measure": 2,
				"unit": "tsp",
				"ingredient": "Banana liqueur"
			},
			{
				"measure": 1,
				"unit": "tsp",
				"ingredient": "Fernet Branca"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Laphroaig Scotch (rinse)"
			}
		],
		"procedure": "Stir, rinsed old fashioned glass, orange twist",
		"glass": "oldfashioned"
	},
	{
		"name": "GOLDEN TICKET",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Honey syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Shake, coupe, lemon twist",
		"glass": "coupe"
	},
	{
		"name": "THE MINTON",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Hayman's Old Tom Gin"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Dolin Sweet sermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "es Orange bitters"
			}
		],
		"procedure": "Stir, coupe",
		"glass": "coupe"
	},
	{
		"name": "SHADDOCK",
		"ingredients": [
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Bols Genever"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			}
		],
		"procedure": "Shake, cocktail glass, lemon twist",
		"glass": "cocktail"
	},
	{
		"name": "NORMANDIE CLUB COLLINS",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Beefeater Gin"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Strawberry syrup"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake, Collins glass, cracked ice. Top with seltzer, lemon wheel",
		"glass": "collins"
	},
	{
		"name": "A MAN ABOUT TOWN",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Rittenhouse Rye"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Aperol"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dolin Dry Vermouth"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "es Orange bitters"
			}
		],
		"procedure": "Stir, rocks glass, cracked ice, orange twist",
		"glass": "rocks"
	},
	{
		"name": "SEAWARD",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Appleton V/X Rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Privateer Silver Rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Maraschino Liqueur"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Orange bitters"
			},
			{
				"measure": 2,
				"ingredient": "Lemon peels"
			}
		],
		"procedure": "Express oil from peels into mixing glass. Add all ingredients, stir, coupe",
		"glass": "coupe"
	},
	{
		"name": "FALLBACK",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Old Overholt Rye"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Laird's Applejack"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Sweet Vermouth"
			},
			{
				"measure": 2,
				"unit": "dash",
				"ingredient": "Peychaud's Bitters"
			}
		],
		"procedure": "Stir, cocktail glass, orange twist",
		"glass": "cocktail"
	},
	{
		"name": "TOUCH OF LOVE",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Black Rum"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Bourbon"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 2.5,
				"unit": "oz",
				"ingredient": "Pineapple juice"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lime juice"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Seltzer"
			}
		],
		"procedure": "Shake, Tiki mug, crushed ice. Top with seltzer, mint sprig",
		"glass": "tiki"
	},
	{
		"name": "HARRISON BERGERON",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Four Roses Bourbon"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Carpano Antica"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Amaro Montengro"
			}
		],
		"procedure": "Stir, double old-fashioned glass, cracked ice, orange twist",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "FLOWER & VINE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Manzanilla Sherry"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Pineapple syrup"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Banana Liqueur"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, double old-fashioned glass",
		"glass": "doubleoldfashioned"
	},
	{
		"name": "LETTERS OF MARQUE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Scarlet Ibis Rum"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cynar"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Galliano"
			}
		],
		"procedure": "Stir, coupe, flamed orange oil",
		"glass": "coupe"
	},
	{
		"name": "PRETEDANT NOBEL",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Grand Marnier"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Amaro Montenegro"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 1,
				"unit": "dash",
				"ingredient": "Orange bitters"
			}
		],
		"procedure": "Shake, cocktail glass, lemon twist",
		"glass": "cocktail"
	},
	{
		"name": "HUNGRY LIKE THE WOLF",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Four Roses Bourbon"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Pimm's"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Ginger beer (float)"
			}
		],
		"procedure": "Shake, rocks glass, crushed ice. Top with ginger beer, lemon twist",
		"glass": "rocks"
	},
	{
		"name": "BOURBON SWIZZLE",
		"ingredients": [
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "Bonded Bourbon"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Lemon juice"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Dry Curacao"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Don's Spices #2"
			}
		],
		"procedure": "Swizzle, crushed ice, Collins glass. Mint sprig, grated nutmeg",
		"glass": "collins"
	},
	{
		"name": "ANALOGUE",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Four Roses Bourbon"
			},
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Dark Rum"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Velvet Falernum"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Domaine de Canton"
			},
			{
				"measure": 0.25,
				"unit": "oz",
				"ingredient": "Allspice Dram"
			},
			{
				"measure": 3,
				"unit": "dash",
				"ingredient": "Angostura bitters"
			}
		],
		"procedure": "Stir, rocks glass, large cube, lemon twist",
		"glass": "rocks"
	},
	{
		"name": "IN BLOOM",
		"ingredients": [
			{
				"measure": 1.5,
				"unit": "oz",
				"ingredient": "Mezcal"
			},
			{
				"measure": 0.75,
				"unit": "oz",
				"ingredient": "Sweet Vermouth"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "St. Germain"
			},
			{
				"measure": 0.5,
				"unit": "oz",
				"ingredient": "Campari"
			},
			{
				"measure": null,
				"unit": null,
				"ingredient": "Rosewater (rinse)"
			}
		],
		"procedure": "Stir, rinsed coupe, flamed orange oil",
		"glass": "coupe"
	},
	{
		"name": "DON'S MIX",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Cinnamon syrup"
			},
			{
				"measure": 2,
				"unit": "oz",
				"ingredient": "White grapefruit juice"
			}
		],
		"procedure": "Mix",
		"glass": null
	},
	{
		"name": "DON'S SPICES #2",
		"ingredients": [
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Vanilla syrup"
			},
			{
				"measure": 1,
				"unit": "oz",
				"ingredient": "Allspice Dram"
			}
		],
		"procedure": "Mix",
		"glass": null
	}
];


const FUSE_NAME_SEARCH = new Fuse(recipes, {
	includeScore: true,
	keys: ["name"],
});

const ingredientsWithDupes = recipes
	.map(({ ingredients }) => ingredients)
	.flat(1)
	.map(({ ingredient }) => ingredient);

const ingredients = Array.from(new Set(ingredientsWithDupes));

const FUSE_INGREDIENT_SEARCH = new Fuse(ingredients, {
	includeScore: true,
});