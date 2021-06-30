var headingElement = document.querySelector('a')

headingElement.title = 'some new title to add'
headingElement.className = 'new class or modify'
// set
headingElement.href = 'new href'
// get
headingElement.href


// có thể set attribute tuỳ biến
headingElement.setAttribute('class','new-class') // class="new-class"
headingElement.setAttribute('tenkhongloplevan_ok','new-class') // tenkhongloplevan_ok="new-class"

headingElement.getAttribute('class')        //new-class

