let scrollContainer = document.getElementById(".gallery");
let backbtn = document.getElementById("leftbtn");
let nextbtn = document.getElementById("rightbtn");

scrollContainer.addEventListener("wheel" ,(evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});
nextbtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft += 900;
    scrollContainer.style.scrollBehavior = "smooth";
});
backbtn.addEventListener("click", ()=>{
    scrollContainer.scrollright -= 900;
    scrollContainer.style.scrollBehavior = "smooth";
});
