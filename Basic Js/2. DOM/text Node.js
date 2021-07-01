var headingElement = document.querySelector('h1')
// geter
headingElement.innerText     //return text giống như TRÌNH DUYỆT (lấy tất cả kể cả thẻ con), không bao gồm xuống dòng
headingElement.textContent   //return plaintext lấy cả dấu xuống hàng kể cả thẻ con (tất cả trong thẻ kể cả css trong thẻ style)
// seter    
headingElement.innerText = 'new text'       //nếu có dấu xuống hàng --> thêm thẻ <br> vào element
headingElement.textContent = 'new text'     //có dấu xuống hàng đc thêm vào DOM nhưng trình duyệt sẽ bỏ qua 
                                            // ->>> hiển thị như không có dấu xuống hàng


headingElement.innerText = '<h1>adasdasdasda</h1>'  // luôn tạo ra text chứ k phải element 
                                                    // dấu < hoặc > sẽ bị convert thành ký hiệu khác


//innerHTML

headingElement.innerHTML = '<h1 title="adadsadsa">adasdasdasda</h1>' // cách set HTML bên trong headingElement

headingElement.outerHTML = '<h1>ádsadsa</h1>' //==> ghi đè element headingElement



headingElement.id
headingElement.className

//-----------------------------------------------
// node properties

console.log([headingElement]); // để hiển thị tất cả các thuộc tính của object headingElement


headingElement.nodeType === 1 
// --> 1: element node || 2: attribute node || 3. text node

