//adding import axios statement
import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

//declare entry point for cards
const cardsDiv = document.querySelector('.cards')

// function to create user card divs
function gitCardMaker(gitDataObj) {
  const cardDiv = document.createElement('div') // creates main card div
  const cardImg = document.createElement('img') // Creates image tag for cards
  const cardInfo = document.createElement('div') // Creates card info div for card info text
  const usersName = document.createElement('h3') // creates h3 tag for User's name field
  const gitUserName = document.createElement('p') // creates P tag for git username field
  const userLocation = document.createElement('p') // creates P tag for user location
  const userProfile = document.createElement('p') // // creates P tag for user profile link title
  const userProfileLink = document.createElement('a') // // creates a tag for user profile link 
  const userFollowers = document.createElement('p') // // creates P tag for followers count
  const userFollowing = document.createElement('p') // // creates P tag for following count
  const userBio = document.createElement('p') // // creates P tag for userBio

  //adding elements to carddiv in order of spec
  cardsDiv.appendChild(cardDiv)
  cardDiv.appendChild(cardImg)
  cardDiv.appendChild(cardInfo) 
  cardInfo.appendChild(usersName)
  cardInfo.appendChild(gitUserName)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(userProfile)
  userProfile.appendChild(userProfileLink)
  cardInfo.appendChild(userFollowers)
  cardInfo.appendChild(userFollowing)
  cardInfo.appendChild(userBio)
 
cardDiv.classList.add('card') // adds card clas to card div


return cardsDiv
}

console.log(cardsDiv)