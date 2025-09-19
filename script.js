
const postsContainer = document.getElementById("postsContainer");
const errorMsg = document.getElementById("errorMsg");

function fetchPosts() {
  postsContainer.innerHTML = "";
  errorMsg.textContent = "";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch posts. Please try again later.");
      }
      return response.json();
    })
    .then(posts => {
      posts.slice(0, 5).forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        postsContainer.append(postDiv);
      });
    })
    .catch(error => {
      errorMsg.textContent = error.message;
    });
}      