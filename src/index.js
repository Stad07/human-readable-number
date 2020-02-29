module.exports = function toReadable (number) {
			  
	let readableNumbers = [
		null, 
		['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
		[null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
		[null, 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
	];

	let numbers = String(number).split('');
	let readables = [];            
		 
	for(let i = 0; i < numbers.length; i++) {

		if(numbers.length == 1) {
			readables.push(readableNumbers[numbers.length][+numbers[i]]); 
		}

		if(numbers[i] != 0) {                    

			if(numbers.length == 2) {
				if(i == 0 && numbers[i] != 1) {                      
					readables.push(readableNumbers[numbers.length][+numbers[i]]);
				} else if(i == 0 && numbers[i] == 1) {
					readables.push(readableNumbers[numbers.length-1][+numbers.join('')]);
					break;
				}

				if(i == 1) {                      
					readables.push(readableNumbers[numbers.length-1][+numbers[i]]);
				}

				if(i == 2) {                      
					readables.push(readableNumbers[numbers.length-2][+numbers[i]]); 
				} 
			}

			if(numbers.length == 3) {
				if(i == 0) {                      
					readables.push(readableNumbers[numbers.length][+numbers[i]]);
				}

				if(i == 1 && numbers[i] != 1) {                      
					readables.push(readableNumbers[numbers.length-1][+numbers[i]]);
				} else if(i == 1 && numbers[i] == 1) {                            
					readables.push(readableNumbers[numbers.length-2][+(numbers[i]+numbers[i+1])]);
					break;
				}

				if(i == 2) {                      
					readables.push(readableNumbers[numbers.length-2][+numbers[i]]); 
				} 
			}                                                     
		} 
	}                    
	return readables.join(' ');
}
