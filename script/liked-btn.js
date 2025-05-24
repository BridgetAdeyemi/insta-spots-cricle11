
const likeBtns = document.querySelectorAll("i");

likeBtns.forEach((btn)=> {
    btn.addEventListener("click", ()=> {
        btn.classList.toggle('fa-regular');
        btn.classList.toggle('fa-solid');
        btn.classList.toggle('active');
    })
})