// // Function to filter posts by tag
// function filterPostsByTag(selectedTag) {
//   const allPosts = document.querySelectorAll('.post-item');
//   allPosts.forEach(post => {
//     const postTags = post.getAttribute('data-tags').split(',');
//     if (selectedTag === 'All' || postTags.includes(selectedTag)) {
//       post.style.display = '';
//     } else {
//       post.style.display = 'none';
//     }
//   });
// }

// // Event listeners for tag options
// document.querySelectorAll('.tag-option').forEach(tagOption => {
//   tagOption.addEventListener('click', function(event) {
//     event.preventDefault();
//     const selectedTag = this.getAttribute('data-tag');
//     filterPostsByTag(selectedTag);
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const tags = document.querySelectorAll('.tag-selection');

  tags.forEach(tag => {
    tag.addEventListener('click', function(event) {
      event.preventDefault();
      const selectedTag = this.dataset.tag;
      filterPostsByTag(selectedTag);
    });
  });

  function filterPostsByTag(tag) {
    const posts = document.querySelectorAll('.post-item');
    posts.forEach(post => {
      const postTags = post.dataset.tags.split(',');
      if (postTags.includes(tag)) {
        post.style.display = '';
      } else {
        post.style.display = 'none';
      }
    });
  }
});
