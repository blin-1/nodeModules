	// Cloze Card Module

		var placeholder = '<...>';
		var ClozeCard = function (question,answer) {
			this.question = question;
			this.answer = answer;
			this.partialText = question.replace(placeholder, " ");
			this.deletedText = question.replace(placeholder, "...");
			this.fullText = question.replace(placeholder, answer); 
		};
		
		module.exports = ClozeCard;
		
/* 		// Public functions go here



		ClozeCard.prototype.partialText = function(){
			return this.text.replace(this.cloze, " ");
		};   

		ClozeCard.prototype.deletedText = function(){
			return this.text.replace(this.cloze, "...");
		};

		ClozeCard.prototype.fullText = function() {
			return this.text + this.cloze; // what's the point?
		}; */