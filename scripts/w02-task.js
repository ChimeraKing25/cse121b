/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Alexander Palacios';
let currentYear = 2024;
let profilePicture = 'images/IMG_4559 (1).png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent =`${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', "Profile image of Alexander Palacios");

/* Step 5 - Array */
let favFoods = ["Chicken Tenders", "Chicken Alfredo", "Fried Rice", "Pho"]
foodElement.innerHTML = `${favFoods}`
let newFavFood = 'Mid rare steak' 
favFoods.push(newFavFood)
foodElement.innerHTML += `<br>${favFoods}`
favFoods.shift()
foodElement.innerHTML += `<br>${favFoods}`
favFoods.pop()
foodElement.innerHTML += `<br>${favFoods}`