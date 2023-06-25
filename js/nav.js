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

function navNewStory(evt){
  $newStoryForm.empty();
  $newStoryForm.append('<p> author: <input id="input-author" type="text" placeholder="author name"></input></p>')
  $newStoryForm.append('<p> title: <input id="input-title" type="text" placeholder="story title"></input></p>')
  $newStoryForm.append('<p> url: <input id="input-url" type="text" placeholder="story url"></input></p><button>submit</button')

}

$navNewStory.on('click', navNewStory)