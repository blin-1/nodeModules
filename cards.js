
	//--------------------- Begin Program ---------------------
	
	var BasicCard = require('./BasicCard');
	var ClozeCard = require('./ClozeCard');
	//var inquirer  = require('inquirer');
	
	testBasicCard();
	testCloseCard();
	
	//--------------------- End Program ---------------------
		

	
	function testBasicCard(){

		console.log ("\n\nTesting Basic Card");
		var card = new BasicCard('How many apples do you see?', 'Three and a half');
		console.log (card.print());
		console.log ("\nTesting Basic Card Is Fine");
	
	};
	
	function testCloseCard(){

		console.log ("\n\nTesting Cloze Card");
		var card = new ClozeCard('First President of the US was <...>', ' Lincoln ');
		console.log("Partial : " + card.partialText);
		console.log("Deleted : " + card.deletedText);
		console.log("Full    : " + card.fullText);
		console.log ("\nTesting Close Card Is Fine");
		
	};
	
	
/*
	var prepareCloze = function()
	{
		console.log("\n");
		console.log("*****");
		inquire.prompt(
		[
			{
				type: 'input',
				name: 'entireText',
				message: 'Please input ENTIRE TEXT with answer in it.'
				
			},
			{
				type: 'input',
				name: 'clozeAnswer',
				message: 'Please enter ONLY the answer'
				
			}
		]
	).then(function(answer)
	{
		console.log(answer.entireText);
		console.log(answer.clozeAnswer);
		var text = answer.entireText;
		var textAnswer = answer.clozeAnswer;



		var cloze = ClozeCard(text,textAnswer);
		cloze.fullText();
	});
		console.log("\n");
		
	};

	inquire.prompt(
		[
			{
				type: 'list',
				name: 'chooseCard',
				message: 'Would you like to make a Basic card or a Cloze Card?',
				choices: ["Basic Card", "Cloze Card"]
			}
		]
	).then(function(answer)
	{

		// console.log(answer.chooseCard+" chosen");

		switch(answer.chooseCard)
		{
			case "Basic Card":
			{
				
				console.log("This is from Basic switch");
				break;
			}
			case "Cloze Card":
			{
				console.log("This is from Cloze Switch");
				prepareCloze();
				break;
			}
			default:
			{
				console.log("What happened?");
			}
		}


	});
	*/