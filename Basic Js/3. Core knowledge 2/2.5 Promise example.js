const users = [
    {
        id: 1,
        name: 'minh'
    },
    {
        id: 2,
        name: 'nam'
    },
    {
        id: 3,
        name: 'luong'
    },
    {
        id: 4,
        name: 'abc'
    }
]

const comments = [
    {
        id: 1,
        user_id: 2,
        content: "Lương Lê dơ vl"
    },
    {
        id: 2,
        user_id: 3,
        content: "Cái loz mẹ m Nam"
    },
    {
        id: 3,
        user_id: 1,
        content: "..."
    },
    {
        id: 4,
        user_id: 2,
        content: "Nói gì đi bạn hiền"
    },
]

function getComments(){
    return new Promise(
        function(resolve) {
            return resolve(comments)
        }
    )
}

function getUsersByIds(userIds) {
    return new Promise(
        function(resolve, reject) {
            let result = users.filter(function(user) {
                return userIds.includes(user.id)
            })
            return resolve(result)
        }
    )
}

getComments()
    //getUserIdsbyComments
    .then(function(comments) {
        let userIds = comments.map(function(comment) {
            return comment.user_id;
        });

        return  getUsersByIds(userIds)
                    .then(function(users) {
                        return {
                            users: users, 
                            comments: comments
                        };
                    });
    })
    //get user.name from comment.user_id -> return user.name + comment.content --> render html
    .then(function(data) {
        let commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return comment.user_id === user.id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        commentBlock.innerHTML = html;
    })

