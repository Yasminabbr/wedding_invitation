const scrollDown = document.getElementById("scrollDown");
const weddingDetails = document.getElementById("weddingDetails");

scrollDown.addEventListener("click", () => {
    weddingDetails.scrollIntoView({
        behavior: "smooth"
    });
});