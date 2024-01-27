document.addEventListener('DOMContentLoaded', function() {
  const tags = document.querySelectorAll('.tag-option');

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
