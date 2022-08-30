import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/troycaselli')
  .then(res => {
    console.log(res.data)
    cards.appendChild(userCardMaker({imageURL: res.data.avatar_url, name: res.data.name, username: res.data.login, location: res.data.location, profileURL: res.data.html_url, followers: res.data.followers, following: res.data.following, bio: res.data.bio}));
  })
  .catch(err => console.error(err));

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
// const cards = document.querySelector('.cards');
// cards.appendChild(userCardMaker({imageURL: , name: 2, username: 3, location: 4, profileURL: 'https://github.com/troycaselli', followers: 6, following: 7, bio: 8}));

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function userCardMaker({imageURL, name, username, location, profileURL, followers, following, bio}) {
  // initalizing and creating elements
  const card = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const nameEl = document.createElement('h3')
  const usernameEl = document.createElement('p')
  const locationEl = document.createElement('p')
  const profileEl = document.createElement('p')
  const link = document.createElement('a')
  const followersEl = document.createElement('p')
  const followingEl = document.createElement('p')
  const bioEl = document.createElement('p')

  // structure elements
  card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(nameEl)
  cardInfo.appendChild(usernameEl)
  cardInfo.appendChild(locationEl)
  cardInfo.appendChild(profileEl)
  profileEl.appendChild(link)
  cardInfo.appendChild(followersEl)
  cardInfo.appendChild(followingEl)
  cardInfo.appendChild(bioEl)

  // filling elements
  card.classList = 'card'
  image.src = imageURL
  cardInfo.classList = 'card-info'
  nameEl.textContent = name
  nameEl.classList = 'name'
  usernameEl.textContent = username
  usernameEl.classList = 'username'
  locationEl.textContent =`Location: ${location}`
  profileEl.textContent = `Profile: `
  link.href = profileURL
  link.textContent = `${profileURL}`
  followersEl.textContent = `Followers: ${followers}`
  followingEl.textContent = `Following: ${following}`
  bioEl.textContent = `Bio: ${bio}`

  return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
