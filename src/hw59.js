//task1
const likeButton = document.querySelector('.like-button');
likeButton.addEventListener('click', function() {

  likeButton.classList.toggle('clicked');
});

//task2
const postImage = document.querySelector('.card-img-top');
postImage.addEventListener('dblclick', function() {
  likeButton.classList.toggle('clicked');
});
const likeHeart = document.querySelector('.like-heart');

let clickCount = 0;
likeHeart.style.visibility='hidden';
postImage.addEventListener('dblclick', function() {
  clickCount++;
  if (clickCount % 2 === 0) {
    likeHeart.classList.remove('active');
  } else {
    likeHeart.classList.add('active');
    likeHeart.style.visibility='visible'
    setTimeout(function() {
      likeHeart.classList.remove('active');
      likeHeart.style.visibility='hidden';
    }, 1000);
  }
});

likeButton.addEventListener('click', function() {
  likeButton.classList.toggle('active');
});

//task3
const saveButton = document.querySelector('.save-button');
console.log(saveButton);
saveButton.addEventListener('click', function() {
  saveButton.classList.toggle('clicked');
});

//task4
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function() {
  splashScreen.style.display = 'none';
  mainContent.style.display = 'block';
});

//task5
let post1 = {
  imageUrl: './man.jpg',
  description: 'salmorsalmorsalmorsalmor',
  createdAt: '2022-05-12 14:00:00',
  user: {
    login: 'salmor'
  }
};
function createPostElement(post1) {
  const card = document.createElement('div');
  card.classList.add('card', 'mx-auto', 'mt-4');
  card.style.width = '25rem';

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('position-relative');
  const image = document.createElement('img');
  image.src = post1.imageUrl;
  image.classList.add('card-img-top');
  image.alt = 'post image';
  imageContainer.appendChild(image);
  const likeHeart = document.createElement('div');
  likeHeart.classList.add('h1', 'like-heart');
  const heartIcon = document.createElement('i');
  heartIcon.classList.add('bi', 'bi-suit-heart-fill');
  likeHeart.appendChild(heartIcon);
  imageContainer.appendChild(likeHeart);

  card.appendChild(imageContainer);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const postActions = document.createElement('div');
  postActions.classList.add('post-actions');

  const likeButton = document.createElement('span');
  likeButton.classList.add('h3', 'mx-2', 'like-button', 'muted');
  const likeIcon = document.createElement('i');
  likeIcon.classList.add('bi', 'bi-suit-heart-fill');
  likeButton.appendChild(likeIcon);
  postActions.appendChild(likeButton);
  likeHeart.style.visibility='hidden';
  likeButton.addEventListener('click', function() {

    likeButton.classList.toggle('clicked');
  });

  image.addEventListener('dblclick', function() {
    likeButton.classList.toggle('clicked');
  });

  let clickCount1 = 0;

  image.addEventListener('dblclick', function() {
    clickCount1++;

    if (clickCount1 % 2 === 0) {
      likeHeart.classList.remove('active');
    } else {
      likeHeart.classList.add('active');
      likeHeart.style.visibility='visible'
      setTimeout(function() {
        likeHeart.classList.remove('active');
        likeHeart.style.visibility='hidden';
      }, 1000);

    }
  });

  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('active');
  });

  const commentButton = document.createElement('span');
  commentButton.classList.add('h3', 'mx-1', 'mt-0', 'comment-button', 'muted');
  const commentIcon = document.createElement('i');
  commentIcon.classList.add('bi', 'bi-chat');
  commentButton.appendChild(commentIcon);
  postActions.appendChild(commentButton);

  const saveButton = document.createElement('span');
  saveButton.classList.add('h3', 'float-sm-right', 'mt-0', 'save-button');
  const saveIcon = document.createElement('i');
  saveIcon.classList.add('bi', 'bi-bookmark-fill');
  saveButton.appendChild(saveIcon);
  postActions.appendChild(saveButton);

  cardBody.appendChild(postActions);

  card.appendChild(cardBody);
  saveButton.addEventListener('click', function() {
    saveButton.classList.toggle('clicked');
  });

  return { card, likeButton };
}

function addPost(postElement) {
  const postsContainer = document.getElementById('main-content');
  postsContainer.appendChild(postElement.card);
}
addPost(createPostElement(post1))
