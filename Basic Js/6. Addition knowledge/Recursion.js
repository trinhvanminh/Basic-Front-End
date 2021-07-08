a = ["a", "b", "c", "d", "e", "b", "c", "d", "e"];
b = new Set(a);
console.log(b); //Set(5) { 'a', 'b', 'c', 'd', 'e' }

// Input: 1, 5. Output: [2, 3, 4]
// Input: 4, 10. Output: [5, 6, 7, 8, 9]
// Input: 100, 104. Output: [101, 102, 103]

function run(x, y) {
	if (y - 1 <= x) {
		return [];
	}
	return [...run(x, y - 1), y - 1];
}
