
const loginForm = document.getElementById('loginForm');
const dashboardContainer = document.getElementById('dashboardContainer');
const loginContainer = document.getElementById('loginContainer');
let loggedInUser = null;

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;


  if (username && password) {
    loggedInUser = username;
    localStorage.setItem('loggedInUser', loggedInUser);
    loginContainer.style.display = 'none';
    dashboardContainer.style.display = 'block';
  }
});


const postButton = document.getElementById('postButton');
const postFeed = document.getElementById('postFeed');
let posts = [];

postButton.addEventListener('click', function () {
  const postText = document.getElementById('postText').value;
  const postImage = document.getElementById('postImage').files[0];

  if (postText || postImage) {
    const newPost = {
      username: loggedInUser,
      text: postText,
      image: postImage ? URL.createObjectURL(postImage) : null,
      timestamp: new Date().toLocaleString(),
      likes: 0,
      comments: []
    };

    posts.push(newPost);
    displayPosts();
  }
});

function displayPosts() {
  postFeed.innerHTML = '';
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    if (post.username !== loggedInUser) {
      postElement.classList.add('different-user-post');
    }

    postElement.innerHTML = `
            <h4>${post.username}</h4>
            <p class="post-details">${post.timestamp}</p>
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            <div class="post-actions">
                <button onclick="likePost(${posts.indexOf(post)})">Like</button>
                <span>${post.likes} Likes</span>
                <button onclick="commentOnPost(${posts.indexOf(post)})">Comment</button>
                <span>${post.comments.length} Comments</span>
            </div>
        `;
    postFeed.appendChild(postElement);
  });
}

function likePost(index) {
  posts[index].likes++;
  displayPosts();
}

function commentOnPost(index) {
  const comment = prompt('Enter your comment:');
  if (comment) {
    posts[index].comments.push(comment);
    displayPosts();
  }
}

window.onload = function () {
  const savedUser = localStorage.getItem('loggedInUser');
  if (savedUser) {
    loggedInUser = savedUser;
    loginContainer.style.display = 'none';
    dashboardContainer.style.display = 'block';
    displayPosts();
  }
};
