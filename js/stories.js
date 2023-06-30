"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  return $(`
      <li class="story-id" id="${story.storyId}">
      <button class="fav-star">&#9734;</button>
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}


async function generateNewStory(e){
  e.preventDefault();
  
  const author = $('#story-in-author').val()
  const title = $('#story-in-title').val()
  const url = $('#story-in-url').val()
  const user = currentUser.username
  const storyInfo = {title, author, url}
  const story = await storyList.addStory(user ,storyInfo);
  const $story = generateStoryMarkup(story);
  $allStoriesList.prepend($story);
  $newStoryForm.empty();
  $newStoryForm.hide();
}

$newStoryForm.on('submit', generateNewStory);


// getting story id to add when clicked
async function addFav(e){
if(e.target.tagName === 'BUTTON'){
let storyId = e.target.closest('li').id
await currentUser.addFavorites(storyId)
}
}

let $allStories = $('.stories-container').children();
$allStories.on('click', addFav);

//have to make both work
//toggle favorite or unfavorite
async function removeFromFavs(){
  console.log();
}

