/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};
myProfile.name = "Alexander Palacios";
myProfile.photo = "images/IMG_4559 (1).png"; 
myProfile.favoriteFoods = [
  'Chicken Tenders',
  'Chicken Alfredo',
  'Fried Rice',
  'Pho',
  'Mid rare steak'
]
myProfile.hobbies = ['Video Games', 'Coding', 'Dungeons and Dragons'];
myProfile.placesLived = [];

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
      place: 'Oceanside, CA',
      length: '7 years'
    }
  );

  myProfile.placesLived.push(
    {
      place: 'Fallbrook, CA',
      length: '13 years'
    },
  )

  myProfile.placesLived.push(
    {
      place: 'Rexburg, ID',
      length: '1 year'
    },
  )
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });  
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
  });

