this.firstName = "Minh";
this.lastName = "Thu";

const teacher = {
	firstName: "Minh",
	lastName: "Thao",
	getFullName(data1, data2) {
		console.log(data1, data2);
		return `${this.firstName} ${this.lastName}`;
	},
};

// case 1:
console.log(teacher.getFullName()); //'Minh Thao"

//case 2:
let getTeacherName = teacher.getFullName;

console.log(getTeacherName()); // "Minh Thu"

// bind khong sua this ma tao ra mot method moi voi this moi

getTeacherName = teacher.getFullName.bind(teacher, "test1", "test2");

console.log(getTeacherName()); // "Minh Thao"

getTeacherName = teacher.getFullName.bind(teacher);

console.log(getTeacherName("test3", "test4")); // "Minh Thao"

const teacher2 = {
	firstName: "Minh",
	lastName: "Thao",
	getFullName() {
		console.log(`${this.firstName} ${this.lastName}`)
	},
};


//vd1
const btn = document.querySelector("button");
btn.onclick = teacher2.getFullName.bind(teacher2)




