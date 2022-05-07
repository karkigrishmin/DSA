// return the count of all numbers from start to end except
// numbers with a 5 in it.
function dontGiveMeFive(start, end) {
	let count = 0;

	for (let i = start; i <= end; i++) {
		if ((i + "").indexOf(5) === -1) {
			count += 1;
		}
	}
	return count;
}

// return an array containing all of the strings in the input array except those
// that match strings in geese
function gooseFilter(birds) {
	let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

	return birds.filter((bird, i) => {
		return !geese.includes(bird);
	});
}

//Given a list and a number, create a new list that contains each number of list
//  at most N times without reordering.For example if the input number is 2,
// and the input list is[1, 2, 3, 1, 2, 1, 2, 3], you take[1, 2, 3, 1, 2],
// drop the next[1, 2] since this would lead to 1 and 2 being in the result 3 times,
// and then take 3, which leads to[1, 2, 3, 1, 2, 3].
// With list[20, 37, 20, 21] and number 1, the result would be[20, 37, 21].
function deleteNth(arr, N) {
	let obj = {};
	let newArray = [];

	for (let i = 0, n = arr.length; i < n; i++) {
		!obj[arr[i]] ? (obj[arr[i]] = 1) : obj[arr[i]]++;
	}

	for (let i = 0, n = arr.length; i < n; i++) {
		if (obj[arr[i]] === N) {
			newArray = [...newArray, arr[i]];
		} else if (obj[arr[i]] > N) {
			newArray = [...newArray, arr[i]];
			obj[arr[i]] = N;
			obj[arr[i]]--;
		} else if (obj[arr[i]] < N && obj[arr[i]] > 0) {
			newArray = [...newArray, arr[i]];
			obj[arr[i]]--;
		}
	}

	return newArray;
}

//Return the number (count) of vowels in the given string.
function getCount(str) {
	let vowelsCount = 0;
	let vowels = ["a", "e", "i", "o", "u"];

	[...str].forEach((str) => (vowels.includes(str) ? vowelsCount++ : ""));

	return vowelsCount;
}

// Sum Numbers
function sum(numbers) {
	return numbers.reduce((acc, val) => acc + val, 0);
}

// Given a non-negative integer, 3 for example, return a string with a
// murmur: "1 sheep...2 sheep...3 sheep...".Input will always be valid, i.e.no negative integers.
function countSheep(num) {
	let str = "";

	if (!num) return "";

	for (let i = 0; i < num; i++) {
		str += `${i + 1} sheep...`;
	}
	return str;
}

//implement the function unique_in_order which takes as argument a sequence and
//returns a list of items without any elements with the same value next
// to each other and preserving the original order of elements
function uniqueInOrder(iterable) {
	let newArray = [];

	for (let i = 0, n = iterable.length; i < n; i++) {
		if (iterable[i] === iterable[i + 1]) {
			continue;
		}
		newArray.push(iterable[i]);
	}
	return newArray;
}

//return highest and lowest number
// highAndLow("1 2 3 4 5");  // return "5 1"
function highAndLow(numbers) {
	let array = numbers.split(" ");

	let sortedArray = array.sort((a, b) => a - b);

	return `${sortedArray[sortedArray.length - 1]} ${sortedArray[0]}`;
}
