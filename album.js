function handlePostClick(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(data => displayPost(data))

}

function displayPost(albums){
    // console.log(posts);
    let postContainer = document.getElementById("post-container");
    postContainer.classList.add("albums")

    for(let album of albums.slice(0, 10)){
        // console.log(post.length);
    let div = document.createElement("div");
    div.classList.add("album")
    let h3 = document.createElement("h3");
    div.appendChild(h3);
    let p = document.createElement("p");
    div.appendChild(p);
    div.innerHTML = `<p>${album.id}</p><h3>${album.title}</h3>`;

    postContainer.appendChild(div);

    }
    
}