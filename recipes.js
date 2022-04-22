var recipes = [
	{
		"name": "Osedax",
		"ingredients": [
			"2 ozElijah Craig Bourbon",
			".5 ozFernet Valet",
			".25 ozBenedictine",
			".5 ozDry Curaçao"
		],
		"procedure": "Rocks glass over big rock, dehydrated orange wheel"
	},
	{
		"name": "It Slaps",
		"ingredients": [
			"1 ozReyka Vodka",
			"1 ozCombier Pamplemousse Rose",
			".5 ozLemon juice",
			".5 ozGrapefruit juice",
			".5 ozAquafaba",
			".25 oz2:1 Simple syrup"
		],
		"procedure": "Double shake, crushed ice, rocks glass, grapefruit peel."
	},
	{
		"name": "Rye Not",
		"ingredients": [
			"1.5 ozTLW Knob Creek Rye",
			".5 ozCombier Kümmel",
			".75 ozLemon juice",
			".25 ozOrange juice",
			".25 oz2:1 Simple syrup"
		],
		"procedure": "Shake, rocks glass, dehydrated lemon wheel"
	},
	{
		"name": "The Allfathers Eye",
		"ingredients": [
			"1 ozNorden Aquavit",
			"1 ozMeletti",
			".75 ozCold Brew",
			"2 Dashes Cherry Vanilla Bark Bitters"
		],
		"procedure": "Stirred, coupe. Dehydrated lemon wheel"
	},
	{
		"name": "There's Always Money in the Banana Stand",
		"ingredients": [
			"1 ozBanhez mezcal",
			".75 ozBanana Liqueur",
			".5 ozDomain de Canton",
			".75 ozLime juice",
			".5 ozPineapple juice"
		],
		"procedure": "Shake, coupe. Dehydrated banana chip"
	},
	{
		"name": "Borderline",
		"ingredients": [
			"1.5 Mezcal",
			".75 Lime juice",
			".5 Grenadine",
			".25 Maraschino",
			".25 Dry Curaçao",
			"Egg white/aquafaba"
		],
		"procedure": "Double shake, coupe."
	},
	{
		"name": "Sweet Talker",
		"ingredients": [
			"1.5 ozTitos vodka",
			".75 ozLime juice",
			".75 ozStrawberry Mint syrup",
			".25 ozSimple syrup",
			"Kombucha"
		],
		"procedure": "Shake. Collins. Cube ice, top with kombucha, mint sprig"
	},
	{
		"name": "Nice Guy",
		"ingredients": [
			"1.5 ozElijah Craig bourbon",
			"1 ozPeach Shrub",
			".75 ozLemon juice",
			".25 ozYellow Chartreuse",
			".25 ozOrgeat"
		],
		"procedure": "Shake, double strain into Collins. Cube ice, top with soda, dehydrated lemon wheel"
	},
	{
		"name": "The New Hotness",
		"ingredients": [
			"1.5 Lunazul",
			".75 Grapefruit Liqueur",
			".75 Dolin Dry vermouth"
		],
		"procedure": "Stir, coupe, grapefruit peel"
	},
	{
		"name": "Honma Highball",
		"ingredients": [
			"1 ozJapanese Plum liqueur",
			".75 ozHibiscus-infused Aperol",
			"3 ozCold-brewed Oolong Tea",
			".25 ozOrgeat",
			".25 ozCitric/Malic Acid Solution",
			"1 ozSuntory Toki scotch or Suntori Roku Gin"
		],
		"procedure": "Shake, Collins, cube ice. Carbonate before pouring or add a splash of soda. Orange peel"
	},
	{
		"name": "Norden Sour",
		"ingredients": [
			"2 ozNorden Aquavit",
			".25 ozApricot brandy",
			".75 ozLemon juice",
			".25 ozOrange juice",
			"1 ozAquafaba",
			".5 oz2:1 or .75 oz1:1 Simple syrup"
		],
		"procedure": "Shake, chilled rocks glass, no ice, lemon zest (discard). Three marigold flowers"
	},
	{
		"name": "Hunter's Rally",
		"ingredients": [
			".75 ozPisco",
			".75 ozPlantation Dark rum",
			"1 ozGrenadine",
			".75 ozLime juice",
			".25 ozLemon juice",
			".5 ozEgg white"
		],
		"procedure": "Double shake, double strain into Collins, dehydrated lime, Angostura bitters drops"
	},
	{
		"name": "You're My Boy Blue",
		"ingredients": [
			"7-8 Blueberries",
			"1.5 ozElijah Craig bourbon",
			".75 ozSt. Germain",
			".75 ozLemon juice",
			".25 ozSimple syrup"
		],
		"procedure": "Muddle blueberries, add the rest. Shake, double strain into rocks glass with ice."
	},
	{
		"name": "Caraway My Wayward Son",
		"ingredients": [
			"1 ozNorden Aquavit",
			".75 ozMontenegro",
			".25 ozDon Ciccio & Figli",
			".75 ozLemon juice",
			".5 ozHoney syrup"
		],
		"procedure": "Shake, coupe, orange peel."
	},
	{
		"name": "Hot Chocavit",
		"ingredients": [
			"1.25 ozNorden Aquavit",
			".5 ozAverna",
			".5 ozCarpano Antica",
			"1 Tbsp Hot chocolate powder",
			"3 drops Chocolate extract",
			"3 ozHot water"
		],
		"procedure": "Coffee mug or toddy glass, stir, top with Caraway whipped cream, cocoa dust"
	},
	{
		"name": "Kentucky Square",
		"ingredients": [
			"1.25 ozPhoenix Barrel Brandy",
			".75 ozPunt e mes",
			".5 ozBecherovka",
			".5 ozBerentzen Apple",
			"Dash Orange bitters"
		],
		"procedure": "Stir, rocks glass, big cube, dehydrated orange wheel"
	},
	{
		"name": "Rosie",
		"ingredients": [
			"1 ozRose Gin",
			".5 ozLemon juice",
			".5 ozSt. Germain",
			".25 ozSimple syrup"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "Osborn",
		"ingredients": [
			"1 slice of jalepeño",
			"2 cubes of pineapple",
			"2 ozGin",
			".5 ozLime juice",
			".25 ozSimple syrup"
		],
		"procedure": "Muddle jalepeño and pineapple. Shake, double strain, old fashioned glass"
	},
	{
		"name": "Sunset Curse",
		"ingredients": [
			"1.5 ozEspelon reposado tequila",
			".5 ozGrenadine",
			".5 ozAncho Reyes",
			".25 ozDry Curaçao",
			".25 ozAllspice dram"
		],
		"procedure": "Stirred, cocktail glass, flamed orange peel"
	},
	{
		"name": "Christmas in Cozmel",
		"ingredients": [
			"1.5 ozDon Julio reposado",
			".5 ozAmaro Montenegro",
			".5 ozLustau Oloroso sherry",
			".25 ozAgave"
		],
		"procedure": "Stirred, coupe glass, lime flag"
	},
	{
		"name": "Hold Up",
		"ingredients": [
			"1.5 ozNorden Aquavit",
			".5 ozSt Germain",
			".75 ozLime juice",
			".75 oz2:1 Honey syrup",
			"3 dash 4:1 Saline solution"
		],
		"procedure": "Shake, absinthe-rinsed glass, one mint leaf"
	},
	{
		"name": "Manhattan #1",
		"ingredients": [
			"2.25 ozWild Turkey whiskey",
			".75 ozCarpano Antica"
		],
		"procedure": "Stir, rocks glass, lemon flag"
	},
	{
		"name": "Manhattan #2",
		"ingredients": [
			"2.0 ozRittenhouse Rye",
			"1.0 ozCarpano punt e Mes",
			"1 dash Bitters"
		],
		"procedure": "Stir, rocks glass, orange flag"
	},
	{
		"name": "The Last Word",
		"ingredients": [
			".75 ozPlymouth gin",
			".75 ozGreen Chartreuse",
			".75 ozLuxardo Maraschino",
			".75 ozLime juice"
		],
		"procedure": "Shake, martini glass, lime Wheel"
	},
	{
		"name": "Los Lobos",
		"ingredients": [
			"1.5 ozLunazul Blanco tequila",
			".75 ozLime juice",
			".75 ozAgave syrup",
			".75 ozPineapple juice"
		],
		"procedure": "Shake, rocks glass, crushed pink peppercorn"
	},
	{
		"name": "Cabaret",
		"ingredients": [
			"1.5 ozTitos vodka",
			".75 ozLime juice",
			".5 ozAmaretto",
			".5 ozAgave syrup",
			"1 dash Bitter Truth Jerry Thomas bitters"
		],
		"procedure": "Shake, martini glass, lime wheel"
	},
	{
		"name": "Kentucky Sunshine",
		"ingredients": [
			"4 Basil leaves (muddled)",
			"2.0 ozElijiah Craig Small Batch bourbon",
			".5 ozLemon juice",
			".25 Brown Simple syrup",
			"5 drops Celery Shrub",
			"Ginger beer"
		],
		"procedure": "Shake first 5 ingredients, double strain, rocks glass. Top with ginger beer, basil leaf"
	},
	{
		"name": "Old West Side",
		"ingredients": [
			"1.5 ozWild Turkey whiskey",
			"1 ozSmoked Domain de Canton",
			".75 ozCarpano Antica",
			"2 dashes Orange bitters"
		],
		"procedure": "stir, rocks glass, grapefruit peel"
	},
	{
		"name": "Baker Street",
		"ingredients": [
			"1.5 ozSt. George Terroir Gin",
			".75 ozDolin Blanc vermouth",
			".5 ozDry Curacao",
			".25 ozGreen Chartreuse"
		],
		"procedure": "Stir, coupe, rosemary sprig"
	},
	{
		"name": "Mother's Ruin",
		"ingredients": [
			"1.25 ozTanqueray Gin",
			".75 ozCynar",
			".75 ozLemon juice",
			".75 ozPineapple juice",
			".5 ozGrapefruit juice",
			".25 ozOrgeat"
		],
		"procedure": "Shake, cocktail glass, rosemary sprig."
	},
	{
		"name": "Party Police",
		"ingredients": [
			"1 ozVida Mezcal",
			"1 ozStrawberry balsamic shrub",
			".5 ozDomaine de Canton",
			".5 ozLime juice",
			".25 2:1 Simple syrup"
		],
		"procedure": "Shake, collins glass"
	},
	{
		"name": "Smash Brothers",
		"ingredients": [
			"1.5 ozElijah Craig bourbon",
			".25 ozLimoncello",
			".75 ozBlack Sage syrup",
			".5 ozLemon juice",
			".25 oz2:1 Simple syrup"
		],
		"procedure": "Shake, highball glass. Top with soda, sage leaf."
	},
	{
		"name": "A Morning Rum",
		"ingredients": [
			"1.5 ozPlantation Original Dark rum",
			".5 ozChicory syrup",
			"1 ozCold brew",
			"7 drops Banana extract"
		],
		"procedure": "Stir, rocks glass, dehydrated lime or orange wheel"
	},
	{
		"name": "Snake Oil Salesman",
		"ingredients": [
			"1 ozGreen Chartreuse",
			".5 ozMyers Dark Rum",
			".25 Laphroaig 10 scotch",
			"1 ozLime Juice",
			".5 ozPineapple Juice",
			".5 ozBrown Simple syrup",
			"2 Dashes Angostura bitters"
		],
		"procedure": "Shake, crushed ice, dragon glass, lime wheel"
	},
	{
		"name": "The Heist",
		"ingredients": [
			"1.5 ozHayman's Old Tom Gin",
			".5 ozAverna",
			".75 ozLemon juice",
			".5 oz2:1 Honey syrup"
		],
		"procedure": "Shake, Absinthe glass, lemon peel"
	},
	{
		"name": "Rhum Old Fashioned",
		"ingredients": [
			"2.0 ozClement Barrel Select rhum agricole",
			".25 ozOrgeat",
			"2 dash Cherry Vanilla Bark bitters",
			"1 Dash Angostura bitters"
		],
		"procedure": "Stir, rocks glass, orange peel"
	},
	{
		"name": "Kissed by a Rose",
		"ingredients": [
			"1.5 ozHayman's gin",
			".5 ozClaret syrup",
			".5 ozLemon juice",
			".5 ozEgg white"
		],
		"procedure": "Double shake, coupe, rose bud"
	},
	{
		"name": "(C)ole' fashioned",
		"ingredients": [
			"1.5 ozWild Turkey 101 whiskey",
			".5 ozDolin Genepy",
			".25 oz2:1 Brown Simple syrup",
			"2 dash Peychaud's bitters",
			"2 dash Angostura bitters"
		],
		"procedure": "Stir, big cube, rocks glass, lemon peel"
	},
	{
		"name": "Senor Burns",
		"ingredients": [
			"7 drops Jalapeno tincture",
			"1.5 ozMezcal",
			".75 ozLime juice",
			".75 ozAncho Reyes",
			".25 oz2:1 Simple syrup"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "Pining Princess",
		"ingredients": [
			"1 ozAmaro Montenegro",
			"1 ozPineapple juice",
			"1 ozLime juice",
			".25 ozOrgeat",
			".5 ozDry Curaçao"
		],
		"procedure": "Shake, crushed ice, Collins glass"
	},
	{
		"name": "Sacred Heart",
		"ingredients": [
			"1 ozMezcal",
			"1 ozAperol",
			".5 ozLime juice",
			".5 ozOrgeat",
			".25 ozStreyga"
		],
		"procedure": "Shake, coupe, grapefruit peel"
	},
	{
		"name": "Queen of Cups",
		"ingredients": [
			"1.5 ozHaymans Old Tom Gin",
			".75 ozLemon juice",
			".5 ozFennel liqueur",
			".25 ozBecherovka",
			".25 ozOrgeat"
		],
		"procedure": "Shake, cocktail glass, rosemary sprig"
	},
	{
		"name": "Ice Planet",
		"ingredients": [
			"1.5 ozReyka",
			".5 ozDolin Blanc vermouth",
			".5 ozBecherovka",
			".5 ozStreyga",
			".25 ozOrgeat",
			"2 dash Peychaud's bitters"
		],
		"procedure": "Stir, rocks glass, orange peel"
	},
	{
		"name": "Sea Castle",
		"ingredients": [
			"1.5 ozVida Mezcal",
			".75 ozLemon juice",
			".5 ozCreme de Violette",
			".25 ozOrgeat",
			".5 ozEgg white or Aquafaba"
		],
		"procedure": "Double shake, martini glass, Peychaud's bitters"
	},
	{
		"name": "Last Minute",
		"ingredients": [
			"Muddled Ginger",
			"1 ozTanqueray Gin",
			"1 ozDomaine de Canton",
			".75 ozGrapefruit juice",
			".5 ozSimple syrup",
			".5 ozLemon juice"
		],
		"procedure": "Shake, double strain, martini glass, grapefruit peel"
	},
	{
		"name": "Estrella Negra",
		"ingredients": [
			"1.75 ozDon Julio Reposado tequila",
			".25 ozFernet Valet",
			".5 ozPiloncillo syrup",
			".5 ozHyperion Cold Brew"
		],
		"procedure": "Shake, rocks glass, big cube"
	},
	{
		"name": "Tell Me No Fibs, I'll Tell You No Lies",
		"ingredients": [
			"1.25 ozCopper & Kings American Brandy",
			".75 ozDon Ciccio e Figli Fennel liqueur",
			".5 ozLemon juice",
			".25 ozBerentzen Apple liqueur",
			".25 oz1:1 Simple syrup"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "The Stampede",
		"ingredients": [
			"1.5 Buffalo Trace bourbon",
			".75 Fernet",
			".75 Lime juice",
			".5 2:1 Simple syrup"
		],
		"procedure": "Shake, rocks glass, mint sprig"
	},
	{
		"name": "TRUE GRIT",
		"ingredients": [
			"1.5 ozBulleit Rye",
			"0.5 ozBenedictine",
			"0.5 ozTawny Port",
			"0.5 ozCarpano Antica",
			"2 dashes House Aromatic Bitters"
		],
		"procedure": "Stir, rocks glass, big cube, lemon wheel"
	},
	{
		"name": "Roaring 40's",
		"ingredients": [
			"1 Thick cucumber slice (muddled)",
			"1.5 ozBarsol Pisco",
			"1 ozAperol",
			".5 ozLime juice"
		],
		"procedure": "Muddle with sea salt. Shake, double strain, coupe, cucumber slice"
	},
	{
		"name": "Rye Daiquiri",
		"ingredients": [
			"1.75 ozBulliet Rye",
			".75 ozLime juice",
			".5 ozOrgeat",
			".25 ozLuxardo Maraschino liqueur"
		],
		"procedure": "Shake, coupe, lime wheel"
	},
	{
		"name": "Basil & Bubbles",
		"ingredients": [
			"3 Basil leaves (muddled)",
			"2 ozGin",
			".75 ozLemon juice",
			".75 ozSimple syrup",
			"Champagne"
		],
		"procedure": "Shake first 4 ingredients, double strain, champagne flute. Top with champagne, basil leaf"
	},
	{
		"name": "The Purple Gang",
		"ingredients": [
			"1.0 ozTitos vodka",
			".5 ozCreme de Violette",
			".5 ozSt. Germain",
			"Champagne"
		],
		"procedure": "Shake, champagne flute. Top with champagne, lemon twist."
	},
	{
		"name": "Wise Guy",
		"ingredients": [
			"1.5 ozBuffalo Trace bourbon",
			".5 ozCynar",
			".5 ozLazzeroni Amaretto",
			"1 dash Orange bitters"
		],
		"procedure": "Stir, coupe, orange peel"
	},
	{
		"name": "Paradiso Sour",
		"ingredients": [
			".75 ozBuffalo Trace bourbon",
			".75 ozAperol",
			".75 ozGrapefruit juice",
			".25 ozLemon Juice",
			".25 ozSimple syrup",
			"Egg White"
		],
		"procedure": "Double shake, rocks glass, orange peel"
	},
	{
		"name": "Nevermore",
		"ingredients": [
			"1.5 ozFour Roses bourbon",
			".75 ozCynar",
			".5 ozBranca Menta",
			".5 ozCold brew"
		],
		"procedure": "Shake, rocks glass, orange peel"
	},
	{
		"name": "Blood & Smoke",
		"ingredients": [
			"1 ozMezcal",
			".75 ozPunt E Mes",
			".5 ozCherry Heering",
			".75 ozOrange juice"
		],
		"procedure": "Shake, martini glass"
	},
	{
		"name": "Dr. Ordinaire",
		"ingredients": [
			"1.5 ozTanqueray Gin",
			".5 ozAbsinthe Ordinaire",
			".5 ozLime juice",
			".5 oz1:1 Simple syrup"
		],
		"procedure": "Shake, coupe with one drop of Peychaud's in glass, orange peel"
	},
	{
		"name": "Red Rum",
		"ingredients": [
			".75 ozRon Zacapa rum",
			".75 ozRum Barbancourt 8 rum",
			"1.0 ozCarpano Antica",
			".5 ozMaraschino liqueur",
			"2 dash Orange bitters"
		],
		"procedure": "Shake, rocks glass, orange cherry flag"
	},
	{
		"name": "Spice and Everything Nice",
		"ingredients": [
			"1.5 ozColonel Taylor Small Batch bourbon",
			".5 ozAllspice dram",
			".5 ozTawny Port",
			".25 ozBenedictine",
			".25 ozCarpano Antica"
		],
		"procedure": "Stir, rocks glass, big rock, express orange peel, torched cinnamon stick"
	},
	{
		"name": "Yellow Bird",
		"ingredients": [
			"2.25 ozEl Dorado 3 Year Demerara rum",
			"1 ozBanana liqueur",
			"1 ozApricot brandy",
			"2 ozPineapple juice",
			".5 ozLime juice",
			"1 tsp Allspice dram",
			"2 dashes Jamaican bitters"
		],
		"procedure": "Shake, collins, crushed ice"
	},
	{
		"name": "Apricot Julep",
		"ingredients": [
			"2 ozBourbon",
			".5 ozApricot liqueur",
			".5 ozSimple syrup",
			"10-14 Mint leaves (muddled)",
			"3 Apricot slices (muddled)"
		],
		"procedure": "Stir with crushed ice. Mint sprig"
	},
	{
		"name": "Age of Aquarius",
		"ingredients": [
			"1.5 ozMezcal",
			".75 ozLime juice",
			".75 ozPassionfruit syrup",
			".25 ozHoney syrup",
			".5 ozCampari"
		],
		"procedure": "Shake first 4 ingredients, rocks glass, crushed ice. Float Campari, mint sprig"
	},
	{
		"name": "Scofflaw",
		"ingredients": [
			"1.5 ozRye",
			"1 ozBlanc Vermouth",
			".5 ozLemon juice",
			".5 ozGrenadine",
			"1 dash Orange bitters"
		],
		"procedure": "Shake, cocktail glass"
	},
	{
		"name": "Lost Lake",
		"ingredients": [
			"2 ozJamaican rum",
			".25 ozCampari",
			".25 ozMaraschino liqueur",
			".75 ozLime juice",
			".75 ozPassionfruit syrup",
			".5 ozPineapple juice"
		],
		"procedure": "Mix/whip shake, crushed ice, footed pilsner"
	},
	{
		"name": "Bitter Mai Tai",
		"ingredients": [
			"1 ozCampari",
			"1 ozSmith & Cross rum",
			".5 ozDry Curacao",
			"1 ozLime juice",
			".5 ozOrgeat"
		],
		"procedure": "Mix/whip shake, crushed ice, rocks glass. Mint, lime wheel"
	},
	{
		"name": "Mr. Bodi Hai",
		"ingredients": [
			"1.5 ozReal McCoy Rum",
			".25 ozCoffee liqueur",
			".25 ozBanana liqueur",
			"1.5 ozPineapple juice",
			".75 ozLemon juice",
			".5 ozMacadamia Orgeat",
			"1 dash Angostura bitters"
		],
		"procedure": "Mix/whip shake with crushed ice, pour into footed pilsner. Top up, pineapple fronds"
	},
	{
		"name": "Banana Farmer",
		"ingredients": [
			"1 ozSmith & Cross rum",
			"1 ozPlantation 3 Star white rum",
			"1 ozBanana liqueur",
			".5 ozVelvet Falernum",
			"1 ozLime juice",
			".75 ozPineapple juice"
		],
		"procedure": "Mix/whip shake, crushed ice, Collins glass, pineapple fronds"
	},
	{
		"name": "Fay Wray",
		"ingredients": [
			".75 ozGold Rum Barbancourt",
			".75 ozCognac",
			".75 ozBanana liqueur",
			".75 ozLime juice",
			".25 ozRhum agricole",
			".25 oz2:1 Demerara syrup"
		],
		"procedure": "Lightly muddle lime wedge, mix/whip shake, crushed ice, rocks glass. Dried banana or mint sprig"
	},
	{
		"name": "Keichō Embassy",
		"ingredients": [
			"1.5 ozSuntory Toki Japanese whiskey",
			".5 ozSt. Germain elderflower liqueur",
			".25 ozYellow Chartreuse",
			"1 ozFuji apple juice",
			"1 ozLemon juice"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "Father Knows Best",
		"ingredients": [
			"1.5 ozMacallan 12 year Scotch whiskey",
			".5 ozJägermeister",
			".25 ozGreen Chartreuse",
			".25 ozRoot beer syrup"
		],
		"procedure": "Stir with ice, pour into bottle and smoke. Pour into rocks glass with large cube"
	},
	{
		"name": "Arrack Punch",
		"ingredients": [
			"1.5 ozBatavia Arrack",
			".5 ozJamaican rum",
			".75 ozLemon juice",
			".75 ozSimple syrup",
			".5 ozPineapple juice"
		],
		"procedure": "Mix/whip shake, crushed ice, goblet. Fresh fruit, pineapple fronds"
	},
	{
		"name": "Seven Seas Swizzle",
		"ingredients": [
			"2 ozBatavia Arrack",
			".5 ozLime juice",
			".5 ozGreen Tea syrup",
			"1 dash Orange bitters"
		],
		"procedure": "Swizzle, crushed ice, Collins glass. Mint sprig, lime wheel, grated nutmeg"
	},
	{
		"name": "Boilermaker House Sour",
		"ingredients": [
			"2 ozJW Double Black Scotch whiskey",
			".75 ozLemon juice",
			".375 oz2:1 Simple syrup",
			".375 ozPassionfruit syrup",
			"2 dashes Angostura bitters",
			"1 Egg white",
			"IPA beer"
		],
		"procedure": "Double shake all but beer, cocktail glass. Top with IPA"
	},
	{
		"name": "Chamomile Sour",
		"ingredients": [
			"1.5 ozChamomile Gin",
			".5 ozBlanc Vermouth",
			".75 ozLemon juice",
			".5 ozSimple syrup",
			"1 Egg white"
		],
		"procedure": "Double shake, chilled coupe, chamomile flowers"
	},
	{
		"name": "Chamomile Gin",
		"ingredients": [
			"8 ozGin",
			"8 grams Chamomile flowers or tea bags"
		],
		"procedure": "Shake or stir gently to combine, let infuse for 5 days or to taste"
	},
	{
		"name": "Guardian Angel",
		"ingredients": [
			"2-3 slices Cucumber (lightly muddled)",
			"1.25 ozAmaro Montenegro",
			".75 ozWray and Nephew Overproof rum",
			".75 ozOrgeat",
			".75 Lime juice",
			"3 drops Rosewater"
		],
		"procedure": "Shake, double strain, coupe, cucumber slice"
	},
	{
		"name": "Billionaire",
		"ingredients": [
			"2 ozOverproof Bourbon",
			".5 ozSimple syrup",
			".5 ozCampari",
			".25 ozAbsinthe bitters",
			"1 ozLemon juice"
		],
		"procedure": "Shake, cocktail glass, dehydrated lemon wheel"
	},
	{
		"name": "Blood and Sand",
		"ingredients": [
			".75 ozScotch",
			".75 ozCherry Heering",
			".75 ozSweet Vermouth",
			".75 ozOrange juice"
		],
		"procedure": "Shake first 3 ingredients, rocks glass. Top with orange juice"
	},
	{
		"name": "Fernando",
		"ingredients": [
			"1.25 ozFernet Branca",
			"1.75 ozCinzano Bianco vermouth",
			".75 ozGalliano"
		],
		"procedure": "Stir, large ice, cocktail glass, mint sprig"
	},
	{
		"name": "Nerina",
		"ingredients": [
			"1.25 ozPlymouth Gin",
			"1.25 ozMeletti amaro",
			"1.25 ozPunt e Mes"
		],
		"procedure": "Stir, large ice, cocktail glass orange twist"
	},
	{
		"name": "Pêche Bourbon",
		"ingredients": [
			".5 ozMassenez Crème de Pêche or Peach liqueur",
			"1 Brown sugar cube",
			".5 teaspoon Superfine sugar",
			"3 dashes Peychaud’s bitters",
			"3 dashes Fee Brothers peach bitters",
			"2 ozPeach-Infused Bourbon"
		],
		"procedure": "Muddle sugar and bitters in mixing glass, add bourbon, stir with ice. Rocks glass rinsed with crème de pêche, mint sprig"
	},
	{
		"name": "Jersey Devil",
		"ingredients": [
			"1.75 ozEnglish Bishop",
			"1.5 ozLaird’s straight apple brandy",
			".5 ozBerentzen Apfelkorn apple liqueur",
			"3 dashes Peychaud’s bitters"
		],
		"procedure": "Stir, large ice, cocktail glass, orange wheel"
	},
	{
		"name": "Mata Hari",
		"ingredients": [
			"1.25 ozLouis Royer Force 53 VSOP cognac",
			"1 ozChai-Infused Sweet vermouth",
			".75 ozLemon juice",
			".75 ozPomegranate juice",
			".5 ozSimple syrup"
		],
		"procedure": "Shake, cocktail glass, 3 dried rose buds"
	},
	{
		"name": "Pisco Punch",
		"ingredients": [
			"2 1-inch cubes Pineapple",
			"1.5 ozPineapple syrup",
			"2 ozBarsol Pisco",
			".5 ozLemon juice",
			".5 ozLime juice",
			"5 drops Bitter Truth Celery bitters"
		],
		"procedure": "Muddle pineapple and pineapple syrup, add the rest, shake, double strain, goblet filled with ice. Lemon wheel, pineapple wedge"
	},
	{
		"name": "Ruby Tuesday",
		"ingredients": [
			".75 oz5 ripe Black cherries (muddled)",
			"1.5 ozWild Turkey 101 Rye",
			"1 ozBenedictine",
			".75 ozLemon juice",
			".5 ozSimple syrup"
		],
		"procedure": "Shake, strain into chilled cocktail glass. Lemon twist"
	},
	{
		"name": "Waterloo",
		"ingredients": [
			"4 (1-2 inch) cubes Watermelon",
			".75 ozSimple syrup",
			"1.5 ozPlymouth Gin",
			".5 ozLemon juice",
			".5 ozCampari"
		],
		"procedure": "Muddle watermelon and syrup until liquid. Add the rest, shake, unstrained into collins glass. Watermelon wedge."
	},
	{
		"name": "Yellow Jacket",
		"ingredients": [
			"2 ozPartida Reposado tequila",
			"1 ozSt. Germain",
			".75 ozYellow Chartreuse",
			"1 dash Orange bitters"
		],
		"procedure": "Stir, large ice, cocktail glass, lemon twist"
	},
	{
		"name": "Mid-Morning Fizz",
		"ingredients": [
			".5 ozGreen Chartreuse",
			"1 ozClub soda",
			"1.75 ozMartin Miller’s Westbourne Strength 100-proof Gin",
			"1 ozLemon juice",
			".75 ozSimple syrup",
			"5 drops Orange blossom water",
			"1 Egg white"
		],
		"procedure": "Pour chartreuse into collins glass with ice and club soda, chill. Shake the other ingredients for 2 minutes. Strain into glass. Orange wheel"
	},
	{
		"name": "English Bishop",
		"ingredients": [
			"1 Orange",
			"30 Cloves",
			"1 (750 ml) bottle Ruby port",
			"1 cup Superɹne sugar"
		],
		"procedure": "Stud orange with cloves, place in baking dish, bake at 400°F until entire orange is browned, about 30 minutes. Carefully cut into quarters, place into saucepan with the port simmer on medium heat for 30 minutes. Strain, add the sugar to the liquid. Cool, strain again, and bottle."
	},
	{
		"name": "Sour Mix",
		"ingredients": [
			"2 whole Lemon",
			"4 whole Lime",
			"1 whole Orange",
			"1 Cup 1:1 Simple syrup"
		],
		"procedure": "Juice all fruit, mix with syrup"
	},
	{
		"name": "Robb's Grandma",
		"ingredients": [
			"2 ozEarly Times whiskey",
			"1 ozSweet vermouth",
			"2 Maraschino cherries"
		],
		"procedure": "Rocks glass, large cube, barspoon of cherry syrup, stir"
	},
	{
		"name": "Citric Acid Solution",
		"ingredients": [
			"100 grams filtered water",
			"25 grams citric acid powder"
		],
		"procedure": "Mix until dissolved"
	},


	{
		"name": "#3 Cup",
		"ingredients": [
			"4–5 Mint leaves (muddled)",
			"2 slices Cucumber (muddled)",
			"1 slice Orange (muddled)",
			"1 oz Hine V.S.O.P. cognac",
			"1 oz Ginger Beer",
			".75 oz Martini sweet vermouth",
			".5 oz Orange Curaçao",
			".5 oz Cherry Heering",
			".5 oz Lemon juice"
		],
		"procedure": "Shake, double strain, Collins glass, mint sprig, orange slice"
	},
	{
		"name": "20th Century",
		"ingredients": [
			"1.5 oz Plymouth Gin",
			".75 oz Crème de Cacao",
			".75 oz Lillet Blanc",
			"75 oz Lemon juice"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "Against All Odds",
		"ingredients": [
			"1.5 oz Bushmills Irish Whiskey",
			"1.5 oz Channing Daughters Scuttlehole Chardonnay",
			".5 oz Apricot liqueur",
			".25 oz Rhum Clement Creole Shrubb",
			".5 ozMezcal"
		],
		"procedure": "Shake first 4 ingredients, coupe rinsed with Mezcal"
	},
	{
		"name": "Águil a Azteca",
		"ingredients": [
			"1.5 oz Jose Cuervo tequila",
			"1 oz Honeydew Melon juice",
			".25 oz Domaine de Canton",
			".25 oz Crème de Violette"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "Airmail",
		"ingredients": [
			"1 oz Banks 5 Island Rum",
			"5 oz Lime Juice",
			"5 oz Honey Syrup",
			"Champagne"
		],
		"procedure": "Shake, coupe, top with 1 ozchampagne, lime wheel"
	},
	{
		"name": "Albert Mathieu",
		"ingredients": [
			"1.5 oz Plymouth Gin",
			".75 oz Lillet Blanc",
			"75 oz Green Chartreuse",
			"1 barspn St. Germain",
			"1 dash Orange bitters"
		],
		"procedure": "Stir, coupe, orange twist"
	},
	{
		"name": "Applejack Rabbit",
		"ingredients": [
			"2 oz Apple Brandy",
			".75 oz Lemon juice",
			".75 oz Orange juice",
			".5 oz Grade B Maple syrup"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "Blackbeard",
		"ingredients": [
			"4 Blackberries (muddled)",
			"1.5 oz Beefeater Gin",
			".75 oz Aquavit",
			".75 oz Pineapple juice",
			".5 oz Lemon juice",
			".5 oz Agave syrup"
		],
		"procedure": "Dry shake, unstrained pour, rocks glass, pebble ice, mint sprig"
	},
	{
		"name": "Black Thorn",
		"ingredients": [
			"1.5 oz Plymouth Gin",
			".75 oz Sloe Gin",
			".75 oz Carpano Antica",
			"2 dashes Orange bitters"
		],
		"procedure": "Stir, coupe, orange twist"
	},
	{
		"name": "Champs-elysees",
		"ingredients": [
			"2 oz Hine V.S.O.P. cognac",
			".75 oz Lemon juice",
			".5 oz Green Chartreuse",
			".25 oz Simple syrup",
			"1 dash Angostura bitters"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "Chrysanthemum",
		"ingredients": [
			"2 oz Dolin Dry vermouth",
			".75 oz Benedictine",
			".25 oz Vieux Pontarlier Absinthe",
			"1 dash Orange bitters"
		],
		"procedure": "Stir, coupe"
	},
	{
		"name": "Cloister",
		"ingredients": [
			"1.5 oz Tanqueray Gin",
			".5 oz Yellow Chartreuse",
			".5 oz Grapefruit juice",
			".25 oz Lemon juice",
			".25 oz Simple syrup"
		],
		"procedure": "Shake, coupe, grapefruit twist"
	},
	{
		"name": "Conquistador",
		"ingredients": [
			"1 oz Matusalem Gran Reserva rum",
			"1 oz Siembra Azul Blanco tequila",
			".75 oz Simple syrup",
			".5 oz Lemon juice",
			".5 oz Lime juice",
			"2 dashes Orange bitters",
			"1 Egg white"
		],
		"procedure": "Double shake, coupe"
	},
	{
		"name": "Corpse Reviver #2",
		"ingredients": [
			".75 oz Plymouth Gin",
			".75 oz Cointreau",
			".75 oz Lillet Blanc",
			".75 oz Lemon Juice",
			"Absinthe (rinse)"
		],
		"procedure": "Shake, rinsed coupe"
	},
	{
		"name": "De La Louisiane",
		"ingredients": [
			"2 oz Wild Turkey Rye",
			".75 oz Dolin Sweet Vermouth",
			".75 oz Benedictine",
			"3 dashes Absinthe",
			"3 dashes Peychaud’s bitters"
		],
		"procedure": "Stir, coupe, three brandied cherries"
	},
	{
		"name": "East India Cocktail",
		"ingredients": [
			"1.75 oz Martell V.S.O.P. cognac",
			".5 oz Orange Curaçao",
			".5 oz Pineapple juice",
			".25 oz Pampero Aniversario rum",
			"2 dashes Orange bitters"
		],
		"procedure": "Shake, coupe, orange twist"
	},
	{
		"name": "El Puente",
		"ingredients": [
			"1.5 oz Jose Cuervo Platino Tequila",
			".75 oz Grapefruit Juice",
			".5 oz Martini Bianco Vermouth",
			".5 oz St. Germain Elderflower Liqueur",
			".5 oz Mezcal (rinse)"
		],
		"procedure": "Shake, coupe, grapefruit twist"
	},
	{
		"name": "Ephemeral",
		"ingredients": [
			"2 oz Ransom Old Tom Gin",
			"1 oz Dolin Blanc Vermouth",
			"1 barspn St. Germain Elderflower Liqueur",
			"1 dash The Bitter Truth Celery Bitters"
		],
		"procedure": "Stir, coupe, grapefruit twist"
	},
	{
		"name": "Espresso Bongo",
		"ingredients": [
			"2 oz Appleton Reserve rum",
			".5 oz Espresso Liqueur",
			".5 oz Lime juice",
			".5 oz Pineapple juice",
			".5 oz Orange juice",
			"1 oz Passionfruit syrup"
		],
		"procedure": "Shake, unstrained pour, tiki mug"
	},
	{
		"name": "Fish House Punch",
		"ingredients": [
			"1.5 oz Gosling’s Black Seal rum",
			".5 oz Pierre Ferrand Ambre cognac",
			".5 oz Peach liqueur",
			".5 oz Lemon juice",
			".5 oz Simple syrup",
			".25 oz Lime juice"
		],
		"procedure": "Shake, rocks glass"
	},
	{
		"name": "Flying Dutchman",
		"ingredients": [
			".75 oz Clear Creek Plum brandy",
			".75 oz Bols Genever",
			".5 oz Crème Yvette",
			".5 oz Lemon juice",
			".5 oz Pineapple juice",
			"1 barspn Maraschino liqueur"
		],
		"procedure": "Shake, coupe, brandied cherry"
	},
	{
		"name": "Foreign Legion",
		"ingredients": [
			"1.5 oz Mount Gay X.O. rum",
			".5 oz Aperol",
			".5 oz Dubonnet Rouge",
			".5 oz Lustau Manzanilla sherry",
			"1 barspn Dark Crème de Cacao",
			"1 dash Fee Brothers Rhubarb Bitters"
		],
		"procedure": "Stir, rocks glass, ice sphere, orange twist"
	},
	{
		"name": "French Maid",
		"ingredients": [
			"3 Cucumber wheels (muddled)",
			"6-8 Mint leaves (muddled)",
			"1.5 oz Hine V.S.O.P. cognac",
			"1 oz House Ginger beer",
			".75 oz Lime juice",
			".75 oz Simple syrup",
			".25 oz Velvet Falernum"
		],
		"procedure": "Shake, double strain, Collins glass, mint sprig in cucumber wheel"
	},
	{
		"name": "Gilchrist",
		"ingredients": [
			"1.25 oz Compass Box Asyla Blended Scotch Whisky",
			".75 oz Pear brandy",
			".75 oz Grapefruit juice",
			".5 oz Averna Amaro",
			"2 dashes Fee Brothers Grapefruit bitters"
		],
		"procedure": "Shake, coupe, lemon twist"
	},
	{
		"name": "GOLDEN STAR FIZZ",
		"ingredients": [
			"3 Slices Cucumber (muddled)",
			"1 Sprig Dill (muddled)",
			"2 oz Krogstad Aquavit",
			".75 oz Lemon Juice",
			".75 oz Pineapple Juice",
			"3 oz Sparkling White Jasmine Tea",
			"Absinthe (rinse)"
		],
		"procedure": "Shake first 5 ingredients, double strain, rinsed fizz glass. Top with jasmine tea, cucumber slice"
	},
	{
		"name": "GREAT PUMPKIN",
		"ingredients": [
			"2 oz Southampton Pumpkin Ale",
			"1 oz Rittenhouse Bonded Rye",
			"1 oz Laird’s Bonded Apple Brandy",
			".5 oz Grade B Maple syrup",
			"1 Whole Egg"
		],
		"procedure": "Stir, double shake, strain into fizz glass, grated nutmeg"
	},
	{
		"name": "GREEN DEACON",
		"ingredients": [
			"1.5 oz Plymouth Gin",
			"1 oz Grapefruit juice",
			".75 oz Sloe Gin",
			"Absinthe (rinse)"
		],
		"procedure": "Shake, rinsed coupe"
	},
	{
		"name": "GREEN HARVEST",
		"ingredients": [
			"7 Concord Grapes (muddled)",
			"2 oz Chilled Brewed Hibiscus Tea",
			"1.5 oz Jose Cuervo Platino Tequila",
			".5 oz Green Chartreuse"
		],
		"procedure": "Stir, double strain, fizz glass, three concord grapes"
	},
	{
		"name": "GREENPOINT",
		"ingredients": [
			"2 oz Rittenhouse Bonded Rye",
			"1 oz Punt e Mes",
			"1 barspn Yellow Chartreuse",
			"1 dash of Angostura Bitters"
		],
		"procedure": "Stir, coupe"
	},
	{
		"name": "HARVEST MOON",
		"ingredients": [
			"1.5 oz Wild Turkey Rye",
			"1 oz Lillet Blanc",
			".5 oz Laird’s Bonded Apple Brandy",
			".25 oz Green Chartreuse",
			"3 dashes Abbott’s Bitters"
		],
		"procedure": "Stir, coupe, orange twist"
	},
	{
		"name": "HARVEST SLING",
		"ingredients": [
			"1.5 oz Laird’s Bonded Apple Brandy",
			".5 oz Martini Sweet Vermouth",
			".5 oz Benedictine",
			".5 oz Cherry Heering",
			".5 oz Lemon Juice",
			".5 oz Ginger Beer"
		],
		"procedure": "Shake, Collins glass, cherry and orange flag"
	},
	{
		"name": "HEIRLOOM",
		"ingredients": [
			"7 Concord Grapes (muddled)",
			"1.5 oz Hayman’s Old Tom Gin",
			".5 oz Cynar",
			".5 oz Lime Juice",
			".25 oz Strega"
		],
		"procedure": "Shake, double strain, coupe, two spritzes anise hyssop essence"
	},
	{
		"name": "HEMINGWAY DAIQUIRI",
		"ingredients": [
			"2 oz Banks 5 Island rum",
			".75 oz Lime Juice",
			".5 oz Luxardo Maraschino Liqueur",
			".5 oz Grapefruit Juice"
		],
		"procedure": "Shake, coupe, lime wheel"
	},
	{
		"name": "HENRY HUDSON",
		"ingredients": [
			"1.5 oz Bols Genever",
			"1 oz Chardonnay",
			".5 oz Lemon Juice",
			".5 oz Simple Syrup",
			".25 oz van Oosten Batavia Arrack"
		],
		"procedure": "Stir, rocks glass, large cube, grated nutmeg "
	},
	{
		"name": "HONEYMOON COCKTAIL",
		"ingredients": [
			"2 oz Laird’ s Bonded Apple Brandy",
			".5 oz Marie Brizard Orange Curaçao",
			".5 oz Benedictine",
			".5 oz Lemon Juice"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "HOTEL D’ALSACE",
		"ingredients": [
			"1 Small sprig Rosemary (muddled)",
			"2 oz Bushmills Irish Whiskey",
			".5 oz Cointreau",
			".5 oz Benedictine"
		],
		"procedure": "Stir, double strain, rocks glass, large cube, rosemary sprig"
	},
	{
		"name": "JAPANESE COURAGE",
		"ingredients": [
			"6 oz Kamoizumi “Shusen” Sake (warm)",
			"1 oz Bols Genever",
			".5 oz Yellow Chartreuse",
			".25 oz Canton Ginger Liqueur",
			".25 oz Honey Syrup"
		],
		"procedure": "Stir, pre-heated mug, lemon wheel studded with 6 cloves"
	},
	{
		"name": "JAPANESE COCKTAIL",
		"ingredients": [
			"2 oz Hine V.S.O.P. cognac",
			".5 oz Orgeat",
			"2 dashes Angostura bitters"
		],
		"procedure": "Stir, coupe, lemon twist"
	},
	{
		"name": "JUDGMENT DAY",
		"ingredients": [
			"1.5 oz Macchu Pisco",
			".5 oz St. Germain",
			".5 oz Lime Juice",
			".5 oz Lemon Juice",
			".5 oz Simple Syrup",
			"1 Egg White",
			"Absinthe (rinse)",
			"Allspice dram (spritz)"
		],
		"procedure": "Double shake, rinsed coupe, 2 spritzes allspice dram"
	},
	{
		"name": "JUNIOR",
		"ingredients": [
			"2 oz Rittenhouse Bonded Rye",
			".75 oz Lime Juice",
			".5 oz Benedictine",
			"2 dashes Angostura Bitters"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "KANSAI KICK",
		"ingredients": [
			"1.5 oz Yamazaki 12-Year-Old whiskey",
			".75 oz Blandy’s Sercial Madeira",
			".75 oz Lime Juice",
			".4 oz Orgeat"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "KINA MIELE",
		"ingredients": [
			"1 oz Dolin Dry Vermouth",
			".75 oz Cocchi Americano",
			".5 oz Nonino Gioiello",
			".25 oz Pear Brandy",
			"1 dash The Bitter Truth Lemon Bitters"
		],
		"procedure": "Stir, rocks glass, large cube, grapefruit twist"
	},
	{
		"name": "KING BEE",
		"ingredients": [
			"1.5 oz Barsol Quebranta Pisco",
			".75 oz Lemon Juice",
			".5 oz Benedictine",
			".5 oz Bärenjäger",
			".5 oz Lustau Palo Cortado Sherry"
		],
		"procedure": "Shake first 4 ingredients, coupe, float sherry"
	},
	{
		"name": "LA FLORIDA COCKTAIL",
		"ingredients": [
			"2 oz Banks 5 Island rum",
			"75 oz Lime Juice",
			".5 oz Crème de Cacao",
			".25 oz Martini Sweet Vermouth",
			"1 barspn Grenadine"
		],
		"procedure": "Shake, coupe, lime wheel"
	},
	{
		"name": "LA LOUCHE",
		"ingredients": [
			"1.5 oz Hendricks Gin",
			"1 oz Lillet Rouge",
			".5 oz Lime Juice",
			".25 oz Yellow Chartreuse",
			".25 oz Simple syrup"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "LEAPFROG",
		"ingredients": [
			"6 Mint leaves (muddled)",
			"2 oz Plymouth Gin",
			".75 oz Lemon Juice",
			".5 oz Apricot liqueur",
			".25 oz Simple syrup",
			"2 dashes Orange Bitters"
		],
		"procedure": "Shake, double strain, coupe"
	},
	{
		"name": "LE PÈRE BIS",
		"ingredients": [
			"4 oz Freshly Brewed Chamomile Tea",
			"1.5 oz Ardbeg 10-Year-Old Single Malt Scotch",
			".5 oz St. Germain Elderflower Liqueur",
			".5 oz Honey Syrup"
		],
		"procedure": "Stir, pre-heated mug, lemon wedge studded with three cloves"
	},
	{
		"name": "LUAU",
		"ingredients": [
			".75 oz Wray & Nephew Overproof rum",
			".75 oz Appleton Estate V/X rum",
			".75 oz El Dorado 15-Year-Old rum",
			".5 oz Lime juice",
			".5 oz Passionfruit syrup",
			".25 oz Orgeat",
			"1 dash Angostura bitters"
		],
		"procedure": "Shake, rocks glass, crushed ice, lime wheel, orange slice"
	},
	{
		"name": "MASATAKA SWIZZLE",
		"ingredients": [
			"1.5 oz Nikka Taketsuru 12-Year-Old Japanese whiskey",
			".5 oz Luxardo Amaretto",
			".5 oz Lemon Juice",
			"1 barspn Demerara Syrup",
			"Peychaud's bitters"
		],
		"procedure": "Swizzle, rocks glass, crushed ice, 3 dashes bitters, mint sprig"
	},
	{
		"name": "MEZCAL MULE",
		"ingredients": [
			"3 Slices Cucumber (muddled)",
			"1.5 oz Sombra Mezcal",
			"1 oz House Ginger Beer",
			".75 oz Lime Juice",
			".5 oz Passionfruit syrup"
		],
		"procedure": "Shake, rocks glass, candied ginger, cucumber slice, pinch of ground chili"
	},
	{
		"name": "NEW ORLEANS MILK PUNCH",
		"ingredients": [
			"1.5 oz Whole Milk",
			"1 oz Pierre Ferrand Ambre cognac",
			"1 oz Myers’s Dark rum",
			".75 oz Simple syrup"
		],
		"procedure": "Shake, rocks glass, large cube"
	},
	{
		"name": "MONTGOMERY SMITH",
		"ingredients": [
			"2 oz Hine V.S.O.P. Cognac",
			".5 oz Benedictine",
			".25 oz Fernet Branca"
		],
		"procedure": "Stir, coupe, lemon twist"
	},
	{
		"name": "MONKEY GLAND",
		"ingredients": [
			"2 oz Beefeater Gin",
			"1 oz Orange juice",
			"1 barspn Pomegranate Molasses",
			"Absinthe (rinse)"
		],
		"procedure": "Shake, rinsed coupe"
	},
	{
		"name": "MOUNT VERNON",
		"ingredients": [
			"1 oz Kirschwasser",
			"1 oz Brandy de Jerez",
			".75 oz Grapefruit juice",
			".5 oz Lustau Pedro Ximenez sherry",
			".5 oz Cherry Heering"
		],
		"procedure": "Shake, coupe, three brandied cherries"
	},
	{
		"name": "NEW AMSTERDAM",
		"ingredients": [
			"2 oz Bols Genever",
			"1 oz Kirschwasser",
			"1 barspn Demerara syrup",
			"2 dashes Peychaud’s bitters"
		],
		"procedure": "Stir, coupe, lemon twist"
	},
	{
		"name": "NEWARK",
		"ingredients": [
			"2 oz Laird’s Bonded Apple Brandy",
			"1 oz Vya Sweet vermouth",
			".25 oz Fernet Branca",
			".25 oz Maraschino Liqueur"
		],
		"procedure": "Stir, coupe"
	},
	{
		"name": "NOUVEAU CARRe",
		"ingredients": [
			"1.5 oz Ocho Añejo Tequila",
			".75 oz Lillet Blanc",
			".25 oz Benedictine",
			"3 dashes Peychaud’s bitters"
		],
		"procedure": "Stir, coupe, lemon twist"
	},
	{
		"name": "NTH DEGREE",
		"ingredients": [
			"1 oz Rhum Clement V.S.O.P.",
			"1 oz Laird’s Bonded Apple Brandy",
			".5 oz Green Chartreuse",
			"1 Demerara Sugar cube",
			"2 dashes Fee Brothers Whiskey Barrel Aged Bitters"
		],
		"procedure": "Muddle bitters with sugar cube, add the rest, stir, rocks glass, large cube, orange and lemon twist"
	},
	{
		"name": "OCCIDENTAL",
		"ingredients": [
			"2 oz Linie Aquavit",
			".75 oz Grand Marnier",
			".5 oz Amaro Nonino",
			"Fernet Branca (rinse)"
		],
		"procedure": "Stir, rinsed coupe, orange twist"
	},
	{
		"name": "OLD PAL",
		"ingredients": [
			"2 oz Old Overholt Rye",
			".75 oz Dolin Dry Vermouth",
			".75 oz Campari"
		],
		"procedure": "Stir, coupe"
	},
	{
		"name": "PADDINGTON",
		"ingredients": [
			"1.5 oz Banks 5 Island rum",
			".5 oz Lillet Blanc",
			".5 oz Grapefruit juice",
			".5 oz Lemon juice",
			"1 barspn Orange Marmalade",
			"Absinthe (rinse)"
		],
		"procedure": "Shake, rinsed coupe, grapefruit twist"
	},
	{
		"name": "PHARAOH COOLER",
		"ingredients": [
			"1.5 oz Partida Blanco Tequila",
			"1 oz Watermelon Juice",
			".75 oz House Grenadine",
			".5 oz Lime Juice",
			"4 drops Rosewater"
		],
		"procedure": "Shake, Collins glass, top with 1 oz soda"
	},
	{
		"name": "PROFESSOR",
		"ingredients": [
			"2 oz Rhum Clement V.S.O.P",
			".75 oz Dow’s Tawny Port",
			".5 oz Carpano Antica Sweet Vermouth",
			"1 dash Angostura bitters",
			"1 dash Orange bitters"
		],
		"procedure": "Stir, coupe, orange twist"
	},
	{
		"name": "REMEMBER THE MAINE",
		"ingredients": [
			"2 oz Wild Turkey Russell’s Reserve 6-Year-Old Rye",
			".75 oz Carpano Antica Sweet Vermouth",
			".5 oz Cherry Heering",
			"1 barspn Pernod"
		],
		"procedure": "Stir, coupe, lemon twist"
	},
	{
		"name": "RESTING POINT",
		"ingredients": [
			"1 Strawberry (muddled)",
			"1.5 oz Siete Leguas Reposado tequila",
			".5 oz Yellow Chartreuse",
			".5 oz Punt e Mes",
			".5 oz Lemon juice",
			".5 oz Agave syrup"
		],
		"procedure": "Shake, double strain, coupe, strawberry fan"
	},
	{
		"name": "RHUM CLUB",
		"ingredients": [
			"2 oz Banks 5 Island Rum",
			".75 oz Lime juice",
			".5 oz Rhum Clement Creole Shrubb",
			".25 oz Martinique Sugar Cane syrup",
			"2 dashes Angostura bitters",
			"1 dash Orange bitters"
		],
		"procedure": "Shake, coupe, orange wedge"
	},
	{
		"name": "RIO BRAVO",
		"ingredients": [
			"3 quarter-sized slices Ginger (muddled)",
			"2 oz Sagatiba Cachaça",
			".75 oz Lime juice",
			".5 oz Orgeat"
		],
		"procedure": "Shake, double strain, coupe, orange twist"
	},
	{
		"name": "ROSITA",
		"ingredients": [
			"1.5 oz Partida Reposado tequila",
			".5 oz Martini Sweet Vermouth",
			".5 oz Dolin Dry Vermouth",
			".5 oz Campari",
			"1 dash Angostura bitters"
		],
		"procedure": "Stir, coupe, orange twist"
	},
	{
		"name": "RUST BELT",
		"ingredients": [
			"1.5 oz Barbancourt 8-Year-Old Rhum",
			".5 oz Navan Vanilla Liqueur",
			".5 oz Lemon Juice",
			".5 oz Lime Juice",
			".25 oz Orgeat",
			"1 Egg White",
			"Angostura bitters (spritz)"
		],
		"procedure": "Double shake, coupe, 2 spritzes Angostura bitters"
	},
	{
		"name": "ROYAL BERMUDA YACHTCLUB COCKTAIL",
		"ingredients": [
			"2 oz Mount Gay Eclipse Amber rum",
			"1 oz Lime juice",
			".5 oz Cointreau",
			".5 oz Velvet Falernum"
		],
		"procedure": "Shake, coupe, lime wheel"
	},
	{
		"name": "RYE WITCH",
		"ingredients": [
			"2 oz Rittenhouse Bonded Rye",
			".25 oz Strega",
			".25 oz Lustau Palo Cortado Sherry",
			"1 Sugar Cube",
			"2 dashes House Orange Bitters"
		],
		"procedure": "Muddle bitters and sugar cube, add the rest, stir, rocks glass, express orange peel"
	},
	{
		"name": "SEELBACH COCKTAIL",
		"ingredients": [
			"1 oz Bulleit Bourbon",
			".5 oz Cointreau",
			"3 dashes Peychaud’s Bitters",
			"2 dashes Angostura Bitters",
			"Champagne"
		],
		"procedure": "Stir, coupe. Top with 2 oz champagne, orange twist"
	},
	{
		"name": "SILVER LINING",
		"ingredients": [
			"1.5 oz Old Overholt Rye",
			".75 oz Licor 43",
			".75 oz Lemon juice",
			".25 oz Simple syrup",
			"1 Egg white"
		],
		"procedure": "Double shake, fizz glass. Top with 1 oz soda"
	},
	{
		"name": "SLOE GIN FIZZ",
		"ingredients": [
			"1 oz Sloe Gin",
			"1 oz Plymouth Gin",
			".75 oz Lemon juice",
			".25 oz Simple syrup"
		],
		"procedure": "Shake, fizz glass. Top with 3 oz soda"
	},
	{
		"name": "SOLSTICE",
		"ingredients": [
			"1.5 oz Rittenhouse Bonded Rye",
			".5 oz Laird’s Bonded Apple Brandy",
			".5 oz Nonino Amaro",
			".5 oz Dubonnet Rouge",
			".25 oz House Grenadine"
		],
		"procedure": "Stir, coupe"
	},
	{
		"name": "STATESMAN",
		"ingredients": [
			"2 oz Beefeater 24 Gin",
			".5 oz Pear liqueur",
			"1 barspn Green Chartreuse",
			"1 dash Orange bitters"
		],
		"procedure": "Stir, coupe, lemon twist"
	},
	{
		"name": "TALBOTT LEAF",
		"ingredients": [
			"6 Mint Leaves (muddled)",
			"2 oz Old Grand-Dad Bonded Bourbon",
			".75 oz Lemon Juice",
			".5 oz Green Chartreuse",
			".25 oz Cynar",
			"1 barspn Strawberry Preserves"
		],
		"procedure": "Shake, double strain, coupe, mint leaf"
	},
	{
		"name": "TUXEDO",
		"ingredients": [
			"2 oz Plymouth Gin",
			"1.5 oz Dolin Dry Vermouth",
			".25 oz Maraschino liqueur",
			"2 dashes Orange bitters",
			"Absinthe (rinse)"
		],
		"procedure": "Stir, rinsed coupe, lemon twist, cherry"
	},
	{
		"name": "VAUVERT SLIM",
		"ingredients": [
			"6 Mint Leaves (muddled)",
			"1 oz Green Chartreuse",
			"2 oz Grapefruit Juice",
			".5 oz Lime Juice",
			"1 Egg White",
			"Laphroaig 10 scotch (rinse)"
		],
		"procedure": "Double shake, double strain, rinsed coupe, mint leaf"
	},
	{
		"name": "VELVET CLUB",
		"ingredients": [
			"1 oz Hine V.S.O.P. cognac",
			".5 oz Lillet Blanc",
			".5 oz White Crème de Cacao",
			"Champagne"
		],
		"procedure": "Stir, coupe. Top with 1 oz champagne"
	},
	{
		"name": "VIEUX MOT",
		"ingredients": [
			"1.5 oz Plymouth Gin",
			".75 oz Lemon Juice",
			".5 oz St. Germain",
			".5 oz Simple Syrup"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "VIEUX CARRe",
		"ingredients": [
			"1 oz Sazerac 6-Year-Old Rye",
			"1 oz Hine V.S.O.P. Cognac",
			"1 oz Carpano Antica",
			".25 oz Benedictine",
			"1 dash Angostura bitters",
			"1 dash Peychaud’s bitters"
		],
		"procedure": "Stir,rocks glass, large cube "
	},
	{
		"name": "WHISKEY SMASH",
		"ingredients": [
			"3 Lemon Wedges (muddled)",
			"6 Mint Leaves (muddled)",
			"2 oz Rittenhouse Bonded Rye",
			".75 oz Simple syrup"
		],
		"procedure": "Shake, double strain, rocks, mint sprig"
	},
	{
		"name": "WHITE BIRCH FIZZ",
		"ingredients": [
			"1.5 oz Plymouth Gin",
			".75 oz Lemon juice",
			".5 oz Strega",
			".5 oz Apricot liqueur",
			"1 Egg White",
			"Suze (spritz)"
		],
		"procedure": "Double shake, Collins glass. Top with 2 oz soda, spritz of Suze"
	},
	{
		"name": "WITCH’S KISS",
		"ingredients": [
			"2 oz Jose Cuervo Platino tequila",
			".75 oz Lemon juice",
			".5 oz Strega",
			"1 barspn Apple Butter"
		],
		"procedure": "Shake, coupe, lemon twist"
	},
	{
		"name": "AKU AKU",
		"ingredients": [
			"5 (1-inch-square) chunks pineapple (muddled)",
			"1 ozLime juice",
			".5 ozDemerara syrup",
			".5 ozPeach liqueur",
			"1.5 ozBlended lightly aged rum"
		],
		"procedure": "Mix/whip shake, double-strain, coupe, mint sprig"
	},
	{
		"name": "PUPULE",
		"ingredients": [
			".75 ozLime juice",
			".75 ozOrange juice",
			".25 ozCinnamon syrup",
			".25 ozVanilla syrup",
			".25 ozAllspice dram",
			"2 ozColumn still aged rum",
			"1 dash Angostura bitters"
		],
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, spiral-cut orange peel, mint sprig"
	},
	{
		"name": "DON’S OWN GROG",
		"ingredients": [
			".75 ozLime juice",
			".25 ozDemerara syrup",
			"1 dash Grenadine",
			".5 ozBlackberry Liqueur",
			"1 ozBlended aged rum",
			".5 ozBlended lightly aged rum",
			".5 ozBlack blended rum",
			"1 dash Angosutra bitters"
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, freshly grated nutmeg"
	},
	{
		"name": "PORT AU PRINCE",
		"ingredients": [
			".5 ozLime juice",
			".5 ozPineapple juice",
			".25 ozDemerara syrup",
			"1 dash Grenadine",
			".5 ozVelvet Falernum",
			"1.5 ozCane coffey still aged rum",
			"1 dash Angostura bitters"
		],
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, lime wedge"
	},
	{
		"name": "THREE DOTS AND A DASH",
		"ingredients": [
			".5 ozLime juice",
			".5 ozOrange juice",
			".5 ozHoney syrup",
			".25 ozVelvet Falernum",
			".25 ozAllspice dram",
			"1.5 ozRhum agricole vieux",
			".5 ozBlended aged rum",
			"1 dash Angostura bitters"
		],
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, three maraschino cherries and pineapple chunk"
	},
	{
		"name": "MEXICAN EL DIABLO",
		"ingredients": [
			"1 lime wedge",
			".5 ozLime juice",
			".5 oznatural crème de cassis",
			"1.5 ozblanco tequila",
			"4 ozreal ginger ale"
		],
		"procedure": "Swizzle, collins glass, cracked ice"
	},
	{
		"name": "PORT LIGHT",
		"ingredients": [
			"1 ozegg white",
			"2 ozbourbon",
			"1 ozLemon juice",
			".75 ozHoney syrup",
			".5 ozPassionfruit syrup"
		],
		"procedure": "Dry shake egg white and bourbon, add the rest, Mix/whip shake, footed pilsner, crushed ice"
	},
	{
		"name": "DEMERARA DRY FLOAT",
		"ingredients": [
			"2 ozLime juice",
			"1 tsp Lemon juice",
			"1.5 ozPassionfruit syrup",
			".25 ozDemerara syrup",
			".25 ozMaraschino liqueur",
			"1.5 ozBlended aged rum",
			".75 ozBlack blended overproof rum"
		],
		"procedure": "Mix/whip shake first 6 ingredients, double old-fashioned glass, crushed ice, serve with overproof rum on the side"
	},
	{
		"name": "JET PILOT",
		"ingredients": [
			".5 ozLime juice",
			".5 ozGrapefruit juice",
			".5 ozCinnamon syrup",
			".5 ozVelvet Falernum",
			"1 ozBlack blended rum",
			".75 ozBlended aged rum",
			".75 ozBlack blended overproof rum",
			"1 dash Herbstura"
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice"
	},
	{
		"name": "HALEKULANI COCKTAIL",
		"ingredients": [
			".5 ozLemon juice",
			".5 ozOrange juice",
			".5 ozPineapple juice",
			".25 ozDemerara syrup",
			".5 tsp Grenadine",
			"1.5 ozbourbon",
			"1 dash Angostura bitters"
		],
		"procedure": "Shake, double strain, coupe, edible orchid"
	},
	{
		"name": "SIDEWINDER’S FANG",
		"ingredients": [
			"1.5 ozLime juice",
			"1.5 ozOrange juice",
			"1.5 ozPassionfruit syrup",
			"3 ozSeltzer",
			"1 ozBlended aged rum",
			"1 ozBlack blended rum"
		],
		"procedure": "Mix/whip shake, strain, large brandy snifter, cracked ice, sidewinder's fang orange peel, mint sprig."
	},
	{
		"name": "HAWAIIAN SUNSET",
		"ingredients": [
			".5 ozLime juice",
			".5 ozLemon juice",
			".5 ozOrgeat",
			"1 tsp Grenadine",
			"1.5 ozvodka"
		],
		"procedure": "Shake, double strain, coupe, lime peel."
	},
	{
		"name": "CAPTAIN’S GROG",
		"ingredients": [
			".5 ozLime juice",
			".5 ozGrapefruit juice",
			".5 ozgrade A maple syrup",
			"3 drops Vanilla extract",
			"3 drops Almond extract",
			"1 ozSeltzer",
			".5 ozVelvet Falernum",
			".5 ozDry Curacao",
			".75 ozBlack blended rum",
			".75 ozBlended lightly aged rum",
			".75 ozBlended aged rum"
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, mint sprig"
	},
	{
		"name": "SUFFERING BASTARD",
		"ingredients": [
			".5 ozLime juice",
			".25 ozDemerara syrup",
			"1 ozLondon Dry Gin",
			"1 ozbrandy",
			"2 dashes Angostura bitters",
			"4 ozginger beer"
		],
		"procedure": "Shake first 5 ingredients, Collins glass, cracked ice. Top with ginger beer, mint sprig"
	},
	{
		"name": "MERCILESS VIRGIN",
		"ingredients": [
			".75 ozLemon juice",
			".5 ozSeltzer",
			".5 ozCherry Heering liqueur",
			".5 ozVelvet Falernum",
			".25 ozDry Curacao",
			"1.5 ozBlended lightly aged rum"
		],
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, Maraschino cherry"
	},
	{
		"name": "SATURN",
		"ingredients": [
			".75 ozLemon juice",
			".5 ozPassionfruit syrup",
			".25 ozOrgeat",
			".25 ozVelvet Falernum",
			"1.25 ozLondon Dry Gin"
		],
		"procedure": "Shake, coupe, lemon peel rings"
	},
	{
		"name": "TIKI BOWL FOR TWO",
		"ingredients": [
			"1.5 ozOrange juice",
			".75 ozLime juice",
			"1 ozHoney syrup",
			"1.25 ozBlack blended rum",
			"1 ozBlack blended overproof rum",
			"1 ozColumn still aged rum",
			"2 dashes Herbstura"
		],
		"procedure": "Mix/blend, tiki bowl, crushed ice, edible orchid"
	},
	{
		"name": "HURRICANE",
		"ingredients": [
			"2 ozLemon juice",
			"2 ozPassionfruit syrup",
			"4 ozBlack blended rum"
		],
		"procedure": "Mix/whip shake, hurricane glass, crushed ice, lemon wedge"
	},
	{
		"name": "MUNDO PERDIDO",
		"ingredients": [
			".75 ozLemon juice",
			".25 ozCinnamon syrup",
			".25 ozDemerara syrup",
			".5 ozApple brandy",
			"1.5 ozBlack blended rum"
		],
		"procedure": "Shake, coupe."
	},
	{
		"name": "FORMIDABLE DRAGON",
		"ingredients": [
			".75 ozLemon juice",
			".75 ozLime juice",
			".5 ozHoney syrup",
			".75 ozMolasses syrup",
			".5 ozAmaro Di Angostura",
			"1.5 ozBlended aged rum",
			"1 ozBlack blended rum",
			".25 ozPot still lightly aged rum (overproof)",
			"1 ozSeltzer"
		],
		"procedure": "Mix/Blend, large brandy snifter, crushed ice, edible orchid, multiple mint sprigs"
	},
	{
		"name": "LEI LANI NOUVEAU",
		"ingredients": [
			"1.5 ozPineapple juice",
			".75 ozLime juice",
			"1 ozCoconut cream",
			"1.5 ozBlended aged rum",
			"3 ozBundaberg Guava soda"
		],
		"procedure": "Shake first 4 ingredients, double strain, Collins glass, cracked ice. Top with guava soda, edible orchid"
	},
	{
		"name": "TRADEWINDS",
		"ingredients": [
			"1 ozLemon juice",
			"1.5 ozCoconut cream",
			"1 ozApricot liqueur",
			"1 ozBlack blended rum",
			"1 ozBlended lightly aged rum"
		],
		"procedure": "Mix/whip shake, footed pilsner, crushed ice, lemon wedge"
	},
	{
		"name": "PEACHTREE PUNCH 2.0",
		"ingredients": [
			"half yellow/white peach (muddled)",
			"3 ozOrange juice",
			".5 ozLemon juice",
			"1 ozCoconut cream",
			".25 ozPeach liqueur",
			"2 ozBlended lightly aged rum",
			"1 ozSeltzer"
		],
		"procedure": "Mix/whip shake, double strain, double old-fashioned glass, cracked ice, grated nutmeg, peach wedge"
	},
	{
		"name": "JUNGLE BIRD",
		"ingredients": [
			"2 ozPineapple juice",
			".5 ozLime juice",
			".5 ozDemerara syrup",
			".75 ozCampari",
			"1.5 ozBlack blended rum"
		],
		"procedure": "Mix/whip shake, Collins glass, crushed ice, pineapple fronds"
	},
	{
		"name": "GOLDEN GUN",
		"ingredients": [
			".75 ozLime juice",
			".5 ozGrapefruit juice",
			".5 ozDemerara syrup",
			".5 ozApricot liqueur",
			"1 ozBlended aged rum",
			"1 ozBlended lightly aged rum",
			"2 dashes Angostura bitters"
		],
		"procedure": "Shake, Collins glass, cracked ice"
	},
	{
		"name": "HINKY DINKS FIZZY",
		"ingredients": [
			"1.5 ozPineapple juice",
			".5 ozLime juice",
			".5 ozPassionfruit syrup",
			".5 ozApricot liqueur",
			"1 ozLondon Dry Gin",
			"1 ozBlended lightly aged rum",
			"2 ozsparkling wine"
		],
		"procedure": "Mix/whip shake first 6 ingredients, large brandy snifter, crushed ice. Top with sparkling wine, mint sprig"
	},
	{
		"name": "PAMPANITO",
		"ingredients": [
			"1 ozLemon juice",
			"1 ozMolasses syrup",
			"2.5 ozSeltzer",
			".25 ozAllspice dram",
			"1.5 ozBlack blended rum",
			"1 dash Angostura bitters"
		],
		"procedure": "Mix/whip shake, Collins glass, crushed ice, lemon twist"
	},
	{
		"name": "MAX’S MISTAKE",
		"ingredients": [
			"1 ozLemon juice",
			"1 ozPassionfruit syrup",
			".5 ozHoney syrup",
			"2 ozLondon Dry Gin",
			"1 dash Angostura bitters",
			"2 ozFentimans Victorian Lemonade"
		],
		"procedure": "Mix/whip shake, large brandy snifter, crushed ice, mint sprig"
	},
	{
		"name": "LA GUILDIVE",
		"ingredients": [
			".5 ozLime juice",
			".5 ozLicor 43",
			".25 ozPeach liqueur",
			"2 ozBlended aged rum",
			"1 ozginger beer"
		],
		"procedure": "Shake first 4 ingredients, coupe. Top with ginger beer, lime twist, pinch of cinnamon"
	},
	{
		"name": "THE TWENTY SEVENTY SWIZZLE",
		"ingredients": [
			".5 ozLime juice",
			".5 ozDemerara syrup",
			".5 ozHoney syrup",
			".25 ozAllspice dram",
			"1 ozColumn still aged rum",
			"1 ozBlack blended overproof rum",
			"1 dash Herbstura"
		],
		"procedure": "Swizzle, Collins glass, crushed ice, grated nutmeg, mint sprig"
	},
	{
		"name": "SHUDDERS IN A WHISPER",
		"ingredients": [
			".75 ozLime juice",
			".5 ozPassionfruit syrup",
			".5 ozPear liqueur",
			".25 ozDrambuie",
			"2 ozSeltzer",
			"2 ozColumn still aged rum",
			"2 dashes Peychaud’s bitters",
			"1 dash Angostura bitters"
		],
		"procedure": "Mix/whip shake, large brandy snifter, crushed ice, edible orchid, mint sprig"
	},
	{
		"name": "CUEVAS",
		"ingredients": [
			".25 ozCinnamon syrup",
			".5 ozPunt e Mes",
			".25 ozTawny port",
			"2 ozBlended aged rum",
			"6 drops Bittermens ‘Elemakule Tiki bitters"
		],
		"procedure": "Shake, coupe, maraschino cherry"
	},
	{
		"name": "NORWEGIAN PARALYSIS",
		"ingredients": [
			"1.5 ozOrange juice",
			"1.5 ozPineapple juice",
			".5 ozLemon juice",
			".25 ozDemerara syrup",
			".25 ozOrgeat",
			"1.5 ozAquavit"
		],
		"procedure": "Shake, Collins glass, cracked ice, lemon wedge"
	},
	{
		"name": "JUAN HO ROYALE",
		"ingredients": [
			".75 ozLime juice",
			".5 ozOrgeat",
			".5 ozblue curaçao",
			".5 ozVelvet Falernum",
			"1.5 ozBlanco tequila",
			"2 ozchampagne or sparkling wine"
		],
		"procedure": "Shake first 5 ingredients, coupe. Top with champagne"
	},
	{
		"name": "CHARTREUSE SWIZZLE",
		"ingredients": [
			"1 ozPineapple juice",
			".75 ozLime juice",
			".5 ozVelvet Falernum",
			"1.5 ozGreen Chartreuse"
		],
		"procedure": "Swizzle, Collins glass, crushed ice, grated nutmeg, mint sprig"
	},
	{
		"name": "ROSELITA",
		"ingredients": [
			".5 ozLime juice",
			".5 ozOrgeat",
			".5 ozHibiscus liqueur",
			".5 ozPear liqueur",
			"1.5 ozColumn still aged rum",
			"1 dash Peychaud’s bitters",
			"1.5 ozSeltzer"
		],
		"procedure": "Shake first 6 ingredients, Collins glass, cracked ice. Top with seltzer, edible hibiscus flower"
	},
	{
		"name": "CENTER OF THE GALAXY",
		"ingredients": [
			".5 ozLime juice",
			".5 ozDemerara syrup",
			".5 ozHoney syrup",
			".5 ozRaspberry liqueur",
			"2 ozBlended aged rum",
			"Pinch of freshly ground cinnamon"
		],
		"procedure": "Shake, coupe, raspberry on lime wheel"
	},
	{
		"name": "CALLALOO COOLER",
		"ingredients": [
			".75 ozLime juice",
			".5 ozCinnamon syrup",
			".5 ozCherry Heering",
			"2 ozBlended lightly aged rum",
			"1 dash Angostura bitters",
			"1 ozSeltzer"
		],
		"procedure": "Shake first 5 ingredients, Collins glass, cracked ice. Top with seltzer, grated cinnamon, mint sprig"
	},
	{
		"name": "TOP NOTCH VOLCANO FOR TWO",
		"ingredients": [
			"2 ozLime juice",
			"2 ozPineapple juice",
			"1 ozPassionfruit syrup",
			"1 ozDemerara syrup",
			".5 ozMaraschino liqueur",
			"2 ozBlended lightly aged rum",
			"2 ozBlended aged rum"
		],
		"procedure": "Mix/whip shake, scorpion bowl, lime and orange slices, fire"
	},
	{
		"name": "THE NAKED APE",
		"ingredients": [
			".5 ozLemon juice",
			".5 ozCinnamon syrup",
			".5 ozGiffard Banane du Bresil banana liqueur",
			"1.5 ozBlack blended rum",
			".5 ozPot still lightly aged rum (overproof)",
			"1 dash Angostura bitters"
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice"
	},
	{
		"name": "SWIZZLE FRANÇAIS",
		"ingredients": [
			".5 ozLime juice",
			".5 ozMartinique sugarcane syrup",
			".25 ozAllspice dram",
			"2 ozRhum agricole vieux"
		],
		"procedure": "Swizzle, Collins glass, crushed ice, ground nutmeg"
	},
	{
		"name": "SPARKLING MAI TAI",
		"ingredients": [
			".25 ozLime juice",
			".25 ozOrgeat",
			".5 ozDry Curacao",
			".25 ozBlack blended overproof rum",
			".5 ozBlended aged rum",
			"4 ozchilled sparkling wine"
		],
		"procedure": "Stir first 5 ingredients, champagne flute. Top with sparkling wine, lime twist, mint leaf"
	},
	{
		"name": "THE ERNESTO",
		"ingredients": [
			"1 ozLime juice",
			"1 ozHoney syrup",
			".5 ozApricot liqueur",
			"2 ozBlanco tequila",
			"1 dash Herbstura",
			"2 ozTing grapefruit soda"
		],
		"procedure": "Shake first 5 ingredients, double old-fashioned glass, cracked ice. Top with soda, lime wheel, edible orchid"
	},
	{
		"name": "HANA REVIVER",
		"ingredients": [
			"1 ozLemon juice",
			"1 ozPassionfruit Honey",
			".25 barspn Li hing mui powder",
			"2 ozSeltzer",
			"1 barspn Maraschino liqueur",
			"2 ozPot still unaged rum"
		],
		"procedure": "Mix/whip shake, footed pilsner glass, crushed ice, mint sprig"
	},
	{
		"name": "KAITEUR SWIZZLE",
		"ingredients": [
			".75 ozLime juice",
			".5 ozGrade A maple syrup",
			".5 ozVelvet Falernum",
			"2 ozBlended aged rum (Guyana)",
			"2 dashes Angostura bitters"
		],
		"procedure": "Swizzle, Collins glass, crushed ice, mint sprig"
	},
	{
		"name": "THE EXPEDITION",
		"ingredients": [
			"1 ozLime juice",
			".5 ozCinnamon syrup",
			".5 ozHoney syrup",
			".25 ozVanilla syrup",
			"2 ozSeltzer",
			".25 ozBittermens New Orleans Coffee Liqueur",
			"2 ozBlack blended rum",
			"1 ozbourbon"
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice, edible orchid"
	},
	{
		"name": "THE UNDEAD GENTLEMAN",
		"ingredients": [
			".5 ozLime juice",
			".5 ozGrapefruit juice (white or pink)",
			".5 ozCinnamon syrup",
			".5 ozVelvet Falernum",
			"1 ozBlack blended overproof rum",
			"1.5 ozBlended aged rum",
			"1 dash Angostura bitters",
			"Absinthe Blanc (rinse)"
		],
		"procedure": "Shake, rinsed coupe, intertwined lime and grapefruit twists"
	},
	{
		"name": "THE DEAD RECKONING",
		"ingredients": [
			"1 ozLemon juice",
			"1 ozPineapple juice",
			".5 ozGrade A maple syrup",
			".5 ozVanilla-infused brandy",
			".5 ozTawny port",
			"2 ozBlended aged rum",
			"1 dash Angostura bitters",
			"1 ozSeltzer"
		],
		"procedure": "Mix/whip shake first 7 ingredients, Collins glass, cracked ice. Top with seltzer, pineapple fronds, mint spring, lemon spiral"
	},
	{
		"name": "FALINUM",
		"ingredients": [
			"1 ozLemon juice",
			"1 ozCoconut cream",
			"1 ozSeltzer",
			".5 ozVelvet Falernum",
			"2 ozColumn still aged rum",
			"1 dash Orange bitters"
		],
		"procedure": "Mix/whip shake, tiki mug, crushed ice"
	},
	{
		"name": "HUMUHUMUNUKUNUKUAPUA’A",
		"ingredients": [
			".75 ozLemon juice",
			".75 ozPineapple juice",
			".5 ozOrgeat",
			"2 ozGin",
			"2 dashes Peychaud’s bitters"
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, edible orchid, maraschino cherry"
	},
	{
		"name": "LAUWILIWILINUKUNUKU'OI'OI",
		"ingredients": [
			".75 ozLemon juice",
			".75 ozPineapple juice",
			".5 ozOrgeat",
			"2 ozBlended aged rum",
			"2 dashes Peychaud’s bitters"
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, edible orchid, maraschino cherry"
	},
	{
		"name": "FOR PETE’S SAKE",
		"ingredients": [
			".75 ozLime juice",
			".5 ozDemerara syrup",
			".5 ozHibiscus liqueur",
			".5 ozCherry Heering",
			"1.5 ozPisco",
			"1 dash Angostura bitters"
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, edible hibiscus flower, maraschino cherry"
	},
	{
		"name": "ARRACK PUNCH FOR TWO",
		"ingredients": [
			"1 ozLemon juice",
			"1 ozLime juice",
			"1.5 ozDemerara syrup",
			"3 ozBatavia Arrack",
			"1 ozPot still lightly aged rum (overproof)",
			"3 ozCarbonated Chai Tea"
		],
		"procedure": "Mix/whip shake, tiki bowl, lemon and lime slices"
	},
	{
		"name": "EL DRAQUE",
		"ingredients": [
			"5 mint leaves (muddled)",
			".75 ozDemerara syrup",
			".75 ozLime juice",
			"2 ozPot still aged cachaça"
		],
		"procedure": "Shake, coupe, lime wheel"
	},
	{
		"name": "CALIBOGUS",
		"ingredients": [
			".25 ozLime juice",
			".75 ozMolasses syrup",
			"1 drop spruce beer soda extract (see Resources)",
			".75 ozZirbenz Stone Pine liqueur",
			"1.25 ozBlended aged rum",
			"3 ozSeltzer"
		],
		"procedure": "Mix/whip shake first 5 ingredients, Collins glass, cracked ice. Top with seltzer"
	},
	{
		"name": "MARY PICKFORD",
		"ingredients": [
			"1.5 ozPineapple juice",
			"1 barspn Grenadine",
			"6 drops Maraschino liqueur",
			"1.5 ozBlended lightly aged rum"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "DAIQUIRI NO. 1",
		"ingredients": [
			".75 ozLime juice",
			".5 ozDemerara syrup",
			"2 ozBlended lightly aged rum"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "HOTEL NACIONAL SPECIAL",
		"ingredients": [
			"4 (1-inch-square) pineapple chunks (muddled)",
			".75 ozLime juice",
			".5 ozDemerara syrup",
			".5 ozApricot liqueur",
			"1.5 ozBlended lightly aged rum"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "DAISY DE SANTIAGO",
		"ingredients": [
			"1 ozLime juice",
			"1.5 tsp Demerara syrup",
			"1 ozSeltzer",
			".5 ozYellow Chartreuse",
			"1.5 ozBlended lightly aged rum"
		],
		"procedure": "Shake, double old-fashioned glass, crushed ice, mint sprig"
	},
	{
		"name": "EL PRESIDENTE",
		"ingredients": [
			".5 tsp Grenadine",
			".75 ozdry vermouth",
			".5 ozDry Curacao",
			"1.5 ozBlended lightly aged rum"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "TWELVE MILE LIMIT",
		"ingredients": [
			".5 ozLemon juice",
			".5 ozGrenadine",
			"1 ozBlended lightly aged rum",
			".5 ozrye",
			".5 ozbrandy"
		],
		"procedure": "Shake, coupe, lemon twist"
	},
	{
		"name": "PARISIAN BLONDE",
		"ingredients": [
			"1 ozDry Curacao",
			"1 ozBlended aged rum",
			"1 ozsweeted heavy cream"
		],
		"procedure": "Stir first two ingredients, coupe. Float the cream, grated cinnamon"
	},
	{
		"name": "CORA MIDDLETON",
		"ingredients": [
			".5 ozegg white",
			"2 ozBlended aged rum",
			".75 ozLime juice",
			".25 ozDemerara syrup",
			".5 ozRaspberry Gum syrup"
		],
		"procedure": "Double shake, coupe, Angostura bitters drops"
	},
	{
		"name": "MILLIONAIRE COCKTAIL #1",
		"ingredients": [
			".75 ozLime juice",
			"1 dash Grenadine",
			".75 ozApricot liqueur",
			".75 ozblack Pot still rum or Blended aged rum",
			".75 ozSloe Gin"
		],
		"procedure": "Shake, coupe, lime wheel"
	},
	{
		"name": "BATIDA DE MARACUJÁ E COCO",
		"ingredients": [
			".75 ozPassionfruit puree",
			"2 ozCoconut milk",
			"1 ozPot still aged cachaça",
			"1 ozsweetened condensed milk"
		],
		"procedure": "Mix/whip shake, old fashioned glass, crushed ice, mint sprig"
	},
	{
		"name": "HIBISCUS RUM PUNCH",
		"ingredients": [
			".5 ozLime juice",
			"1 ozHibiscus liqueur",
			".33 ozDemerara syrup",
			"1.5 ozBlended aged rum (Jamaica)",
			"2 ozSeltzer"
		],
		"procedure": "Shake first 4 ingredients, Collins glass, cracked ice. Top with seltzer, edible hibiscus flower, lime wheel"
	},
	{
		"name": "BARBADOS RUM PUNCH",
		"ingredients": [
			"1 ozLime juice",
			"1 ozDemerara syrup",
			"2 ozBlended aged rum (Barbados)",
			"1 dash Angostura bitters"
		],
		"procedure": "Shake, footed pilsner, cracked ice, grated nutmeg"
	},
	{
		"name": "JAMAICAN MILK PUNCH",
		"ingredients": [
			"1 ozwhole milk",
			"1 ozheavy whipping cream",
			".5 ozDemerara syrup",
			"1 ozBlack blended rum (Jamaica)",
			"6 drops vanilla extract",
			"1 dash Angostura bitters"
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, crushed ice, grated nutmeg."
	},
	{
		"name": "CORN AND OIL",
		"ingredients": [
			".5 ozVelvet Falernum",
			"2 ozBlended aged rum (Barbados)",
			"2 to 4 dashes Angostura bitters"
		],
		"procedure": "Stir, old-fashioned glass, crushed ice"
	},
	{
		"name": "QUEEN’S PARK SWIZZLE",
		"ingredients": [
			"4 mint leaves (muddled)",
			".5 ozLime juice",
			".5 ozDemerara syrup",
			"2 ozBlack blended rum",
			"2 dashes Angostura bitters"
		],
		"procedure": "Swizzle, Collins glass, crushed ice, mint sprig"
	},
	{
		"name": "THE CHADBURN",
		"ingredients": [
			".5 ozTawny port",
			".5 ozPear liqueur",
			"2 ozBlended aged rum",
			"6 drops Bittermens Xocolatl (Chocolate) Mole bitters"
		],
		"procedure": "Stir, coupe"
	},
	{
		"name": "A WISH FOR GRACE",
		"ingredients": [
			".75 ozLemon juice",
			".5 oz2:1 Simple syrup",
			".5 ozDry Curacao",
			"1.5 ozPot still lightly aged rum (New England)",
			".75 ozBlandy’s 5 Year Verdelho Madeira",
			"1 dash Angostura bitters"
		],
		"procedure": "Shake, coupe, lemon twist"
	},
	{
		"name": "ABRICOT VIEUX",
		"ingredients": [
			".5 ozApricot liqueur",
			"2 ozRhum agricole vieux",
			"1 dash Angostura bitters",
			"1 dash Orange bitters"
		],
		"procedure": "Stir, coupe, express orange peel"
	},
	{
		"name": "PANIOLO OLD-FASHIONED",
		"ingredients": [
			"1 tsp Li Hing Mui syrup",
			"2 ozBlended aged rum",
			"1 dash Angostura bitters"
		],
		"procedure": "Stir, old-fashioned glass, large cube, express orange peel, drop peel in"
	},
	{
		"name": "PORT ROYAL",
		"ingredients": [
			".75 ozLime juice",
			".75 ozJamaican Jerk syrup",
			"1.5 ozBlended lightly aged rum",
			".5 ozWray & Nephew white overproof rum",
			"Hellfire tincture"
		],
		"procedure": "Shake, coupe, five spread-out drops Hellfire tincture"
	},
	{
		"name": "KINGSTON PALAKA",
		"ingredients": [
			".5 ozLemon juice",
			".125 tsp Li hing mui powder",
			"1 ozDrambuie",
			"1.5 ozBlended aged rum (Jamaica)"
		],
		"procedure": "Shake, coupe, lemon peel"
	},
	{
		"name": "DONN DAY AFTERNOON",
		"ingredients": [
			".5 ozLime juice",
			".5 ozCinnamon syrup",
			"4 ozchilled Stiegl-Radler Grapefruit Beer",
			"2 ozRhum agricole blanc"
		],
		"procedure": "Stir, double old-fashioned glass, express grapefruit peel, drop peel in"
	},
	{
		"name": "BAIE DU GALION",
		"ingredients": [
			".5 ozGreen Chartreuse",
			".25 ozDrambuie",
			"2 ozRhum agricole blanc"
		],
		"procedure": "Stir, coupe, lemon twist"
	},
	{
		"name": "AGRICOLE GUAVA COOLER",
		"ingredients": [
			".75 ozLime juice",
			".75 ozLicor 43",
			"2 ozRhum agricole blanc",
			"2 dashes Angostura bitters",
			"2 ozBundaberg guava soda"
		],
		"procedure": "Shake first 4 ingredients, Collins glass, cracked ice. Top with soda, mint sprig, cinnamon stick, lime wheel"
	},
	{
		"name": "RICHARD SEALEBACH",
		"ingredients": [
			".5 ozDry Curacao",
			"1 ozR. L. Seale 10 Year rum",
			"7 dashes Angostura bitters",
			"7 dashes Peychaud’s bitters",
			"4 ozchilled champagne"
		],
		"procedure": "Stir first 4 ingredients, champagne flute. Top with champagne, lemon twist"
	},
	{
		"name": "COSA NOSTRA #2",
		"ingredients": [
			".75 ozLemon juice",
			"1.5 ozAmaro Averna",
			"1 ozBlended lightly aged rum",
			"1 dash Angostura bitters",
			"2 ozreal ginger ale"
		],
		"procedure": "Stir first 4 ingredients, footed pilsner glass, cracked ice. Top with ginger ale, lemon twist"
	},
	{
		"name": "BOO LOO FOR TWO",
		"ingredients": [
			"6 (1-inch-square) chunks pineapple (muddled)",
			"2.5 ozPineapple juice",
			"1.5 ozLime juice",
			"1.25 ozHoney syrup",
			"1.5 ozBlended aged rum",
			"1.5 ozColumn still aged rum",
			".75 ozBlack blended rum",
			".75 ozBlack blended overproof rum",
			"1.5 ozSeltzer"
		],
		"procedure": "Mix/whip shake, hollowed-out pineapple, crushed ice"
	},
	{
		"name": "CARIBEÑO",
		"ingredients": [
			"4 ozcoconut water",
			".25 ozDemerara syrup",
			"2 ozcolumn still lightly aged rum or London Dry Gin"
		],
		"procedure": "Mix/whip shake, coconut shell, cracked ice"
	},
	{
		"name": "MONK’S RESPITE",
		"ingredients": [
			"3 ozfresh coconut water",
			".5 ozLemon juice",
			".25 ozHoney syrup",
			".25 ozYellow Chartreuse",
			"1.5 ozBroker’s gin",
			"1 ozSeltzer",
			"1 dash Orange bitters"
		],
		"procedure": "Mix/whip shake, coconut shell, crushed ice"
	},
	{
		"name": "THE MASTADON",
		"ingredients": [
			"3 ozPineapple juice",
			".5 ozLime juice",
			"1 ozPassionfruit puree",
			".5 ozLicor 43",
			".5 ozMaraschino liqueur",
			"1.5 ozBlended aged rum",
			"1.5 ozbourbon",
			"2 dashes Peychaud’s bitters"
		],
		"procedure": "Mix/whip shake, hollowed-out pineapple, crushed ice"
	},
	{
		"name": "PIÑATA",
		"ingredients": [
			"3 ozPineapple juice",
			"1 ozLemon juice",
			".25 ozDemerara syrup",
			"1 ozginger liqueur",
			".5 ozAllspice dram",
			"1 ozBlack blended rum",
			"1 ozBlended lightly aged rum"
		],
		"procedure": "Mix/whip shake, hollowed-out pineapple, crushed ice, freshly grated nutmeg"
	},
	{
		"name": "BUMBOAT",
		"ingredients": [
			"2 ozPineapple juice",
			"1.5 ozLemon juice",
			".75 ozCinnamon syrup",
			"1 ozrye",
			"1 ozBlended lightly aged rum",
			"3 drops almond extract",
			"6 drops Bittermens ‘Elemakule Tiki bitters",
			".75 ozBlack blended overproof rum (float)"
		],
		"procedure": "Mix/whip shake, hollowed-out pineapple, crushed ice. Float the overproof rum"
	},
	{
		"name": "PLANTER’S PUNCH",
		"ingredients": [
			"1 ozLime juice",
			".75 ozDemerara syrup",
			".25 ozAllspice dram",
			"3 ozBlended aged rum (Jamaica)",
			"2 dashes Angostura bitters"
		],
		"procedure": "Mix/whip shake, Collins glass, crushed ice, mint Sprig"
	},
	{
		"name": "MAI TAI",
		"ingredients": [
			".75 ozLime juice",
			".25 ozMai Tai syrup",
			".25 ozOrgeat",
			".5 ozDry Curacao",
			"2 ozBlended aged rum"
		],
		"procedure": "Shake, double old-fashioned glass, crushed ice, lime shell, mint sprig"
	},
	{
		"name": "DOCTOR FUNK",
		"ingredients": [
			".5 ozLemon juice",
			".25 ozGrenadine",
			".5 ozLime juice",
			".5 ozDemerara syrup",
			".25 ozHerbsaint",
			"2.25 ozblack Pot still unaged rum",
			"1 ozSeltzer"
		],
		"procedure": "Mix/whip shake, double old-fashioned, crushed ice, ti leaf or pineapple fronds"
	},
	{
		"name": "ZOMBIE",
		"ingredients": [
			".75 ozLime juice",
			".25 ozGrapefruit juice",
			".25 ozCinnamon syrup",
			"1 tsp Grenadine",
			".5 ozVelvet Falernum",
			"1.5 ozBlended aged rum",
			"1.5 ozColumn still aged rum",
			"1 ozBlack blended overproof rum",
			"2 dashes Herbstura"
		],
		"procedure": "Mix/whip shake, Collins glass, crushed ice, mint sprig"
	},
	{
		"name": "NAVY GROG",
		"ingredients": [
			".75 ozLime juice",
			".75 ozGrapefruit juice",
			".25 ozDemerara syrup",
			".25 ozAllspice dram",
			"1 ozPot still lightly aged (overproof) rum",
			"1 ozBlended lightly aged rum",
			"1 ozColumn still aged rum"
		],
		"procedure": "Mix/whip shake, double old-fashioned glass, ice cone, mint sprig"
	},
	{
		"name": "SCORPION BOWL FOR TWO",
		"ingredients": [
			"1 ozLime juice",
			"2 ozOrange juice",
			".75 ozDemerara syrup",
			"1 ozOrgeat",
			"1 ozbrandy",
			"2 ozLondon Dry Gin",
			"2 ozBlended lightly aged rum"
		],
		"procedure": "Mix/whip shake, tiki bowl, cracked ice"
	},
	{
		"name": "FOG CUTTER",
		"ingredients": [
			"1.5 ozLemon juice",
			"1.5 ozOrange juice",
			".5 ozOrgeat",
			"1 ozpisco",
			".5 ozgin",
			"2 ozBlended lightly aged rum",
			".5 ozOloroso sherry (float)"
		],
		"procedure": "Mix/whip shake, Fog Cutter mug, crushed ice. Float sherry, mint sprig"
	},
	{
		"name": "SINGAPORE SLING",
		"ingredients": [
			".75 ozLemon juice",
			".25 ozDemerara syrup",
			".5 ozCherry Heering liqueur",
			".25 ozBenedictine",
			"1.5 ozLondon Dry Gin",
			"1 dash Angostura bitters",
			"1 dash Orange bitters",
			"2 ozSeltzer"
		],
		"procedure": "Shake first 7 ingredients, Collins glass, cracked ice. Top with seltzer, lemon wedge"
	},
	{
		"name": "HONDO HATTIE’S JUNGLE PUNCH!",
		"ingredients": [
			"1 ozLemon juice",
			".5 ozHoney syrup",
			".25 ozblue curaçao",
			".25 ozTawny port",
			".5 ozVelvet Falernum",
			".25 ozPear liqueur",
			"2 ozBlended aged rum",
			"1 dash Angostura bitters"
		],
		"procedure": "Stir, punch glass, cracked ice"
	},
	{
		"name": "KAHIKO PUNCH",
		"ingredients": [
			"1 ozLemon juice",
			"1.5 ozPassionfruit Honey",
			".5 ozCinnamon syrup",
			".5 ozHibiscus liqueur",
			"2 ozPot still unaged rum",
			"6 drops Bittermans ‘Elemakule Tiki bitters"
		],
		"procedure": "Stir, punch glass, cracked ice, edible orchid"
	},
	{
		"name": "TRIUMVIRATE PUNCH",
		"ingredients": [
			".75 ozLime juice",
			"1 ozPassionfruit Honey",
			".25 ozAllspice dram",
			"1.5 ozPot still unaged rum",
			"2 dashes Angostura bitters",
			"Pinch of freshly grated nutmeg"
		],
		"procedure": "Stir, punch glass, cracked ice, mint sprig"
	},
	{
		"name": "EUREKA PUNCH",
		"ingredients": [
			"1.5 ozLemon juice",
			"1 ozHoney syrup",
			".5 ozYellow Chartreuse",
			"1.5 ozColumn still aged rum",
			"1 dash Angostura bitters",
			"2 ozreal ginger ale"
		],
		"procedure": "Stir, punch glass, cracked ice, lemon twist, mint sprig"
	},
	{
		"name": "YULETIDAL WAVE",
		"ingredients": [
			"2 ozPineapple juice",
			"1 ozLemon juice",
			".5 ozPear liqueur",
			".5 ozLicor 43",
			".25 ozAllspice dram",
			".5 ozbrandy",
			"1 ozbourbon",
			"1 ozColumn still aged rum"
		],
		"procedure": "Stir, punch glass, cracked ice"
	},
	{
		"name": "RUMBUSTION PUNCH",
		"ingredients": [
			"1 ozLime juice",
			".5 ozDemerara syrup",
			".25 ozCinnamon syrup",
			"1 ozBlended aged rum",
			"1 ozBlended lightly aged rum",
			"2 dashes Herbstura"
		],
		"procedure": "Stir, punch glass, cracked ice"
	},
	{
		"name": "PUKA PUNCH",
		"ingredients": [
			"1 ozLime juice",
			".75 ozOrange juice",
			".75 ozPineapple juice",
			"1 ozHoney syrup",
			".75 ozPassionfruit syrup",
			".5 ozVelvet Falernum",
			"1 ozBlended aged rum",
			"1 ozBlended lightly aged rum",
			".75 ozBlack blended rum",
			"1 dash Angostura bitters",
			".75 ozBlack blended overproof rum"
		],
		"procedure": "Mix/whip shake first 10 ingredients, large brandy snifter, crushed ice. Float the overproof rum, mint sprig"
	},
	{
		"name": "THE FOX HUNT",
		"ingredients": [
			"1.5 ozPimms",
			".50 Tanqueray Gin",
			".75 Lemon juice",
			".50 Simple syrup",
			"1 dash Peychaud’s bitters",
			"Cynar (rinse)"
		],
		"procedure": "Shake, coupe, 7 drops Peychaud’s bitters"
	},
	{
		"name": "BRIAR PATCH",
		"ingredients": [
			"1.5 ozPlymouth Gin",
			".75 ozLemon juice",
			".5 ozSimple syrup",
			".25 ozBlackberry cordial"
		],
		"procedure": "Shake first 3 ingredients, Collins glass, crushed ice. Top with blackberry cordial, blackberry, lemon twist"
	},
	{
		"name": "BLACKBERRY CORDIAL",
		"ingredients": [
			"1 pint Blackberries (muddled)",
			"1 cup Simple syrup",
			"4 dashes Angostura Bitters"
		],
		"procedure": "Infuse for 1 hour, strain through a fine chinois or cheesecloth"
	},
	{
		"name": "THE RIVIERA",
		"ingredients": [
			"2 ozPineapple Infused Gin",
			".75 ozLemon juice",
			".75 ozSimple Syrup",
			"1 Egg White"
		],
		"procedure": "Double shake, coupe, mint leaf, orange bitters drops"
	},
	{
		"name": "PINEAPPLE INFUSED GIN",
		"ingredients": [
			"1 cup of Plymouth Gin",
			".5 cup of Maraschino liqueur",
			".25 cup of Campari",
			"1 cup of Pinapple"
		],
		"procedure": "Combine and let sit for 24 hours, strain through a fine chinois or cheesecloth"
	},
	{
		"name": "BLUE RIDGE MANHATTAN",
		"ingredients": [
			"2 ozRittenhouse Rye",
			".75 ozCarpano Antica Sweet Vermouth",
			".5 ozNoilly Pratt Dry Vermouth",
			"2 dash Peychaud’s bitters",
			"Peach bitters (rinse)",
			"Laphroig 10 Scotch(rinse)"
		],
		"procedure": "Shake, rinsed coupe, lemon twist"
	},
	{
		"name": "PART & PARCEL",
		"ingredients": [
			"2 ozPlymouth Gin",
			".75 ozSt. Germain",
			".75 ozGrapefruit juice",
			".25 ozLime juice",
			".50 ozSimple syrup",
			"5 drops Grapefruit bitters"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "RANGOON FIZZ",
		"ingredients": [
			"2 ozTanqueray Gin",
			".75 ozGinger syrup",
			"1 ozLime juice",
			"9 drops Angostura bitters",
			"5 Mint sprigs",
			"Tonic water"
		],
		"procedure": "Shake, Collins glass, cracked ice. Top with tonic water, mint Sprig"
	},
	{
		"name": "SAZERAC #1",
		"ingredients": [
			"2 ozOld Overholdt Rye",
			".25 ozDemerara syrup",
			"3 dash Peychauds bitters",
			"Herbsaint (rinse)"
		],
		"procedure": "Stir, rinsed old fashioned glass, big cube, lemon peel"
	},
	{
		"name": "CHI-TOWN FLIP",
		"ingredients": [
			"2.0 oz Buffalo Trace bourbon",
			".75 ozTawny Port",
			"1.0 oz Heavy cream",
			".75 oz Licor 43",
			".25 oz Simple syrup",
			"1 Whole Egg"
		],
		"procedure": "Shake, Collins glass, grated nutmeg, 3 drops Fees Old Fashioned Bitters"
	},
	{
		"name": "HUSH & WONDER",
		"ingredients": [
			"2 ozMatusalem rum",
			".75 ozLime juice",
			".75 ozSimple syrup",
			"3 dash Grapefruit bitters",
			"Crème de Violette (rinse)"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "LADY CLOVER",
		"ingredients": [
			"2 ozPlymouth Gin",
			".75 ozBlackberry syrup",
			".75 ozLemon juice",
			"1 Egg white",
			"7 drops Peychaud’s bitters"
		],
		"procedure": "Double shake, Collins glass, cracked ice. Top with soda, 5 drops Angostura bitters"
	},
	{
		"name": "TAX THE DAISY",
		"ingredients": [
			"1.75 ozBombay Dry Gin",
			"1 ozRamazotti Amaro",
			".25 ozApricot liqueur",
			"7 drops Angostura bitters",
			"7 drops Orange bitters",
			"1 Orange peel",
			"1 Lemon peel"
		],
		"procedure": "Shake liquids and peels, coupe, 3 drops Angostura bitters"
	},
	{
		"name": "ANGOSTURA FIZZ",
		"ingredients": [
			"1 ozAngostura bitters",
			"1 ozPlymouth Gin",
			".75 ozLemon juice",
			".75 ozSimple syrup",
			"1 Egg white",
			"Ginger Ale"
		],
		"procedure": "Double shake first 5 ingredients, Collins glass, cracked ice. Top with ginger ale, lemon Wheel"
	},
	{
		"name": "EYES WIDE",
		"ingredients": [
			"2 ozBulleit Bourbon",
			".25 ozRaspberry syrup",
			".25 ozGinger syrup",
			".25 ozLemon juice",
			".5 ozGrapefruit juice",
			".25 Hibiscus syrup"
		],
		"procedure": "Shake first 5 ingredients, Collins glass, cracked ice. Top with soda, float Hibiscus Syrup, grapefruit peel"
	},
	{
		"name": "IRON CROSS",
		"ingredients": [
			"1.5 ozPisco",
			".75 ozLemon juice",
			".75 ozSimple syrup",
			"1 Egg white",
			"3 drops Orange Flower water",
			"2 dashes Lavender Grapefruit bitters"
		],
		"procedure": "Dry shake, shake with ice for two minutes, coupe, 4 drops Angostura bitters"
	},
	{
		"name": "SEEING TRACES",
		"ingredients": [
			"2 ozBourbon",
			".75 ozLemon juice",
			"1 ozLillet Blanc",
			".5 ozDemerara syrup",
			".25 ozGinger syrup",
			"1 Egg white"
		],
		"procedure": "Double shake, coupe, 4 drops orange flower water"
	},
	{
		"name": "DAISY 17",
		"ingredients": [
			"2 ozWild Turkey 101 whiskey",
			".75 ozLemon juice",
			".50 ozGrenadine",
			".25 ozSimple syrup",
			"3 dash Orange Bitters"
		],
		"procedure": "Shake, coupe, flamed orange twist (discarded)"
	},
	{
		"name": "JAMAICAN JULEP",
		"ingredients": [
			"4 Mint leaves (lightly muddled)",
			"2 ozSmith and Cross Jamaican rum",
			".25 ozDemarara syrup",
			".5 ozPineapple juice"
		],
		"procedure": "Stir first 3 ingredients, julep cup, top with pineapple juice"
	},
	{
		"name": "SPEAKING IN TONGUES",
		"ingredients": [
			"2 Strawberries (muddled)",
			"1 ozChichicapa Mezcal",
			"1 ozLuxardo Amaro",
			".75 ozLemon juice",
			".75 ozSimple syrup"
		],
		"procedure": "Shake, double strain, coupe"
	},
	{
		"name": "THE VIOLET HOUR",
		"ingredients": [
			"2 oz Bourbon (Buffalo Trace)",
			".75 oz Carpano Antica sweet vermouth",
			".25 oz Noilly Prat or Vya dry vermouth",
			".5 tsp Cruzan Black Strap rum",
			"3 dashes Angostura bitters"
		],
		"procedure": "Stir, coupe, lemon twist"
	},
	{
		"name": "EEYORE'S REQUIEM",
		"ingredients": [
			"1.5 ozCampari",
			".5 ozTanqueray Gin",
			"1 ozDolin Bianco",
			".5 ozCynar",
			".25 ozFernet",
			"1 dash Orange bitters"
		],
		"procedure": "NEGRONI SPECS, express orange oil and then a orange twist."
	},
	{
		"name": "THE WARNING LABEL",
		"ingredients": [
			"1 ozLemon Hart 151 Demerara rum ",
			"1 ozCynar",
			"1 ozPunt e Mes",
			"1 dash Orange bitters",
			"1 dash Grapefruit bitters",
			"Campari (rinse)"
		],
		"procedure": "Stir, rinsed cocktail glass, lemon twist"
	},
	{
		"name": "A MOMENT OF SILENCE",
		"ingredients": [
			"1.5 ozRye",
			"1 ozApricot liqueur",
			".5 ozAverna",
			".5 ozAngostura bitters",
			".25 ozLairds Apple brandy",
			"Campari (rinse)"
		],
		"procedure": "Stir, rinsed rocks glass, orange twist"
	},
	{
		"name": "VARIATION ON A THEME",
		"ingredients": [
			"2 ozHayman’s Old Tom Gin",
			".5 ozCherry Heering",
			".25 ozCampari",
			".5 barspn Maraschino liqueur",
			"1 dash Orange bitters"
		],
		"procedure": "Stir, rocks glass, orange twist"
	},
	{
		"name": "IMPROVED SCOTCH SLING",
		"ingredients": [
			"2 ozMcClelland’s Islay Single Malt scotch",
			".75 ozSweet Vermouth",
			".5 ozLemon juice",
			".5 ozHoney syrup",
			"1 barspn Maraschino liqueur",
			"2 dashes Angostura bitters"
		],
		"procedure": "Stir, rocks glass, lemon twist"
	},
	{
		"name": "PIMM’S UP",
		"ingredients": [
			"1 ozBols Genever",
			"1 ozPimm’s",
			".75 ozLemon juice",
			".75 ozSimple syrup",
			"7 drops Celery bitters"
		],
		"procedure": "Shake, coupe, two drops celery bitters"
	},
	{
		"name": "GUNSHOP FIZZ",
		"ingredients": [
			"2 Strawberries (muddled)",
			"3 Cucumber slices (muddled)",
			"3 Grapefruit peels (muddled)",
			"3 Orange peels (muddled)",
			"2 ozPeychaud’s bitters",
			"1 ozLemon juice",
			"1 ozSimple syrup",
			"Sanbitter"
		],
		"procedure": "Shake first 7 ingredients, Collins glass, cracked ice. Top with Sanbitter, cucumber slice"
	},
	{
		"name": "WESTERN PASSAGE",
		"ingredients": [
			"1.5 ozBatavia Arrack",
			".5 ozDolin Sweet Vermouth",
			".5 ozDolin Dry Vermouth",
			".5 ozYellow Chartreuse",
			"1 dash Angostura bitters",
			"1 dash Orange bitters"
		],
		"procedure": "Stir, coupe, cherry, express orange peel"
	},
	{
		"name": "PATENT PENDING",
		"ingredients": [
			"1.5 ozSmith & Cross Rum",
			".75 ozBatavia Arrack",
			".5 ozAperol",
			"1 tsp Don's Mix",
			"1 tsp Vanilla syrup",
			"2 dash Amargo Peruvian bitters"
		],
		"procedure": "Stir, double old fashioned glass, large cube, express grapefruit peel"
	},
	{
		"name": "BAMBOO",
		"ingredients": [
			"1.5 ozDolin Blanc vermouth",
			"1.5 ozLustau palo cortado sherry",
			"2 dashes Angostura bitters",
			"1 dash Orange bitters"
		],
		"procedure": "Stir, coupe, lemon twist"
	},
	{
		"name": "OLD FRIEND",
		"ingredients": [
			"1.5 ozBeefeater gin",
			"0.75 ozgrapefruit juice",
			"0.5 ozCampari",
			"0.25 ozSt-Germain"
		],
		"procedure": "Shake, coupe, lemon twist."
	},
	{
		"name": "GREEN TEA PUNCH",
		"ingredients": [
			"3 ozBanks 5-Island rum",
			"1.5 ozbrewed sencha tea",
			"1.5 ozbrewed mint tisane",
			"1 ozlime juice",
			"1 ozSimple syrup"
		],
		"procedure": "Stir, punch glass, cracked ice, grated nutmeg"
	},
	{
		"name": "MONTE CARLO",
		"ingredients": [
			"2 ozRittenhouse Rye",
			".5 ozBenedictine",
			"2 dashes Angostura bitters"
		],
		"procedure": "Stir, old-Fashioned glass, large cube. Express lemon peel, drop in"
	},
	{
		"name": "AUTUMN OLD-FASHIONED",
		"ingredients": [
			".5 ozGeorge Dickel Rye",
			".5 ozLaird’s Apple brandy",
			".5 ozTariquet VSOP Bas-Armagnac",
			".5 ozBank Note scotch",
			"1 teaspoon Grade B maple syrup",
			"2 dashes Bittermens Xocolatl mole bitters",
			"1 dash Angostura bitters"
		],
		"procedure": "Stir, old-Fashioned glass, large cube, express lemon and orange peel, drop in"
	},
	{
		"name": "THE FIELD MARSHALL",
		"ingredients": [
			"1 ozTariquet Classique VS Bas-Armagnac",
			".5 ozRoyal Combier",
			"2 dashes Angostura bitters",
			"2 dashes Peychaud’s bitters",
			"Champagne"
		],
		"procedure": "Stir first 4 ingredients, Champagne flute. Top with Champagne, lemon twist"
	},
	{
		"name": "SHERRY COBBLER",
		"ingredients": [
			"3 orange slices (muddled)",
			"1 teaspoon Simple syrup",
			"3.5 ozamontillado sherry"
		],
		"procedure": "Stir, Collins glass, crushed ice, orange wheel, mint sprig"
	},
	{
		"name": "TRACTION",
		"ingredients": [
			"2 lemon wedges (muddled)",
			"1 strawberry (muddled)",
			"1.5 ozLustau Los Arcos amontillado sherry",
			".5 ozSanta Teresa 1796 rum",
			".75 ozDry Curaçao"
		],
		"procedure": "Shake, double strain, old-Fashioned glass, crushed ice, strawberry, lemon wedge, mint sprig"
	},
	{
		"name": "SMOKE AND MIRRORS",
		"ingredients": [
			"4 mint leaves (muddled)",
			".75 ozSimple syrup",
			"1 ozBlended scotch",
			".5 ozLaphroaig 10-year scotch",
			".75 ozLime juice",
			"2 dashes Pernod absinthe"
		],
		"procedure": "Shake, double old-Fashioned glass, large cube, mint sprig"
	},
	{
		"name": "SMOKESCREEN",
		"ingredients": [
			"4 mint leaves (muddled)",
			".75 ozsimple syrup",
			"1 ozBlended scotch",
			".5 ozLaphroaig 10-year scotch",
			".25 ozGreen Chartreuse",
			".75 ozLime juice"
		],
		"procedure": "Shake, double old-Fashioned glass over, large cube, mint sprig"
	},
	{
		"name": "JACK FROST",
		"ingredients": [
			".75 ozCabeza blanco tequila",
			".75 ozPear brandy",
			".75 ozLa Quintinye Vermouth Royal extra dry",
			"1 teaspoon Creme de Menthe",
			".75 ozLime juice",
			".5 ozSimple syrup"
		],
		"procedure": "Swizzle, Collins glass, crushed ice, with the mint sprig, sage bouquet, dusting of powdered sugar"
	},
	{
		"name": "RATIONAL THOUGHT",
		"ingredients": [
			"1 ozPaul Beau VSOP Cognac",
			".5 ozPear brandy",
			"1 ozDry Curaçao",
			".75 ozLemon juice",
			"1 teaspoon Cinnamon syrup"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "MAIDEN'S BLUSH",
		"ingredients": [
			"1 ozRaspberry Cordial",
			".75 ozLemon juice",
			"1 ozPernod Absinthe",
			"1.5 ozHayman's Old Tom Gin"
		],
		"procedure": "Shake, punch glass"
	},
	{
		"name": "RASPBERRY CORDIAL",
		"ingredients": [
			"3 ozraspberries",
			"2 cups Sugar Syrup",
			".5 ozrose water",
			".5 ozEverclear"
		],
		"procedure": "Puree raspberries, mix in sugar syrup. Strain through a chinois or cheesecloth into a bottle. Add rose water and Everclear and shake"
	},
	{
		"name": "DELICIOUS SOUR",
		"ingredients": [
			"3 dashes Eucalyptus Tincture",
			".5 ozPistachio Orgeat",
			"2 ozLaird’s Apple brandy",
			".25 ozPeach liqueur",
			".75 ozLime juice",
			"3 dashes Pernod Absinthe",
			"1 Egg white"
		],
		"procedure": "Shake, punch glass, cracked ice,	grated nutmeg."
	},
	{
		"name": "WHISKEY COCKTAIL #2",
		"ingredients": [
			"2 ozOld Overholt Rye",
			".75 ozBenedictine",
			".25 ozRoyal Combier",
			"3 dashes Angostura bitters",
			"3 dashes Orange bitters",
			"3 dashes Pernod Absinthe"
		],
		"procedure": "Stir, cocktail glass, express orange peel"
	},
	{
		"name": "BIJOU",
		"ingredients": [
			"1.5 ozTanqueray Gin",
			"1.5 ozSweet vermouth",
			".5 ozGreen Chartreuse",
			"2 dashes Orange bitters",
			"2 dashes Angostura bitters",
			"2 dashes Pernod Absinthe"
		],
		"procedure": "Stir, cocktail glass, express orange peel"
	},
	{
		"name": "SUISSESSE #2",
		"ingredients": [
			".5 ozAquavit",
			".5 ozCrème de Cacao",
			"1.5 ozLa Clandestine Absinthe",
			"2 dashes Peychaud’s bitters",
			".5 large Egg white",
			"2 ozChilled water"
		],
		"procedure": "Shake, cocktail glass, express lemon peel, grated nutmeg"
	},
	{
		"name": "FLOR DE JEREZ",
		"ingredients": [
			".5 ozAppleton Estate Reserve rum",
			"1.5 ozLustau amontillado sherry",
			".25 ozApricot liqueur",
			".75 ozLemon juice",
			".5 ozSimple syrup",
			"1 dash Angostura bitters"
		],
		"procedure": "Shake, coupe"
	},
	{
		"name": "CITY OF GOLD SLING",
		"ingredients": [
			"1.5 ozHayman’s Old Tom Gin",
			".5 ozel Dorado 12-year rum",
			".75 ozDonn’s Spices #2",
			"1 dash Vieux Pontarlier absinthe",
			"1 ozPineapple juice",
			".5 ozLime juice",
			".25 ozOrgeat",
			"1 dash Peychaud’s bitters"
		],
		"procedure": "Shake, highball glass, cracked ice, pineapple wedge"
	},
	{
		"name": "PRETTY BIRD",
		"ingredients": [
			"1.5 ozBombay London Dry Gin",
			".5 ozRhum Clement Creole Shrub",
			".75 ozGrapefruit juice",
			".5 ozLime juice",
			".25 ozGrenadine",
			"1 teaspoon Cinnamon Bark syrup"
		],
		"procedure": "Shake, double rocks glass, large cube, lime wheel, cherry flag"
	}
];