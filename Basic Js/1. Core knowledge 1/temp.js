a = ['abc','123'];
a.length = 10;
console.log(a)


for(var i in a){
    console.log(a[i])
}
// abc
// 123



for(var i of a){
    console.log(i)
}
// abc
// 123
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined


