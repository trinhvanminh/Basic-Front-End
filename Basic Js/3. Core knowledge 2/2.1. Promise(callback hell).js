


//  Callback hell
//  Pyramid of doom


setTimeout(function(){
    console.log(1) // viec 1
    setTimeout(function(){
        console.log(2) // viec 2
        setTimeout(function(){
            console.log(3) // viec 3
            setTimeout(function(){
                console.log(4) // viec 4
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

// return mot cach theo thu tu 1 2 3 4 



