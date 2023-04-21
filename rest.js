// Create buttons that do each of the tasks below
// Render the results to the page in html elements.
// Hide the results from the previous actions

//Where things are rendered in on page
const resultsSection = document.getElementById("results");

//function for clearing out the result section
function clearResults() {
    resultsSection.innerHTML = '';
}

// attaching events to buttons
const getAllButton = document.getElementById("allPostsButton").addEventListener('click', getAllPosts);
const postTenButton = document.getElementById("postIdTen").addEventListener('click', postTen);
const newPostButton = document.getElementById("createNewPost").addEventListener('click', createPost);
const replacePostButton = document.getElementById('replacePost').addEventListener('click', replacePost);
const updateTitleButton = document.getElementById('updateTitle').addEventListener('click', updateTitle);
const deleteButton = document.getElementById('deletePost').addEventListener('click', deletePost);

// get all posts
function getAllPosts() {
    clearResults();
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => (resultsSection.innerHTML = JSON.stringify(posts)))
        .catch((error) => console.log(error));
}

// Get post with id of 10
function postTen() {
    clearResults();
    fetch('https://jsonplaceholder.typicode.com/posts/10')
        .then((response) => response.json())
        .then((posts) => (resultsSection.innerHTML = JSON.stringify(posts)))
        .catch((error) => console.log(error));
}

// Create a new post and log the id generated for it by the server
function createPost() {
    clearResults()
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Help',
        body: 'Save me.',
        userId: 1,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
})
    .then((response) => response.json())
    .then((posts) => (resultsSection.innerHTML = JSON.stringify(posts.id)))
    .then((prints) => console.log(prints))
    .catch((error) => console.log(error));
}
// Replace the post with id of 12 and render the responseJSON
function replacePost () {
    clearResults();
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
        title: 'Does this work',
        body: 'why',
        userId: 203,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
})
    .then((response) => response.json())
    .then((posts) => (resultsSection.innerHTML = JSON.stringify(posts)))
    .catch((error) => console.log(error))}

// Update the title of post with id of 12 and render responseJSON
function updateTitle () {
    clearResults();
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
        title: 'Everything else good?',
        body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
        userId: 2,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
})
    .then((response) => response.json())
    .then((posts) => (resultsSection.innerHTML = JSON.stringify(posts)))
    .catch((error) => console.log(error));
}

// Delete the post with id of 12 and render a success message
function deletePost () {
    clearResults();
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'DELETE',
})
    .then((response) => response.json())
    .then(() => (resultsSection.innerHTML = "You've successfully deleted the post."))
    .catch((error) => console.log(error));
}
