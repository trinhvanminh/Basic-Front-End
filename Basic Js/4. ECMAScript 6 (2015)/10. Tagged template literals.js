

function highlight([first, ...strings], ...values) {
    /** 
     [Arguments] {
        '0': [ 'Học lập trình ', ' tại ', ' !' ],
        '1': 'JavaScript',
        '2': 'F8'
      }
    **/
    // [first, ...strings]: [ 'Học lập trình ', ' tại ', ' !' ], rest  [ 'JavaScript', 'F8' ]
    // first: 'Học lập trình ', strings: [' tại ', ' !' ]

    return values.reduce(
        // acc return dạng list [] --> unpack bằng ...acc
        // strings.shift(): lấy phần tử đầu return lại phần tử đầu, mảng ban đầu sẽ mất phần tử đầu
        (acc, curr) => [...acc,`<span>${curr}</span>`,strings.shift()],
        [first]
    ).join('');

    //.join('') nối chuỗi trống vào giữa các ele in list --> return html string 
}

var course = 'JavaScript'
var brand = 'F8'

const html = highlight`Học lập trình ${course} tại ${brand} !`
console.log(html)