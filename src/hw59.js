const likeBtn = document.querySelector('.like-action');

likeBtn.addEventListener('click', () => {
  const heartIcon = likeBtn.querySelector('i');

  heartIcon.classList.toggle('text-danger');
  heartIcon.classList.toggle('far');
  heartIcon.classList.toggle('fas');
});
