	// Basic Card Module

	var BasicCard = function (question, answer) {
		this.question = question;
		this.answer = answer;
	};


	BasicCard.prototype.print = function() {
		return "\nQuestion: " + this.question + "\nAnswer: " + this.answer; 
	};

	module.exports = BasicCard;
