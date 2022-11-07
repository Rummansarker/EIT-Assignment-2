function handlePostClick(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => displayPost(data))

}

function displayPost(comments){
    // console.log(posts);
    let postContainer = document.getElementById("post-container");
    postContainer.classList.add("comments")

    for(let comment of comments.slice(0, 10)){
        // console.log(post.length);
    let div = document.createElement("div");
    div.classList.add("comment")
    let h3 = document.createElement("h3");
    div.appendChild(h3);
    let p = document.createElement("p");
    div.appendChild(p);
    div.innerHTML = `<p>${comment.id}</p><h3>${comment.title}</h3><p>${comment.body}</p><p>${comment.email}</p>`;

    postContainer.appendChild(div);

    }
    
}