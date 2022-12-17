let tabs = document.querySelector(".tabs");

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    response
        .json()
        .then((data) => {
            data.forEach((user) => {
                let newTab = document.createElement("button");
                newTab.innerText = user.name;
                newTab.classList.add("tabLinks");
                newTab.addEventListener("click", () => {
                    getUserPosts(user);
                });
                tabs.appendChild(newTab);
                let contentTab = document.createElement("div");
                contentTab.classList.add("contentTab");
                contentTab.setAttribute("id", `${user.id}`);
                document.body.appendChild(contentTab);
            });
        })
        .catch((err) => console.log(err));
});

async function getUserPosts(user) {
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        let data = await res.json();
        openTab(user);
        contentTab = document.getElementById(`${user.id}`);
        let posts = document.createElement("ul");
        console.log(contentTab);
        data.forEach((post) => {
            let onePost = document.createElement("li");

            onePost.innerHTML = `
            <h3>${post.title}</h3>
            `;
            posts.appendChild(onePost);
        });
        contentTab.appendChild(posts);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

function openTab(user) {
    var i, contentTab, tabLinks;
    contentTab = document.querySelectorAll(".contentTab");
    for (i = 0; i < contentTab.length; i++) {
        contentTab[i].innerHTML = "";
        contentTab[i].style.display = "none";
    }
    tabLinks = document.querySelectorAll(".tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }
    document.getElementById(user.id).style.display = "block";
}
