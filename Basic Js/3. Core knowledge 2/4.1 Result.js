var courseApi = 'http://localhost:3000/courses'

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}
start();


// Fucntion 
function getCourses(callback) {
    fetch(courseApi)
        .then(function(respone) {
            return respone.json();
        })
        .then(callback)
}


// keyword: fetch post
function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // gửi dạng json
            // 'Content-Type': 'application/x-www-form-urlencoded', 
            ////---> //{{"name":"name","description":"Description 5"}: "", id: 5}
          },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(function(respone) {
            return respone.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(courseApi + '/' + id, options)
        .then(function (respone) {
            return respone.join;
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}


function renderCourses(courses) {
    var listCoursesBlock = document.getElementById('list-courses')
    var htmls = courses.map(function(course) {
        return `<li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xoá</button>
        </li>`
    });
    listCoursesBlock.innerHTML = htmls.join('');
}


function handleCreateForm() {
    var createBtn = document.getElementById("create")
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description
        };
        document.querySelector('input[name="name"]').value = ''
        document.querySelector('input[name="description"]').value = ''
        // createCourse(formData)
        createCourse(formData, function() {
            getCourses(renderCourses)
        });
    }   
}

