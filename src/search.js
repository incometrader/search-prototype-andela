Array.prototype.toTwenty = function() {
 	var arr = [];
 	for (var i = 1; i <= 20; i++) {
 		arr.push(i);
 	}

 	return arr;
 };

Array.prototype.toForty = function() {
 	var arr = [];
 	for (var j = 2; j <= 40; j+=2) {
 		arr.push(j);
 	}

 	return arr;
 };

Array.prototype.toOneThousand = function() {
 	var arr = [];
 	for (var k = 10; k <= 1000; k+=10) {
 		arr.push(k);
 	}

 	return arr;
 };

Array.prototype.indexOf = function() {
  throw new Error('You are not allowed to use the indexOf function');
};

Array.prototype.search = function(num){
 	var searchObj  = {count: 0, index: 0, length: this.length},
 			midIndex,
 			startIndex = 0,
 			stopIndex  = this.length - 1;

 	if (num === this[stopIndex]) {
 		searchObj.index = stopIndex;
 		return searchObj;
 	}

 	if (num === this[startIndex]) {
 		searchObj.index = startIndex;
 		return searchObj;
 	}

 	while (startIndex < stopIndex) {
 		midIndex = Math.floor((startIndex + stopIndex)/2);

 		if (num === this[midIndex]) {
 			searchObj.index = midIndex;
 			return searchObj;
 		}

 		if (num === this[midIndex - 2]) {
			searchObj.index = midIndex - 2;
			return searchObj;
		}

 		if (num < this[midIndex]) {
 			stopIndex = midIndex - 1;
 			searchObj.count++;
 		} else if (num > this[midIndex]) {
 			startIndex = midIndex + 1;
 			searchObj.count++;
 		}
 	}

 	searchObj.index = -1;
 	return searchObj;

 }
 
module.exports = Array.prototype;