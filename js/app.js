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
	computerPoint: 0,
	playerPoint: 0,
	roundsWonByPlayer: 0,
	roundsWonByComputer: 0,
	currentRound: 1,
	computerHand: [],
	playerHand: [],


	dealCards() { //had trouble calling let random from seperate deal cards function- scope issue
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
	},


	battle() { 
		console.log("the battle begins");
		this.dealCards();
			let playerCard = this.playerHand.splice(0, 1)[0];
			console.log(playerCard);
			let computerCard = this.computerHand.splice(0, 1)[0];
			console.log(computerCard);
			if (playerCard.damage > computerCard.damage) {
				console.log("player wins!")
				this.playerPoint ++;
				console.log(this.playerPoint);
			} else if (playerCard.damage < computerCard.damage) {
				console.log("computer wins!")
				this.computerPoint ++;
				console.log(this.computerPoint);
			};

		},

		round() {
			this.battle();
			this.battle();
			this.battle();
				if (this.playerPoint > this.computerPoint) {
					console.log("Player takes it all!")
				} else if(this.playerPoint < this.computerPoint) {
					console.log("Computer takes it all!")
				}

		}

	

	
};
	




	
				
	








			