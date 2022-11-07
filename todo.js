function handlePostClick(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => displayPost(data))

}

function displayPost(todos){
    // console.log(posts);
    let postContainer = document.getElementById("post-container");
    postContainer.classList.add("albums")

    for(let todo of todos.slice(0, 10)){
        // console.log(post.length);
    let div = document.createElement("div");
    div.classList.add("todo")
    let h3 = document.createElement("h3");
    div.appendChild(h3);
    let p = document.createElement("p");
    div.appendChild(p);
    div.innerHTML = `<p>${todo.id}</p><h3>${todo.title}</h3><p>${todo.completed}</p>`;

    postContainer.appendChild(div);

    }
    
}