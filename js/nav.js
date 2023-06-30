"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

function getStoryForm(){
  $newStoryForm.empty();
  $newStoryForm.append('<span class="story-form-input">author <input type="text" id="story-in-author"></input></span> <span class="story-form-input">title <input type="text" id="story-in-title"></input></span><span class="story-form-input">url <input type="text" id="story-in-url"></input></span><button id="story-in-btn">submit</button><hr>');
  $newStoryForm.show();
}

$navSubmit.on('click', getStoryForm)

//shows what are the users favorite stories
function getFavoriteList(e){
  $allStoriesList.hide();
  $userFavs.empty();
  $userFavs.show();
  let stories = currentUser.favorites
  for(let story of stories){
   let $story = generateStoryMarkup(story)
   $userFavs.prepend($story)
  
  }
  
 
}

$navFavorites.on('click', getFavoriteList)