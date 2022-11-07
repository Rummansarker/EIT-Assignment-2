function handlePostClick(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => displayPost(data))

}

function displayPost(photos){
    // console.log(posts);
    let postContainer = document.getElementById("post-container");
    postContainer.classList.add("albums")

    for(let photo of photos.slice(0, 10)){
        // console.log(post.length);
    let div = document.createElement("div");
    div.classList.add("photo")
    let img = document.createElement("img");
    img.src=photo.url;
    img.style.width='300px'

        postContainer.appendChild(img);

    }
    
}