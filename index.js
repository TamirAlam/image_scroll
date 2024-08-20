let apiKey = "2p8lpMpkI-VxEK1Vy0EOfQE646wmysvZLMGztoVpLq8";
let count = 10;
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let fetching = false;
async function getPhotos() {
    fetching = true;
    let response = await fetch(apiUrl);
    let data = await response.json();
    let box = document.querySelector(".box");
    data.forEach((photo) => {
        // Create container for image and icons
        let container = document.createElement("div");
        container.classList.add("image-container");
        // Create image element
        let img = document.createElement("img");
        img.src = photo.urls.regular;
        // Create icons container
        let icons = document.createElement("div");
        icons.classList.add("icons");
        // Like icon
        let likeIcon = document.createElement("div");
        likeIcon.classList.add("icon");
        likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i> <span>Like</span>`;
        // Unlike icon
        let unlikeIcon = document.createElement("div");
        unlikeIcon.classList.add("icon");
        unlikeIcon.innerHTML = `<i class="fas fa-thumbs-down"></i> <span>Dislike</span>`;
        // Share icon
        let shareIcon = document.createElement("div");
        shareIcon.classList.add("icon");
        shareIcon.innerHTML = `<i class="fas fa-share-alt"></i> <span>Share</span>`;
        // comment icon
        let commentIcon=document.createElement("div");
        commentIcon.classList.add("icon");
        commentIconinnerHTML=`<i class="fas fa-comment"></i> <span>Comment</span>`
        // Append icons to icons container
        icons.appendChild(likeIcon);
        icons.appendChild(unlikeIcon);
        icons.appendChild(shareIcon);
        icons.appendChild(commentIcon);
        // Append icons and image to container
        container.appendChild(icons);
        container.appendChild(img);
        // Append container to the box
        box.appendChild(container);
    });
    fetching = false;
}
getPhotos();
window.addEventListener("scroll", function () {
    if (!fetching && window.scrollY + window.innerHeight + 100 >= document.body.offsetHeight) {
        getPhotos();
    }
});