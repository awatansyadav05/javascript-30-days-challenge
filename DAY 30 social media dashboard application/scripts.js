
function toggleForms() {
  document.getElementById('loginForm').style.display = 
      document.getElementById('loginForm').style.display === 'none' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = 
      document.getElementById('registerForm').style.display === 'none' ? 'block' : 'none';
}

// User Authentication
let loggedInUser = null;
let users = JSON.parse(localStorage.getItem('users')) || [];

// Registration Form
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('regUsername').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  // Basic validation
  if (username && email && password) {
      users.push({ username, email, password, profilePic: '' });
      localStorage.setItem('users', JSON.stringify(users));
      toggleForms();
      alert('Registration successful. Please log in.');
  }
});

// Login Form
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const usernameOrEmail = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple user authentication
  const user = users.find(u => 
      (u.username === usernameOrEmail || u.email === usernameOrEmail) && u.password === password);
  if (user) {
      loggedInUser = user;
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      displayDashboard();
  } else {
      alert('Invalid login credentials.');
  }
});

// Display Dashboard
function displayDashboard() {
  document.getElementById('authContainer').style.display = 'none';
  document.getElementById('dashboardContainer').style.display = 'flex';

  // Display user profile information
  document.getElementById('profileUsername').innerText = loggedInUser.username;
  document.getElementById('profileEmail').innerText = loggedInUser.email;
  document.getElementById('profilePic').src = loggedInUser.profilePic || 'https://via.placeholder.com/100';

  
  displayPosts();
  displayNotifications();
}
function updateProfile() {
  const fileInput = document.getElementById('updateProfilePic');
  if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
          loggedInUser.profilePic = e.target.result;
          localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
          localStorage.setItem('users', JSON.stringify(users));
          document.getElementById('profilePic').src = e.target.result;
          alert('Profile updated successfully.');
      }
      reader.readAsDataURL(fileInput.files[0]);
  }
}

const posts = JSON.parse(localStorage.getItem('posts')) || [];

document.getElementById('postButton').addEventListener('click', function() {
  const postText = document.getElementById('postText').value;
  const postImage = document.getElementById('postImage').files[0];

  if (postText || postImage) {
      const newPost = {
          text: postText,
          username: loggedInUser.username,
          image: '',
          timestamp: new Date().toLocaleString(),
          likes: 0,
          comments: []
      };

      if (postImage) {
          const reader = new FileReader();
          reader.onload = function(e) {
              newPost.image = e.target.result;
              posts.push(newPost);
              localStorage.setItem('posts', JSON.stringify(posts));
              displayPosts();
          }
          reader.readAsDataURL(postImage);
      } else {
          posts.push(newPost);
          localStorage.setItem('posts', JSON.stringify(posts));
          displayPosts();
      }

      document.getElementById('postText').value = '';
      document.getElementById('postImage').value = '';
  }
});

function displayPosts() {
  const postFeed = document.getElementById('postFeed');
  postFeed.innerHTML = '';

  posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      if (post.username !== loggedInUser.username) {
          postElement.classList.add('different-user-post');
      }

      postElement.innerHTML = `
          <h4>${post.username}</h4>
          <p class="post-details">${post.timestamp}</p>
          <p>${post.text}</p>
          ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
          <div class="post-actions">
              <button onclick="likePost('${post.timestamp}')">Like <span>${post.likes}</span></button>
              <button onclick="commentOnPost('${post.timestamp}')">Comment</button>
          </div>
      `;
      postFeed.appendChild(postElement);
  });
}

function likePost(timestamp) {
  const post = posts.find(p => p.timestamp === timestamp);
  post.likes++;
  localStorage.setItem('posts', JSON.stringify(posts));
  displayPosts();
  addNotification(`Your post received a new like.`);
}

function commentOnPost(timestamp) {
  const comment = prompt('Enter your comment:');
  if (comment) {
      const post = posts.find(p => p.timestamp === timestamp);
      post.comments.push({ username: loggedInUser.username, comment });
      localStorage.setItem('posts', JSON.stringify(posts));
      displayPosts();
      addNotification(`Your post received a new comment.`);
  }
}


const notifications = JSON.parse(localStorage.getItem('notifications')) || [];

function addNotification(message) {
  const notification = { message, timestamp: new Date().toLocaleString() };
  notifications.push(notification);
  localStorage.setItem('notifications', JSON.stringify(notifications));
  displayNotifications();
}

function displayNotifications() {
  const notificationsContainer = document.getElementById('notifications');
  notificationsContainer.innerHTML = '';

  notifications.forEach(notification => {
      const notificationElement = document.createElement('div');
      notificationElement.classList.add('notification');
      notificationElement.innerHTML = `<p>${notification.message}</p><small>${notification.timestamp}</small>`;
      notificationsContainer.appendChild(notificationElement);
  });
}

window.onload = function() {
  loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (loggedInUser) {
      displayDashboard();
  }
}
