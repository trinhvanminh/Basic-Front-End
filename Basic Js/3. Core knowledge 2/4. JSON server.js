// https://github.com/typicode/json-server

// 1. npm install -g json-server
// 2. Create a db.json file with some data
// {
//     "posts": [
//       { "id": 1, "title": "json-server", "author": "typicode" }
//     ],
//     "comments": [
//       { "id": 1, "body": "some comment", "postId": 1 }
//     ],
//     "profile": { "name": "typicode" }
// }

// 3. json-server --watch db.json
// 4. http://localhost:3000/posts/1,





const fetch = require("node-fetch");
var courseApi = "http://localhost:3000/courses"

fetch(courseApi)
    .then(function(respone) {
        return respone.json()
    })
    .then(function(courses) {
        console.log(courses)
    })
    .catch(function(err) {
        console.log(err)
    })



// 4. fetcj
// - JSON server: API Server (Fake) = Mock API
// - CRUP
// - Postman