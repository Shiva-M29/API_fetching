const errorMsg = document.getElementById("errorMsg");
const postsContainer = document.getElementById("postsContainer");
const apiresponse=document.getElementById("api");

function fetchPosts(pagepath) {
  let page = pagepath;
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch posts. Please try again later.");
      }
      return response.json();
    })
    .then(posts => {
      if(pagepath.includes("postsdemo.html")){
        apiresponse.innerText=JSON.stringify(posts.slice(0,5),null,2);
      }
      else{
      posts.slice(0, 5).forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        postsContainer.append(postDiv);
      });
    }})
    .catch(error => {
      errorMsg.textContent = error.message;
    });
}      