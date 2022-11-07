function handlePostClick(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayPost(data))

}

function displayPost(users){
    // console.log(posts);
    let postContainer = document.getElementById("post-container");
    postContainer.classList.add("albums")

    for(let user of users.slice(0, 10)){
        // console.log(post.length);
    let div = document.createElement("div");
    div.classList.add("user")
    let h3 = document.createElement("h3");
    div.appendChild(h3);
    let p = document.createElement("p");
    div.appendChild(p);
    div.innerHTML = `<p>${user.id}</p><h3>${user.name}</h3><p>${user.username}</p><p>${user.email}</p><p>${user.address.street}</p>`;

    postContainer.appendChild(div);

    }
    
}