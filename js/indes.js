document.querySelectorAll(".group__title").forEach(element => {
    element.addEventListener("click", (e) => {
        if(e.target.classList.contains("show")) e.target.classList.replace("show","hide")
        else e.target.classList.replace("hide","show");
    });
});