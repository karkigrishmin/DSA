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

//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string,
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
	let str = s1 + s2;
	let sortedArr = str.split("").sort();
	let uniqueString = sortedArr
		.filter((elem, i, arr) => arr.indexOf(elem) === i)
		.join("");

	return uniqueString;
}

// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument(also a string).
function solution(str, ending) {
	let newStrArr = str.split(ending);
	let arrLen = newStrArr.length;

	return !newStrArr[arrLen - 1] || ending === "" ? true : false;

	//----------- next solution-------------
	// return str.endsWith(ending);
}

// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
//Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
function createPhoneNumber(numbers) {
	let str = numbers.join("");
	return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`;

	//-------------- next solution-----------------
	// let phNum = "(xxx) xxx-xxxx";

	// numbers.forEach((num) => {
	// 	phNum = phNum.replace("x", num);
	// });

	// return phNum;
}

// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function solution(string) {
	let strArr = string.split("");
	return strArr
		.map((item, index) =>
			item.toUpperCase() === strArr[index] ? ` ${item}` : item
		)
		.join("");

	// -----------------next solution------------------------------
	// return strArr.map(item => item.search(/^[A-Z]*$/) === 0 ? ` ${item}` : item).join('')
}

// A pangram is a sentence that contains every single letter of the alphabet
// at least once.For example, the sentence "The quick brown fox jumps over the
// lazy dog" is a pangram, because it uses the letters A - Z at least once(case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is,
//  False if not.Ignore numbers and punctuation.
function isPangram(string) {
	//...
	let letters = [..."abcdefghijklmnopqrstuvwxyz"];

	return letters.every((letter) => string.toLowerCase().includes(letter));
}

// Complete the function scramble(str1, str2) that returns true if a portion
// of str1 characters can be rearranged to match str2, otherwise returns false
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False
function scramble(str1, str2) {
	//code me
	let obj = {};
	const str1Arr = str1.split("");
	const str2Arr = str2.split("");

	str1Arr.forEach((char) => {
		if (obj[char]) {
			obj[char] += 1;
		} else {
			obj[char] = 1;
		}
	});

	return str2Arr.every((char) => {
		if (!obj[char]) {
			return false;
		} else if (obj[char]) {
			obj[char] -= 1;
			return true;
		}
	});
}

// Remove vowel from the string and return that string
// removeVowel('eye') => 'y'
// removeVowel('enthu') => 'nth'
const removeVowel = (str) => {
	const vowel = [..."aeiou"];
	const strArr = str.split("");

	return strArr.filter((char) => !vowel.includes(char.toLowerCase())).join("");
};
