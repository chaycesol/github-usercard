//adding import axios statement
import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
  axios.get ('https://api.github.com/users/chaycesol')
    .then(response =>{
    console.log(response.data);
    const githubData = response.data;
  
    const cardDiv = gitCardMaker(githubData);
    cardsContainer.appendChild(cardDiv);
    
  })


  //Response
//   {
//     "login": "chaycesol",
//     "id": 7193100,
//     "node_id": "MDQ6VXNlcjcxOTMxMDA=",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/7193100?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/chaycesol",
//     "html_url": "https://github.com/chaycesol",
//     "followers_url": "https://api.github.com/users/chaycesol/followers",
//     "following_url": "https://api.github.com/users/chaycesol/following{/other_user}",
//     "gists_url": "https://api.github.com/users/chaycesol/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/chaycesol/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/chaycesol/subscriptions",
//     "organizations_url": "https://api.github.com/users/chaycesol/orgs",
//     "repos_url": "https://api.github.com/users/chaycesol/repos",
//     "events_url": "https://api.github.com/users/chaycesol/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/chaycesol/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Chayce Solchaga",
//     "company": null,
//     "blog": "www.linkedin.com/in/chaycesolchaga",
//     "location": "Los Angeles, CA",
//     "email": null,
//     "hireable": null,
//     "bio": "Product Manger | Digital Nomad | UX | Scrum Evangelist",
//     "twitter_username": null,
//     "public_repos": 33,
//     "public_gists": 0,
//     "followers": 2,
//     "following": 0,
//     "created_at": "2014-04-06T01:34:50Z",
//     "updated_at": "2020-07-09T18:04:00Z"
// }
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


// function to create user card divs
const cardsContainer = document.querySelector('.cards');

function gitCardMaker(gitDataObj) {
  
  //declaring data values from Github API
  const avatarUrl = gitDataObj.avatar_url;
  const githubName = gitDataObj.name;
  const githubUserName = gitDataObj.login;
  const githubLoction = gitDataObj.location;
  const githubLink = gitDataObj.html_url;
  const githubFollowers = gitDataObj.followers;
  const githubFollowing = gitDataObj.following;
  const githubBio = gitDataObj.bio;
  
  // Creating Card Divs
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
 
  //adding classes per spec
  cardDiv.classList.add('card') // adds card class to card div
  cardInfo.classList.add('card-info') //adds card-info class to card info div
  usersName.classList.add('name') // adds name class to user's name field
  gitUserName.classList.add('username') // adds username class to username field

  //adding text content to prefilled fields
  cardImg.src = avatarUrl;
  usersName.textContent = githubName;
  gitUserName.textContent = githubUserName;
  userLocation.textContent = `Location: ${githubLoction}`;
  userProfile.textContent = `Profile: ${githubLink}`;
  userProfileLink.href = githubLink;
  userFollowers.textContent = `Followers: ${githubFollowers}`;
  userFollowing.textContent = `Following: ${githubFollowing}`;
  userBio.textContent = `Bio: ${githubBio}`;

  console.log(cardDiv)

  return cardDiv;
  }



// gitDataObj.forEach ( item => {
//   cardsDiv.append(gitCardMaker(item))
// })