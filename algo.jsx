// find prime
// let num = 100;
// let isPrime = true;
// for (let i = 2; i < num / 2; i++) {
// 	if (num % i == 0) {
// 		isPrime = false;
// 		break;
// 	}
// }
// if (isPrime) {
// 	console.log(num + " is a prime number");
// } else {
// 	console.log(num + " is not a prime number");
// }

// find max
const num = [133, 2, 3, 4, 200, 5, 60];
let max = 0;
for (let i = 0; i < num.length; i++) {
	if (num[i] > max) {
		max = num[i];
	}
}
console.log(max);
