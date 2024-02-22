var usersContainer = document.getElementById('users-container');
var userList = []; // Maintain a list of users

if (usersContainer) {
  // fetchDataAndDisplayUsers();  // Comment this out to avoid automatic fetching on page load
} else {
  console.error('Error: Could not find users-container element.');
}

function fetchDataAndDisplayUsers() {
  fetch('https://randomuser.me/api/?results=1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(data => {
      if (!data.results || !Array.isArray(data.results)) {
        throw new Error('Invalid data structure');
      }

      var newUsers = data.results;
      userList = userList.concat(newUsers); // Append new users to the existing list

      var userListHtml = userList.map(user => `
        <div class="user" style="text-align: center; margin: 20px;">
          <img src="${user.picture.medium}" alt="User Thumbnail" style="border-radius: 50%; width: 150px; height: 150px;">
          <h2>${user.name.first} ${user.name.last}</h2>
          <p>Email: ${user.email}</p>
          <p>Nationality: ${user.nat}</p>
        </div>
      `).join('');

      usersContainer.innerHTML = userListHtml;
    })
    .catch(error => {
      console.error('Error fetching or processing data:', error);
    });
}

function clearUsers() {
  userList = []; // Clear the list of users
  usersContainer.innerHTML = '';
}
