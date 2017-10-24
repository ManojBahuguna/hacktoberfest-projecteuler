//JavaScript solution to problem-1

/*
	function to get sum of multiples
 	first Param : factors - an array with numbers whose multiples are to be found.
  second Param : maxValue - the value upto which the multiples are to be found
  returns : the sum of all the multiples of given factors upto the maxValue
*/
function getSumOfMultiples(factors, maxValue){
	//if no params are passed or their length/value is zero, return -1 for error.
	if(factors == undefined || factors.length === 0 || !(maxValue > 0))
  	return -1;
  
  //initialize sum variable
  var sum = 0;
  
  //loop from the min factor to maxValue and add value to sum if it's multiple of any one of the factors
  var i = Math.min.apply(null, factors);
  for(; i < maxValue; i++) {
  	for(var j = 0; j < factors.length; j++) {
    	var num = factors[j];
      if(i % num == 0) {
      	sum += i;
        break;
      }
    }
  }
  
  return sum;
}


//using the function
var factors = [3, 5];
var maxValue = 10;
var result = getSumOfMultiples(factors, maxValue);

//print the result to console
console.log(result);
