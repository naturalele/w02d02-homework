const game = {
	cards: 
	[{name: "Bulbasaur", damage:60}, 
	{name: "Caterpie", damage:40},
	{name: "Charmander", damage:60},
	{name: "Clefairy", damage:50},
	{name: "Jigglypuff", damage:60},
	{name: "Mankey", damage:30},
	{name: "Meowth", damage:60},
	{name: "Nidoran - female", damage:60},
	{name: "Nidoran - male", damage:50},
	{name: "Oddish", damage:40},
	{name: "Pidgey", damage:50},
	{name: "Pikachu", damage:50},
	{name: "Poliwag", damage:50},
	{name: "Psyduck", damage:60},
	{name: "Rattata", damage:30}, 
	{name: "Squirtle", damage:60}, 
	{name: "Vulpix", damage:50}, 
	{name: "Weedle", damage:40}],
		
	playedCards: [],
	computerPoints: [],
	playerPoint: [],
	roundsWonByPlayer: [],
	currentRound: [],
	computerHand: [],
	playerHand: [],


	dealCards() {
		for (let i = 0; i < 3; i ++) { 
			let randomNumber = Math.floor(Math.random() * this.cards.length);
			let dealCard = this.cards.splice(randomNumber, 1)[0];
			this.playerHand.push(dealCard);
		}
		
		for (let i = 0; i < 3; i ++) { 
			let randomNumber = Math.floor(Math.random() * this.cards.length);
			let dealCard = this.cards.splice(randomNumber, 1)[0];
			this.computerHand.push(dealCard);
		};
	}
};

game.dealCards();

	// battle () {
	// 	if()
	// },
				
	




	// playerHand() {
	// 	for(let i = 0; i < 3; i++) {
	// 	this.playerHand.push(this.deal());
	// 		}
	// 		{console.log("players hand");}
	// 		return this.playerHand;
	// 		},

	// computerHand() {
	// 	for(let i = 0; i < 3; i++) {
	// 	this.computerHand.push(this.deal());
	// 		}
	// 	return this.computerHand;
	// 		},

	// evaluateCard() {
	// 	if playerHand[i] > computerHand[i] {
	// 			console.log("Player Wins");
	// 		}
	// 	else { 
	// 		console.log("Computer Wines");
	// 		},
	// }


// console.log(game.computerHand);	

				

	


				// remainingCardsAmount: cards.length
				// playerPoints: sum
				// computerPoints: sum
				// rounds: [console.log("Winner!")]



//starting a round will call players hands



			