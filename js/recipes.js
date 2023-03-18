const recipes = [
	{
		"name": "Osedax",
		"procedure": "Rocks glass over big rock, dehydrated orange wheel",
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
		]
	},
	{
		"name": "It Slaps",
		"procedure": "Double shake, crushed ice, rocks glass, grapefruit peel.",
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
		]
	},
	{
		"name": "Rye Not",
		"procedure": "Shake, rocks glass, dehydrated lemon wheel",
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
		]
	},
	{
		"name": "The Allfathers Eye",
		"procedure": "Stirred, coupe. Dehydrated lemon wheel",
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
		]
	},
	{
		"name": "There's Always Money in the Banana Stand",
		"procedure": "Shake, coupe. Dehydrated banana chip",
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
		]
	},
	{
		"name": "Borderline",
		"procedure": "Double shake, coupe.",
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
		]
	},
	{
		"name": "Sweet Talker",
		"procedure": "Shake. Collins. Cube ice, top with kombucha, mint sprig",
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
		]
	},
	{
		"name": "Nice Guy",
		"procedure": "Shake, double strain into Collins. Cube ice, top with soda, dehydrated lemon wheel",
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
		]
	},
	{
		"name": "The New Hotness",
		"procedure": "Stir, coupe, grapefruit peel",
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
		]
	},
	{
		"name": "Honma Highball",
		"procedure": "Shake, Collins, cube ice. Carbonate before pouring or add a splash of soda. Orange peel",
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
		]
	},
	{
		"name": "Norden Sour",
		"procedure": "Shake, chilled rocks glass, no ice, lemon zest (discard). Three marigold flowers",
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
		]
	},
	{
		"name": "Hunter's Rally",
		"procedure": "Double shake, double strain into Collins, dehydrated lime, Angostura bitters drops",
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
		]
	},
	{
		"name": "You're My Boy Blue",
		"procedure": "Muddle blueberries, add the rest. Shake, double strain into rocks glass with ice.",
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
		]
	},
	{
		"name": "Caraway My Wayward Son",
		"procedure": "Shake, coupe, orange peel.",
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
		]
	},
	{
		"name": "Hot Chocavit",
		"procedure": "Coffee mug or toddy glass, stir, top with Caraway whipped cream, cocoa dust",
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
		]
	},
	{
		"name": "Kentucky Square",
		"procedure": "Stir, rocks glass, big cube, dehydrated orange wheel",
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
		]
	},
	{
		"name": "Rosie",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "Osborn",
		"procedure": "Muddle jalepeno and pineapple. Shake, double strain, old fashioned glass",
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
		]
	},
	{
		"name": "Sunset Curse",
		"procedure": "Stirred, cocktail glass, flamed orange peel",
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
		]
	},
	{
		"name": "Christmas in Cozmel",
		"procedure": "Stirred, coupe glass, lime flag",
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
		]
	},
	{
		"name": "Hold Up",
		"procedure": "Shake, absinthe-rinsed glass, one mint leaf",
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
		]
	},
	{
		"name": "Manhattan #1",
		"procedure": "Stir, rocks glass, lemon flag",
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
		]
	},
	{
		"name": "Manhattan #2",
		"procedure": "Stir, rocks glass, orange flag",
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
		]
	},
	{
		"name": "The Last Word",
		"procedure": "Shake, martini glass, lime Wheel",
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
		]
	},
	{
		"name": "Los Lobos",
		"procedure": "Shake, rocks glass, crushed pink peppercorn",
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
		]
	},
	{
		"name": "Cabaret",
		"procedure": "Shake, martini glass, lime wheel",
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
		]
	},
	{
		"name": "Kentucky Sunshine",
		"procedure": "Shake first 5 ingredients, double strain, rocks glass. Top with ginger beer, basil leaf",
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
		]
	},
	{
		"name": "Old West Side",
		"procedure": "stir, rocks glass, grapefruit peel",
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
		]
	},
	{
		"name": "Baker Street",
		"procedure": "Stir, coupe, rosemary sprig",
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
		]
	},
	{
		"name": "Mother's Ruin",
		"procedure": "Shake, cocktail glass, rosemary sprig.",
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
		]
	},
	{
		"name": "Party Police",
		"procedure": "Shake, collins glass",
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
		]
	},
	{
		"name": "Smash Brothers",
		"procedure": "Shake, highball glass. Top with soda, sage leaf.",
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
		]
	},
	{
		"name": "A Morning Rum",
		"procedure": "Stir, rocks glass, dehydrated lime or orange wheel",
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
		]
	},
	{
		"name": "Snake Oil Salesman",
		"procedure": "Shake, crushed ice, dragon glass, lime wheel",
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
		]
	},
	{
		"name": "The Heist",
		"procedure": "Shake, Absinthe glass, lemon peel",
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
		]
	},
	{
		"name": "Rhum Old Fashioned",
		"procedure": "Stir, rocks glass, orange peel",
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
		]
	},
	{
		"name": "Kissed by a Rose",
		"procedure": "Double shake, coupe, rose bud",
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
		]
	},
	{
		"name": "(C)ole' fashioned",
		"procedure": "Stir, big cube, rocks glass, lemon peel",
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
		]
	},
	{
		"name": "Senor Burns",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "Pining Princess",
		"procedure": "Shake, crushed ice, Collins glass",
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
		]
	},
	{
		"name": "Sacred Heart",
		"procedure": "Shake, coupe, grapefruit peel",
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
		]
	},
	{
		"name": "Queen of Cups",
		"procedure": "Shake, cocktail glass, rosemary sprig",
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
		]
	},
	{
		"name": "Ice Planet",
		"procedure": "Stir, rocks glass, orange peel",
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
		]
	},
	{
		"name": "Sea Castle",
		"procedure": "Double shake, martini glass, Peychaud's bitters",
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
		]
	},
	{
		"name": "Last Minute",
		"procedure": "Shake, double strain, martini glass, grapefruit peel",
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
		]
	},
	{
		"name": "Estrella Negra",
		"procedure": "Shake, rocks glass, big cube",
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
		]
	},
	{
		"name": "Tell Me No Fibs, I'll Tell You No Lies",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "The Stampede",
		"procedure": "Shake, rocks glass, mint sprig",
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
		]
	},
	{
		"name": "TRUE GRIT",
		"procedure": "Stir, rocks glass, big cube, lemon wheel",
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
		]
	},
	{
		"name": "Roaring 40's",
		"procedure": "Muddle with sea salt. Shake, double strain, coupe, cucumber slice",
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
		]
	},
	{
		"name": "Rye Daiquiri",
		"procedure": "Shake, coupe, lime wheel",
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
		]
	},
	{
		"name": "Basil & Bubbles",
		"procedure": "Shake first 4 ingredients, double strain, champagne flute. Top with champagne, basil leaf",
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
		]
	},
	{
		"name": "The Purple Gang",
		"procedure": "Shake, champagne flute. Top with champagne, lemon twist.",
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
		]
	},
	{
		"name": "Wise Guy",
		"procedure": "Stir, coupe, orange peel",
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
		]
	},
	{
		"name": "Paradiso Sour",
		"procedure": "Double shake, rocks glass, orange peel",
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
		]
	},
	{
		"name": "Nevermore",
		"procedure": "Shake, rocks glass, orange peel",
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
		]
	},
	{
		"name": "Blood & Smoke",
		"procedure": "Shake, martini glass",
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
		]
	},
	{
		"name": "Dr. Ordinaire",
		"procedure": "Shake, coupe with one drop of Peychaud's in glass, orange peel",
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
		]
	},
	{
		"name": "Red Rum",
		"procedure": "Shake, rocks glass, orange cherry flag",
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
		]
	},
	{
		"name": "Spice and Everything Nice",
		"procedure": "Stir, rocks glass, big rock, express orange peel, torched cinnamon stick",
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
		]
	},
	{
		"name": "Yellow Bird",
		"procedure": "Shake, collins, crushed ice",
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
		]
	},
	{
		"name": "Apricot Julep",
		"procedure": "Stir with crushed ice. Mint sprig",
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
		]
	},
	{
		"name": "Age of Aquarius",
		"procedure": "Shake first 4 ingredients, rocks glass, crushed ice. Float Campari, mint sprig",
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
		]
	},
	{
		"name": "Scofflaw",
		"procedure": "Shake, cocktail glass",
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
		]
	},
	{
		"name": "Lost Lake",
		"procedure": "Mix/whip shake, crushed ice, footed pilsner",
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
		]
	},
	{
		"name": "Bitter Mai Tai",
		"procedure": "Mix/whip shake, crushed ice, rocks glass. Mint, lime wheel",
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
		]
	},
	{
		"name": "Mr. Bodi Hai",
		"procedure": "Mix/whip shake with crushed ice, pour into footed pilsner. Top up, pineapple fronds",
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
		]
	},
	{
		"name": "Banana Farmer",
		"procedure": "Mix/whip shake, crushed ice, Collins glass, pineapple fronds",
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
		]
	},
	{
		"name": "Fay Wray",
		"procedure": "Lightly muddle lime wedge, mix/whip shake, crushed ice, rocks glass. Dried banana or mint sprig",
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
		]
	},
	{
		"name": "Keicho Embassy",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "Father Knows Best",
		"procedure": "Stir with ice, pour into bottle and smoke. Pour into rocks glass with large cube",
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
		]
	},
	{
		"name": "Arrack Punch",
		"procedure": "Mix/whip shake, crushed ice, goblet. Fresh fruit, pineapple fronds",
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
		]
	},
	{
		"name": "Seven Seas Swizzle",
		"procedure": "Swizzle, crushed ice, Collins glass. Mint sprig, lime wheel, grated nutmeg",
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
		]
	},
	{
		"name": "Boilermaker House Sour",
		"procedure": "Double shake all but beer, cocktail glass. Top with IPA",
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
		]
	},
	{
		"name": "Chamomile Sour",
		"procedure": "Double shake, chilled coupe, chamomile flowers",
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
		]
	},
	{
		"name": "Chamomile Gin",
		"procedure": "Shake or stir gently to combine, let infuse for 5 days or to taste",
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
		]
	},
	{
		"name": "Guardian Angel",
		"procedure": "Shake, double strain, coupe, cucumber slice",
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
		]
	},
	{
		"name": "Billionaire",
		"procedure": "Shake, cocktail glass, dehydrated lemon wheel",
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
		]
	},
	{
		"name": "Blood and Sand",
		"procedure": "Shake first 3 ingredients, rocks glass. Top with orange juice",
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
		]
	},
	{
		"name": "Fernando",
		"procedure": "Stir, large ice, cocktail glass, mint sprig",
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
		]
	},
	{
		"name": "Nerina",
		"procedure": "Stir, large ice, cocktail glass orange twist",
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
		]
	},
	{
		"name": "Peche Bourbon",
		"procedure": "Muddle sugar and bitters in mixing glass, add bourbon, stir with ice. Rocks glass rinsed with creme de peche, mint sprig",
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
		]
	},
	{
		"name": "Jersey Devil",
		"procedure": "Stir, large ice, cocktail glass, orange wheel",
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
		]
	},
	{
		"name": "Mata Hari",
		"procedure": "Shake, cocktail glass, 3 dried rose buds",
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
		]
	},
	{
		"name": "Pisco Punch",
		"procedure": "Muddle pineapple and pineapple syrup, add the rest, shake, double strain, goblet filled with ice. Lemon wheel, pineapple wedge",
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
		]
	},
	{
		"name": "Ruby Tuesday",
		"procedure": "Shake, strain into chilled cocktail glass. Lemon twist",
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
		]
	},
	{
		"name": "Waterloo",
		"procedure": "Muddle watermelon and syrup until liquid. Add the rest, shake, unstrained into collins glass. Watermelon wedge.",
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
		]
	},
	{
		"name": "Yellow Jacket",
		"procedure": "Stir, large ice, cocktail glass, lemon twist",
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
		]
	},
	{
		"name": "Mid-Morning Fizz",
		"procedure": "Pour chartreuse into collins glass with ice and club soda, chill. Shake the other ingredients for 2 minutes. Strain into glass. Orange wheel",
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
		]
	},
	{
		"name": "English Bishop",
		"isIngredient": true,
		"procedure": "Stud orange with cloves, place in baking dish, bake at 400°F until entire orange is browned, about 30 minutes. Carefully cut into quarters, place into saucepan with the port simmer on medium heat for 30 minutes. Strain, add the sugar to the liquid. Cool, strain again, and bottle.",
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
		]
	},
	{
		"name": "Robb's Grandma",
		"procedure": "Rocks glass, large cube, barspoon of cherry syrup, stir",
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
		]
	},
	{
		"name": "Citric Acid Solution",
		"isIngredient": true,
		"procedure": "Mix until dissolved",
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
		]
	},
	{
		"name": "#3 Cup",
		"procedure": "Shake, double strain, Collins glass, mint sprig, orange slice",
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
		]
	},
	{
		"name": "20th Century",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "Against All Odds",
		"procedure": "Shake first 4 ingredients, coupe rinsed with Mezcal",
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
		]
	},
	{
		"name": "Aguil a Azteca",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "Airmail",
		"procedure": "Shake, coupe, top with 1 oz champagne, lime wheel",
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
		]
	},
	{
		"name": "Albert Mathieu",
		"procedure": "Stir, coupe, orange twist",
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
		]
	},
	{
		"name": "Applejack Rabbit",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "Blackbeard",
		"procedure": "Dry shake, unstrained pour, rocks glass, pebble ice, mint sprig",
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
		]
	},
	{
		"name": "Black Thorn",
		"procedure": "Stir, coupe, orange twist",
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
		]
	},
	{
		"name": "Champs-elysees",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "Chrysanthemum",
		"procedure": "Stir, coupe",
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
		]
	},
	{
		"name": "Cloister",
		"procedure": "Shake, coupe, grapefruit twist",
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
		]
	},
	{
		"name": "Conquistador",
		"procedure": "Double shake, coupe",
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
		]
	},
	{
		"name": "Corpse Reviver #2",
		"procedure": "Shake, rinsed coupe",
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
		]
	},
	{
		"name": "De La Louisiane",
		"procedure": "Stir, coupe, three brandied cherries",
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
		]
	},
	{
		"name": "East India Cocktail",
		"procedure": "Shake, coupe, orange twist",
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
		]
	},
	{
		"name": "El Puente",
		"procedure": "Shake, coupe, grapefruit twist",
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
		]
	},
	{
		"name": "Ephemeral",
		"procedure": "Stir, coupe, grapefruit twist",
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
		]
	},
	{
		"name": "Espresso Bongo",
		"procedure": "Shake, unstrained pour, tiki mug",
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
		]
	},
	{
		"name": "Fish House Punch",
		"procedure": "Shake, rocks glass",
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
		]
	},
	{
		"name": "Flying Dutchman",
		"procedure": "Shake, coupe, brandied cherry",
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
		]
	},
	{
		"name": "Foreign Legion",
		"procedure": "Stir, rocks glass, ice sphere, orange twist",
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
		]
	},
	{
		"name": "French Maid",
		"procedure": "Shake, double strain, Collins glass, mint sprig in cucumber wheel",
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
		]
	},
	{
		"name": "Gilchrist",
		"procedure": "Shake, coupe, lemon twist",
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
		]
	},
	{
		"name": "GOLDEN STAR FIZZ",
		"procedure": "Shake first 5 ingredients, double strain, rinsed fizz glass. Top with jasmine tea, cucumber slice",
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
		]
	},
	{
		"name": "GREAT PUMPKIN",
		"procedure": "Stir, double shake, strain into fizz glass, grated nutmeg",
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
		]
	},
	{
		"name": "GREEN DEACON",
		"procedure": "Shake, rinsed coupe",
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
		]
	},
	{
		"name": "GREEN HARVEST",
		"procedure": "Stir, double strain, fizz glass, three concord grapes",
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
		]
	},
	{
		"name": "GREENPOINT",
		"procedure": "Stir, coupe",
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
		]
	},
	{
		"name": "HARVEST MOON",
		"procedure": "Stir, coupe, orange twist",
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
		]
	},
	{
		"name": "HARVEST SLING",
		"procedure": "Shake, Collins glass, cherry and orange flag",
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
		]
	},
	{
		"name": "HEIRLOOM",
		"procedure": "Shake, double strain, coupe, two spritzes anise hyssop essence",
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
		]
	},
	{
		"name": "HEMINGWAY DAIQUIRI",
		"procedure": "Shake, coupe, lime wheel",
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
		]
	},
	{
		"name": "HENRY HUDSON",
		"procedure": "Stir, rocks glass, large cube, grated nutmeg ",
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
		]
	},
	{
		"name": "HONEYMOON COCKTAIL",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "HOTEL D'ALSACE",
		"procedure": "Stir, double strain, rocks glass, large cube, rosemary sprig",
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
		]
	},
	{
		"name": "JAPANESE COURAGE",
		"procedure": "Stir, pre-heated mug, lemon wheel studded with 6 cloves",
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
		]
	},
	{
		"name": "JAPANESE COCKTAIL",
		"procedure": "Stir, coupe, lemon twist",
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
		]
	},
	{
		"name": "JUDGMENT DAY",
		"procedure": "Double shake, rinsed coupe, 2 spritzes allspice dram",
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
		]
	},
	{
		"name": "JUNIOR",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "KANSAI KICK",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "KINA MIELE",
		"procedure": "Stir, rocks glass, large cube, grapefruit twist",
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
		]
	},
	{
		"name": "KING BEE",
		"procedure": "Shake first 4 ingredients, coupe, float sherry",
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
		]
	},
	{
		"name": "LA FLORIDA COCKTAIL",
		"procedure": "Shake, coupe, lime wheel",
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
		]
	},
	{
		"name": "LA LOUCHE",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "LEAPFROG",
		"procedure": "Shake, double strain, coupe",
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
		]
	},
	{
		"name": "LE PeRE BIS",
		"procedure": "Stir, pre-heated mug, lemon wedge studded with three cloves",
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
		]
	},
	{
		"name": "LUAU",
		"procedure": "Shake, rocks glass, crushed ice, lime wheel, orange slice",
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
		]
	},
	{
		"name": "MASATAKA SWIZZLE",
		"procedure": "Swizzle, rocks glass, crushed ice, 3 dash bitters, mint sprig",
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
		]
	},
	{
		"name": "MEZCAL MULE",
		"procedure": "Shake, rocks glass, candied ginger, cucumber slice, pinch of ground chili",
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
		]
	},
	{
		"name": "NEW ORLEANS MILK PUNCH",
		"procedure": "Shake, rocks glass, large cube",
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
		]
	},
	{
		"name": "MONTGOMERY SMITH",
		"procedure": "Stir, coupe, lemon twist",
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
		]
	},
	{
		"name": "MONKEY GLAND",
		"procedure": "Shake, rinsed coupe",
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
		]
	},
	{
		"name": "MOUNT VERNON",
		"procedure": "Shake, coupe, three brandied cherries",
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
		]
	},
	{
		"name": "NEW AMSTERDAM",
		"procedure": "Stir, coupe, lemon twist",
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
		]
	},
	{
		"name": "NEWARK",
		"procedure": "Stir, coupe",
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
		]
	},
	{
		"name": "NOUVEAU CARRe",
		"procedure": "Stir, coupe, lemon twist",
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
		]
	},
	{
		"name": "NTH DEGREE",
		"procedure": "Muddle bitters with sugar cube, add the rest, stir, rocks glass, large cube, orange and lemon twist",
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
		]
	},
	{
		"name": "OCCIDENTAL",
		"procedure": "Stir, rinsed coupe, orange twist",
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
		]
	},
	{
		"name": "OLD PAL",
		"procedure": "Stir, coupe",
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
		]
	},
	{
		"name": "PADDINGTON",
		"procedure": "Shake, rinsed coupe, grapefruit twist",
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
		]
	},
	{
		"name": "PHARAOH COOLER",
		"procedure": "Shake, Collins glass, top with 1 oz soda",
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
		]
	},
	{
		"name": "PROFESSOR",
		"procedure": "Stir, coupe, orange twist",
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
		]
	},
	{
		"name": "REMEMBER THE MAINE",
		"procedure": "Stir, coupe, lemon twist",
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
		]
	},
	{
		"name": "RESTING POINT",
		"procedure": "Shake, double strain, coupe, strawberry fan",
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
		]
	},
	{
		"name": "RHUM CLUB",
		"procedure": "Shake, coupe, orange wedge",
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
		]
	},
	{
		"name": "RIO BRAVO",
		"procedure": "Shake, double strain, coupe, orange twist",
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
		]
	},
	{
		"name": "ROSITA",
		"procedure": "Stir, coupe, orange twist",
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
		]
	},
	{
		"name": "RUST BELT",
		"procedure": "Double shake, coupe, 2 spritzes Angostura bitters",
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
		]
	},
	{
		"name": "ROYAL BERMUDA YACHTCLUB COCKTAIL",
		"procedure": "Shake, coupe, lime wheel",
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
		]
	},
	{
		"name": "RYE WITCH",
		"procedure": "Muddle bitters and sugar cube, add the rest, stir, rocks glass, express orange peel",
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
		]
	},
	{
		"name": "SEELBACH COCKTAIL",
		"procedure": "Stir, coupe. Top with 2 oz champagne, orange twist",
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
		]
	},
	{
		"name": "SILVER LINING",
		"procedure": "Double shake, fizz glass. Top with 1 oz soda",
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
		]
	},
	{
		"name": "SLOE GIN FIZZ",
		"procedure": "Shake, fizz glass. Top with 3 oz soda",
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
		]
	},
	{
		"name": "SOLSTICE",
		"procedure": "Stir, coupe",
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
		]
	},
	{
		"name": "STATESMAN",
		"procedure": "Stir, coupe, lemon twist",
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
		]
	},
	{
		"name": "TALBOTT LEAF",
		"procedure": "Shake, double strain, coupe, mint leaf",
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
		]
	},
	{
		"name": "TUXEDO",
		"procedure": "Stir, rinsed coupe, lemon twist, cherry",
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
		]
	},
	{
		"name": "VAUVERT SLIM",
		"procedure": "Double shake, double strain, rinsed coupe, mint leaf",
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
		]
	},
	{
		"name": "VELVET CLUB",
		"procedure": "Stir, coupe. Top with 1 oz champagne",
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
		]
	},
	{
		"name": "VIEUX MOT",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "VIEUX CARRe",
		"procedure": "Stir, rocks glass, large cube ",
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
		]
	},
	{
		"name": "WHISKEY SMASH",
		"procedure": "Shake, double strain, rocks, mint sprig",
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
		]
	},
	{
		"name": "WHITE BIRCH FIZZ",
		"procedure": "Double shake, Collins glass. Top with 2 oz soda, spritz of Suze",
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
		]
	},
	{
		"name": "WITCH'S KISS",
		"procedure": "Shake, coupe, lemon twist",
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
		]
	},
	{
		"name": "AKU AKU",
		"procedure": "Mix/whip shake, double-strain, coupe, mint sprig",
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
		]
	},
	{
		"name": "PUPULE",
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, spiral-cut orange peel, mint sprig",
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
		]
	},
	{
		"name": "DON'S OWN GROG",
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, freshly grated nutmeg",
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
		]
	},
	{
		"name": "PORT AU PRINCE",
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, lime wedge",
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
		]
	},
	{
		"name": "THREE DOTS AND A DASH",
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, three maraschino cherries and pineapple chunk",
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
		]
	},
	{
		"name": "MEXICAN EL DIABLO",
		"procedure": "Swizzle, collins glass, cracked ice",
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
		]
	},
	{
		"name": "PORT LIGHT",
		"procedure": "Dry shake egg white and bourbon, add the rest, Mix/whip shake, footed pilsner, crushed ice",
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
		]
	},
	{
		"name": "DEMERARA DRY FLOAT",
		"procedure": "Mix/whip shake first 6 ingredients, double old-fashioned glass, crushed ice, serve with overproof rum on the side",
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
		]
	},
	{
		"name": "JET PILOT",
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice",
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
		]
	},
	{
		"name": "HALEKULANI COCKTAIL",
		"procedure": "Shake, double strain, coupe, edible orchid",
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
		]
	},
	{
		"name": "SIDEWINDER'S FANG",
		"procedure": "Mix/whip shake, strain, large brandy snifter, cracked ice, sidewinder's fang orange peel, mint sprig.",
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
		]
	},
	{
		"name": "HAWAIIAN SUNSET",
		"procedure": "Shake, double strain, coupe, lime peel.",
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
		]
	},
	{
		"name": "CAPTAIN'S GROG",
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "SUFFERING BASTARD",
		"procedure": "Shake first 5 ingredients, Collins glass, cracked ice. Top with ginger beer, mint sprig",
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
		]
	},
	{
		"name": "MERCILESS VIRGIN",
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, Maraschino cherry",
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
		]
	},
	{
		"name": "SATURN",
		"procedure": "Shake, coupe, lemon peel rings",
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
		]
	},
	{
		"name": "TIKI BOWL FOR TWO",
		"procedure": "Mix/blend, tiki bowl, crushed ice, edible orchid",
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
		]
	},
	{
		"name": "HURRICANE",
		"procedure": "Mix/whip shake, hurricane glass, crushed ice, lemon wedge",
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
		]
	},
	{
		"name": "MUNDO PERDIDO",
		"procedure": "Shake, coupe.",
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
		]
	},
	{
		"name": "FORMIDABLE DRAGON",
		"procedure": "Mix/Blend, large brandy snifter, crushed ice, edible orchid, multiple mint sprigs",
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
		]
	},
	{
		"name": "LEI LANI NOUVEAU",
		"procedure": "Shake first 4 ingredients, double strain, Collins glass, cracked ice. Top with guava soda, edible orchid",
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
		]
	},
	{
		"name": "TRADEWINDS",
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, lemon wedge",
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
		]
	},
	{
		"name": "PEACHTREE PUNCH 2.0",
		"procedure": "Mix/whip shake, double strain, double old-fashioned glass, cracked ice, grated nutmeg, peach wedge",
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
		]
	},
	{
		"name": "JUNGLE BIRD",
		"procedure": "Mix/whip shake, Collins glass, crushed ice, pineapple fronds",
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
		]
	},
	{
		"name": "GOLDEN GUN",
		"procedure": "Shake, Collins glass, cracked ice",
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
		]
	},
	{
		"name": "HINKY DINKS FIZZY",
		"procedure": "Mix/whip shake first 6 ingredients, large brandy snifter, crushed ice. Top with sparkling wine, mint sprig",
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
		]
	},
	{
		"name": "PAMPANITO",
		"procedure": "Mix/whip shake, Collins glass, crushed ice, lemon twist",
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
		]
	},
	{
		"name": "MAX'S MISTAKE",
		"procedure": "Mix/whip shake, large brandy snifter, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "LA GUILDIVE",
		"procedure": "Shake first 4 ingredients, coupe. Top with ginger beer, lime twist, pinch of cinnamon",
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
		]
	},
	{
		"name": "THE TWENTY SEVENTY SWIZZLE",
		"procedure": "Swizzle, Collins glass, crushed ice, grated nutmeg, mint sprig",
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
		]
	},
	{
		"name": "SHUDDERS IN A WHISPER",
		"procedure": "Mix/whip shake, large brandy snifter, crushed ice, edible orchid, mint sprig",
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
		]
	},
	{
		"name": "CUEVAS",
		"procedure": "Shake, coupe, maraschino cherry",
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
		]
	},
	{
		"name": "NORWEGIAN PARALYSIS",
		"procedure": "Shake, Collins glass, cracked ice, lemon wedge",
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
		]
	},
	{
		"name": "JUAN HO ROYALE",
		"procedure": "Shake first 5 ingredients, coupe. Top with champagne",
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
		]
	},
	{
		"name": "CHARTREUSE SWIZZLE",
		"procedure": "Swizzle, Collins glass, crushed ice, grated nutmeg, mint sprig",
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
		]
	},
	{
		"name": "ROSELITA",
		"procedure": "Shake first 6 ingredients, Collins glass, cracked ice. Top with seltzer, edible hibiscus flower",
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
		]
	},
	{
		"name": "CENTER OF THE GALAXY",
		"procedure": "Shake, coupe, raspberry on lime wheel",
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
		]
	},
	{
		"name": "CALLALOO COOLER",
		"procedure": "Shake first 5 ingredients, Collins glass, cracked ice. Top with seltzer, grated cinnamon, mint sprig",
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
		]
	},
	{
		"name": "TOP NOTCH VOLCANO FOR TWO",
		"procedure": "Mix/whip shake, scorpion bowl, lime and orange slices, fire",
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
		]
	},
	{
		"name": "THE NAKED APE",
		"procedure": "Mix/whip shake, tiki mug, crushed ice",
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
		]
	},
	{
		"name": "SWIZZLE FRANcAIS",
		"procedure": "Swizzle, Collins glass, crushed ice, ground nutmeg",
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
		]
	},
	{
		"name": "SPARKLING MAI TAI",
		"procedure": "Stir first 5 ingredients, champagne flute. Top with sparkling wine, lime twist, mint leaf",
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
		]
	},
	{
		"name": "THE ERNESTO",
		"procedure": "Shake first 5 ingredients, double old-fashioned glass, cracked ice. Top with soda, lime wheel, edible orchid",
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
		]
	},
	{
		"name": "HANA REVIVER",
		"procedure": "Mix/whip shake, footed pilsner glass, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "KAITEUR SWIZZLE",
		"procedure": "Swizzle, Collins glass, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "THE EXPEDITION",
		"procedure": "Mix/whip shake, tiki mug, crushed ice, edible orchid",
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
		]
	},
	{
		"name": "THE UNDEAD GENTLEMAN",
		"procedure": "Shake, rinsed coupe, intertwined lime and grapefruit twists",
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
		]
	},
	{
		"name": "THE DEAD RECKONING",
		"procedure": "Mix/whip shake first 7 ingredients, Collins glass, cracked ice. Top with seltzer, pineapple fronds, mint spring, lemon spiral",
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
		]
	},
	{
		"name": "FALINUM",
		"procedure": "Mix/whip shake, tiki mug, crushed ice",
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
		]
	},
	{
		"name": "HUMUHUMUNUKUNUKUAPUA'A",
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, edible orchid, maraschino cherry",
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
		]
	},
	{
		"name": "LAUWILIWILINUKUNUKU'OI'OI",
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, edible orchid, maraschino cherry",
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
		]
	},
	{
		"name": "FOR PETE'S SAKE",
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, edible hibiscus flower, maraschino cherry",
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
		]
	},
	{
		"name": "ARRACK PUNCH FOR TWO",
		"procedure": "Mix/whip shake, tiki bowl, lemon and lime slices",
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
		]
	},
	{
		"name": "EL DRAQUE",
		"procedure": "Shake, coupe, lime wheel",
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
		]
	},
	{
		"name": "CALIBOGUS",
		"procedure": "Mix/whip shake first 5 ingredients, Collins glass, cracked ice. Top with seltzer",
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
		]
	},
	{
		"name": "MARY PICKFORD",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "DAIQUIRI NO. 1",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "HOTEL NACIONAL SPECIAL",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "DAISY DE SANTIAGO",
		"procedure": "Shake, double old-fashioned glass, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "EL PRESIDENTE",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "TWELVE MILE LIMIT",
		"procedure": "Shake, coupe, lemon twist",
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
		]
	},
	{
		"name": "PARISIAN BLONDE",
		"procedure": "Stir first two ingredients, coupe. Float the cream, grated cinnamon",
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
		]
	},
	{
		"name": "CORA MIDDLETON",
		"procedure": "Double shake, coupe, Angostura bitters drops",
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
		]
	},
	{
		"name": "MILLIONAIRE COCKTAIL #1",
		"procedure": "Shake, coupe, lime wheel",
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
		]
	},
	{
		"name": "BATIDA DE MARACUJA E COCO",
		"procedure": "Mix/whip shake, old fashioned glass, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "HIBISCUS RUM PUNCH",
		"procedure": "Shake first 4 ingredients, Collins glass, cracked ice. Top with seltzer, edible hibiscus flower, lime wheel",
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
		]
	},
	{
		"name": "BARBADOS RUM PUNCH",
		"procedure": "Shake, footed pilsner, cracked ice, grated nutmeg",
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
		]
	},
	{
		"name": "JAMAICAN MILK PUNCH",
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, grated nutmeg.",
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
		]
	},
	{
		"name": "CORN AND OIL",
		"procedure": "Stir, old-fashioned glass, crushed ice",
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
		]
	},
	{
		"name": "QUEEN'S PARK SWIZZLE",
		"procedure": "Swizzle, Collins glass, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "THE CHADBURN",
		"procedure": "Stir, coupe",
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
		]
	},
	{
		"name": "A WISH FOR GRACE",
		"procedure": "Shake, coupe, lemon twist",
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
		]
	},
	{
		"name": "ABRICOT VIEUX",
		"procedure": "Stir, coupe, express orange peel",
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
		]
	},
	{
		"name": "PANIOLO OLD-FASHIONED",
		"procedure": "Stir, old-fashioned glass, large cube, express orange peel, drop peel in",
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
		]
	},
	{
		"name": "PORT ROYAL",
		"procedure": "Shake, coupe, five spread-out drops Hellfire tincture",
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
		]
	},
	{
		"name": "KINGSTON PALAKA",
		"procedure": "Shake, coupe, lemon peel",
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
		]
	},
	{
		"name": "DONN DAY AFTERNOON",
		"procedure": "Stir, double old-fashioned glass, express grapefruit peel, drop peel in",
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
		]
	},
	{
		"name": "BAIE DU GALION",
		"procedure": "Stir, coupe, lemon twist",
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
		]
	},
	{
		"name": "AGRICOLE GUAVA COOLER",
		"procedure": "Shake first 4 ingredients, Collins glass, cracked ice. Top with soda, mint sprig, cinnamon stick, lime wheel",
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
		]
	},
	{
		"name": "RICHARD SEALEBACH",
		"procedure": "Stir first 4 ingredients, champagne flute. Top with champagne, lemon twist",
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
		]
	},
	{
		"name": "COSA NOSTRA #2",
		"procedure": "Stir first 4 ingredients, footed pilsner glass, cracked ice. Top with ginger ale, lemon twist",
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
		]
	},
	{
		"name": "BOO LOO FOR TWO",
		"procedure": "Mix/whip shake, hollowed-out pineapple, crushed ice",
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
		]
	},
	{
		"name": "CARIBENO",
		"procedure": "Mix/whip shake, coconut shell, cracked ice",
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
		]
	},
	{
		"name": "MONK'S RESPITE",
		"procedure": "Mix/whip shake, coconut shell, crushed ice",
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
		]
	},
	{
		"name": "THE MASTADON",
		"procedure": "Mix/whip shake, hollowed-out pineapple, crushed ice",
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
		]
	},
	{
		"name": "PINATA",
		"procedure": "Mix/whip shake, hollowed-out pineapple, crushed ice, freshly grated nutmeg",
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
		]
	},
	{
		"name": "BUMBOAT",
		"procedure": "Mix/whip shake, hollowed-out pineapple, crushed ice. Float the overproof rum",
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
		]
	},
	{
		"name": "PLANTER'S PUNCH",
		"procedure": "Mix/whip shake, Collins glass, crushed ice, mint Sprig",
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
		]
	},
	{
		"name": "MAI TAI",
		"procedure": "Shake, double old-fashioned glass, crushed ice, lime shell, mint sprig",
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
		]
	},
	{
		"name": "DOCTOR FUNK",
		"procedure": "Mix/whip shake, double old-fashioned, crushed ice, ti leaf or pineapple fronds",
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
		]
	},
	{
		"name": "ZOMBIE",
		"procedure": "Mix/whip shake, Collins glass, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "NAVY GROG",
		"procedure": "Mix/whip shake, double old-fashioned glass, ice cone, mint sprig",
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
		]
	},
	{
		"name": "SCORPION BOWL FOR TWO",
		"procedure": "Mix/whip shake, tiki bowl, cracked ice",
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
		]
	},
	{
		"name": "FOG CUTTER",
		"procedure": "Mix/whip shake, Fog Cutter mug, crushed ice. Float sherry, mint sprig",
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
		]
	},
	{
		"name": "SINGAPORE SLING",
		"procedure": "Shake first 7 ingredients, Collins glass, cracked ice. Top with seltzer, lemon wedge",
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
		]
	},
	{
		"name": "HONDO HATTIE'S JUNGLE PUNCH!",
		"procedure": "Stir, punch glass, cracked ice",
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
		]
	},
	{
		"name": "KAHIKO PUNCH",
		"procedure": "Stir, punch glass, cracked ice, edible orchid",
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
		]
	},
	{
		"name": "TRIUMVIRATE PUNCH",
		"procedure": "Stir, punch glass, cracked ice, mint sprig",
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
		]
	},
	{
		"name": "EUREKA PUNCH",
		"procedure": "Stir, punch glass, cracked ice, lemon twist, mint sprig",
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
		]
	},
	{
		"name": "YULETIDAL WAVE",
		"procedure": "Stir, punch glass, cracked ice",
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
		]
	},
	{
		"name": "RUMBUSTION PUNCH",
		"procedure": "Stir, punch glass, cracked ice",
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
		]
	},
	{
		"name": "PUKA PUNCH",
		"procedure": "Mix/whip shake first 10 ingredients, large brandy snifter, crushed ice. Float the overproof rum, mint sprig",
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
		]
	},
	{
		"name": "THE FOX HUNT",
		"procedure": "Shake, coupe, 7 drops Peychaud's bitters",
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
		]
	},
	{
		"name": "BRIAR PATCH",
		"procedure": "Shake first 3 ingredients, Collins glass, crushed ice. Top with blackberry cordial, blackberry, lemon twist",
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
		]
	},
	{
		"name": "BLACKBERRY CORDIAL",
		"procedure": "Infuse for 1 hour, strain through a fine chinois or cheesecloth",
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
		]
	},
	{
		"name": "THE RIVIERA",
		"procedure": "Double shake, coupe, mint leaf, orange bitters drops",
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
		]
	},
	{
		"name": "PINEAPPLE INFUSED GIN",
		"procedure": "Combine and let sit for 24 hours, strain through a fine chinois or cheesecloth",
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
		]
	},
	{
		"name": "BLUE RIDGE MANHATTAN",
		"procedure": "Shake, rinsed coupe, lemon twist",
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
		]
	},
	{
		"name": "PART & PARCEL",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "RANGOON FIZZ",
		"procedure": "Shake, Collins glass, cracked ice. Top with tonic water, mint Sprig",
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
		]
	},
	{
		"name": "SAZERAC #1",
		"procedure": "Stir, rinsed old fashioned glass, big cube, lemon peel",
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
		]
	},
	{
		"name": "CHI-TOWN FLIP",
		"procedure": "Shake, Collins glass, grated nutmeg, 3 drops Fees Old Fashioned bitters",
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
		]
	},
	{
		"name": "HUSH & WONDER",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "LADY CLOVER",
		"procedure": "Double shake, Collins glass, cracked ice. Top with soda, 5 drops Angostura bitters",
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
		]
	},
	{
		"name": "TAX THE DAISY",
		"procedure": "Shake liquids and peels, coupe, 3 drops Angostura bitters",
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
		]
	},
	{
		"name": "ANGOSTURA FIZZ",
		"procedure": "Double shake first 5 ingredients, Collins glass, cracked ice. Top with ginger ale, lemon Wheel",
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
		]
	},
	{
		"name": "EYES WIDE",
		"procedure": "Shake first 5 ingredients, Collins glass, cracked ice. Top with soda, float Hibiscus syrup, grapefruit peel",
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
		]
	},
	{
		"name": "IRON CROSS",
		"procedure": "Dry shake, shake with ice for two minutes, coupe, 4 drops Angostura bitters",
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
		]
	},
	{
		"name": "SEEING TRACES",
		"procedure": "Double shake, coupe, 4 drops orange flower water",
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
		]
	},
	{
		"name": "DAISY 17",
		"procedure": "Shake, coupe, flamed orange twist (discarded)",
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
		]
	},
	{
		"name": "JAMAICAN JULEP",
		"procedure": "Stir first 3 ingredients, julep cup, top with pineapple juice",
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
		]
	},
	{
		"name": "SPEAKING IN TONGUES",
		"procedure": "Shake, double strain, coupe",
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
		]
	},
	{
		"name": "THE VIOLET HOUR",
		"procedure": "Stir, coupe, lemon twist",
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
		]
	},
	{
		"name": "EEYORE'S REQUIEM",
		"procedure": "Stir, rocks glass, large cube, express orange oil, orange twist",
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
		]
	},
	{
		"name": "THE WARNING LABEL",
		"procedure": "Stir, rinsed cocktail glass, lemon twist",
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
		]
	},
	{
		"name": "A MOMENT OF SILENCE",
		"procedure": "Stir, rinsed rocks glass, orange twist",
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
		]
	},
	{
		"name": "VARIATION ON A THEME",
		"procedure": "Stir, rocks glass, orange twist",
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
		]
	},
	{
		"name": "IMPROVED SCOTCH SLING",
		"procedure": "Stir, rocks glass, lemon twist",
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
		]
	},
	{
		"name": "PIMM'S UP",
		"procedure": "Shake, coupe, two drops celery bitters",
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
		]
	},
	{
		"name": "GUNSHOP FIZZ",
		"procedure": "Shake first 7 ingredients, Collins glass, cracked ice. Top with Sanbitter, cucumber slice",
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
		]
	},
	{
		"name": "WESTERN PASSAGE",
		"procedure": "Stir, coupe, cherry, express orange peel",
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
		]
	},
	{
		"name": "PATENT PENDING",
		"procedure": "Stir, double old fashioned glass, large cube, express grapefruit peel",
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
		]
	},
	{
		"name": "BAMBOO",
		"procedure": "Stir, coupe, lemon twist",
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
		]
	},
	{
		"name": "OLD FRIEND",
		"procedure": "Shake, coupe, lemon twist.",
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
		]
	},
	{
		"name": "GREEN TEA PUNCH",
		"procedure": "Stir, punch glass, cracked ice, grated nutmeg",
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
		]
	},
	{
		"name": "MONTE CARLO",
		"procedure": "Stir, old-Fashioned glass, large cube. Express lemon peel, drop in",
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
		]
	},
	{
		"name": "AUTUMN OLD-FASHIONED",
		"procedure": "Stir, old-Fashioned glass, large cube, express lemon and orange peel, drop in",
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
		]
	},
	{
		"name": "THE FIELD MARSHALL",
		"procedure": "Stir first 4 ingredients, Champagne flute. Top with Champagne, lemon twist",
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
		]
	},
	{
		"name": "SHERRY COBBLER",
		"procedure": "Stir, Collins glass, crushed ice, orange wheel, mint sprig",
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
		]
	},
	{
		"name": "TRACTION",
		"procedure": "Shake, double strain, old-Fashioned glass, crushed ice, strawberry, lemon wedge, mint sprig",
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
		]
	},
	{
		"name": "SMOKE AND MIRRORS",
		"procedure": "Shake, double old-Fashioned glass, large cube, mint sprig",
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
		]
	},
	{
		"name": "SMOKESCREEN",
		"procedure": "Shake, double old-Fashioned glass over, large cube, mint sprig",
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
		]
	},
	{
		"name": "JACK FROST",
		"procedure": "Swizzle, Collins glass, crushed ice, with the mint sprig, sage bouquet, dusting of powdered sugar",
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
		]
	},
	{
		"name": "RATIONAL THOUGHT",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "MAIDEN'S BLUSH",
		"procedure": "Shake, punch glass",
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
		]
	},
	{
		"name": "RASPBERRY CORDIAL",
		"procedure": "Puree raspberries, mix in sugar syrup. Strain through a chinois or cheesecloth into a bottle. Add rose water and Everclear and shake",
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
		]
	},
	{
		"name": "DELICIOUS SOUR",
		"procedure": "Shake, punch glass, cracked ice, grated nutmeg.",
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
		]
	},
	{
		"name": "WHISKEY COCKTAIL #2",
		"procedure": "Stir, cocktail glass, express orange peel",
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
		]
	},
	{
		"name": "BIJOU",
		"procedure": "Stir, cocktail glass, express orange peel",
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
		]
	},
	{
		"name": "SUISSESSE #2",
		"procedure": "Shake, cocktail glass, express lemon peel, grated nutmeg",
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
		]
	},
	{
		"name": "FLOR DE JEREZ",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "CITY OF GOLD SLING",
		"procedure": "Shake, highball glass, cracked ice, pineapple wedge",
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
		]
	},
	{
		"name": "PRETTY BIRD",
		"procedure": "Shake, double rocks glass, large cube, lime wheel, cherry flag",
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
		]
	},
	{
		"name": "BERMUDA DUNES",
		"procedure": "Shake, footed pilsner, crushed ice, mint sprig, lime wedge, cherry",
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
		]
	},
	{
		"name": "HONI HONI",
		"procedure": "Shaken, old fashioned glass, crushed ice, mint sprig, lime wedge, cherry",
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
		]
	},
	{
		"name": "MOJAVE PUNCH",
		"procedure": "Shake, footed pilsner, crushed ice",
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
		]
	},
	{
		"name": "DESERT ROSE",
		"procedure": "Shake, old fashioned glass, crushed ice, orange twist",
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
		]
	},
	{
		"name": "THE HARD SELL",
		"procedure": "Shake, cocktail glass, express grapefruit peel",
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
		]
	},
	{
		"name": "THE WARDLOW",
		"procedure": "Shake, coupe, 2 spritzes Absinthe",
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
		]
	},
	{
		"name": "FEAR AND LOATHING",
		"procedure": "Shake, highball glass, cracked ice, top with blood orange juice, blood orange wheel, mint sprig",
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
		]
	},
	{
		"name": "SCOTTISH KISS",
		"procedure": "Shake, coupe, raspberry",
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
		]
	},
	{
		"name": "MIDNIGHT BOTANIST",
		"procedure": "Shake, double strain, Collins glass, cracked ice. Top with seltzer, two blackberries, rosemary sprig",
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
		]
	},
	{
		"name": "OAXACAN SMOKE",
		"procedure": "Stir, rocks glass, large cube, orange peel",
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
		]
	},
	{
		"name": "LINCOLN COUNTY REVIVAL",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "STARBOARD LIGHT",
		"procedure": "Mix/whip shake, tiki mug, crushed ice, pineapple wedge, mint sprig",
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
		]
	},
	{
		"name": "RAIL CAR",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "FATHER'S ADVICE",
		"procedure": "Shake, coupe, orange peel, cherry",
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
		]
	},
	{
		"name": "PARLIAMENT PUNCH",
		"procedure": "Shake, Collins glass, crushed ice, frozen raspberries, edible orchid",
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
		]
	},
	{
		"name": "BRIDGETOWN",
		"procedure": "Shake, Collins glass, crushed ice",
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
		]
	},
	{
		"name": "KINGSTON CLUB",
		"procedure": "Shake, Collins glass, cracked ice. Top with seltzer, orange twist",
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
		]
	},
	{
		"name": "NORWEGIAN WOOD",
		"procedure": "Stir, coupe, lemon twist",
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
		]
	},
	{
		"name": "AUTUMN LEAVES",
		"procedure": "Stir, old fashioned glass, cracked ice, orange peel",
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
		]
	},
	{
		"name": "PEGU CLUB",
		"procedure": "Shake, cocktail glass, lime wheel",
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
		]
	},
	{
		"name": "ANDALUSIAN BUCK",
		"procedure": "Shake first 4 ingredients, Collins glass, cracked ice. Top with ginger beer, lime wheel",
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
		]
	},
	{
		"name": "PRESTON-BAKER",
		"procedure": "Stir, cocktail glass, lemon twist",
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
		]
	},
	{
		"name": "WORTHY ADVERSARY",
		"procedure": "Shake, tiki mug, crushed ice, orange slice, mint sprig, pinch of curry powder",
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
		]
	},
	{
		"name": "ITALIAN JOB",
		"procedure": "Stir, cocktail glass, express orange peel, dehydrated orange wheel",
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
		]
	},
	{
		"name": "THE COUNT RIDES AGAIN",
		"procedure": "Stir, rocks glass, cracked ice, grapefruit twist",
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
		]
	},
	{
		"name": "X MARKS THE SPOT",
		"procedure": "Double shake, cocktail glass, float star anise pod",
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
		]
	},
	{
		"name": "MANHATTAN PROJECT",
		"procedure": "Stir, coupe, lemon twist",
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
		]
	},
	{
		"name": "CALM",
		"procedure": "Stir, rocks glass, large cube, lemon peel, chamomile flowers",
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
		]
	},
	{
		"name": "TALL TALE",
		"procedure": "Shake first 5 ingredients, Collins glass, cracked ice. Top with ginger beer, cucumber wheel",
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
		]
	},
	{
		"name": "NICHOL PUNCH",
		"procedure": "Shake, cocktail glass",
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
		]
	},
	{
		"name": "SWEET HEREAFTER",
		"procedure": "Stir, coupe, express grapefruit peel",
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
		]
	},
	{
		"name": "MOONSHAKE",
		"procedure": "Double shake first 7 ingredients, highball glass. Top with seltzer, mint sprig, express grapefruit peel",
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
		]
	},
	{
		"name": "GOLDEN EYE",
		"procedure": "Shake first 4 ingredients, cocktail glass. Top with Lambrusco, rosemary sprig",
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
		]
	},
	{
		"name": "SANTIAGO PUNCH",
		"procedure": "Shake, double strain, rocks glass, big cube, Thai basil sprig",
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
		]
	},
	{
		"name": "MONKEY FLIP",
		"procedure": "Double shake, double strain, cocktail glass, grated cinnamon, dehydrated banana chip",
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
		]
	},
	{
		"name": "VAGABOND",
		"procedure": "Shake, cocktail glass",
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
		]
	},
	{
		"name": "THROUGH THE LOOKING GLASS",
		"procedure": "Mix/whip shake, tiki mug, crushed ice. Float Port, dehydrated lemon wheel",
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
		]
	},
	{
		"name": "CARTHUSIAN STAR",
		"procedure": "Shake, coupe glass",
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
		]
	},
	{
		"name": "WITCH DOCTOR",
		"procedure": "Stir, sage leaf-smoked rocks glass, large cube, express grapefruit peel",
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
		]
	},
	{
		"name": "LEVIATHAN",
		"procedure": "Swizzle, tiki mug, crushed ice. Float bitters, edible orchid",
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
		]
	},
	{
		"name": "SILK ROAD SOUR",
		"procedure": "Shake, coupe glass, grapefruit twist",
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
		]
	},
	{
		"name": "CHICAGO TYPEWRITER",
		"procedure": "Stir, coupe glass, express lemon peel",
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
		]
	},
	{
		"name": "STRAW DOG",
		"procedure": "Shake, double strain, coupe glass, strawberry",
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
		]
	},
	{
		"name": "ABSENT STARS",
		"procedure": "Shake, cocktail glass, orange twist",
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
		]
	},
	{
		"name": "TRANSATLANTIC ORBIT",
		"procedure": "Mix/whip shake, tiki mug, crushed ice, lime shell, mint sprig",
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
		]
	},
	{
		"name": "DOPPELGANGER",
		"procedure": "Shake, cocktail glass, mint sprig",
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
		]
	},
	{
		"name": "WINCHESTER",
		"procedure": "Mix/whip shake, tiki mug, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "LIGHTNING SWORDS OF DEATH",
		"procedure": "Swizzle, tiki mug, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "ELIXIR ALPESTRE",
		"procedure": "Stir, coupe glass, lemon twist",
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
		]
	},
	{
		"name": "BEACHCOMBER'S PUNCH",
		"procedure": "Mix/whip shake, champagne flute, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "GOLD CUP",
		"procedure": "Shake, coupe glass",
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
		]
	},
	{
		"name": "HAWAIIAN ROOM",
		"procedure": "Shake, cocktail glass",
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
		]
	},
	{
		"name": "PLANET OF THE APES",
		"procedure": "Mix/whip shake, Collins glass, crushed ice, banana slice, cocktail cherry, edible orchid",
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
		]
	},
	{
		"name": "RUM RUNNER",
		"procedure": "Mix/whip shake, tiki mug, crushed ice",
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
		]
	},
	{
		"name": "KRAKATOA",
		"procedure": "Mix/whip shake large brandy snifter, crushed ice. Float coffee",
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
		]
	},
	{
		"name": "TORTUGA",
		"procedure": "Shake, footed pilsner, crushed ice, lime wedge",
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
		]
	},
	{
		"name": "NEVER SAY DIE",
		"procedure": "Mix/whip shake, wine glass, crushed ice",
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
		]
	},
	{
		"name": "PAINKILLER",
		"procedure": "Mix/whip shake, tiki mug, crushed ice. Dust with cinnamon and nutmeg, pineapple stick, cinnamon stick, orange wheel",
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
		]
	},
	{
		"name": "Q.B. COOLER",
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, multiple mint sprigs",
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
		]
	},
	{
		"name": "BLACKBEARD'S GHOST",
		"procedure": "Mix/whip shake, double old-fashioned glass, orange slice, cocktail cherry",
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
		]
	},
	{
		"name": "ANCIENT MARINER",
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, mint sprig, lime wedge",
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
		]
	},
	{
		"name": "BEACHBUM'S OWN",
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, mint sprig, lime wedge",
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
		]
	},
	{
		"name": "COCOANUT GROVE COOLER",
		"procedure": "Mix/whip shake, Collins glass, crushed ice, orange slice, cocktail cherry, mint sprig",
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
		]
	},
	{
		"name": "FU MANCHU",
		"procedure": "Shake, old-fashioned glass, lime wedge, cocktail cherry",
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
		]
	},
	{
		"name": "GOLDEN DREAM",
		"procedure": "Shake, cocktail glass",
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
		]
	},
	{
		"name": "GOLDEN WAVE",
		"procedure": "Mix/whip shake, old-fashioned glass, crushed ice, pineapple stick, edible orchid",
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
		]
	},
	{
		"name": "JAGUAR",
		"procedure": "Stir first 10 ingredients, Collins glass, crushed ice. Top with champagne, pineapple stick, cocktail cherry",
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
		]
	},
	{
		"name": "SCHOONER",
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice",
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
		]
	},
	{
		"name": "PARADISE COOLER",
		"procedure": "Shake, Collins glass, crushed ice, cocktail cherry, apple wedge, mint sprig",
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
		]
	},
	{
		"name": "KAVA BOWL FOR TWO",
		"procedure": "Mix/whip shake, tiki bowl, cracked ice, gardenia",
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
		]
	},
	{
		"name": "RUM KEG FOR TWO",
		"procedure": "Mix/whip shake, tiki bowl, cracked ice",
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
		]
	},
	{
		"name": "OAHU GIN SLING",
		"procedure": "Shake first 5 ingredients, footed pilsner, crushed ice. Top with seltzer, stir, lime spiral",
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
		]
	},
	{
		"name": "PAGO PAGO",
		"procedure": "Shake, cocktail glass",
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
		]
	},
	{
		"name": "RUM BARREL",
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, orange peel",
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
		]
	},
	{
		"name": "SUNDOWNER",
		"procedure": "Shake, old-fashioned glass, crushed ice, lime wheel",
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
		]
	},
	{
		"name": "MOLOKAI MULE",
		"procedure": "Shake, double old-fashioned glass, crushed ice, pineapple stick, mint sprig, edible orchid",
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
		]
	},
	{
		"name": "TAHITIAN RUM PUNCH",
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "YELLOW SUBMARINE",
		"procedure": "Shake, Collins glass, cracked ice, pineapple chunk, cocktail cherry",
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
		]
	},
	{
		"name": "ARIKI MAU",
		"procedure": "Shake, large tiki mug, crushed ice, express orange peel, orange wheel",
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
		]
	},
	{
		"name": "BEACHBUM",
		"procedure": "Shake, rocks glass, cracked ice, cocktail cherry, orange slice",
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
		]
	},
	{
		"name": "CUSCO FIZZ",
		"procedure": "Shake first 4 ingredients, old-fashioned glass, cracked ice. Top with seltzer",
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
		]
	},
	{
		"name": "FAREWELL FLIP",
		"procedure": "Shake, old-fashioned glass, grated nutmeg, chocolate flakes",
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
		]
	},
	{
		"name": "GANTT'S TOMB",
		"procedure": "Shake, footed pilsner, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "KIWI'S NEST GROG",
		"procedure": "Shake, double strain, Collins glass, crushed ice, kiwi fruit wheel",
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
		]
	},
	{
		"name": "KERALA",
		"procedure": "Shake, double strain, coupe glass",
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
		]
	},
	{
		"name": "RUMSCULLION",
		"procedure": "Stir, cocktail glass, express orange peel, orange twist",
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
		]
	},
	{
		"name": "VAVA VOOM",
		"procedure": "Shake, coupe glass, lime wedge",
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
		]
	},
	{
		"name": "VOYAGER",
		"procedure": "Shake, old-fashioned glass, cracked ice, lime wedge",
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
		]
	},
	{
		"name": "ROAD TO MANHATTAN",
		"procedure": "Stir, rocks glass, large cube",
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
		]
	},
	{
		"name": "T & T SOUR",
		"procedure": "Double shake, coupe",
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
		]
	},
	{
		"name": "FLYING ELVIS",
		"procedure": "Double shake, old-fashioned glass, 3 drops Angostura bitters ",
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
		]
	},
	{
		"name": "BOMBAY GOVERNMENT PUNCH",
		"procedure": "Stir, double old-fashioned glass, cracked ice, grated nutmeg",
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
		]
	},
	{
		"name": "OLD TIMER",
		"procedure": "Shake first 6 ingredients, Collins glass, cracked ice. Top with seltzer, orange twist",
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
		]
	},
	{
		"name": "NORTH SEA OIL",
		"procedure": "Stir, double old-fashioned glass, large cube, grapefruit twist",
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
		]
	},
	{
		"name": "NATIONAL TREASURE",
		"procedure": "Stir, rocks glass, large cube, lemon twist",
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
		]
	},
	{
		"name": "LAHAINA NOON",
		"procedure": "Mix/whip shake, tiki mug , crushed ice, mint sprig",
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
		]
	},
	{
		"name": "CHAOS CALMER",
		"procedure": "Shake, double old-fashioned glass, orange wheel",
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
		]
	},
	{
		"name": "HERMOSA BEACH",
		"procedure": "Shake, rocks glass, large cube, basil leaf",
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
		]
	},
	{
		"name": "LIFE IS BEAUTIFUL",
		"procedure": "Shake, cocktail glass, two cherries",
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
		]
	},
	{
		"name": "PERFECT AMARETTO SOUR",
		"procedure": "Double shake, old fashioned glass, cracked ice, lemon peel, brandied cherry",
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
		]
	},
	{
		"name": "TARUS THE BULL",
		"procedure": "Stir first four ingredients, cocktail glass. Top with bitters, lemon twist",
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
		]
	},
	{
		"name": "ALAMAGOOZLUM",
		"procedure": "Shake vigorously, large cocktail glass",
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
		]
	},
	{
		"name": "DROVE MY CHEVY TO THE LEVEE",
		"procedure": "Stir, old-fashioned glass, cracked ice, sliced peaches",
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
		]
	},
	{
		"name": "THE AVENUE",
		"procedure": "Shake, cocktail glass, edible carnation",
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
		]
	},
	{
		"name": "BARNUM WAS RIGHT",
		"procedure": "Shake, cocktail glass, lemon twist",
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
		]
	},
	{
		"name": "CHATHAM HOTEL SPECIAL",
		"procedure": "Shake, cocktail glass",
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
		]
	},
	{
		"name": "THE COMMUNIST",
		"procedure": "Shake, cocktail glass",
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
		]
	},
	{
		"name": "THE CORPSE REVIVER #2",
		"procedure": "Shake, coupe, cherry",
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
		]
	},
	{
		"name": "CRIMEAN CUP A LA MARMORA",
		"procedure": "Stir first 9 ingredients, large cocktail glass, large cubes. Top with champagne",
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
		]
	},
	{
		"name": "THE DERBY",
		"procedure": "Shake, cocktail glass, mint leaf",
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
		]
	},
	{
		"name": "EAST INDIA COCKTAIL",
		"procedure": "Shake, cocktail glass, cherry",
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
		]
	},
	{
		"name": "THE FORD COCKTAIL",
		"procedure": "Stir, martini glass, orange twist",
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
		]
	},
	{
		"name": "GEORGIA MINT JULEP",
		"procedure": "Stir, julep cup, crushed ice, several mint sprigs",
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
		]
	},
	{
		"name": "GOLDEN DAWN",
		"procedure": "Shake, cocktail glass, cherry",
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
		]
	},
	{
		"name": "INCOME TAX",
		"procedure": "Shake, cocktail glass, orange wheel",
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
		]
	},
	{
		"name": "THE JAPALAC COCKTAIL",
		"procedure": "Shake, cocktail glass, orange twist",
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
		]
	},
	{
		"name": "JASPER'S RUM PUNCH",
		"procedure": "Stir, Collins glass, cracked ice, cherry",
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
		]
	},
	{
		"name": "LUCIEN GAUDIN",
		"procedure": "Stir, cocktail glass, orange twist",
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
		]
	},
	{
		"name": "PARK AVENUE",
		"procedure": "Shake, cocktail glass",
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
		]
	},
	{
		"name": "PEGU CLUB",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "THE PENDENNIS",
		"procedure": "Shake, cocktail glass",
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
		]
	},
	{
		"name": "THE SECRET COCKTAIL",
		"procedure": "Double shake, Double strain, rocks glass, large cube, three brandied cherries",
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
		]
	},
	{
		"name": "SAINT CROIX RUM FIX",
		"procedure": "Stir, wine glass, crushed ice, seasonal fruit",
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
		]
	},
	{
		"name": "SEELBACH",
		"procedure": "Stir first 4 ingredients, champagne flute. Top with champagne, orange twist",
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
		]
	},
	{
		"name": "THE SOOTHER",
		"procedure": "Shake, goblet, lemon twist",
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
		]
	},
	{
		"name": "THE STRAITS SLING",
		"procedure": "Shake first 6 ingredients, champagne flute. Top with seltzer, cherry, orange wheel, lemon twist",
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
		]
	},
	{
		"name": "WILD IRISH ROSE",
		"procedure": "Shake, punch glass",
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
		]
	},
	{
		"name": "FLAMENCO",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "PHILADELPHIA FISH HOUSE PUNCH FOR TWO",
		"procedure": "Stir, punch glass",
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
		]
	},
	{
		"name": "DON'T TREAD ON ME",
		"procedure": "Shake, coupe, thyme sprig",
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
		]
	},
	{
		"name": "ARCHIPELAGO",
		"procedure": "Mix/whip shake, tiki mug, cracked ice, lemon peel, mint sprig",
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
		]
	},
	{
		"name": "LINGUA FRANCA",
		"procedure": "Shake first 7 ingredients, Collins glass, cracked ice. Top with seltzer, mint sprig, lemon twist",
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
		]
	},
	{
		"name": "BIRD ON A WIRE",
		"procedure": "Shake, coupe, lemon twist",
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
		]
	},
	{
		"name": "STEEPLECHASE",
		"procedure": "Shake, rocks glass, mint sprig",
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
		]
	},
	{
		"name": "GOLDEN SWIZZLE",
		"procedure": "Swizzle, Collins glass, crushed ice, pineapple slice, mint sprig",
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
		]
	},
	{
		"name": "ISLAND BATIDA",
		"procedure": "Shake, Collins glass, crushed ice, pineapple wedge, grated nutmeg",
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
		]
	},
	{
		"name": "PARTRIDGE IN A PEAR TREE",
		"procedure": "Shake, coupe, rosemary sprig",
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
		]
	},
	{
		"name": "MOUNT MAKANA",
		"procedure": "Shake, tiki mug, crushed ice, mint sprig",
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
		]
	},
	{
		"name": "GHOST IN THE GRAVEYARD",
		"procedure": "Shake, old-fashioned glass, cracked ice, mint sprig",
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
		]
	},
	{
		"name": "SCARECROW",
		"procedure": "Stir, coupe, express orange peel",
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
		]
	},
	{
		"name": "BATTLE OF TRAFALGAR",
		"procedure": "Shake, rocks glass, express orange peel",
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
		]
	},
	{
		"name": "POLYNESIAN REMEDY",
		"procedure": "Shake, Tiki mug, crushed ice, candied ginger, lemon wheel, pineapple frond",
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
		]
	},
	{
		"name": "JUNGLE BOOBY",
		"procedure": "Mix/whip shake, rocks glass, crushed ice, pineapple wedge, mint sprig",
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
		]
	},
	{
		"name": "SEAHORSE",
		"procedure": "Shake, rocks glass, crushed ice, mint sprig, grated cinnamon",
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
		]
	},
	{
		"name": "BANANA CUP #1",
		"procedure": "Shake first 4 ingredients, rocks glass, cracked ice. Top with ginger beer, mint sprig",
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
		]
	},
	{
		"name": "THE FINAL WARD",
		"procedure": "Shake, cocktail glass",
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
		]
	},
	{
		"name": "OLD NUMBER ONE",
		"procedure": "Stir, coupe, cherry",
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
		]
	},
	{
		"name": "EARTHBOUND",
		"procedure": "Shake, coupe, grapefruit twist",
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
		]
	},
	{
		"name": "BURROUGH'S REVIVER",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "RIKI TIKI TAVI",
		"procedure": "Swizzle, Julep cup, crushed ice, mint sprig, grated cinnamon",
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
		]
	},
	{
		"name": "IMMIGRANT SONG",
		"procedure": "Stir, rocks glass, cracked ice, lemon twist",
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
		]
	},
	{
		"name": "THE FRONTIER",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "ELEVENTH HOUR",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "MASTER'S CHAIR",
		"procedure": "Stir, coupe",
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
		]
	},
	{
		"name": "BROKEN COMPASS",
		"procedure": "Stir, rocks glass, large cube, orange peel",
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
		]
	},
	{
		"name": "MR. WEDNESDAY",
		"procedure": "Mix/whip shake, tiki mug, crushed ice, edible orchid",
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
		]
	},
	{
		"name": "MILES AHEAD",
		"procedure": "Shake, coupe",
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
		]
	},
	{
		"name": "SAILOR'S DELIGHT",
		"procedure": "Shake, Collins glass, crushed ice, cherry",
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
		]
	},
	{
		"name": "LOST HORIZON",
		"procedure": "Stir, rinsed old fashioned glass, orange twist",
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
		]
	},
	{
		"name": "GOLDEN TICKET",
		"procedure": "Shake, coupe, lemon twist",
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
		]
	},
	{
		"name": "THE MINTON",
		"procedure": "Stir, coupe",
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
		]
	},
	{
		"name": "SHADDOCK",
		"procedure": "Shake, cocktail glass, lemon twist",
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
		]
	},
	{
		"name": "NORMANDIE CLUB COLLINS",
		"procedure": "Shake, Collins glass, cracked ice. Top with seltzer, lemon wheel",
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
		]
	},
	{
		"name": "A MAN ABOUT TOWN",
		"procedure": "Stir, rocks glass, cracked ice, orange twist",
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
		]
	},
	{
		"name": "SEAWARD",
		"procedure": "Express oil from peels into mixing glass. Add all ingredients, stir, coupe",
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
		]
	},
	{
		"name": "FALLBACK",
		"procedure": "Stir, cocktail glass, orange twist",
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
		]
	},
	{
		"name": "TOUCH OF LOVE",
		"procedure": "Shake, Tiki mug, crushed ice. Top with seltzer, mint sprig",
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
		]
	},
	{
		"name": "HARRISON BERGERON",
		"procedure": "Stir, double old-fashioned glass, cracked ice, orange twist",
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
		]
	},
	{
		"name": "FLOWER & VINE",
		"procedure": "Shake, double old-fashioned glass",
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
		]
	},
	{
		"name": "LETTERS OF MARQUE",
		"procedure": "Stir, coupe, flamed orange oil",
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
		]
	},
	{
		"name": "PRETEDANT NOBEL",
		"procedure": "Shake, cocktail glass, lemon twist",
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
		]
	},
	{
		"name": "HUNGRY LIKE THE WOLF",
		"procedure": "Shake, rocks glass, crushed ice. Top with ginger beer, lemon twist",
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
		]
	},
	{
		"name": "BOURBON SWIZZLE",
		"procedure": "Swizzle, crushed ice, Collins glass. Mint sprig, grated nutmeg",
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
		]
	},
	{
		"name": "ANALOGUE",
		"procedure": "Stir, rocks glass, large cube, lemon twist",
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
		]
	},
	{
		"name": "IN BLOOM",
		"procedure": "Stir, rinsed coupe, flamed orange oil",
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
		]
	},
	{
		"name": "DON'S MIX",
		"procedure": "Mix",
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
		]
	},
	{
		"name": "DON'S SPICES #2",
		"procedure": "Mix",
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
		]
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