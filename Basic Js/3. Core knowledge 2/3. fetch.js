
// const fetch = require("node-fetch");

var postAPI = 'https://jsonplaceholder.typicode.com/posts'

fetch(postAPI)
    .then(function(respone) {
        return respone.json();
        //JSON.parse: JSON --> javascript
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        console.log(err)
    })
    